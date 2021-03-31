module.exports = {
  ...require("./test_config/jest-common"),
  projects: [
    "./test_config/jest.client.js",
    "./test_config/jest.lint.js",
  ],
};
