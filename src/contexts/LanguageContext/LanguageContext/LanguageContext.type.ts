import type { Dispatch, SetStateAction } from "react";
import type { SupportedLanguages } from "@/types/common.types";

/**
 * Type for the LanguageContext
 * @property currentTheme - locale state
 * @property setTheme     - locale state setter function
 * @property localesList  - (readonly) list of supported locales
 */
export type LanguageContextType = {
  locale: SupportedLanguages;
  setLocale: Dispatch<SetStateAction<SupportedLanguages>>;
  localesList: readonly SupportedLanguages[];
};
