# @nuxt3-graphql/codegen

[GraphQL Code Generator](https://www.graphql-code-generator.com/) for Nuxt.js! ⚡️

## Features

- Load codegen automatically from the root of your Nuxt3 project
- Generate code from your GraphQL schema and operations on every build and in dev mode 

# Install

```bash
yarn add -D @nuxt3-graphql/codegen @graphql-codegen/cli graphql
# npm i -D @nuxt3-graphql/codegen @graphql-codegen/cli graphql
```

## Usage

Within your `nuxt.config.js` add the following.

```js
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    '@nuxt3-graphql/codegen',
  ],
})
```

Refer to the GraphQL Code Generator [documentation](https://www.graphql-code-generator.com/docs/getting-started/index/) for more information.
