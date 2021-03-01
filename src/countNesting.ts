export function countNesting(path: string): number {
  return Array.from(path.matchAll(/((?<=\.\/)|^)(\.\.)/g)).length;
}