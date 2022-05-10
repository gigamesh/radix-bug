const { withSentryConfig } = require('@sentry/nextjs');
const { withSuperjson } = require('next-superjson');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import("next").NextConfig}
 */
const moduleExports = {
  // Enable the "productionBrowserSourceMaps" configuration for debugging on production build
  // productionBrowserSourceMaps: true,
  experimental: {
    externalDir: true,
    esmExternals: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'd2i9ybouka0ieh.cloudfront.net',
      'diszlt9l6ug2m.cloudfront.net',
      `${process.env.BUCKET_NAME}.s3.${process.env.REGION}.amazonaws.com`,
      'source.unsplash.com',
    ],
    minimumCacheTTL: 9999,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // https://github.com/vercel/next.js/issues/7755#issuecomment-812805708
    if (!isServer) {
      // Make @sentry/node happy!
      config.resolve.fallback = {
        fs: false,
        net: false,
        dns: false,
        tls: false,
        stream: false,
        crypto: false,
        domain: false,
        os: false,
        http: false,
        https: false,
        path: false,
        util: require.resolve('polyfill-util'),
        assert: require.resolve('polyfill-assert'),
      };
    }
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    // Add /*#__PURE__*/ to gql tags to be removed from bundle
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      loader: 'string-replace-loader',
      options: {
        search: 'gql(/*',
        replace: '/*#__PURE__*/ gql(/*',
      },
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.CONFIG_BUILD_ID': JSON.stringify(buildId),
      }),
    );

    return config;
  },
};

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withBundleAnalyzer(
  withSentryConfig(withSuperjson()(moduleExports), SentryWebpackPluginOptions),
);
