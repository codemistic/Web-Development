const fs = require("fs");

const refreshApp = () => {};

const refreshComponents = () => {
  console.log("refreshComponents function called");
  let components = fs.readdirSync("./src/components");

  components = components.map((component) => {
    if (component !== "App.js") {
      component = component.replace(".js", "");
      component = component.replace(".jsx", "");
      component = component.replace(".ts", "");
      component = component.replace(".tsx", "");
    }
    return component;
  });

  console.log(components, "components Filtered");
  const componentListNotPresent = [];
  const alreadyImported = [];
  console.log(components, "components");
  !components.includes("index") &&
    fs.writeFileSync("./src/components/index.js", "");
  const readContent = fs.readFileSync("./src/components/index.js", "utf8");
  const content = readContent.split("\n");
  const lastIndexOfImport = content.lastIndexOf("import ");

  content.map((line) => {
    if (line.includes("import ")) {
      line = line.replace("import ", "");
      const component = line.split(" from ")[0];
      console.log(component, "component Present");
      alreadyImported.push(component);
    }
  });

  components.map((component) => {
    if (component !== "index.js") {
      const componentPresent = alreadyImported.includes(component);

      if (!componentPresent && component !== "index") {
        const lastIndexOfImportLine = content.lastIndexOf("import ");
        const present = content.includes("export");

        console.log(present, "present");

        const lastIndexOfExportLine = content.lastIndexOf("export { ");
        console.log(lastIndexOfImportLine, "lastIndexOfImportLine");
        const line2Import = `import ${component} from "./${component}";`;
        const line2Export = `${component}`;
        content.splice(lastIndexOfImportLine + 1, 0, line2Import);
        present && content.splice(lastIndexOfExportLine + 1, 0, line2Export);
        !present &&
          content.splice(content.length, 0, `export{ ${line2Export} \n }`);
        console.log(content, "content");
      }
    }
  });

  fs.writeFileSync(
    "./src/components/index.js",
    content.join("\n"),
    (err, data) => {}
  );
};

const refreshPages = () => {};

const refreshContext = () => {};

const refreshRedux = () => {};

const refreshUtils = () => {};

const refreshApi = () => {};

const refresh = (name) => {
  if (name[0] !== ".") {
    return console.log("Please Go Inside the Project Folder");
  }
  // see the folder structure of the project
  const srcFilesExist = fs.readdirSync("./");
  if (!srcFilesExist.includes("src")) {
    return console.log(
      "Please run this command in the root directory of your project"
    );
  }
  const srcFiles = fs.readdirSync("./src");
  switch (true) {
    case srcFiles.includes("app"):
      refreshApp();
    case srcFiles.includes("components"):
      refreshComponents();
    case srcFiles.includes("pages"):
      refreshPages();
    case srcFiles.includes("context"):
      refreshContext();
    case srcFiles.includes("redux"):
      refreshRedux();
    case srcFiles.includes("utils"):
      refreshUtils();
    case srcFiles.includes("api"):
      refreshApi();
    default:
      return console.log(
        "Please run this command in the root directory of your project"
      );
  }
};

module.exports = refresh;
