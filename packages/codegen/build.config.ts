import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  emitCJS: false,
  entries: [{ input: "./src/index" }],
  externals: [
    "@graphql-codegen/cli",
    "@graphql-codegen/plugin-helpers",
    "@nuxt/kit",
    "@nuxt/schema",
    "consola",
    "graphql",
  ],
});
