// if the last character is not dot then create react app and go inside that folder
// and install the dependencies
// const sameFileExist = require("./sameFileExist");
const shell = require("shelljs");
const path = require("path");

const ifNotDot = (projectName) => {
  console.log("ifNotDot function called");
  if (projectName.charAt(projectName.length - 1) !== ".") {
    shell.exec(`npx create-react-app ${projectName}`);
    shell.cd(projectName);
  } else {
    return false;
  }
};

module.exports = ifNotDot;
