const fs = require("fs");
const detail = require("../commands/details.json");
const createEnv = (envPath) => {
  const envData = detail.envData.join("\n");
  // if file not exist, create it
  if (!fs.existsSync(envPath)) {
    // shell.touch(envPath);
    // fs to create file
    fs.writeFileSync(envPath, "", "utf8", (err) => {
      if (err) throw err;
    });
  }
  // edit .env
  fs.appendFileSync(envPath, envData, "utf8", (err) => {
    if (err) throw err;
  });
};

module.exports = createEnv;
