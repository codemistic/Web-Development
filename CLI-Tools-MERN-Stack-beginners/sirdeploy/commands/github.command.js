const shell = require("shelljs");
const path = require("path");
const fs = require("fs");

const pushAppOnGithub = (name) => {
  if (name[0] === "." && name.length === 1) {
//Get Current Time and date and store it in a variable
    const currentTime = new Date().toLocaleString();
    name = `AutoDeploy-${currentTime}`;
  }else{name = name.join(" ")}

  const gitAdd = `git add .`;
  const gitCommit = `git commit -m "${name}"`;
  const gitPush = `git push origin main`;
  shell.exec(gitAdd);
  shell.exec(gitCommit);
  shell.exec(gitPush);
};

module.exports = pushAppOnGithub;
