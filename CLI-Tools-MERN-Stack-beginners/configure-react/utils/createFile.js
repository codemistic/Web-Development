const fs = require("fs");
const makeCodePritter = require("./makeCodePritter");
const createFile = (path, content) => {
  fs.writeFileSync(path, makeCodePritter(content), "utf8", (err) => {
    if (err) throw err;
  });
};
//

module.exports = createFile;
