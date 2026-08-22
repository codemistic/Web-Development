const shell = require("shelljs");
const path = require("path");
const details = require("./details.json");
// console.log(details.reactApp.appJsData.join("\n"))

const editAppJs = () => {
  indexJsData = details.NextIndexData.join("\n");

  const fs = require("fs");

  // shell.exec('rm -rf '+path.join(shell.pwd()+'/src/App.css'))
  fs.writeFileSync(
    path.join(shell.pwd() + "/pages/index.js"),
    indexJsData,
    (err, data) => {}
  );
  shell.exec("npm run dev");
};

const runBuild = () => {
  editAppJs();
};

const editTaiwindConfig = () => {
  const fs = require("fs");

  tailwindNextConfigData = details.tailwindNextConfigData.join("\n");

  srcIndexCSSData = details.srcIndexCSSData.join("\n");

  fs.writeFileSync(
    path.join(shell.pwd() + "/tailwind.config.js"),
    tailwindNextConfigData,
    (err, data) => {}
  );
  fs.writeFileSync(
    path.join(shell.pwd() + "/styles/globals.css"),
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

const createTailwindNextApp = (name) => {
  try {
    shell.exec(`npx create-next-app ${name}`);
    shell.cd(name);
    configureForTailwind();
  } catch (err) {
    console.log(err.message);
    shell.exit();
  }
};

module.exports = createTailwindNextApp;
