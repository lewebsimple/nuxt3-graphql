import { defineNuxtModule } from "@nuxt/kit";
import { generate, loadContext } from "@graphql-codegen/cli";
import consola from "consola";

// Generate GraphQL typings using graphql-codegen
async function codegenGenerateTypings() {
  const start = Date.now();
  const context = await loadContext();
  await generate(context, true);
  const time = Date.now() - start;
  consola.success(`GraphQL typings generated in ${time}ms`);
}

export default defineNuxtModule((nuxt) => ({
  name: "nuxt-codegen",
  configKey: "codegen",
  defaults: {},
  async setup(_options, nuxt) {
    nuxt.hook("builder:watch", codegenGenerateTypings);
  },
}));
