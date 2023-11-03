import { createContext } from "react";

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
});

ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
