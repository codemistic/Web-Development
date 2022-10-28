#!/usr/bin/env node

var shell = require("shelljs");
const path = require("path");
const fs = require("fs");

const { Command } = require("commander");
const program = new Command();

const welcome = require("./commands/welcome");

// show this welcome at the end of the command run

//======================================================= Trial 1 =======================================================
// take multiple arguments as commands and pass them to the action function

// get multple arguments as commands and pass them to the action functions as an array

program
  .command("inner")
  .argument("<string>", "project name to delete")
  .addCommand(
    new Command("inner2")
      .argument("<string>", "project name to delete")
      .action(function () {
        console.log("inner2");
      })
  );

// ====================== 1st approach ======================

program
  .command("delete")
  .argument("<string>", "project name to delete")
  .description(` delete the project in Seconds`)
  .action(function () {
    shell.exec(`rm -rf ${this.args}`);
  });
// create the tailwind Configure ReactJs App

program
  .command("tailwind")
  .argument("<string>", "project name to delete")
  .description(` Create Tailwind Configure ReactJs App`)
  .action(function () {
    if (this.args.length !== 0) {
      const createTailwindReactApp = require("./commands/tailwind.command");
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

//
program
  .command("redux")
  .argument("<string>", "redux name to create")
  .description(` Create Redux Folder`)
  .action(function () {
    if (this.args.length !== 0) {
      const createRedux = require("./commands/redux.command.js");
      createRedux(this.args);
    }
  });

// Configure Chakra UI
program
  .command("chakra-ui")
  .argument("<string>", "project name to create Chakra UI")
  .description(` Create Chakra UI`)
  .action(function () {
    if (this.args.length !== 0) {
      const createChakraUi = require("./commands/chakraUi.command.js");
      createChakraUi(this.args);
    }
  });

// Configure Context API
program
  .command("context-api")
  .argument("<string>", "project name to create Context API")
  .description(` Create Context API`)
  .action(function () {
    if (this.args.length !== 0) {
      const createContextApi = require("./commands/createContextApi.command.js");
      createContextApi(this.args);
    }
  });

// Create Browser Router and Routes Folder
program
  .command("browser-router")
  .argument("<string>", "project name to create Browser Router")
  .description(` Create Browser Router`)
  .action(function () {
    if (this.args.length !== 0) {
      const createRoutes = require("./commands/createRoutes.command.js");
      createRoutes(this.args);
    }
  });

// Congigure Axios
program
  .command("axios")
  .argument("<string>", "project name to create Axios")
  .description(` Create Axios`)
  .action(function () {
    if (this.args.length !== 0) {
      const createAxios = require("./commands/createAxios.command.js");
      createAxios(this.args);
    }
  });

// Configure Utils Folder
program
  .command("utils")
  .argument("<string>", "project name to create Utils Folder")
  .description(` Create Utils Folder`)
  .action(function () {
    if (this.args.length !== 0) {
      const createUtils = require("./commands/createUtils.command.js");
      createUtils(this.args);
    }
  });

// Configure Redux Thunk
program
  .command("redux-thunk")
  .argument("<string>", "project name to create Redux Thunk")
  .description(` Create Redux Thunk`)
  .action(function () {
    if (this.args.length !== 0) {
      const createReduxThunk = require("./commands/createReduxThunk.command.js");
      createReduxThunk(this.args);
    }
  });

// Configure Redux Saga
program
  .command("redux-saga")
  .argument("<string>", "project name to create Redux Saga")
  .description(` Create Redux Saga`)
  .action(function () {
    if (this.args.length !== 0) {
      const createReduxSaga = require("./commands/createReduxSaga.command.js");
      createReduxSaga(this.args);
    }
  });

// Configure Redux Persist
program
  .command("redux-persist")
  .argument("<string>", "project name to create Redux Persist")
  .description(` Create Redux Persist`)
  .action(function () {
    if (this.args.length !== 0) {
      const createReduxPersist = require("./commands/createReduxPersist.command.js");
      createReduxPersist(this.args);
    }
  });

// refresh the files
program
  .command("refresh")
  .argument("<string>", "project name to refresh")
  .description(` Refresh the files`)
  .action(function () {
    if (this.args.length !== 0) {
      const refreshFiles = require("./commands/refresh.command.js");
      refreshFiles(this.args);
    }
  });

// Create BigReact Project that contains list of small react projects
program
  .command("create-cluster")
  .argument("<string>", "project name to create Big React Project")
  .description(` Create Big React Project`)
  .action(function () {
    if (this.args.length !== 0) {
      const creaeteCluster = require("configure-react/commands/createReactCluster.command");
      creaeteCluster(this.args);
    }
  });

// Create Cluster App == small React Project
program
  .command("cluster-app")
  .argument("<string>", "project name to create Cluster App")
  .description(` Create Cluster App`)
  .action(function () {
    if (this.args.length !== 0) {
      const createClusterApp = require("configure-react/commands/createClusterApp.command");
      createClusterApp(this.args);
    }
  });

// install package in cluster app
program
  .command("ic")
  .argument("<string>", "project name to install package in Cluster App")
  .description(` Install package in Cluster App`)
  .action(function () {
    if (this.args.length !== 0) {
      const installClusterApp = require("configure-react/commands/installClusterApp.command");
      installClusterApp(this.args);
    }
  });

program.parse();
