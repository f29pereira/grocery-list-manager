import { useState, useEffect } from "react";
import type { Theme } from "./ThemeContext/ThemeContext.type";
import type { ReactChildrenType } from "@/types/common.types";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import { THEME_LOCAL_STORAGE } from "@/constants/app.constants";

/**
 * Type Guard function that checks if a given theme is valid
 */
const isThemeValid = (theme: string | null): theme is Theme => {
  const validThemes: Theme[] = ["light", "dark", "system"];

  return typeof theme === "string" && validThemes.includes(theme as Theme);
};

/**
 * Provides the app theme context
 */
export default function ThemeProvider({ children }: ReactChildrenType) {
  const savedTheme = localStorage.getItem(THEME_LOCAL_STORAGE);
  const defaultTheme: Theme = "system";

  const [theme, setTheme] = useState<Theme>(
    isThemeValid(savedTheme) ? savedTheme : defaultTheme,
  );

  /**
   * Adds new theme to the html element and updates localstorage
   */
  useEffect(() => {
    const root = window.document.documentElement; // <html> element

    root.classList.remove("light", "dark"); // remove any theme related class

    if (theme === "system") {
      const isSystemThemeDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const newTheme = isSystemThemeDark ? "dark" : "light";

      root.classList.add(newTheme); // theme added to the <html> element
    } else {
      root.classList.add(theme); // theme added to the <html> element
    }

    localStorage.setItem(THEME_LOCAL_STORAGE, theme); // Update localStorage with new theme
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
