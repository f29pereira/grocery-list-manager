import type { SupportedLanguages } from "@/types/common.types";

/**
 * Returns the language name and given locale code
 * @param localeCode locale code
 *
 * @example getFormattedLocale(en)
 * // English (EN)
 */
export const getFormattedLocale = (localeCode: SupportedLanguages) => {
  return `${getLocaleName(localeCode)} (${localeCode.toUpperCase()})`;
};

/**
 * Returns the language name by a given locale code
 * @param localeCode locale code
 */
export const getLocaleName = (localeCode: SupportedLanguages) => {
  switch (localeCode) {
    case "en":
      return "English";
    case "pt":
      return "Português";
  }
};
