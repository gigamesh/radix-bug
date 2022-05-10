// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = 'https://272e2eb2bc864e23bcdc8ececcf0d208@o997830.ingest.sentry.io/5956174';

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV,
  enabled: process.env.NEXT_PUBLIC_VERCEL_ENV !== 'development',
  ignoreErrors: ['Not authorized!'],
});
