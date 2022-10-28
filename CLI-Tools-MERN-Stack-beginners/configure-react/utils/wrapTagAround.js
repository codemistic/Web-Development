const fs = require("fs");
const shell = require("shelljs");
const path = require("path");
const makeCodePritter = require("configure-react/utils/makeCodePritter");
const wrapTagAround = (
  tag,
  path,
  importModule,
  importModuleFrom = importModule
) => {
  const file = fs.readFileSync(path, "utf8");
  const fileArray = file.split("\n");
  const trimmedFileArray = fileArray.map((line) => line.trim()); // remove space from start and end of line
  // console.log(
  //   !fileArray.includes(`import ${importModule} from '${importModuleFrom}';`),
  //   "fileArray includes import" + importModule,
  //   `import ${importModule} from '${importModuleFrom}';`,
  //   fileArray
  // );
  if (
    !trimmedFileArray.includes(
      `import ${importModule} from '${importModuleFrom}';`
    ) &&
    !fileArray.includes(`import ${importModule} from '${importModuleFrom}';`)
  ) {
    fileArray.splice(
      1,
      0,
      `import ${importModule} from '${importModuleFrom}';`
    );
  }

  const index = fileArray.findIndex((line) => {
    line = line.trim().replace(" ", "");
    return line.includes("<App/>");
  });
  // if tag are not present then add the tag
  if (!fileArray.includes(`<${tag}>`)) {
    fileArray.splice(index, 0, `<${tag}>`);
    fileArray.splice(index + 2, 0, `</${tag}>`);
  }

  fs.writeFileSync(path, makeCodePritter(fileArray.join("\n")));

  //   fs.writeFileSync(path, fileArray.join("\n"), "utf8");
};

//   const file = fs.readFileSync(path, "utf-8");
//   const wrappedFile = `<${tag}>${file}</${tag}>`;
//   fs.writeFileSync(path, wrappedFile);
// };

module.exports = wrapTagAround;
