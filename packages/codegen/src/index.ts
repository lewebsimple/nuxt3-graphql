import { defineNuxtModule } from "@nuxt/kit";
import { generate, loadContext } from "@graphql-codegen/cli";
import consola from "consola";

export default defineNuxtModule((nuxt) => ({
  name: "@nuxt3-graphql/codegen",
  configKey: "codegen",
  defaults: {},
  async setup(_options, nuxt) {
    // Generate GraphQL typings using graphql-codegen
    async function codegenGenerateTypings() {
      const start = Date.now();
      // TODO: Add codegen:config hook
      const config = (await loadContext()).getConfig();
      await generate(config, true);
      const time = Date.now() - start;
      consola.success(`GraphQL typings generated in ${time}ms`);
    }

    nuxt.hook("build:before", codegenGenerateTypings);
    nuxt.hook("builder:watch", codegenGenerateTypings);
  },
}));
