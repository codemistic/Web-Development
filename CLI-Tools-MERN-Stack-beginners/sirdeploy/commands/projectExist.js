const fs = require("fs");

projectExist = (path) => {
  try {
    if (fs.existsSync(`./${path}`)) {
      //file exists
      console.log(
        " Sorry the File with this name not exist, Please Create 1 file First then paste your db.json file inside and try Again "
      );
      return true;
      // shell.exit()
    }
  } catch (err) {
    console.error("err");
  }
};

module.exports = projectExist;
