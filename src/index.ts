import {IStyleAPI, IStyleItem} from "import-sort-style";

import {sortersSequence} from "./sortersSequence";
import {nestingComparator} from "./nestingComparator";
import {moduleSorter} from "./moduleSorter";

export default function(styleApi: IStyleAPI): IStyleItem[] {
  const {
    isAbsoluteModule,
    member,
    unicode,
    isInstalledModule,
    always,
    startsWith,
    moduleName,
    name,
    and,
  } = styleApi;

  const defaultSorter = sortersSequence(moduleSorter(unicode), member(unicode));

  return [
    {
      match: and(isInstalledModule(__filename), moduleName(startsWith("react"))),
      sort: defaultSorter,
      sortNamedMembers: name(unicode),
    },
    {
      match: isInstalledModule(__filename),
      sort: defaultSorter,
      sortNamedMembers: name(unicode),
    },
    { separator: true },
    {
      match: isAbsoluteModule,
      sort: defaultSorter,
      sortNamedMembers: name(unicode),
    },
    { separator: true },
    {
      match: always,
      sort: sortersSequence(moduleSorter(nestingComparator), defaultSorter),
      sortNamedMembers: name(unicode),
    }
  ];
}
