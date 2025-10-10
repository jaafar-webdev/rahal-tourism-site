"use client";
import { createContext, useContext, ReactNode, useEffect } from "react";
import { useParams } from "next/navigation";
import { getTranslations } from "@/lib/i18n";

type Locale = "ar" | "en";
type Translations = ReturnType<typeof getTranslations>;

interface I18nContextType {
  t: Translations;
  locale: Locale;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  let locale: Locale = "ar";

  if (
    typeof params.locale === "string" &&
    ["ar", "en"].includes(params.locale)
  ) {
    locale = params.locale as Locale;
  } else {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale === "ar" || savedLocale === "en") {
      locale = savedLocale as Locale;
    }
  }

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = getTranslations(locale);

  return (
    <I18nContext.Provider value={{ t, locale }}>
      {children}
    </I18nContext.Provider>
  );
};
