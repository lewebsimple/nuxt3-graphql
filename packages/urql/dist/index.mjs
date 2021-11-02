import { dirname, resolve } from 'pathe';
import { fileURLToPath } from 'url';
import { defineNuxtModule, addTemplate, addPluginTemplate } from '@nuxt/kit';

const index = defineNuxtModule((nuxt) => ({
  name: "urql",
  configKey: "urql",
  setup(options) {
    const __dirname__ = dirname(fileURLToPath(import.meta.url));
    addTemplate({
      filename: "urql.options.mjs",
      getContents: () => "export default " + JSON.stringify(options)
    });
    addPluginTemplate({
      src: resolve(__dirname__, "./plugin.mjs")
    });
    nuxt.options.build.transpile.push("@urql/vue");
  }
}));

export { index as default };
