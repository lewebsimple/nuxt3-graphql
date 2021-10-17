import { cacheExchange, createClient, dedupExchange, fetchExchange } from "@urql/vue";

export default defineNuxtPlugin((nuxtApp) => {
  const client = createClient({
    url: "http://localhost:3000/api/graphql",
    exchanges: [dedupExchange, cacheExchange, fetchExchange],
  });

  nuxtApp.app.provide("$urql", client);
});
