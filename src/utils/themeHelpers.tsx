import React from "react";
import { themes } from "../constants/themes";

// Components
import {
  ThemeSunIcon,
  ThemeMoonIcon,
  ThemeSnowflakeIcon,
  ThemeSleighIcon,
  ThemeMugHotIcon,
  ThemeGhostIcon,
  ThemeDefaultIcon,
} from "../components/icons/ThemeIcons";

const activeTheme = (themeValue: string): string =>
  themes.find((theme) => theme.value === themeValue)?.value || "coffee";

// Mapeo entre los valores de los temas y los componentes de iconos
// Información debe verificarse con lo que se encuentra en src/constants/themes.tsx
const themeIcons: { [key: string]: JSX.Element } = {
  light: <ThemeSunIcon className={`h-6 w-6 inline-block`} />,
  coffee: <ThemeMugHotIcon className={`h-6 w-6 inline-block`} />,
  dark: <ThemeMoonIcon className={`h-6 w-6 inline-block`} />,
  halloween: <ThemeGhostIcon className={`h-6 w-6 inline-block`} />,
  winter: <ThemeSnowflakeIcon className={`h-6 w-6 inline-block`} />,
  christmas: <ThemeSleighIcon className={`h-6 w-6 inline-block`} />,
};

const getDefaultIcon = (props: { className: string }): JSX.Element => <ThemeDefaultIcon className={props.className} />;

const getThemeIcon = (key: string, props: { className: string }): JSX.Element =>
  themeIcons[key] ? React.cloneElement(themeIcons[key], props) : getDefaultIcon(props);

export { getThemeIcon, activeTheme };
