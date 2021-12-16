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

    // Generate operations and introspection if @nuxt3-graphql/codegen is used
    if (nuxt.options.buildModules.includes("@nuxt3-graphql/codegen")) {
      // @ts-expect-error Hook only present when @nuxt3-graphql/codegen types are included
      nuxt.hook("codegen:config", (config) => {
        config.generates["composables/urql-operations.ts"] = {
          config: {
            documentMode: "documentNode",
          },
          plugins: ["typescript", "typescript-operations", "typescript-vue-urql"],
        };
        config.generates["generated/urql-introspection.json"] = {
          plugins: ["urql-introspection"],
        };
      });
    }
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
