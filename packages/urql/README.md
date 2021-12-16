# @nuxt3-graphql/urql

[@urql/vue](https://formidable.com/open-source/urql/docs/basics/vue/) for Nuxt.js! ⚡️

## Features

- Provide urql client to your application
- Configurable URL in `nuxt.config.ts`
- SSR support with [ssrExchange](https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#the-ssr-exchange)

# Install

```bash
yarn add -D @nuxt3-graphql/urql @urql/vue graphql
# npm i -D @nuxt3-graphql/urql @urql/vue graphql
```

## Usage

Within your `nuxt.config.js` add the following:

```js
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: [
    "@nuxt3-graphql/urql",
  ],
  urql: {
    url: "https://rickandmortyapi.com/graphql/"
  },
});
```

Refer to the `@urql/vue` [documentation](https://formidable.com/open-source/urql/docs/basics/vue/) for more information.

## Typescript

For Nuxt config typescript support, add the following to `tsconfig.json`:

```json

{
  "compilerOptions": {
    "types": [
      "@nuxt3-graphql/urql"
    ]
  }
}
```

## Roadmap

- [ ] Integration with [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [ ] Normalized caching with [Graphcache](https://formidable.com/open-source/urql/docs/graphcache/normalized-caching/)
