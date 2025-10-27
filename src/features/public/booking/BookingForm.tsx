"use client";

import PersonalDetailsForm from "./PersonalDetailsForm";
import TripDetailsForm from "./TripDetailsForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingFormData, bookingSchema } from "./schemas/booking-schema";
import { useBookingStore } from "./store/booking-store";
import Trip from "@/types/trip";
import { Button } from "@/components/ui/Button";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface BookingFormProps {
  meetingPoints: string[];
  trip: Trip;
  locale: "ar" | "en";
}

export default function BookingForm({
  meetingPoints,
  trip,
  locale,
}: BookingFormProps) {
  const t = useTranslations();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });
  const { setBookingData, setTrip } = useBookingStore();

  const onSubmit = (data: BookingFormData) => {
    setBookingData(data);
    setTrip({
      title: locale === "ar" ? trip.nameAr : trip.nameEn,
      price: trip.price.amount,
    });
    router.push("/payment");
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {t("book_your_trip")}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PersonalDetailsForm register={register} errors={errors} t={t} />
        <TripDetailsForm
          meetingPoints={meetingPoints}
          register={register}
          errors={errors}
          t={t}
        />
        <Button type="submit" variant="primary" size="lg" fullWidth>
          {t("confirm_booking")}
        </Button>
      </form>
    </div>
  );
}
