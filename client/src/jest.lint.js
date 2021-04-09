module.exports = {
  displayName: "lint",
  runner: "jest-runner-eslint",
  testMatch: ["<rootDir>/**/*.js", "<rootDir>/**/*.ts", "<rootDir>/**/*.tsx"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]", "<rootDir>/next.config.js","<rootDir>/cypress" ],
};
