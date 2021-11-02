import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: ["@nuxt3-graphql/codegen", "@nuxt3-graphql/urql"],
  urql: {
    url: "https://rickandmortyapi.com/graphql/",
  },
});
