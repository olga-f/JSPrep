const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");


module.exports = (phase) => {
  webpack: function styletron_server (config) {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  }
  // when started in development mode `next dev` or `npm run dev`
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const env = {
    GRAPHQL_URL: (() => {
      if (isDev) return "http://127.0.0.1:8000/graphql/"
      if (isProd) {
      // The environment variable GRAPHQL_HOST is stored in .env file
        return process.env.GRAPHQL_HOST;
      }
      // default GRAPHQL_URL
      return "http://127.0.0.1:8000/graphql/";
    })(),
  };
  // next.config.js object
  return {
    env,
  };
};
