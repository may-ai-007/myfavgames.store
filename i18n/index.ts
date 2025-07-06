import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './zh.json';
import en from './en.json';

const getDefaultLang = () => {
  const lang = navigator.language || navigator.languages[0] || 'en';
  if (lang.startsWith('zh')) return 'zh';
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
    },
    lng: getDefaultLang(),
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;