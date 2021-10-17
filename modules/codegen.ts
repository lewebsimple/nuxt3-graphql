import { defineNuxtModule } from "@nuxt/kit";
import { generate, loadContext } from "@graphql-codegen/cli";
import consola from "consola";

export default defineNuxtModule((nuxt) => ({
  name: "nuxt-codegen",
  configKey: "codegen",
  defaults: {},
  async setup(_options, nuxt) {
    nuxt.hook("builder:watch", async () => {
      const start = Date.now();
      const context = await loadContext();
      await generate(context, true);
      const time = Date.now() - start;
      consola.success(`GraphQL typings generated in ${time}ms`);
    });
  },
}));
