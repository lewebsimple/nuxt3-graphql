import { useBody, useQuery } from "h3";
import { IncomingMessage, ServerResponse } from "http";
import { makeCompileQuery } from "@benzene/core";
import { Benzene, makeHandler } from "@benzene/http";
import { contextFn, Context, Extra } from "../context";
import { schema } from "../schema";

const GQL = new Benzene<Context, Extra>({
  contextFn,
  compileQuery: makeCompileQuery(),
  schema,
});
const graphqlHTTP = makeHandler(GQL);

export default async (req: IncomingMessage, res: ServerResponse) => {
  const result = await graphqlHTTP(
    {
      method: req.method || "GET",
      headers: req.headers,
      body: await useBody(req),
      query: useQuery(req) as Record<string, string | string[]>,
    },
    { req },
  );
  res.writeHead(result.status, result.headers);
  res.end(JSON.stringify(result.payload));
};
