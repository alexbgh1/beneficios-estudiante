import { useState, cloneElement } from "react";
// Hooks
import { useTheme } from "../../hooks/useTheme";
// Components
import SwitchMenu from "./SwitchMenu";
// Constants
import { themeIcons } from "../../constants/themes";

const SwitchTheme = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const { handleChangeTheme, currentActiveTheme } = useTheme();

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {cloneElement(themeIcons[currentActiveTheme], {
          /* props adicionales aquí */
          className: "h-6 w-6 inline-block fill-accent",
        })}
      </button>
      <SwitchMenu menu={menu} handleChangeTheme={handleChangeTheme} currentActiveTheme={currentActiveTheme} />
    </div>
  );
};

export default SwitchTheme;