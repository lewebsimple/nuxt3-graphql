import { resolve } from "path";
import { defineNuxtModule, addTemplate, addPlugin } from "@nuxt/kit";

export type NuxtUrqlOptions = {
  url: string;
};

export default defineNuxtModule<NuxtUrqlOptions>((nuxt) => ({
  name: "nuxt3-urql",
  configKey: "urql",
  defaults: {
    url: "http://localhost:3000/api/graphql",
  },
  async setup(options, nuxt) {
    addTemplate({
      filename: "urql.options.mjs",
      getContents: ({ utils }) => {
        const name = utils.importName(`urql_options_obj`);
        // prettier-ignore
        return `
          const ${name} = () => Promise.resolve(${JSON.stringify(options || {})})\n
          export default ${name}
        `;
      },
    });
    addPlugin({
      src: resolve(__dirname, "./plugin.ts"),
    });
  },
}));
