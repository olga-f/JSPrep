const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("next/constants");

module.exports = (phase) => {
  // eslint-disable-next-line no-inner-declarations
  webpack: function styletron_server(config) {
    config.externals = config.externals || {};
    config.externals["styletron-server"] = "styletron-server";
    return config;
  }
  // when started in development mode `next dev` or `npm run dev`
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  // eslint-disable-next-line no-console
  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const env = {
    GRAPHQL_URL: (() => {
      if (isDev) return "http://127.0.0.1:8000/graphql/";
      if (isProd) {
        // The environment variable GRAPHQL_HOST is stored in .env file
        return process.env.GRAPHQL_HOST;
      }
      // default GRAPHQL_URL
      return "http://127.0.0.1:8000/graphql/";
    })(),

    SITE_URL: (() => {
      if (isDev) return "http://localhost:3000/";
      if (isProd) {
        // The environment variable SITE_HOST is stored in .env file
        return process.env.SITE_HOST;
      }
      // default SITE_URL
      return "http://localhost:3000/";
    })(),
  };
  // next.config.js object
  return {
    env,
    future: {
      webpack5: true,
    },
  };
};
