import type { Ref } from "vue";
import type { Client } from "@urql/vue";

export type NuxtUrqlOptions = {
  url: string;
};

declare module "@nuxt/schema" {
  interface NuxtConfig {
    urql?: NuxtUrqlOptions;
  }
  interface NuxtOptions {
    urql?: NuxtUrqlOptions;
  }
}

// @ts-expect-error: #app resolved by Nuxt3
declare module "#app" {
  interface NuxtApp {
    $urql: Ref<Client>;
  }
}
