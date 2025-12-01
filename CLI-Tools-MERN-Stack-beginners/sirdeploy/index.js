#!/usr/bin/env node

var shell = require("shelljs");
const path = require("path");
const fs = require("fs");

const { Command } = require("commander");
const program = new Command();

const welcome = require("./commands/welcome");

program
  .command("delete")
  .argument("<string>", "project name to delete")
  .description(` delete the project in Seconds`)
  .action(function () {
    shell.exec(`rm -rf ${this.args}`);
  });

// create the tailwind Configure ReactJs App

program
  .command("create-fakeserver")
  .argument("<string>", "File name to create the server")
  .description(`Create Fake Server and Deploy it on Heroku`)
  .action(function () {
    if (this.args.length !== 0) {
      const createFakeServer = require("./commands/createfakeServer.command");
      createFakeServer(this.args);
    } else {
      console.log("Please Provide the Project Name");
      shell.exit();
    }
  });

program
  .command("heroku-fakeserver")
  .argument("<string>", "File name to create the server")
  .description(`Create Fake Server and Deploy it on Heroku`)
  .action(function () {
    if (this.args.length !== 0) {
      const createFakeServer = require("./commands/createfakeServerHeroku.command");
      createFakeServer(this.args);
    } else {
      console.log("Please Provide the Project Name");
      shell.exit();
    }
  });

program
  .command("heroku-react-app")
  .argument("<string>", "Root Folder Name of ReactJs App that need to deploy")
  .description(`Deploy ReactApp it on Heroku`)
  .action(function () {
    if (this.args.length !== 0) {
      const createReactApp = require("./commands/createReactApp.command");
      createReactApp(this.args);
    } else {
      console.log("Please Provide the Project Name");
      shell.exit();
    }
  });
program
  .command("reactapp")
  .argument("<string>", "File name to create the server")
  .description(`Deploy React App on Github Pages`)
  .action(function () {
    if (this.args.length !== 0) {
      const reactAppOnGithub = require("./commands/reactapp.command");
      reactAppOnGithub(this.args);
    } else {
      console.log("Please Provide the Project Name");
      shell.exit();
    }
  });
program
  .command("github")
  .argument("<string>", "should be . as need to be in root")
  .description(`Single Command to Push the Code on Github`)
  .action(function () {
    if (this.args.length !== 0) {
      const pushAppOnGithub = require("sirdeploy/commands/github.command.js");
      pushAppOnGithub(this.args);
    } else {
      console.log("Please Provide the Commit Message");
      shell.exit();
    }
  });

program
  .command("gitignore")
  .argument(
    "<string>",
    "Name the language for which you want to create the gitignore"
  )
  .description(`Single Command to Create the Gitignore`)
  .action(function () {
    if (this.args.length !== 0) {
      const createGitignore = require("sirdeploy/commands/gitignore.command.js");
      createGitignore(this.args);
    } else {
      console.log("Please Provide the Commit Message");
      shell.exit();
    }
  });
program
  .command("update-heroku-fakeserver")
  .argument("<string>", "File name to create the server")
  .description(`Create Fake Server and Deploy it on Heroku`)
  .action(function () {
    if (this.args.length !== 0) {
      const updateFakeServer = require("./commands/updatefakeServer.command");
      updateFakeServer(this.args);
    } else {
      console.log("Please Provide the Project Name");
      shell.exit();
    }
  });

program.parse();
