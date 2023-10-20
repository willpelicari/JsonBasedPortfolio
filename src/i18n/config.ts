import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './en/translation.json'
import translationFr from './fr/translation.json'
import translationPt from './pt/translation.json'

export const RESOURCES = {
    en: {
        translation: translationEn,
    },
    fr: {
        translation: translationFr,
    },
    pt: {
        translation: translationPt,
    }
};

i18next.use(initReactI18next).init({
    lng: 'en',
    debug: false,
    resources: RESOURCES
});