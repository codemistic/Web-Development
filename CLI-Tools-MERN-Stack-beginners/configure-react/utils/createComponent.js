const fs = require("fs");
const shell = require("shelljs");
const createComponent = (componentPath) => {
  // if file not exist, create it

  if (!fs.existsSync(componentPath)) {
    shell.mkdir("-p", componentPath); // -p flag creates parent directories if they don't exist
    shell.touch(componentPath + "/Login.js");
  }
};

module.exports = createComponent;
