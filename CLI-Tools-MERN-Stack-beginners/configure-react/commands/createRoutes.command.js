const path = require("path");
const fs = require("fs");
const shell = require("shelljs");
const {
  wrapTagAround,
  makeCodePritter,
  sameFileExists,
  editReadme,
  endingScreen,
} = require("configure-react/utils");

const detail = require("./details.json");

const createRoutes = (args) => {
  const currentPath = process.cwd();
  const routesData = detail.routesData.join("\n");
  const importRoutesLink = detail.importRoutesLink;
  shell.exec("npm i react-router-dom react-router");
  shell.mkdir("-p", path.join(currentPath, "./src/routes"));
  const routesPath = path.join(currentPath, "./src/routes/RoutesLink.js");

  //   import RoutesLink in App.js
  const appJsPath = path.join(currentPath, "./src/App.js");
  if (!sameFileExists(appJsPath)) {
    const appJsData = fs.readFileSync(appJsPath, "utf8");
    const appJsDataArray = appJsData.split("\n");
    const importRoutesLinkIndex = appJsDataArray.findIndex((line) =>
      line.includes("import RoutesLink")
    );
    console.log("importRoutesLinkIndex", importRoutesLinkIndex);
    if (importRoutesLinkIndex === -1) {
      appJsDataArray.splice(1, 0, importRoutesLink[0]);
      fs.writeFileSync(appJsPath, appJsDataArray.join("\n"), "utf8", (err) => {
        if (err) throw err;
      });
    }
  }

  //   in App.js use RoutesLink component
  const appJsData = fs.readFileSync(appJsPath, "utf8");
  const appJsDataArray = appJsData.split("\n");
  const useRoutesLinkIndex = appJsDataArray.findIndex((line) =>
    line.includes("return")
  );
  const routePresent =
    appJsDataArray[useRoutesLinkIndex + 2].includes("<RoutesLink />");
  console.log("useRoutesLinkIndex", useRoutesLinkIndex);
  if (useRoutesLinkIndex !== -1 && !routePresent) {
    appJsDataArray.splice(useRoutesLinkIndex + 2, 0, " <RoutesLink />");
    fs.writeFileSync(
      appJsPath,
      makeCodePritter(appJsDataArray.join("\n")),
      "utf8",
      (err) => {
        if (err) throw err;
      }
    );
  }

  fs.writeFileSync(routesPath, makeCodePritter(routesData), "utf8", (err) => {
    if (err) throw err;
  });

  const indexFilePath = path.join(currentPath, "./src/index.js");
  wrapTagAround(
    "BrowserRouter",
    indexFilePath,
    "{BrowserRouter}",
    "react-router-dom"
  );
  editReadme(currentPath, "routes");
  endingScreen("routes");
};
module.exports = createRoutes;
