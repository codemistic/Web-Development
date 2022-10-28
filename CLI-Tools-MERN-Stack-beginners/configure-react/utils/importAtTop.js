const fs = require("fs");
const makeCodePritter = require("configure-react/utils/makeCodePritter");
const importAtTop = (path, importWhat, importFrom) => {
  const fileData = fs.readFileSync(path, "utf8");
  const fileDataArray = fileData.split("\n");
  const importIndex = fileDataArray.findIndex((line) =>
    line.includes(importWhat)
  );
  console.log("importIndex", importIndex);
  if (importIndex === -1) {
    fileDataArray.splice(1, 0, `import ${importWhat} from "${importFrom}"`);
    fs.writeFileSync(
      path,
      makeCodePritter(fileDataArray.join("\n")),
      "utf8",
      (err) => {
        if (err) throw err;
      }
    );
  }
};

module.exports = importAtTop;
