"use client";

import { Translations } from "@/lib/i18n";
import PersonalDetailsForm from "./PersonalDetailsForm";
import TripDetailsForm from "./TripDetailsForm";
import PaymentMethodSelector from "./PaymentMethodSelector";
import { useBookingStore } from "./store/booking-store";

interface BookingFormProps {
  t: Translations;
  meetingPoints: string[];
}

/**
 * The main booking form component that aggregates personal details, trip details, and payment information.
 * @param {BookingFormProps} props - The props for the component.
 */
export default function BookingForm({ t, meetingPoints }: BookingFormProps) {
  const { name, email, phoneNumber, guests, gatheringPlace } =
    useBookingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking data from store:", {
      name,
      email,
      phoneNumber,
      guests,
      gatheringPlace,
    });
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {t.book_your_trip}
      </h2>
      <form onSubmit={handleSubmit}>
        <PersonalDetailsForm t={t} />
        <TripDetailsForm t={t} meetingPoints={meetingPoints} />
        <PaymentMethodSelector t={t} />
        <button
          type="submit"
          className="w-full bg-primary text-secondary font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors mt-6"
        >
          {t.confirm_booking}
        </button>
      </form>
    </div>
  );
}
