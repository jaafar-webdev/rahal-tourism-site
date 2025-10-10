"use client";
import { useRouter } from "next/navigation";
import { useI18n } from "@/app/context/I18nProvider";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = useI18n();
  const [currentLocale, setCurrentLocale] = useState<"ar" | "en">("ar");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentLocale(locale);
  }, [locale]);

  const switchLanguage = (newLocale: "ar" | "en") => {
    if (!isMounted) return;

    try {
      localStorage.setItem("locale", newLocale);
      const currentPath = window.location.pathname;
      const pathWithoutLocale = currentPath.replace(/^\/(ar|en)/, "") || "/";
      const normalizedPath = pathWithoutLocale.startsWith("/")
        ? pathWithoutLocale
        : `/${pathWithoutLocale}`;

      router.push(`/${newLocale}${normalizedPath}`);

      router.refresh();
    } catch (error) {
      console.error("Error switching language:", error);
    }
  };

  if (!isMounted) {
    return (
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-12 h-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="">
      <button
        onClick={() => switchLanguage("ar")}
        className={`px-3 py-1 rounded-md mx-2 cursor-pointer ${
          currentLocale === "ar"
            ? "bg-primary text-secondary font-bold"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        }`}
      >
        عربي
      </button>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 rounded-md cursor-pointer ${
          currentLocale === "en"
            ? "bg-primary text-secondary font-bold"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        }`}
      >
        English
      </button>
    </div>
  );
}
