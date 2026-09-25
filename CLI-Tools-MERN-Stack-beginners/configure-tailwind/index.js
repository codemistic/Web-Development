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
  .command("react-app")
  .argument("<string>", "project name to delete")
  .description(` Create Tailwind Configure ReactJs App`)
  .action(function () {
    if (this.args.length !== 0) {
      const createTailwindReactApp = require("./commands/react-app.command");
      createTailwindReactApp(this.args);
    } else {
      console.log("Please Provide the Project Name");
      shell.exit();
    }
  });

// create the tailwind Configure ReactJs Redux App

program
  .command("react-redux-app")
  .argument("<string>", "project name to delete")
  .description(` Create Tailwind Configure React Redux App`)
  .action(function () {
    if (this.args.length !== 0) {
      const createTailwindReactApp = require("./commands/react-redux-app.command");
      createTailwindReactApp(this.args);
    } else {
      console.log("Please Provide the Project Name");
      shell.exit();
    }
  });

// create the tailwind Configure NextJs App
program
  .command("next-app")
  .argument("<string>", "project name to create Next app")
  .description(` Create Tailwind Configure NextJs App`)
  .action(function () {
    if (this.args.length !== 0) {
      const createTailwindNextApp = require("./commands/next-app.command");
      createTailwindNextApp(this.args);
    } else {
      console.log("Please Provide the Project Name");
      shell.exit();
    }
  });

program.parse();
