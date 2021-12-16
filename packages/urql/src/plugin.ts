// @ts-expect-error #app resolved by Nuxt3
import { defineNuxtPlugin, NuxtApp } from "#app";
// @ts-expect-error #build resolved by Nuxt3
import nuxtUrqlOptions from "#build/urql.options.mjs";
import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange as defaultCacheEchange,
  fetchExchange,
} from "@urql/vue";
import { devtoolsExchange } from "@urql/devtools";
import { cacheExchange as normalizedCacheExchange } from "@urql/exchange-graphcache";
import { ref } from "vue";

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  // SSR exchange
  const ssr = ssrExchange({
    isClient: process.client,
  });

  // Extract SSR payload once app is rendered
  if (process.server) {
    nuxt.hook("app:rendered", () => {
      nuxt.payload.data["urql"] = ssr.extractData();
    });
  }

  // Restore SSR payload once app is created
  if (process.client) {
    nuxt.hook("app:created", () => {
      ssr.restoreData(nuxt.payload.data["urql"]);
    });
  }

  // Determine caching strategy
  const cacheExchange = defaultCacheEchange;
  // TODO: Load generated/urql-introspection.json somehow
  // cacheExchange = normalizedCacheExchange();

  // Instantiate urql client
  const client = ref(
    createClient({
      url: nuxtUrqlOptions.url,
      exchanges: [devtoolsExchange, dedupExchange, ssr, cacheExchange, fetchExchange],
    }),
  );

  // Provide urql client to Nuxt / vueApp
  nuxt.provide("urql", client);
  nuxt.vueApp.provide("$urql", client);
});
