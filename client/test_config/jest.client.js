const path = require("path");
module.exports = {
    ...require("./jest-common"),
    rootDir: path.join(__dirname, "../src"),
    moduleDirectories: ["node_modules", path.join(__dirname, "../src")],
    displayName: "client",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };