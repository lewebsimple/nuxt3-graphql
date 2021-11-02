import { BuildConfig } from "unbuild";

export default {
  declaration: true,
  entries: ["./src/index"],
  externals: ["@graphql-codegen/cli", "@nuxt/kit", "consola"],
} as BuildConfig;
