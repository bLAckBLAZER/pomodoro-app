import { useTheme } from "../contexts/ThemeContext";

export const getTheme = (theme) => {
  return theme === "dark" ? "dark" : "";
};
