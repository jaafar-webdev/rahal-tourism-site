import { getCategories, meetingPoints } from "@/lib/data/get-categories";
import { BackToTripsLink } from "@/components/BackToTripsLink";
import { findTripBySlug } from "@/lib/hooks/useTrip";
import TripDetailsContent from "@/features/trip-details/TripDetailsContent";
import BookingForm from "@/features/booking/BookingForm";

const TripNotFound = () => {
  return <div className="text-center py-12">Trip not found</div>;
};

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
    return <TripNotFound />;
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
