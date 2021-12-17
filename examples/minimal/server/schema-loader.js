// eslint-disable-next-line @typescript-eslint/no-var-requires
require("ts-node").register({
  project: "tsconfig.schema.json",
  transpileOnly: true,
});
module.exports = require("./schema");
