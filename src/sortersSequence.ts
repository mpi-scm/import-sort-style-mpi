import {ISorterFunction} from 'import-sort-style';

export function sortersSequence(...sorters: ISorterFunction[]): ISorterFunction {
  return (a, b): number => {
    // eslint-disable-next-line no-restricted-syntax
    for (const sorter of sorters) {
      const result = sorter(a, b);

      if (result !== 0) {
        return result;
      }
    }
    return 0;
  }
}