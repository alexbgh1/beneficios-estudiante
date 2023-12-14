import { useState, useEffect } from "react";
// Hooks
import { useLocalStorage } from "./useLocalStorage";
import { activeTheme } from "../utils/themeHelpers";

const useTheme = () => {
  const currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "coffee";
  const [theme, setTheme] = useLocalStorage<string>("data-theme", currentTheme);
  const [currentActiveTheme, setCurrentActiveTheme] = useState<string>(theme);

  useEffect(() => {
    setCurrentActiveTheme(activeTheme(theme));
  }, [theme]);

  useEffect(() => {
    const html = document.querySelector("html");
    html?.setAttribute("data-theme", theme);
  }, [theme]);

  const handleChangeTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  return { theme, handleChangeTheme, currentActiveTheme };
};
export { useTheme };
