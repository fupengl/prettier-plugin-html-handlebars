import type { Doc, AstPath, ParserOptions } from "prettier";

export type PrintFn = (path: AstPath) => Doc;

export default function print(
  path: AstPath,
  options: ParserOptions,
  print: PrintFn
): Doc {
  return "";
}
