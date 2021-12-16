import { BuildConfig } from "unbuild";

export default {
  declaration: true,
  entries: ["./src/index"],
  externals: [
    "@graphql-codegen/cli",
    "@graphql-codegen/plugin-helpers",
    "@nuxt/kit",
    "@nuxt/schema",
    "consola",
    "graphql",
  ],
} as BuildConfig;
