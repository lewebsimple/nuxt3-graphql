import { defineNuxtModule } from '@nuxt/kit';
import { loadContext, generate } from '@graphql-codegen/cli';
import consola from 'consola';

const index = defineNuxtModule((nuxt) => ({
  name: "@nuxt3-graphql/codegen",
  configKey: "codegen",
  defaults: {},
  async setup(_options, nuxt2) {
    async function codegenGenerateTypings() {
      const start = Date.now();
      const config = (await loadContext()).getConfig();
      await generate(config, true);
      const time = Date.now() - start;
      consola.success(`GraphQL typings generated in ${time}ms`);
    }
    nuxt2.hook("build:before", codegenGenerateTypings);
    nuxt2.hook("builder:watch", codegenGenerateTypings);
  }
}));

export { index as default };
