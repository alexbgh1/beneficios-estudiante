import { findAliasColor } from "../utils/resolveAlias";

const Alias = ({ alias }: { alias: string }) => {
  const dataAlias = findAliasColor(alias);
  return (
    <li className="px-2 py-1 text-xs text-gray-800 rounded-full" style={{ backgroundColor: dataAlias.bgColor }}>
      {dataAlias.alias}
    </li>
  );
};

export default Alias;
