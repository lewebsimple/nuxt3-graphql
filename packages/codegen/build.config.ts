import { BuildConfig } from "unbuild";

export default {
  declaration: true,
  entries: ["./src/index"],
  externals: ["@graphql-codegen/cli", "@nuxt/kit", "@nuxt/schema", "consola", "graphql"],
} as BuildConfig;
