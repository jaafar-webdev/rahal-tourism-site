"use client";

import Trip from "@/types/trip";
import { Translations } from "@/lib/i18n";
import PersonalDetailsForm from "./PersonalDetailsForm";
import TripDetailsForm from "./TripDetailsForm";
import PaymentMethodSelector from "./PaymentMethodSelector";
import PaymentForm from "@/components/PaymentForm";

interface BookingFormProps {
  trip: Trip;
  t: Translations;
  meetingPoints: string[];
}

/**
 * The main booking form component that aggregates personal details, trip details, and payment information.
 * @param {BookingFormProps} props - The props for the component.
 */
export default function BookingForm({
  trip,
  t,
  meetingPoints,
}: BookingFormProps) {
  const fullPrice = `${trip.price.amount} ${trip.price.currency}`;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {t.book_your_trip}
      </h2>
      <form>
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
      <PaymentForm price={fullPrice} />
    </div>
  );
}
