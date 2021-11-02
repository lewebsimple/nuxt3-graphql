// @ts-expect-error #app resolved by Nuxt3
import { defineNuxtPlugin, NuxtApp } from "#app";
// @ts-expect-error #build resolved by Nuxt3
import nuxtUrqlOptions from "#build/urql.options.mjs";
import { createClient, ssrExchange, dedupExchange, fetchExchange } from "@urql/vue";
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

  // Instantiate urql client
  const client = ref(
    createClient({
      url: nuxtUrqlOptions.url,
      exchanges: [dedupExchange, ssr, fetchExchange],
    }),
  );

  // Provide urql client to Nuxt / vueApp
  nuxt.provide("urql", client);
  nuxt.vueApp.provide("$urql", client);
});
