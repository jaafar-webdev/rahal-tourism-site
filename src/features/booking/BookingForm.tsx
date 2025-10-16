"use client";

import { Translations } from "@/lib/i18n";
import PersonalDetailsForm from "./PersonalDetailsForm";
import TripDetailsForm from "./TripDetailsForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, BookingFormData } from "./schemas/booking-schema";
import { useBookingStore } from "./store/booking-store";
import { useRouter } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "@/i18nConfig";
import Trip from "@/types/trip";
import { Button } from "@/components/ui/Button";

interface BookingFormProps {
  t: Translations;
  meetingPoints: string[];
  trip: Trip;
}

/**
 * The main booking form component that aggregates personal details, trip details, and payment information.
 * @param {BookingFormProps} props - The props for the component.
 */
export default function BookingForm({
  t,
  meetingPoints,
  trip,
}: BookingFormProps) {
  const router = useRouter();
  const locale = useCurrentLocale(i18nConfig);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      guests: 1,
      gatheringPlace: "",
    },
  });
  const { setBookingData, setTrip } = useBookingStore();

  const onSubmit = (data: BookingFormData) => {
    setBookingData(data);
    setTrip({
      title: trip.nameEn,
      price: trip.price.amount,
    });
    router.push(`/${locale}/payment`);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {t.book_your_trip}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PersonalDetailsForm t={t} register={register} errors={errors} />
        <TripDetailsForm
          t={t}
          meetingPoints={meetingPoints}
          register={register}
          errors={errors}
        />
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : t.confirm_booking}
        </Button>
      </form>
    </div>
  );
}
