import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslation from "../public/i18n/ar.json";
import enTranslation from "../public/i18n/en.json";
const resources = {
    en: {
        translation: enTranslation
    },
    ar: {
        translation: arTranslation
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
