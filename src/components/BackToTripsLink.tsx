import Link from "next/link";
import { useTranslations } from "next-intl";

interface BackToTripsLinkProps {
  locale: string;
}

export function BackToTripsLink({ locale }: BackToTripsLinkProps) {
  const t = useTranslations();
  const arrow = locale === "ar" ? "→" : "←";

  return (
    <div className="mb-8">
      <Link
        href={`/${locale}`}
        className="inline-flex items-center bg-primary text-secondary rounded-lg px-3 py-2 hover:bg-opacity-90 transition-colors"
      >
        <span className={locale === "ar" ? "ml-2" : "mr-2"}>{arrow}</span>
        {t("back_to_all_trips")}
      </Link>
    </div>
  );
}
