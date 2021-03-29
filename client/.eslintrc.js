module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
   // "prettier/@typescript-eslint",
    "plugin:jest/recommended",
  ],
  rules: {
    "react/prop-types": 0,
    "no-console": 1,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    "jest/globals": true,
  },
};
