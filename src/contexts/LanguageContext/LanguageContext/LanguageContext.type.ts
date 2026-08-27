import type { Dispatch, SetStateAction } from "react";
import { SUPPORTED_LANGUAGES } from "@/constants/app.constants";

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

/**
 * Type for the supported app languages
 */
export type SupportedLanguages = (typeof SUPPORTED_LANGUAGES)[number];
