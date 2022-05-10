import * as Sentry from '@sentry/node';
import { Redis } from '@upstash/redis';
import ms, { StringValue } from 'ms';
import { requireEnv } from 'require-env-variable';
import superjsonPkg from 'superjson';
import type { ZodType } from 'zod';

function getDefault<T>(pkg: T & { default?: T }): T {
  return pkg.default || pkg;
}

const superjson = getDefault(superjsonPkg);

export const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = requireEnv(
  'UPSTASH_REDIS_REST_URL',
  'UPSTASH_REDIS_REST_TOKEN',
);

export const upstashRedis = new Redis({
  url: UPSTASH_REDIS_REST_URL,
  token: UPSTASH_REDIS_REST_TOKEN,
});

export const getUpstashKey = (key: string | string[]) => {
  return typeof key === 'string' ? key : key.join(':');
};

const notFoundSymbol = Symbol.for('NotFound');

export const getUpstashCache = <Output>(key: string | string[], schema: ZodType<Output>) => {
  const keyString = getUpstashKey(key);

  return upstashRedis
    .get(keyString)
    .then(value =>
      value != null ? schema.parse(superjson.parse(value as string)) : notFoundSymbol,
    );
};

export const setUpstashCache = <Output>({
  ttl,
  key,
  value,
}: {
  ttl: StringValue | number;
  key: string | string[];
  value: Output;
  schema: ZodType<Output>;
}) => {
  const keyString = getUpstashKey(key);

  const ttlSeconds = typeof ttl === 'string' ? ms(ttl) / 1000 : ttl;

  return upstashRedis.setex(keyString, ttlSeconds, superjson.stringify(value));
};

export const upstashCached = async <Output>(
  cb: () => Promise<Output>,
  {
    key,
    schema,
    ttl,
  }: { key: string | string[]; schema: ZodType<Output>; ttl: StringValue | number },
) => {
  const cachedValue = await getUpstashCache(key, schema).catch(() => notFoundSymbol);

  if (cachedValue !== notFoundSymbol) return cachedValue;

  const value = await cb();

  setUpstashCache({
    ttl,
    key,
    value,
    schema,
  }).catch(err => {
    Sentry.captureException(err);
  });

  return value;
};
