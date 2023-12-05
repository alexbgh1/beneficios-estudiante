import { cloneElement } from "react";
// Constants
import { themes, themeIcons } from "../../constants/themes";

const SwitchMenu = ({
  menu,
  handleChangeTheme,
  currentActiveTheme,
}: {
  menu: boolean;
  handleChangeTheme: (theme: string) => void;
  currentActiveTheme: string;
}) => {
  return (
    <ul
      className={`mt-3 bg-white absolute z-50 top-full right-0 w-36 py-1 rounded-md shadow-sm border border-gray-200 text-gray-800 transition duration-150 ease-in-out fadeIn ${
        menu ? "" : "hidden"
      }`}
    >
      {themes.map((theme) => (
        <li key={theme.id} className={`${currentActiveTheme === theme.value ? "text-primary" : ""}  `}>
          <button
            className="flex flext-start items-center gap-3 w-full px-4 py-2 hover:bg-accent cursor-pointer"
            onClick={() => handleChangeTheme(theme.value)}
          >
            {theme.value &&
              cloneElement(themeIcons[theme.value], {
                /* props adicionales aquí */
                className: `${
                  currentActiveTheme === theme.value
                    ? "h-5 w-5 inline-block text-white fill-primary"
                    : "h-5 w-5 inline-block"
                }`,
              })}
            {theme.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SwitchMenu;
