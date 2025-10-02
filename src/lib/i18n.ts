import ar from "../../locales/ar.json";
import en from "../../locales/en.json";

const dictionaries = {
   en,
   ar,
} as const;

export const getTranslations = (locale: keyof typeof dictionaries) => {
   return dictionaries[locale];
};
