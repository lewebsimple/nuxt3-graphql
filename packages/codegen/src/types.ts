import type { Types } from "@graphql-codegen/plugin-helpers";

export type NuxtCodegenConfig = Types.Config & {};

type NuxtHookResult = Promise<void> | void;

declare module "@nuxt/schema" {
  interface NuxtConfig {
    codegen?: NuxtCodegenConfig;
  }
  interface NuxtOptions {
    codegen?: NuxtCodegenConfig;
  }
  interface NuxtHooks {
    "codegen:config": (config: NuxtCodegenConfig) => NuxtHookResult;
  }
}
