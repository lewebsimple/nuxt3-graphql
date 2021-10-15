import { extendType } from "nexus";

export const HelloQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("hello", {
      type: "String",
      resolve: () => `Hello Nexus`,
    });
  },
});
