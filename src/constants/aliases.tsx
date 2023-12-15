const validAlias: { [key: string]: string } = {
  programming: "#ffd840",
  design: "#ff9fb9",
  office: "#8ac8ff",
  other: "#ff6753",
  cloud: "#5ba5ff",
  default: "#fff",
};

const validAliasAsArray: string[] = Object.keys(validAlias);

export { validAlias, validAliasAsArray };
