import { getCategories, meetingPoints } from "@/lib/data/get-categories";
import { getTranslations } from "@/lib/i18n";
import { BackToTripsLink } from "@/components/BackToTripsLink";
import BookingForm from "@/components/BookingForm";
import { findTripBySlug } from "@/lib/hooks/useTrip";
import TripDetailsContent from "@/components/TripDetailsContent";
import { Translations } from "@/lib/i18n";

const TripNotFound = ({ t }: { t: Translations }) => (
  <div className="text-center py-12">
    {t.trip_not_found || "Trip not found"}
  </div>
);

export default async function TripDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = getTranslations(locale as "ar" | "en");
  const categories = await getCategories();
  const trip = findTripBySlug(categories, slug);

  if (!trip) {
    return <TripNotFound t={t} />;
  }

  return (
    <main className="container mx-auto p-4 md:p-8">
      <BackToTripsLink locale={locale} t={t} />
      <div className="grid md:grid-cols-2 gap-8">
        <TripDetailsContent trip={trip} t={t} />
        <BookingForm trip={trip} t={t} meetingPoints={meetingPoints} />
      </div>
    </main>
  );
}
