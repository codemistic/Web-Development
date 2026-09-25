const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const wrapTagAround = require("configure-react/utils/wrapTagAround");
const importAtTop = require("configure-react/utils/importAtTop");
const checkIfRoot = require("configure-react/utils/checkIfRoot");
const detail = require("configure-react/commands/details.json");
const makeCodePritter = require("configure-react/utils/makeCodePritter");

const {
  makeCodePritter,
  checkIfRoot,
  endingScreen,
  editReadme,
} = require("configure-react/utils");

const startCreatingUtils = (currentPath) => {
  shell.mkdir("-p", path.join(currentPath, "./src/utils"));
  shell.touch(path.join(currentPath, "./src/utils/index.js"));
  shell.touch(path.join(currentPath, "./src/utils/localStorage.js"));

  const indexFilePath = path.join(currentPath, "./src/utils/index.js");
  const localStorageFilePath = path.join(
    currentPath,
    "./src/utils/localStorage.js"
  );

  // edit index.js
  const utilsIndexFileData = detail.utilsIndexFileData.join("\n");
  fs.writeFileSync(
    indexFilePath,
    makeCodePritter(utilsIndexFileData),
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );

  // edit localStorage.js
  const localStorageFileData = detail.localStorageFileData.join("\n");
  fs.writeFileSync(
    localStorageFilePath,
    makeCodePritter(localStorageFileData),
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );
  return;
};

const createUtils = (args) => {
  if (checkIfRoot(args)) {
    return console.log(
      "You are not in the root of a react app. Please run this command in the root of a react app."
    );
  }
  const currentPath = process.cwd();
  startCreatingUtils(currentPath);
  editReadme(currentPath, "utils");
  endingScreen();
};

module.exports = createUtils;
// React utils folder contains index.js file which exports all the utils functions and files in the utils folder.
// list of utils folder in react app is as follows:
// 1. index.js
// 2. loclasStorage.js // this file contains functions to set, get and remove data from localStorage
