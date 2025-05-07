const shell = require("shelljs");
const path = require("path");
const fs = require("fs");

const fetchFunction = async (name) => {
  require("https").get(
    `https://github.com/shaantanu9/SirDeploy/blob/main/newEdit/${name}.gitignore`,
    (res) => {
      res.setEncoding("utf8");
      // console.log(res.statusCode);
      res.on("data", function (body) {
        console.log(body);
      });
    }
  );
};

const getGitIgnoreFile = (name) => {
  // fetch data from github repo
  let data = fetchFunction(name);
  return data;
};

const createGitignore = (name) => {
  fullData = [];
  name.forEach((name) => {
    data = getGitIgnoreFile(name);
    fullData.push(data);
  }),
    fs.writeFileSync(".gitignore", fullData.join("\n"));
};

createGitignore(["1c"]);

module.exports = createGitignore;
