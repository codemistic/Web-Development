const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const wrapTagAround = require("configure-react/utils/wrapTagAround");
const importAtTop = require("configure-react/utils/importAtTop");

const detail = require("configure-react/commands/details.json");

const {
  editReadme,
  createDotEnv,
  createComponent,
  checkIfRoot,
  makeCodePritter,
  endingScreen,
} = require("configure-react/utils");

const createAxios = (args) => {
  if (!checkIfRoot(args)) {
    return console.log(
      "You are not in the root of a react app. Please run this command in the root of a react app."
    );
  }
  const currentPath = process.cwd();
  startCreatingAxios(currentPath);
  endingScreen();
};

const startCreatingAxios = (currentPath) => {
  shell.exec("npm i axios");

  const readmePath = path.join(currentPath, "./README.md");
  editReadme(readmePath, "axios");
  shell.mkdir("-p", path.join(currentPath, "./src/api")); // -p flag creates parent directories if they don't exist
  // create file if not exist
  const env = path.join(currentPath, "./.env");
  const componentPath = path.join(currentPath, "./src/components");
  // if (!fs.existsSync(env)) {
  createDotEnv(env);
  createComponent(componentPath);
  // }

  shell.touch(path.join(currentPath, "./src/api/index.js"));
  shell.touch(path.join(currentPath, "./src/api/login.js"));
  shell.touch(path.join(currentPath, "./src/api/register.js"));
  shell.touch(path.join(currentPath, "./src/api/getData.js"));
  shell.touch(path.join(currentPath, "./src/api/postData.js"));

  const indexFilePath = path.join(currentPath, "./src/api/index.js");
  const loginFilePath = path.join(currentPath, "./src/api/login.js");
  const registerFilePath = path.join(currentPath, "./src/api/register.js");
  const getDataFilePath = path.join(currentPath, "./src/api/getData.js");
  const postDataFilePath = path.join(currentPath, "./src/api/postData.js");

  // edit index.js
  const apiIndex = detail.apiIndexData.join("\n");
  fs.writeFileSync(indexFilePath, makeCodePritter(apiIndex), "utf8", (err) => {
    if (err) throw err;
  });

  // edit login.js
  const loginApiData = detail.loginApiData.join("\n");
  fs.writeFileSync(
    loginFilePath,
    makeCodePritter(loginApiData),
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );

  // edit register.js
  const registerApiData = detail.registerApiData.join("\n");
  fs.writeFileSync(
    registerFilePath,
    makeCodePritter(registerApiData),
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );

  // edit getData.js
  const getApiData = detail.getApiData.join("\n");
  fs.writeFileSync(
    getDataFilePath,
    makeCodePritter(getApiData),
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );

  // edit postData.js
  const postApiData = detail.postApiData.join("\n");
  fs.writeFileSync(
    postDataFilePath,
    makeCodePritter(postApiData),
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );
};

module.exports = createAxios;
