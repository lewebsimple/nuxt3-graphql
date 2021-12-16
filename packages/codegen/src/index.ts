import { defineNuxtModule } from "@nuxt/kit";
import logger from "./logger";
import { generate, loadCodegenConfig } from "@graphql-codegen/cli";
import type { NuxtCodegenConfig } from "./types";

export * from "./types";

export default defineNuxtModule<NuxtCodegenConfig>((nuxt) => ({
  name: "@nuxt3-graphql/codegen",
  configKey: "codegen",
  defaults: {},
  async setup(userConfig, nuxt) {
    // Generate GraphQL typings using graphql-codegen
    async function codegenGenerateTypings() {
      const start = Date.now();

      // Load config from codegen.yml
      const codegenConfig = await loadCodegenConfig({});

      // Merge user config with codegen.yml
      const config = {
        ...userConfig,
        ...(codegenConfig.config || {}),
      };

      // Allow users to override config with hooks
      await nuxt.callHook("codegen:config", config);

      await generate(config, true);

      const time = Date.now() - start;
      logger.success(`GraphQL typings generated in ${time}ms`);
    }

    nuxt.hook("build:before", codegenGenerateTypings);
    nuxt.hook("builder:watch", codegenGenerateTypings);
  },
}));
