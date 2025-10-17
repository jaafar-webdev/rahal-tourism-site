import { useTranslations } from "next-intl";

// استخدام نوع الدالة مباشرة من next-intl
export type Translations = ReturnType<typeof useTranslations>;
