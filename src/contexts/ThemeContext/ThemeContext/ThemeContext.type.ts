import type { Dispatch, SetStateAction } from "react";

/**
 * Type for the ThemeContext
 * @property currentTheme - theme state
 * @property setTheme     - theme state setter function
 */
export type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

/**
 * Type for the available app themes
 */
export type Theme = "light" | "dark" | "system";
