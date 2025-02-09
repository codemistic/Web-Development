const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const details = require("./details.json");
// console.log(details.reactApp.appJsData.join("\n"))

const createIndexFile = () => {
  shell.exec("touch index.js");
  indexFileData = details.indexCode.join("\n");
  fs.writeFileSync("index.js", indexFileData);
};

// function to edit package json file
const editPackageJson = () => {
  // create .gitignore file
  shell.exec("touch .gitignore");
  fs.writeFileSync(".gitignore", "node_modules");

  const packageJson = require(shell.pwd() + "/package.json");
  packageJson.scripts.start = "node index.js";
  packageJson.scripts.deploy = "heroku create";
  packageJson.scripts.updatedeploy =
    "git add . && git commit -m 'updated' && git push heroku master";

  fs.writeFileSync("package.json", JSON.stringify(packageJson));
};

const configureJsonServer = () => {
  shell.exec("npm init -y");

  shell.exec("npm install json-server");
  shell.exec("npm i --location=global heroku");
  editPackageJson();
  createIndexFile();
};

const createFakeServer = (name) => {
  const projectExist = require("./projectExist");
  if (projectExist(name) !== true) {
    shell.exit();
  }

  try {
    shell.cd(name);
    configureJsonServer();
  } catch (err) {
    console.log(err.message);
    shell.exit();
  }
};

module.exports = createFakeServer;
