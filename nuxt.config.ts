import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: ["nuxt-windicss", "./modules/codegen", "./modules/urql"],
  urql: {
    url: "http://localhost:3000/api/graphql",
  },
  windicss: {
    analyze: false,
  },
});
