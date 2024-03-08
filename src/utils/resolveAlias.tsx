import { Hex } from "../types/color.d.type";
import { validAlias } from "../constants/aliases";

interface AliasColor {
  alias: string;
  bgColor: Hex;
}

const findAliasColor = (alias: string): AliasColor => {
  const foundAliasColor = validAlias[alias]
    ? { alias: alias, bgColor: validAlias[alias] }
    : { alias: "default", bgColor: validAlias["default"] };
  return foundAliasColor;
};

export { findAliasColor };
