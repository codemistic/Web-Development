const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const { editReadme, endingScreen } = require("configure-react/utils");

const installClusterApp = (args) => {
  const packageObject = {};
  const listOfPackages = args.join(" ");
  const currentPath = process.cwd();
  const packageJsonPath = path.join(currentPath, "./package.json");
  const packageJsonData = fs.readFileSync(packageJsonPath, "utf8");
  const packageJsonDataObject = JSON.parse(packageJsonData);
  const clusterName = packageJsonDataObject.name;
  const clusterapp = packageJsonDataObject.clusterapp;
  if (clusterapp === undefined) {
    console.log("No clusterapp found in package.json");
    return;
  }

  // ---------------------------------------------------------------------------------------

  process.chdir("../");

  //   read cluster from package.json
  mainClusterPath = path.join(process.cwd());
  //   read clusterapp from package.json
  const mainClusterPackageJson = fs.readFileSync(
    path.join(mainClusterPath, "./package.json"),
    "utf8"
  );
  const mainClusterPackageJsonDataObject = JSON.parse(mainClusterPackageJson);

  args.forEach((arg) => {
    if (mainClusterPackageJsonDataObject.dependencies[arg] === undefined) {
      shell.exec("npm install " + arg);
    }
  });

  args.forEach((arg) => {
    console.log("Installing " + arg);
    const mainClusterPackageJson = fs.readFileSync(
      path.join(mainClusterPath, "./package.json"),
      "utf8"
    );
    const mainClusterPackageJsonDataObject = JSON.parse(mainClusterPackageJson);
    packageJsonDataObject.dependencies[arg] =
      mainClusterPackageJsonDataObject.dependencies[arg];
  });

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJsonDataObject, null, 2),
    "utf8",
    (err) => {}
  );
  console.log("Installed clusterapp successfully");
  // editReadme();
  endingScreen();
};

module.exports = installClusterApp;
