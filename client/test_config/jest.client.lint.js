const path = require("path");
module.exports = {
  rootDir: path.join(__dirname, "../src"),
  moduleDirectories: ["node_modules", path.join(__dirname, "../src")],
  displayName: "lint client",
  runner: "jest-runner-eslint",
  testMatch: ["<rootDir>/**/*.ts", "<rootDir>/**/*.tsx"],
};
