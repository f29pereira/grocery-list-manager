import { LanguageContext } from "./LanguageContext/LanguageContext";
import { useContext } from "react";

/**
 * Custom Hook: allows access to the LanguageContext
 */
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
