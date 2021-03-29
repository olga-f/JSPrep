//const path = require("path");

module.exports = {
  preset: "ts-jest",
 // rootDir: path.join(__dirname, ".."),
  // moduleDirectories: ["node_modules", path.join(__dirname, "../src")],
  watchPlugins: [
    "jest-watch-select-projects",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
