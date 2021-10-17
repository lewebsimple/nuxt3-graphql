import { cacheExchange, createClient, dedupExchange, fetchExchange, provideClient, ssrExchange } from "@urql/vue";

export default defineNuxtPlugin((nuxtApp) => {
  const ssr = ssrExchange({
    isClient: process.client,
    initialState: process.client ? nuxtApp.payload["$urql"] : undefined,
  });

  if (process.server) {
    nuxtApp.hooks.hook("app:rendered", () => {
      nuxtApp.payload["$urql"] = ssr.extractData();
    });
  }

  const client = createClient({
    url: "http://localhost:3000/api/graphql",
    exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
  });

  nuxtApp.app.provide("$urql", client);
});
