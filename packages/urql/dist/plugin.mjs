import { defineNuxtPlugin } from '#app';
import nuxtUrqlOptions from '#build/urql.options.mjs';
import { ssrExchange, createClient, dedupExchange, fetchExchange } from '@urql/vue';
import { ref } from 'vue';

const plugin = defineNuxtPlugin((nuxt) => {
  const ssr = ssrExchange({
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
  const client = ref(createClient({
    url: nuxtUrqlOptions.url,
    exchanges: [dedupExchange, ssr, fetchExchange]
  }));
  nuxt.provide("urql", client);
  nuxt.vueApp.provide("$urql", client);
});

export { plugin as default };
