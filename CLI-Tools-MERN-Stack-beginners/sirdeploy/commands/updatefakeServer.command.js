const shell = require("shelljs");

const updateFakeServer = ([name, msg]) => {
  const projectExist = require("./projectExist");
  if (projectExist(name) !== true || msg == undefined) {
    console.log("Project Not Exist or Commit Message is not provided");
    shell.exit();
  }
  try {
    shell.cd(name);
    shell.exec(
      `git add . && git commit -m '${msg} || updated @ ${new Date()}' && git push heroku master`
    );
  } catch (err) {
    console.log(err.message);
    shell.exit();
  }
};
export default updateFakeServer;
