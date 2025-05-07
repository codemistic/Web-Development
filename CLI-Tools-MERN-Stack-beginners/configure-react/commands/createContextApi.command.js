const {
  ifNotDot,
  sameFileExists,
  wrapTagAround,
  makeCodePritter,
} = require("configure-react/utils");
const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const detail = require("./details.json");

const createContextFiles = () => {
  const contextAPIData = detail.contextAPIData.join("\n");
  const currentPath = process.cwd();

  console.log("currentPath from CreateContextFile ", currentPath);
  // create context folder
  shell.mkdir("-p", path.join(currentPath, "./src/context")); // -p is for creating parent folder if not exist
  // shell.mkdir("-p", path.join(currentPath, "./src/context")); // -p is for creating parent folder if not exist
  const contextPath = path.join(currentPath, "./src/context");
  // create AppContext.js file
  shell.touch(path.join(contextPath, "./AppContext.js"));
  const appContextPath = path.join(contextPath, "./AppContext.js");
  fs.writeFileSync(
    appContextPath,
    makeCodePritter(contextAPIData),
    "utf8",
    (err) => {
      if (err) throw err;
    }
  );
  // create AppContextProvider.js file
};

const createContextApi = async ([projectName]) => {
  if (projectName !== ".")
    return console.log(
      "Please run this command in the root directory of your project"
    );
  const currentPath = process.cwd();
  // if at current path package.json file exist
  if (sameFileExists("package.json")) {
    // read package.json file
    const packageJson = require(path.join(currentPath, "./package.json"));
    // if package.json file has dependencies
    if (packageJson.dependencies && packageJson.dependencies["react"]) {
      const indexFilePath = path.join(currentPath, "./src/index.js");
      console.log("indexFilePath", indexFilePath);
      // function to edit index.js file
      wrapTagAround(
        "AppContext",
        indexFilePath,
        "AppContext",
        "./context/AppContext"
      );
      // create context folder
      createContextFiles();
    } else {
      console.log("Please run this command after installing react");
    }
  } else {
    console.log("Please run this command after installing react");
  }
};

module.exports = createContextApi;
