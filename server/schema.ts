import { resolve } from "path";
import { makeSchema } from "nexus";
import * as types from "./types";

export const schema = makeSchema({
  types,
  outputs: {
    schema: resolve(process.cwd(), "server/generated/schema.graphql"),
  },
});
