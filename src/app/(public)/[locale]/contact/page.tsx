import { ContactForm } from "@/features/Contact/ContactForm";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{t("title")}</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">
          {t("description")}
        </p>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
