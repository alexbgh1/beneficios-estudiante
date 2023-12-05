// Components
import { ThemeSunIcon, ThemeMoonIcon, ThemeSnowflakeIcon, ThemeSleighIcon } from "../components/icons";
const themes = [
  {
    id: 1,
    name: "Light",
    value: "light",
  },
  // {
  //   id: 2,
  //   name: "Dark",
  //   value: "dark",
  // },
  {
    id: 3,
    name: "Winter",
    value: "winter",
  },
  {
    id: 4,
    name: "Christmas",
    value: "christmas",
  },
];

// Mapeo entre los valores de los temas y los componentes de iconos
const themeIcons: { [key: string]: JSX.Element } = {
  light: <ThemeSunIcon className={`h-6 w-6 inline-block`} />,
  dark: <ThemeMoonIcon className={`h-6 w-6 inline-block`} />,
  winter: <ThemeSnowflakeIcon className={`h-6 w-6 inline-block`} />,
  christmas: <ThemeSleighIcon className={`h-6 w-6 inline-block`} />,
};

export { themes, themeIcons };
