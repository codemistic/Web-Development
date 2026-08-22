const shell = require("shelljs");
const path = require("path");
const details = require("./details.json");
const fs = require('fs');
// console.log(details.reactApp.appJsData.join("\n"))

const installreactRouter = () => {
  shell.exec(`npm i react-router-dom`);
  shell.exec(`npm i react-dom`);
};

const editRouterJs = () => {
  routerFileCode = details.reactApp.routerFileCode.join("\n");
  fs.writeFileSync(
    path.join(shell.pwd() + "/src/router/RoutesLink.js"),
    routerFileCode,
    (err, data) => {}
  );
};

const createRouterFolder = () => {
  shell.exec("mkdir " + path.join(shell.pwd() + "/src/router"));
  shell.exec("mkdir " + path.join(shell.pwd() + "/src/components"));

  shell.exec("touch " + path.join(shell.pwd() + "/src/router/index.js"));
  shell.exec("touch " + path.join(shell.pwd() + "/src/router/RoutesLink.js"));
  editRouterJs();
};


const editAppJs = () => {
  appJsData = details.reactApp.appJsFileCode.join("\n");

  

  shell.exec("rm -rf " + path.join(shell.pwd() + "/src/App.css"));
  fs.writeFileSync(
    path.join(shell.pwd() + "/src/App.js"),
    appJsData,
    (err, data) => {}
  );
  installreactRouter();
  createRouterFolder();
  shell.exec("npm run start");
};

const runBuild = () => {
  editAppJs();
};

const editTaiwindConfig = () => {
  

  tailwindReactConfigData = details.tailwindReactConfigData.join("\n");

  srcIndexCSSData = details.srcIndexCSSData.join("\n");

  fs.writeFileSync(
    path.join(shell.pwd() + "/tailwind.config.js"),
    tailwindReactConfigData,
    (err, data) => {}
  );
  fs.writeFileSync(
    path.join(shell.pwd() + "/src/index.css"),
    srcIndexCSSData,
    (err, data) => {}
  );

  runBuild();
};

const configureForTailwind = () => {
  shell.exec("npm install -D tailwindcss postcss autoprefixer");
  shell.touch("tailwind.config.js");

  editTaiwindConfig();
};

const createTailwindReactApp = (name) => {
  const projectExist = require("./projectExist");
  if (projectExist(name) == true) {
    shell.exit();
  }

  try {
    shell.exec(`npx create-react-app ${name}`);
    shell.cd(name);
    configureForTailwind();
  } catch (err) {
    console.log(err.message);
    shell.exit();
  }
};

module.exports = createTailwindReactApp;
