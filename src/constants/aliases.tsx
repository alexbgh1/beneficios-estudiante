import { Hex } from "../types/color.d.type";

const validAlias: { [key: string]: Hex } = {
  programming: "#ec660b",
  design: "#f14b78",
  office: "#7274e9",
  other: "#ff6753",
  cloud: "#0087FF",
  default: "#000000",
};

const validAliasAsArray: string[] = Object.keys(validAlias);

export { validAlias, validAliasAsArray };
