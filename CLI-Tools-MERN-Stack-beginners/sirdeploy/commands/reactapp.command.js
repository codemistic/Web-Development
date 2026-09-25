const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const details = require("./details.json");

const deployReactApp = () => {
  const gitCommand = `npm run deploy -- -m "React App Deploy using SirDeploy Package"`;
  shell.exec(gitCommand);
  const welcome = require("./welcome");
};

const addRemote = (username, repoName) => {
  const gitCommand = `git remote add origin https://github.com/${username}/${repoName}.git`;
  try {
    shell.exec(gitCommand);
  } catch (err) {
    null;
  }
  deployReactApp();
};

const editPackageJson = (homePageURL, repoName, username) => {
  const packageJson = require(shell.pwd() + "/package.json");
  packageJson.homepage = homePageURL;
  packageJson.scripts.predeploy = "npm run build";
  packageJson.scripts.deploy = "gh-pages -d build";
  fs.writeFileSync(
    "package.json",
    JSON.stringify(packageJson, null,2),
    "utf8",
    null,
    4
  );
  addRemote(username, repoName);
};

const createHomePageURL = (username, repoName) => {
  const homePageURL = `https://${username}.github.io/${repoName}`;
  shell.exec(`npm install --location=global gh-pages --save-dev`);
  editPackageJson(homePageURL, repoName, username);
};

const findGithubRepo = () => {
  // get the git url using git remote -v and store it in a variable
  const gitUrl = shell.exec("git remote -v", {
    silent: true,
  }).stdout;
  // split the git url and store it in an array and get the link from the array
  if(!gitUrl.length){console.log("No remote repository found\nCreate a remote repository and try again");shell.exit()}
  const gitUrlArray = gitUrl.split("\n");
  const [username, repoName] = gitUrlArray[0]
    .split(" ")[0]
    .split("origin\thttps://github.com/")[1]
    .split(".git")[0]
    .split("/");
  console.log(username, repoName);
  createHomePageURL(username, repoName);
};

const reactAppOnGithub = async (name) => {
  // if not root directory then exit
  console.log(name[0]);
  if (name[0] !== ".") return;
  try {
    const packageJson = require(shell.pwd() + "/package.json");
    // check if the project is react app or not
    if (packageJson.dependencies.react !== undefined) {
      findGithubRepo();
    } else {
      console.log("Sorry this is not a react app");
      shell.exit();
    }
  } catch (err) {
    console.log(err.message);
    shell.exit();
  }
};
// reactAppOnGithub(".");
module.exports = reactAppOnGithub;
