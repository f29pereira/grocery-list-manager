import { ThemeContext } from "./ThemeContext/ThemeContext";
import { useContext } from "react";

/**
 * Custom Hook: allows access to the ThemeContext
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
