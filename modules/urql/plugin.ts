// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
import { defineNuxtPlugin } from "#app";
import type { NuxtUrqlOptions } from "./index";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
import optionsLoader from "#build/urql.options.mjs";

import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "@urql/vue";

export default defineNuxtPlugin(async (nuxtApp) => {
  const loadedOptions = (await optionsLoader()) as NuxtUrqlOptions;
  const { url } = loadedOptions;

  console.log(`urql URL : ${url}`);

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
    url,
    exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
  });

  nuxtApp.app.provide("$urql", client);
  nuxtApp.provide("$urql", client);
});
