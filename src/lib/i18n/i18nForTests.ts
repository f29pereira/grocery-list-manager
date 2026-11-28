import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  ns: ["translation"],
  defaultNS: "translation",
  debug: false,
  interpolation: {
    // React escapes what it renders; escape t() output yourself
    // before dangerouslySetInnerHTML
    escapeValue: false,
  },
  resources: { en: { translation } },
});

export default i18n;
