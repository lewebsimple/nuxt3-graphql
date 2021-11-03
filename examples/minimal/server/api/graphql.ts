import { IncomingMessage, ServerResponse } from "http";
import { useBody, useQuery } from "h3";
import { envelop, useSchema } from "@envelop/core";
import { schema } from "../schema";

const getEnveloped = envelop({
  plugins: [useSchema(schema)],
});

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { parse, validate, contextFactory, execute, schema } = getEnveloped({ req });

  // Parse query / variables from incoming request
  const { query, variables } = req.method === "GET" ? useQuery(req) : await useBody(req);
  const document = parse(query);

  // Validate GraphQL document against schema
  const validationErrors = validate(schema, document);
  if (validationErrors.length > 0) {
    return { errors: validationErrors };
  }

  // Return result from execution
  const context = await contextFactory();
  const result = await execute({
    document,
    schema,
    variableValues: variables,
    contextValue: context,
  });

  return result;
};
