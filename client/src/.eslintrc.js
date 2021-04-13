module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest", "jest-dom", "cypress"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:cypress/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "no-console": 1,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
    "cypress/globals": true,
  },
};
