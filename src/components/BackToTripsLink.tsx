import Link from "next/link";

import { Translations } from "@/lib/i18n";

interface BackToTripsLinkProps {
  locale: string;
  t: Translations;
}

export function BackToTripsLink({ locale, t }: BackToTripsLinkProps) {
  const arrow = locale === "ar" ? "→" : "←";
  return (
    <div className="mb-8">
      <Link
        href={`/${locale}`}
        className="inline-flex items-center bg-primary text-secondary rounded-lg px-3 py-2 hover:bg-opacity-90 transition-colors"
      >
        <span className="mr-2">{arrow}</span>
        {t.back_to_all_trips}
      </Link>
    </div>
  );
}
