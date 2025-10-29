import { getCategories } from "@/lib/data/get-categories";
import { BackToTripsLink } from "@/components/BackToTripsLink";
import { findTripBySlug } from "@/lib/hooks/useTrip";
import TripDetailsContent from "@/features/public/trip-details/TripDetailsContent";
import { notFound } from "next/navigation";
import BookingForm from "@/features/public/booking/BookingForm";
import { meetingPoints } from "@/lib/data/constant";

export default async function TripDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const validLocale = locale as "ar" | "en";

  const categories = await getCategories();
  const trip = findTripBySlug(categories, slug);

  if (!trip) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4 md:p-8">
      <BackToTripsLink locale={validLocale} />
      <div className="grid md:grid-cols-2 gap-8">
        <TripDetailsContent trip={trip} />
        <BookingForm
          meetingPoints={meetingPoints}
          trip={trip}
          locale={validLocale}
        />
      </div>
    </main>
  );
}
