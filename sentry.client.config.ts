import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = 'https://272e2eb2bc864e23bcdc8ececcf0d208@o997830.ingest.sentry.io/5956174';

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV,
  enabled: process.env.NODE_ENV === 'production',
  ignoreErrors: [
    'User closed modal',
    'User Rejected',
    'Failed to fetch',
    /^Invariant Violation:(.+)/,
    'AbortError: The user aborted a request.',
    'Load failed',
  ],
});
