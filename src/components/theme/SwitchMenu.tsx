import { cloneElement } from "react";
// Constants
import { themes, themeIconsWithDefault } from "../../constants/themes";

const SwitchMenu = ({
  menu,
  handleChangeTheme,
  currentActiveTheme,
}: {
  menu: boolean;
  handleChangeTheme: (theme: string) => void;
  currentActiveTheme: string;
}) => {
  console.log(themes[0].value);
  return (
    <ul
      className={`mt-3 bg-secondary absolute z-50 top-full right-0 w-36 py-1 rounded-md shadow-sm border border-accent/50 text-gray-800 transition duration-150 ease-in-out fadeIn ${
        menu ? "" : "hidden"
      }`}
    >
      {themes.map((theme) => (
        <li key={theme.id} className={`${currentActiveTheme === theme.value ? "text-primary" : ""}`}>
          <button
            className=" text-accent/75 flex flext-start items-center gap-3 w-full px-4 py-2 hover:bg-accent/25 cursor-pointer"
            onClick={() => handleChangeTheme(theme.value)}
          >
            {cloneElement(themeIconsWithDefault(theme.value), {
              /* props adicionales aquí */
              className: `${
                currentActiveTheme === theme.value
                  ? "h-5 w-5 inline-block fill-accent"
                  : "h-5 w-5 inline-block fill-accent/60"
              }`,
            })}
            <span className={`text-sm ${currentActiveTheme === theme.value ? "text-accent" : ""}`}>{theme.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SwitchMenu;
