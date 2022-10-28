const shell = require("shelljs");
const path = require("path");
const details = require("./details.json");
const fs = require("fs");
const { editReadme, endingScreen } = require("../utils");
// console.log(details.reactApp.appJsData.join("\n"))

const editAppJs = () => {
  appJsData = details.reactApp.tailwindAppJsFileCode.join("\n");

  shell.exec("rm -rf " + path.join(shell.pwd() + "/src/App.css"));
  readMePath = path.join(shell.pwd() + "/README.md");

  editReadme(readMePath, "Tailwind React App");
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

const createTailwindReactApp = (name) => {
  if (name[0] === ".") {
    try {
      configureForTailwind();
      endingScreen();
    } catch (err) {
      console.log(err.message);
      shell.exit();
    }
  }
};

module.exports = createTailwindReactApp;
