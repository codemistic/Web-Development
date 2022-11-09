// make the code prettier

const pritter = require("prettier");

const makeCodePritter = (code) => {
  const prettierConfig = pritter.resolveConfig.sync("./");
  const prettierCode = pritter.format(code, prettierConfig);
  return prettierCode;
};

module.exports = makeCodePritter;
