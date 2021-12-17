// eslint-disable-next-line @typescript-eslint/no-var-requires
require("ts-node").register({
  skipProject: true,
  transpileOnly: true,
});
module.exports = require("./schema");
