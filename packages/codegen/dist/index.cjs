'use strict';

const kit = require('@nuxt/kit');
const cli = require('@graphql-codegen/cli');
const consola = require('consola');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const consola__default = /*#__PURE__*/_interopDefaultLegacy(consola);

const index = kit.defineNuxtModule((nuxt) => ({
  name: "@nuxt3-graphql/codegen",
  configKey: "codegen",
  defaults: {},
  async setup(_options, nuxt2) {
    async function codegenGenerateTypings() {
      const start = Date.now();
      const config = (await cli.loadContext()).getConfig();
      await cli.generate(config, true);
      const time = Date.now() - start;
      consola__default.success(`GraphQL typings generated in ${time}ms`);
    }
    nuxt2.hook("build:before", codegenGenerateTypings);
    nuxt2.hook("builder:watch", codegenGenerateTypings);
  }
}));

module.exports = index;
