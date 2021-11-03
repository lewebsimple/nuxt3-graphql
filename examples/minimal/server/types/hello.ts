import { extendType } from "nexus";

export const HelloQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("hello", {
      type: "String",
      resolve: () => `Hello Nexus!`,
    });
  },
});
