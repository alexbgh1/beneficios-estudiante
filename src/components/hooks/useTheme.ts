import { useLocalStorage } from "./useLocalStorage";

const useTheme = () => {
  const currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [theme, setTheme] = useLocalStorage("data-theme", currentTheme);

  const handleChangeTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  return { theme, handleChangeTheme };
};
export { useTheme };
