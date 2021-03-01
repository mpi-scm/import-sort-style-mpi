import {IComparatorFunction, ISorterFunction} from "import-sort-style";

export function moduleSorter(comparator: IComparatorFunction): ISorterFunction {
  return (a, b): number => comparator(a.moduleName, b.moduleName);
}