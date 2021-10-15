import { ContextFn } from "@benzene/core/dist/types";
import { IncomingMessage } from "http";

export type Context = {};

export type Extra = {
  req: IncomingMessage;
};

export const contextFn: ContextFn<Context, Extra> = ({ extra }) => {
  return {};
};
