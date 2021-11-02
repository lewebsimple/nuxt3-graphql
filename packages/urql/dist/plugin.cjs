'use strict';

const _app = require('#app');
const nuxtUrqlOptions = require('#build/urql.options.mjs');
const vue = require('@urql/vue');
const vue$1 = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const nuxtUrqlOptions__default = /*#__PURE__*/_interopDefaultLegacy(nuxtUrqlOptions);

const plugin = _app.defineNuxtPlugin((nuxt) => {
  const ssr = vue.ssrExchange({
    isClient: process.client
  });
  if (process.server) {
    nuxt.hook("app:rendered", () => {
      nuxt.payload.data["urql"] = ssr.extractData();
    });
  }
  if (process.client) {
    nuxt.hook("app:created", () => {
      ssr.restoreData(nuxt.payload.data["urql"]);
    });
  }
  const client = vue$1.ref(vue.createClient({
    url: nuxtUrqlOptions__default.url,
    exchanges: [vue.dedupExchange, ssr, vue.fetchExchange]
  }));
  nuxt.provide("urql", client);
  nuxt.vueApp.provide("$urql", client);
});

module.exports = plugin;
