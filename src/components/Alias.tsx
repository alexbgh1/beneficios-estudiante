import { darkenColor, hexToRgb, styleColorRgb } from "../utils/color";
import { findAliasColor } from "../utils/resolveAlias";

const Alias = ({ alias }: { alias: string }) => {
  const dataAlias = findAliasColor(alias);
  const backgroundColor = dataAlias.bgColor;
  const borderColor = darkenColor(hexToRgb(dataAlias.bgColor), 0.8);
  console.log(borderColor);
  return (
    <li
      className="px-2 py-1 border text-xs border-gray-300 text-white rounded-full shadow-sm"
      style={{ backgroundColor, borderColor: styleColorRgb(borderColor) }}
    >
      {dataAlias.alias}
    </li>
  );
};

export default Alias;
