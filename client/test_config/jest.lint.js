const path = require("path");
module.exports = {
  rootDir: path.join(__dirname, ".."),
  displayName: "lint",
  runner: "jest-runner-eslint",
  testMatch: ["<rootDir>/**/*.ts", "<rootDir>/**/*.tsx"],
  testPathIgnorePatterns: ["/__generated__/", "next-env.d.ts"],
};
