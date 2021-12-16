import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  emitCJS: false,
  entries: [{ input: "./src/index" }, { input: "./src/plugin", declaration: false }],
  externals: ["@nuxt/kit", "@nuxt/schema", "@urql/vue", "pathe", "vue", "#app", "#build", "#build/urql.options.mjs"],
});
