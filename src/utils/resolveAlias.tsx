import { validAlias } from "../constants/aliases";

interface AliasColor {
  alias: string;
  bgColor: string;
}

const findAliasColor = (alias: string): AliasColor => {
  const foundAliasColor = validAlias[alias]
    ? { alias: alias, bgColor: validAlias[alias] }
    : { alias: "default", bgColor: validAlias["default"] };
  return foundAliasColor;
};

export { findAliasColor };
