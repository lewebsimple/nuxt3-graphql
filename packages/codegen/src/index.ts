import { defineNuxtModule } from "@nuxt/kit";
import logger from "./logger";
import { generate, loadContext } from "@graphql-codegen/cli";
import type { NuxtCodegenConfig } from "./types";

export default defineNuxtModule<NuxtCodegenConfig>((nuxt) => ({
  name: "@nuxt3-graphql/codegen",
  configKey: "codegen",
  defaults: {},
  async setup(_options, nuxt) {
    // Generate GraphQL typings using graphql-codegen
    async function codegenGenerateTypings() {
      const start = Date.now();
      // TODO: Add codegen:config hook
      const config = (await loadContext()).getConfig();
      await nuxt.callHook("codegen:config", config);
      await generate(config, true);
      const time = Date.now() - start;
      logger.success(`GraphQL typings generated in ${time}ms`);
    }

    nuxt.hook("build:before", codegenGenerateTypings);
    nuxt.hook("builder:watch", codegenGenerateTypings);
  },
}));
