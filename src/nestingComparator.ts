import {countNesting} from "./countNesting";

export function nestingComparator(a: string, b: string): number {
  const al = countNesting(a);
  const bl = countNesting(b);

  if (al > bl) return -1
  if (al < bl) return 1
  return 0
}