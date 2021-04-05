module.exports = {
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
    displayName: "client",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
  };