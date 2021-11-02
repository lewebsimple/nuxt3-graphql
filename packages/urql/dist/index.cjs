'use strict';

const pathe = require('pathe');
const url = require('url');
const kit = require('@nuxt/kit');

const index = kit.defineNuxtModule((nuxt) => ({
  name: "urql",
  configKey: "urql",
  setup(options) {
    const __dirname__ = pathe.dirname(url.fileURLToPath((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('index.cjs', document.baseURI).href))));
    kit.addTemplate({
      filename: "urql.options.mjs",
      getContents: () => "export default " + JSON.stringify(options)
    });
    kit.addPluginTemplate({
      src: pathe.resolve(__dirname__, "./plugin.mjs")
    });
    nuxt.options.build.transpile.push("@urql/vue");
  }
}));

module.exports = index;
