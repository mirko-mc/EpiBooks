import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const useTheme = (dark, light) => {
    if (theme === "dark") return dark;
    else return light;
  };
  const value = { theme, setTheme, useTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
