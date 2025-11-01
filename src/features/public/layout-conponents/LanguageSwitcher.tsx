"use client";
import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="">
      <Link
        href={pathname}
        locale="ar"
        className={`px-3 py-1 rounded-md mx-2 cursor-pointer ${
          locale === "ar"
            ? "bg-primary text-secondary font-bold"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        }`}
      >
        عربي
      </Link>
      <Link
        href={pathname}
        locale="en"
        className={`px-3 py-1 rounded-md cursor-pointer ${
          locale === "en"
            ? "bg-primary text-secondary font-bold"
            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        }`}
      >
        English
      </Link>
    </div>
  );
}
