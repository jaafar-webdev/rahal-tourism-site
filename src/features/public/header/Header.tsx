import { getTranslations } from "next-intl/server";

export default async function Header() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col justify-center items-center mt-3">
      <h1 className="text-2xl md:text-4xl font-bold text-primary mb-12">
        {t("welcome")}
      </h1>
    </div>
  );
}
