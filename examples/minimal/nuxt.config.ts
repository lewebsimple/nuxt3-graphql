import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: ["@nuxt3-graphql/urql", "@nuxt3-graphql/codegen"],
  urql: {
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/graphql` : "http://localhost:3000/api/graphql",
  },
});
