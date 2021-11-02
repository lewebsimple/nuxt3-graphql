# nuxt3-graphql/urql

<a href="https://formidable.com/open-source/urql/docs/basics/vue/">@urql/vue</a> for Nuxt.js! ⚡️

## Features

- Basic Nuxt3 module for providing urql client
- Configurable URL in `nuxt.config.ts`
- SSR support with [ssrExchange](https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#the-ssr-exchange)

# Install

```bash
yarn add -D @nuxt3-graphql/urql @urql/vue graphql
# npm i -D @nuxt3-graphql/urql @urql/vue graphql
```

## Usage

Within your `nuxt.config.js` add the following.

```js
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    '@nuxt3-graphql/urql',
  ],
  urql: {
    url: 'https://rickandmortyapi.com/graphql/'
  }
})
```

Refer to the `@urql/vue` [documentation](https://formidable.com/open-source/urql/docs/basics/vue/) for more information.

## Roadmap

- [ ] Integration with [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [ ] Normalized caching with [Graphcache](https://formidable.com/open-source/urql/docs/graphcache/normalized-caching/)
- [ ] Better documentation and examples

## Credits

- Based on a project by [@bicouy0](https://github.com/bicouy0/nuxt3-urql)
- Nuxt module structure [nuxt3-supabase](https://github.com/wobsoriano/nuxt3-supabase)
