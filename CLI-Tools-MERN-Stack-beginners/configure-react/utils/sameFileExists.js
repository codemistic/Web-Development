// documenting the function
/**
 * @param {string} fileName
 * @returns {boolean}
 * @description checks if the file exists in the current directory
 * @example
 * sameFileExists("index.js"); // true
 **/

const fs = require("fs");
const sameFileExists = (fileName) => {
  const files = fs.readdirSync("./");
  return files.includes(fileName);
};

// Return True if file exists
module.exports = sameFileExists;
