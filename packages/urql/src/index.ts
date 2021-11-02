import { dirname, resolve } from "pathe";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPluginTemplate, addTemplate } from "@nuxt/kit";
import type { Ref } from "vue";
import type { Client } from "@urql/vue";

export type NuxtUrqlOptions = {
  url: string;
};

export default defineNuxtModule<NuxtUrqlOptions>((nuxt) => ({
  name: "urql",
  configKey: "urql",
  setup(options: NuxtUrqlOptions) {
    const __dirname__ = dirname(fileURLToPath(import.meta.url));

    addTemplate({
      filename: "urql.options.mjs",
      getContents: () => "export default " + JSON.stringify(options),
    });

    addPluginTemplate({
      src: resolve(__dirname__, "./plugin.mjs"),
    });

    nuxt.options.build.transpile.push("@urql/vue");
  },
}));

declare module "@nuxt/types" {
  export interface NuxtConfig {
    urql?: NuxtUrqlOptions;
  }
}

declare module "@nuxt/kit" {
  export interface NuxtConfig {
    urql?: NuxtUrqlOptions;
  }
}

// @ts-expect-error: #app resolved by Nuxt3
declare module "#app" {
  interface NuxtApp {
    $urql: Ref<Client>;
  }
}
