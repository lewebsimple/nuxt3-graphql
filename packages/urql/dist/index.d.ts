import * as _nuxt_kit from '@nuxt/kit';
import { Ref } from 'vue';
import { Client } from '@urql/vue';

declare type NuxtUrqlOptions = {
    url: string;
};
declare const _default: _nuxt_kit.LegacyNuxtModule;

declare module "@nuxt/types" {
    interface NuxtConfig {
        urql?: NuxtUrqlOptions;
    }
}
declare module "@nuxt/kit" {
    interface NuxtConfig {
        urql?: NuxtUrqlOptions;
    }
}
declare module "#app" {
    interface NuxtApp {
        $urql: Ref<Client>;
    }
}

export { NuxtUrqlOptions, _default as default };
