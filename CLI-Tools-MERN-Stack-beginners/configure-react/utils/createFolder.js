const fs = require("fs");
const path = require("path");
const createFolder = (folderPath, folderName) => {
  const newFolderPath = path.join(folderPath, folderName);
  if (!fs.existsSync(newFolderPath)) {
    fs.mkdirSync(newFolderPath);
  } else {
    console.log("Folder already exists");
  }
};

module.exports = createFolder;
