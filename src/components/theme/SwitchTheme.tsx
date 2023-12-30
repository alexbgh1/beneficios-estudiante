import { useState } from "react";
// Hooks
import { useTheme } from "../../hooks/useTheme";
// Components
import SwitchMenu from "./SwitchMenu";
// Constants
import { getThemeIcon } from "../../utils/themeHelpers";

const SwitchTheme = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const { handleChangeTheme, currentActiveTheme } = useTheme();

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="block p-1.5 rounded-full hover:bg-accent/25 transition duration-150 ease-in-out"
      >
        {getThemeIcon(currentActiveTheme, { className: "h-6 w-6 inline-block fill-accent" })}
        <span className="sr-only">Switch Theme</span>
      </button>
      <SwitchMenu menu={menu} handleChangeTheme={handleChangeTheme} currentActiveTheme={currentActiveTheme} />
    </div>
  );
};

export default SwitchTheme;
