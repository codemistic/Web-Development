const shell = require("shelljs");
const path = require("path");
const fs = require("fs");

const checkIfRoot = (args) => {
  if (args[0] !== ".") return false;
  const currentPath = process.cwd();
  console.log(currentPath, "currentPath");
  const packageJsonPath = path.join(currentPath, "./package.json");
  const packageJsonData = fs.readFileSync(packageJsonPath, "utf8");

  const packageJsonDataObject = JSON.parse(packageJsonData);
  const packageJsonDataObjectScripts = packageJsonDataObject.scripts;
  if (
    packageJsonDataObjectScripts["start"] !== "react-scripts start" ||
    packageJsonDataObject.dependencies.react === undefined
  ) {
    console.log("first if");
    return false;
  }
  console.log("returning true");
  return true;
};

module.exports = checkIfRoot;
