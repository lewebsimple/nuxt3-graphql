import { BuildConfig } from "unbuild";

export default {
  declaration: true,
  entries: ["./src/index", "./src/plugin"],
  externals: ["@nuxt/kit", "@urql/vue", "pathe", "vue", "#app", "#build", "#build/urql.options.mjs"],
} as BuildConfig;
