import { useBookingStore } from "@/features/public/booking/store/booking-store";
import { Button } from "@/components/ui/Button";
import BookingInformation from "./BookingInformation";
import TripInformation from "./TripInformation";
import { BookingSummaryData } from "../types";

interface BookingSummaryProps {
  onNext: () => void;
  t: (key: string) => string;
}

const BookingSummary = ({ onNext, t }: BookingSummaryProps) => {
  const { name, email, phoneNumber, guests, gatheringPlace, trip, totalPrice } =
    useBookingStore();

  const bookingData: BookingSummaryData = {
    name,
    email,
    phoneNumber,
    guests,
    gatheringPlace,
    trip,
  };

  const isFormValid =
    bookingData.name &&
    bookingData.email &&
    bookingData.phoneNumber &&
    bookingData.guests > 0 &&
    bookingData.trip.title &&
    bookingData.trip.price > 0 &&
    totalPrice > 0;

  return (
    <div className="space-y-6">
      <BookingInformation bookingData={bookingData} t={t} />
      <TripInformation trip={trip} totalPrice={totalPrice} t={t} />

      <div className="flex justify-end">
        <Button
          onClick={onNext}
          disabled={!isFormValid}
          variant="primary"
          size="lg"
        >
          {t("Next")}
        </Button>
      </div>
    </div>
  );
};

export default BookingSummary;
