import { getTranslations } from "@/lib/i18n";

export default async function Header({
   params,
}: {
   params: Promise<{ locale: string }>;
}) {
   const { locale } = await params;
   const t = getTranslations(locale as "ar" | "en");

   return (
      <div className="flex flex-col justify-center items-center mt-3">
         <h1 className="text-2xl md:text-4xl font-bold text-primary mb-12">{t.welcome}</h1>
      </div>
   );
}
   