"use client";
import { useI18n } from "@/app/context/I18nProvider";

export const useLocalizedField = (ar: string, en: string): string => {
  const { locale } = useI18n();
  return locale === "ar" ? ar : en;
};