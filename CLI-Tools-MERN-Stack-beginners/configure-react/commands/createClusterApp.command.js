const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const { endingScreen, sameFileExists, editReadme } = require("../utils");
const { gitIgnore, packageJson } = require("../fileData/cluster/other");
const { manifestJSON } = require("../fileData/cluster/public");
let { indexHTML, robotsTXT } = require("../fileData/cluster/public");
const {
  appCss,
  appJs,
  appTest,
  indexCss,
  indexJs,
  reportWebVitals,
  setupTests,
  logoSvg,
  childComponent,
} = require("../fileData/cluster/src");

const createPublic = (clusterPublicPath) => {
  // indexHTML = indexHTML.join("\n");
  // robotsTXT = robotsTXT.join("\n");
  fs.writeFileSync(clusterPublicPath + "/index.html", indexHTML());
  fs.writeFileSync(
    path.join(clusterPublicPath, "manifest.json"),
    manifestJSON()
  );
  fs.writeFileSync(path.join(clusterPublicPath, "robots.txt"), robotsTXT());
};

const createSrc = (clusterAppSrcPath) => {
  fs.writeFileSync(path.join(clusterAppSrcPath, "App.css"), appCss());
  fs.writeFileSync(path.join(clusterAppSrcPath, "App.js"), appJs());
  fs.writeFileSync(path.join(clusterAppSrcPath, "app.test.js"), appTest());
  fs.writeFileSync(path.join(clusterAppSrcPath, "index.css"), indexCss());
  fs.writeFileSync(path.join(clusterAppSrcPath, "index.js"), indexJs());
  fs.writeFileSync(
    path.join(clusterAppSrcPath, "reportWebVitals.js"),
    reportWebVitals()
  );
  fs.writeFileSync(path.join(clusterAppSrcPath, "setupTests.js"), setupTests());
  fs.writeFileSync(path.join(clusterAppSrcPath, "logo.svg"), logoSvg());
  fs.writeFileSync(
    path.join(clusterAppSrcPath, "components", "ChildComponent.js"),
    childComponent()
  );
};

const otherFiles = (clusterAppPath, name) => {
  // createFile(path.join(clusterAppPath, ".gitignore"), gitIgnore);

  fs.writeFileSync(path.join(clusterAppPath, ".gitignore"), gitIgnore());
  fs.writeFileSync(
    path.join(clusterAppPath, "package.json"),
    packageJson(name)
  );
  fs.writeFileSync(path.join(clusterAppPath, "README.md"), readmeData());
};

const startCreating = (name) => {
  const currentPath = process.cwd(); // get the current path
  const clusterAppPath = path.join(currentPath, name); // get the cluster app path
  const clusterAppSrcPath = path.join(clusterAppPath, "src"); // get the cluster app src path
  const clusterAppSrcComponentsPath = path.join(
    clusterAppSrcPath,
    "components"
  ); // get the cluster app src components path
  const clusterPublicPath = path.join(clusterAppPath, "public"); // get the cluster app public path
  shell.mkdir("-p", clusterAppSrcComponentsPath); // create the cluster app src components folder
  shell.mkdir("-p", clusterPublicPath); // create the cluster app public folder
  createPublic(clusterPublicPath);
  createSrc(clusterAppSrcPath);
  otherFiles(clusterAppPath, name); // create other files #working
};
const clusterApp = (name) => {
  name = name[0].toLowerCase();

  if (sameFileExists(name)) {
    console.log("Folder already exists");
    return;
  }
  const currentPath = process.cwd();

  const files = fs.readdirSync("./");

  if (!files.includes("package.json")) {
    console.log(
      "Please run this command in root folder where you have your cluster app"
    );
    return;
  }
  const packageJson = require(path.join(currentPath, "./package.json"));
  const { dependencies, pacakageAuthor } = packageJson;
  if (!dependencies || !dependencies["react"] || !dependencies["react-dom"]) {
    console.log("Please install react and react-dom");
    return;
  }

  if (!packageJson.name.startsWith("cluster-")) {
    console.log(
      "Please run this command in root folder where you have your cluster app"
    );
    return;
  }
  // console.log(packageJson.name, "package.name");
  if (!pacakageAuthor) {
    console.log("Please add author in package.json file");
    return;
  }
  startCreating(name);
  // editReadme(currentPath, "utils");
  const readmePath = path.join(currentPath, name, "README.md");
  editReadme(readmePath, `Cluster App **${name}** `);

  endingScreen();
  console.log("\x1b[32m", "cd " + name);
  console.log("\x1b[32m", "npm start");
};

module.exports = clusterApp;

// Readme.md

function readmeData() {
  return `
# Cluster App

This is a cluster app created using [Configure React](http://github.com/shaantanu9/configure-react)

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### \`npm test\`

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`npm run build\`

Builds the app for production to the \`build\` folder.\

### \`npm run eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can’t go back!**
  `;
}
