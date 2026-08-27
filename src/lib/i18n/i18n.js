import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import ptTranslation from "./locales/pt/translation.json";
import {
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
} from "@/constants/app.constants";

// the translations
const resources = {
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: DEFAULT_LANGUAGE, // en
  supportedLngs: SUPPORTED_LANGUAGES,
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
