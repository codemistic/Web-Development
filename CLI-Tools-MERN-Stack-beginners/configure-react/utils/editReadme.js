const fs = require("fs");
const editReadme = (readmePath, content) => {
  try {
    const readme = fs.readFileSync(readmePath, "utf8");
    const readmeContent = readme.split("\n");
    //if readContent includes "## Installation" then replace the content between "## Installation" and "## Usage" with the content

    const present = readmeContent.includes(
      "# Getting Started with configure-react"
    );
    if (present) {
      const line = `${content} is Created/Configure with [configure-react](https://github.com/shaantanu9/configure-react)`;
      const index = readmeContent.indexOf(
        "# Getting Started with configure-react"
      );
      if (!readmeContent.includes(line))
        readmeContent.splice(index + 2, 0, line);
    } else {
      const line = `# Getting Started with configure-react
This project was bootstrapped with [configure-react](https://github.com/shaantanu9/configure-react).
${content} is Created with [configure-react](https://github.com/shaantanu9/configure-react)
`;
      readmeContent.splice(4, 0, line);
    }

    fs.writeFileSync(readmePath, readmeContent.join("\n"), (err, data) => {});
  } catch (error) {
    console.log(readmePath, "readmePath");
    // fs.writeFileSync(readmePath + "/" + content, content, (err, data) => {});
  }
};

module.exports = editReadme;
