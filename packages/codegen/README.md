# @nuxt3-graphql/codegen

[GraphQL Code Generator](https://www.graphql-code-generator.com/) for Nuxt.js! ⚡️

## Features

- Load your codegen config file from the root of your Nuxt3 project
- Generate code from your GraphQL schema and operations on every build and in dev mode

# Install

```bash
yarn add -D @nuxt3-graphql/codegen @graphql-codegen/cli graphql
# npm i -D @nuxt3-graphql/codegen @graphql-codegen/cli graphql
```

Create a [condegen config file](https://www.graphql-code-generator.com/docs/getting-started/codegen-config) either manually or with the wizard:

```bash
yarn graphql-codegen init
```

## Usage

Within your `nuxt.config.js` add the following:

```js
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: [
    "@nuxt3-graphql/codegen",
  ],
  codegen: {
    // Specify and/or override graphql-codegen configuration if needed
  },
});
```

This will automativally generate the GraphQL code based on your codegen config file each time Nuxt builds your project (this also works in dev mode).

Refer to the GraphQL Code Generator [documentation](https://www.graphql-code-generator.com/docs/getting-started/index/) for more information.

## Typescript

For Nuxt config typescript support, add the following to `tsconfig.json`:

```json

{
  "compilerOptions": {
    "types": [
      "@nuxt3-graphql/codegen"
    ]
  }
}
```