const { wrapTagAround, ifNotDot } = require("configure-react/utils");

const shell = require("shelljs");
const path = require("path");
const fs = require("fs");

const editIndexJs = (currentPath) => {
  const indexJsPath = path.join(currentPath, "./src/index.js");
  wrapTagAround(
    "ChakraProvider",
    indexJsPath,
    "ChakraProvider",
    "@chakra-ui/react"
  );
};

const editPackageJson = () => {
  console.log("editPackageJson function called");
  const currentPath = process.cwd();
  // const packageJsonPath = path.join(currentPath, "./package.json");
  // const packageJson = require("./package.json");
  console.log(currentPath);
  editIndexJs(currentPath);
  // editIndexJs();
};
const chakraUi = async ([projectName]) => {
  function run() {
    ifNotDot(projectName);
    editPackageJson();
  }
  run();

  // ifNotDot(projectName);
  // editPackageJson();
};

module.exports = chakraUi;

// Language: javascript

// ======================= Add Provider in index.js =======================   // add provider in index.js file
// Add the provider in index.js file keeping the other code as it is
