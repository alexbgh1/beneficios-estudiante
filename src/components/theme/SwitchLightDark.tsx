import { useState } from "react";
// import { useTheme } from "../hooks/useTheme";
import { ThemeSleighIcon } from "../icons";

const SwitchLightDark = () => {
  // const { theme, handleChangeTheme } = useTheme();
  const [menu, setMenu] = useState<boolean>(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  // Custom Switch
  return (
    <div>
      <button onClick={handleClick}>Apretar botón</button>
      <SwitchMenu menu={menu} />
    </div>
  );
};

const SwitchMenu = ({ menu }: { menu: boolean }) => {
  return (
    <ul
      className={`mt-2 bg-white absolute z-50 top-full right-0 w-36 py-1 rounded-md shadow-sm border border-gray-200 text-gray-800 transition duration-150 ease-in-out fadeIn ${
        menu ? "hidden" : ""
      }`}
    >
      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Light</li>
      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Dark</li>
      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
        <ThemeSleighIcon className="h-5 w-5 inline-block mr-2" />
        Winter
      </li>
    </ul>
  );
};

export default SwitchLightDark;
