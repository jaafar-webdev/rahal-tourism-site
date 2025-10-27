import React from "react";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { BookingFormData } from "./schemas/booking-schema";

// استيراد النوع الصحيح
import { useTranslations } from "next-intl";

interface TripDetailsFormProps {
  t: ReturnType<typeof useTranslations>;
  meetingPoints: string[];
  register: UseFormRegister<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
}

const TripDetailsForm = ({
  t,
  meetingPoints,
  register,
  errors,
}: TripDetailsFormProps) => {
  const meetingPointOptions = meetingPoints.map((point) => ({
    value: point,
    label: point,
  }));

  return (
    <>
      <InputField
        label={t("guests")}
        id="guests"
        type="number"
        min="1"
        {...register("guests", { valueAsNumber: true })}
        error={errors.guests?.message}
      />
      <SelectField
        label={t("meeting_point")}
        id="meeting-point"
        options={meetingPointOptions}
        {...register("gatheringPlace")}
        error={errors.gatheringPlace?.message}
      />
    </>
  );
};

export default TripDetailsForm;
