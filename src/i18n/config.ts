import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


// Resources must follow template's format
export const RESOURCES = {
    en: {
        translation: "portfolio-en.json",
    }
};

i18next
    .use(initReactI18next).init({
        lng: 'en',
        debug: false,
        resources: RESOURCES,
        fallbackLng: 'en'
    });