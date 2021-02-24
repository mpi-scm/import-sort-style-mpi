import {IStyleAPI, IStyleItem} from "import-sort-style";

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

  return [
    {
      match: and(isInstalledModule(__filename), moduleName(startsWith("react"))),
      sort: member(unicode),
      sortNamedMembers: name(unicode),
    },
    {
      match: isInstalledModule(__filename),
      sort: member(unicode),
      sortNamedMembers: name(unicode),
    },
    { separator: true },
    {
      match: isAbsoluteModule,
      sort: member(unicode),
      sortNamedMembers: name(unicode),
    },
    { separator: true },
    {
      match: always,
      sort: member(unicode),
      sortNamedMembers: name(unicode),
    }
  ];
}
