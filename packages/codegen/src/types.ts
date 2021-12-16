import type { Types } from "@graphql-codegen/plugin-helpers";

export type NuxtCodegenConfig = Types.Config & {};

type NuxtHookResult = Promise<void> | void;

declare module "@nuxt/schema" {
  interface NuxtHooks {
    "codegen:config": (config: NuxtCodegenConfig) => NuxtHookResult;
  }
}
