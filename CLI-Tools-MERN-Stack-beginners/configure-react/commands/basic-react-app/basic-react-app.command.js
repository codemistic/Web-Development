const shell = require("shelljs");
const path = require("path");
const fs = require("fs");
const wrapTagAround = require("configure-react/utils/wrapTagAround");
const importAtTop = require("configure-react/utils/importAtTop");

const settingReactRouter = () => {
  // Create Routes
  shell.exec("npx configure-react create-routes");
};

const settingRedux = () => {
  // Create Redux
  shell.exec("npx configure-react create-redux");
};

const settingFormik = () => {
  // Create Formik
};

const settingAxios = () => {
  // Create Axios

  


};

const startCreateReactApp = () => {
  shell.exec(
    "npm i react-router-dom react-router redux react-redux redux-thunk formik yup axios react-toastify react-icons "
  );
  settingReactRouter();
  settingRedux();
  settingFormik();
  settingYup();
  settingAxios();
  settingReactToastify();
  settingReactIcons();
};

const basicReactApp = (projectName) => {
  if (projectName[0] !== ".")
    return console.log(
      "Please go to the project directory root where package.json and react install and run the command"
    );
  const currentPath = process.cwd();
  const packageJsonPath = path.join(currentPath, "./package.json");
  const packageJsonData = fs.readFileSync(packageJsonPath, "utf8");
  const packageJsonDataObject = JSON.parse(packageJsonData);
  const packageJsonDataObjectScripts = packageJsonDataObject.scripts;
  if (
    packageJsonDataObjectScripts["start"] !== "react-scripts start" ||
    packageJsonData.dependencies.react === undefined
  ) {
    return console.log(
      "Please install react and run the command from the project directory root where package.json and react install"
    );
  }
  startCreateReactApp();
};

module.exports = basicReactApp;
