import { useState, useEffect } from "react";
// Hooks
import { useLocalStorage } from "./useLocalStorage";

const useTheme = () => {
  const currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [theme, setTheme] = useLocalStorage<string>("data-theme", currentTheme);
  const [currentActiveTheme, setCurrentActiveTheme] = useState<string>(theme);
  const activeTheme = (theme: string) => {
    switch (theme) {
      case "christmas":
        return "christmas";
      case "winter":
        return "winter";
      case "dark":
        return "dark";
      case "light":
        return "light";
      default:
        return "light";
    }
  };

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
