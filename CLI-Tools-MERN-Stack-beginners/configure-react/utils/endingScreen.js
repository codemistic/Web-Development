const endingScreen = (name = "") => {
  console.log("\n", "\n");
  console.log("\n", "\n");
  console.log("\x1b[32m", `${name} configured successfully`);
  console.log("\n");
  console.log("\x1b[32m", "By Configure React By Shantanu Bombatkar ");
  console.log("\x1b[0m", "https://github.com/shaantanu9/configure-react ");
  console.log("\n");
  console.log("\x1b[32m", "For more commands type:");
  console.log("\x1b[33m", "npx configure-react -h");
  console.log("\n");
  console.log("Thank you for using Configure React");
  console.log("\n");
};

module.exports = endingScreen;
