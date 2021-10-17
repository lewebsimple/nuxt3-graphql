import { defineNuxtConfig } from "nuxt3";
import nuxtCodegen from "./modules/codegen";

export default defineNuxtConfig({
  buildModules: [nuxtCodegen, "nuxt-windicss"],
});
