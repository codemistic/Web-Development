const path = require("path"); // path is use to join the path
const fs = require("fs"); // fs is use to create file and folder
const shell = require("shelljs"); // shelljs is use to run command in terminal
const codeSnippets = require("configure-react/commands/details.json");
const { endingScreen, makeCodePritter } = require("configure-react/utils");

// ======================= Editing All index files =======================   //
// Edit all index files
const editIndexFiles = () => {
  // Edit all index files
  const currentPath = process.cwd(); // get the current path
  const indexFilePath = path.join(currentPath, "src/redux/store/index.js"); // get the index file path

  const actionsTypesIndexFilePath = path.join(
    currentPath,
    "src/redux/actions/types/index.js"
  ); // get the actions types index file path
  const actionsCreatorsIndexFilePath = path.join(
    currentPath,
    "src/redux/actions/creators/index.js"
  ); // get the actions creators index file path
  const reducersIndexFilePath = path.join(
    currentPath,
    "src/redux/reducers/index.js"
  ); // get the reducers index file path

  // Edit index.js
  const storeIndex = codeSnippets.storeIndex.join("\n"); // get the store index code
  fs.writeFileSync(
    indexFilePath,
    makeCodePritter(storeIndex),
    "utf8",
    (err) => {
      // write the store index code in index.js file
      if (err) throw err;
    }
  );

  // Edit actions types index.js
  const actionsTypesIndex = codeSnippets.actionsTypesIndex.join("\n"); // get the actions types index code
  fs.writeFileSync(
    actionsTypesIndexFilePath,
    makeCodePritter(actionsTypesIndex),
    "utf8",
    (err) => {
      // write the actions types index code in actions types index.js file
      if (err) throw err;
    }
  );

  // Edit actions creators index.js
  const actionsCreatorsIndex = codeSnippets.actionsCreatorsIndex.join("\n"); // get the actions creators index code
  fs.writeFileSync(
    actionsCreatorsIndexFilePath,
    makeCodePritter(actionsCreatorsIndex),
    "utf8",
    (err) => {
      // write the actions creators index code in actions creators index.js file
      if (err) throw err;
    }
  );

  // Edit reducers index.js
  const reduxReducersIndex = codeSnippets.reduxReducersIndex.join("\n"); // get the reducers index code
  fs.writeFileSync(
    reducersIndexFilePath,
    makeCodePritter(reduxReducersIndex),
    "utf8",
    (err) => {
      // write the reducers index code in reducers index.js file
      if (err) throw err;
    }
  );
};

// ======================= Install Redux Packages =======================   //
// install redux and react-redux package using npm if not installed
const installRedux = () => {
  // install redux and react-redux using shelljs command
  installPackage(
    "redux",
    "react-redux",
    "redux-thunk",
    "redux-devtools-extension"
  );
};

// ======================= Create Redux Folder =======================   //
// Create Redux Folder if not exist in src folder of the project folder
const createReduxFolder = () => {
  // Create Redux Folder use to create redux folder
  const currentPath = process.cwd();
  createFolders(
    path.join(currentPath, "src/redux"),
    path.join(currentPath, "src/redux/actions"),
    path.join(currentPath, "src/redux/actions/types"),
    path.join(currentPath, "src/redux/actions/creators"),
    path.join(currentPath, "src/redux/reducers"),
    path.join(currentPath, "src/redux/store")
  );
};

// ======================= Create Redux File in Redux Folder =======================   //
// Create Redux Files if not exist in redux folder of the project folder
const createReduxFiles = () => {
  // Create Redux Files like actions, reducers, store
  const currentPath = process.cwd(); // get the current path
  createFiles(
    path.join(currentPath, "src/redux/actions/types/index.js"),
    path.join(currentPath, "src/redux/actions/creators/index.js"),
    path.join(currentPath, "src/redux/reducers/index.js"),
    path.join(currentPath, "src/redux/store/index.js")
  );
  editIndexFiles();
};

// ======================= CreateRedux =======================   //
const createRedux = () => {
  createReduxFolder(); // create redux folder
  createReduxFiles(); // create redux files
  installRedux(); // install redux and react-redux
  //   createReduxContextApi(); // create context api
  addProvider(); // add provider in index.js file
  endingScreen();
};

// ======================= Export =======================   //
// export the function so that it can be used in other file
module.exports = createRedux;

// ======================= End =======================   //

// ======================= Create Multiple Folder =======================   // Create multiple Folder if not exist // using rest operator

// Create multiple Folder if not exist // using rest operator
const createFolders = (...filePath) => {
  filePath.forEach((path) => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  });
};

// ======================= Create Multiple File =======================   // Create multiple File if not exist // using rest operator
// Create multiple Folder if not exist // using rest operator
const createFiles = (...filePath) => {
  filePath.forEach((path) => {
    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, "");
    }
  });
};

// // ======================= Create Context API for  =======================   // install multiple package using shelljs command
// // to update the state everywhere need to use context api so create context api
// const createReduxContext = () => {
//   const currentPath = process.cwd();
//   createFolders(path.join(currentPath, "src/context"));
//   createFiles(path.join(currentPath, "src/context/index.js"));
// };

// // ======================= Create Redux Context File =======================   // create redux context file and add the code in it
// const createReduxContextFile = () => {
//   const currentPath = process.cwd();
//   const contextApiData = codeSnippets.contextApiData.join("\n"); // join the code snippets with new line
//   //   console.log("Adding Context Api", contextApiData);
//   fs.writeFileSync(
//     path.join(currentPath, "src/context/index.js"),
//     contextApiData
//   );
// };

// // ======================= Create Redux Context Api =======================   // create redux context api Folder and file
// const createReduxContextApi = () => {
//   createReduxContext();
//   createReduxContextFile();
// };

// ======================= Add Provider in index.js =======================   // add provider in index.js file
// Add the provider in index.js file keeping the other code as it is
const addProvider = () => {
  const currentPath = process.cwd();
  // read the index.js file
  const indexFile = fs.readFileSync(
    path.join(currentPath, "src/index.js"),
    "utf-8"
  );

  // split the file into array
  const indexFileArray = indexFile.split("\n");
  // if provider is not present then add the provider
  if (!indexFileArray.includes("import { Provider } from 'react-redux';")) {
    // console.log("Adding Provider");
    indexFileArray.splice(1, 0, "import { Provider } from 'react-redux';"); // add the provider in index.js file at 1st index
  }
  // find the index of the line where we need to add the code
  const index = indexFileArray.findIndex((line) => {
    line = line.trim().replace(" ", "");
    return line.includes("<App/>");
  });
  // add the code in the index.js file if not present
  if (!indexFileArray.includes("<Provider store={store}>"))
    // if provider is not present then add the provider
    indexFileArray.splice(index, 0, `<Provider store={store}>`);
  if (!indexFileArray.includes("</Provider>"))
    // if provider is not present then add the provider
    indexFileArray.splice(index + 2, 0, `</Provider>`);

  fs.writeFileSync(
    path.join(currentPath, "src/index.js"),
    indexFileArray.join("\n")
  ); // join the array with new line and write the file
};

// ======================= Check if Package is Installed =======================   // check if package is installed or not
// See if package is installed or not
const isPackageInstalled = (...packageName) => {
  const currentPath = process.cwd();
  const packageJson = fs.readFileSync(
    path.join(currentPath, "package.json"),
    "utf-8"
  );
  const packageJsonData = JSON.parse(packageJson);
  return packageJsonData.dependencies[packageName];
};

// ======================= Install Package if not present in package.json =======================   // install package if not present in package.json
// if package is not installed then install the package
const installPackage = (...packageName) => {
  const currentPath = process.cwd();
  packageName.forEach((package) => {
    if (!isPackageInstalled(package)) {
      shell.exec(`npm i ${package}`); // install the package using shelljs
    }
  });
};
