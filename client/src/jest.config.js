module.exports = {
  ...require("./test_config/jest-common"),
  collectCoverageFrom: [
    "**/src/**/*.js",
    "!**/__tests__/**",
    "!**/__server_tests__/**",
    "!**/node_modules/**",
  ],
  coverageThreshold: {
    global: {
      statements: 0, // add your desired coverage 0-100
      branches: 0, // add your desired coverage 0-100
      functions: 0, // add your desired coverage 0-100
      lines: 0, // add your desired coverage 0-100
    },
    // Coverage for some specific files
    //   "./src/example.js": {
    //     statements: 0, // add your desired coverage 0-100
    //     branches: 0, // add your desired coverage 0-100
    //     functions: 0, // add your desired coverage 0-100
    //     lines: 0, // add your desired coverage 0-100
    //   },
  },
  projects: [
    "./test_config/jest.lint.js",
    "./test_config/jest.client.js",
  ],
};
