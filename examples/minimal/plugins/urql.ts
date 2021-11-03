import { defineNuxtPlugin, NuxtApp } from "#app";
import { createClient, ssrExchange, dedupExchange, fetchExchange } from "@urql/vue";
import { cacheExchange } from "@urql/exchange-graphcache";
import schema from "~/generated/introspection";
import { ref } from "vue";

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  // Cache exchange
  const cache = cacheExchange({ schema });

  // SSR exchange
  const ssr = ssrExchange({
    isClient: process.client,
  });

  // Extract SSR payload once app is rendered
  if (process.server) {
    nuxt.hook("app:rendered", () => {
      nuxt.payload.data && (nuxt.payload.data["urql"] = ssr.extractData());
    });
  }

  // Restore SSR payload once app is created
  if (process.client) {
    nuxt.hook("app:created", () => {
      nuxt.payload.data && ssr.restoreData(nuxt.payload.data["urql"]);
    });
  }

  // Instantiate urql client
  const client = ref(
    createClient({
      url: process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/api/graphql`
        : "http://localhost:3000/api/graphql",
      exchanges: [dedupExchange, cache, ssr, fetchExchange],
    }),
  );

  // Provide urql client to Nuxt / vueApp
  nuxt.provide("urql", client);
  nuxt.vueApp.provide("$urql", client);
});
