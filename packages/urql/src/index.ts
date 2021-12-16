import { defineNuxtModule, addPluginTemplate, addTemplate } from "@nuxt/kit";
import { dirname, resolve } from "pathe";
import { fileURLToPath } from "url";
import type { NuxtUrqlOptions } from "./types";

export * from "./types";

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
