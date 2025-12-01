const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const details = require("./details.json");
// console.log(details.reactApp.appJsData.join("\n"))

const herokuDeploy = () => {
  shell.exec("git init");
  shell.exec("git add .");
  shell.exec("git commit -m 'deploing React App'");
  shell.exec("npx heroku create");
  shell.exec("git push heroku master");
};

// function to edit package json file
const editPackageJson = () => {
  const packageJson = require(shell.pwd() + "/package.json"); // package.json file is located in root directory
  packageJson.scripts.sirdeploy = "npx sirdeploy";
  packageJson.scripts.updatedeploy = "git add . && git commit -m 'updated' && git push heroku master";
  fs.writeFileSync(
    "./package.json",
    JSON.stringify(packageJson, null, 2), // null, 2 is for indentation
    "utf8", // utf8 is for encoding
    (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    }
  );
};

const installingHeroku = () => {
  // shell.exec("npm i --location=global heroku");
  editPackageJson();
  herokuDeploy();
};

const createReactApp = (name) => {
  if (name.length == 1 && name[0] !== ".") {
    console.log(
      "You should be at root directory where the Package.json file is located\n\nAnd you should write 'heroku-react-app .' this DOT is important"
    );
    shell.exit();
  }
  installingHeroku();
};

module.exports = createReactApp;
