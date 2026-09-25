const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const details = require("./details.json");

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

const editindexJs = () => {
  indexFileCode = details.reactApp.indexFileCode.join("\n");

  shell.exec("rm -rf " + path.join(shell.pwd() + "/src/index.js"));

  shell.exec("touch " + path.join(shell.pwd() + "/src/index.js"));
  shell.exec("touch " + path.join(shell.pwd() + "/src/index.js"));

  fs.writeFileSync(
    path.join(shell.pwd() + "/src/index.js"),
    indexFileCode,
    (err, data) => {}
  );
};

const editAppJs = () => {
  appJsData = details.reactApp.appJsFileCode.join("\n");

  shell.exec("rm -rf " + path.join(shell.pwd() + "/src/App.css"));
  editindexJs();
  fs.writeFileSync(
    path.join(shell.pwd() + "/src/App.js"),
    appJsData,
    (err, data) => {}
  );
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

const createTailwindReactApp = async (name) => {
  const projectExist = require("./projectExist");
  if (projectExist(name) == true) {
    shell.exit();
  }

  try {
    shell.exec(`npx create-react-app ${name} --template redux`);
    shell.cd(name);
    configureForTailwind();
  } catch (err) {
    console.log(err.message);
    shell.exit();
  }
};

module.exports = createTailwindReactApp;
