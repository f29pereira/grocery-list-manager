import { useState, useEffect } from "react";
import type { ReactChildrenType } from "@/types/common.types";
import type { SupportedLanguages } from "./LanguageContext/LanguageContext.type";
import { LanguageContext } from "./LanguageContext/LanguageContext";
import {
  LOCALIZATION_LOCAL_STORAGE,
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from "@/constants/app.constants";
import { useTranslation } from "react-i18next";

/**
 * Type Guard function that checks if a given locale is valid
 */
const isLocaleValid = (locale: string | null): locale is SupportedLanguages => {
  return (
    typeof locale === "string" &&
    SUPPORTED_LANGUAGES.includes(locale as SupportedLanguages)
  );
};

/**
 * Returns the current app language
 *
 * If the current language is not supported returns DEFAULT_LANGUAGE = "en"
 */
const getAppLanguage = () => {
  const savedLanguage = localStorage.getItem(LOCALIZATION_LOCAL_STORAGE);

  if (isLocaleValid(savedLanguage)) {
    return savedLanguage;
  }

  const browserLangage = navigator.language.split("-")[0]; // e.g "en-us" to "en"

  if (isLocaleValid(browserLangage)) {
    return browserLangage;
  }

  return DEFAULT_LANGUAGE as SupportedLanguages;
};

/**
 * Provides the app language context
 */
export default function LanguageProvider({ children }: ReactChildrenType) {
  const [locale, setLocale] = useState<SupportedLanguages>(getAppLanguage);

  const { i18n } = useTranslation();

  /**
   * Adds new locale and updates localeStorage
   */
  useEffect(() => {
    document.documentElement.lang = locale; // Update lang from <html> element

    localStorage.setItem(LOCALIZATION_LOCAL_STORAGE, locale); // Update localStorage with new language

    if (i18n.language !== locale) {
      i18n.changeLanguage(locale); // Update i18n language
    }
  }, [locale, i18n]);

  return (
    <LanguageContext
      value={{ locale, setLocale, localesList: SUPPORTED_LANGUAGES }}
    >
      {children}
    </LanguageContext>
  );
}
