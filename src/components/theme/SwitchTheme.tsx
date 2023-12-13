import { useState, cloneElement } from "react";
// Hooks
import { useTheme } from "../../hooks/useTheme";
// Components
import SwitchMenu from "./SwitchMenu";
// Constants
import { themeIconsWithDefault } from "../../constants/themes";

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
        {cloneElement(themeIconsWithDefault(currentActiveTheme), {
          /* props adicionales aquí */
          className: "h-6 w-6 inline-block fill-accent",
        })}
      </button>
      <SwitchMenu menu={menu} handleChangeTheme={handleChangeTheme} currentActiveTheme={currentActiveTheme} />
    </div>
  );
};

export default SwitchTheme;
