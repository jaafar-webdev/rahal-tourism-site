import React from "react";
import InputField from "../../components/form/InputField";
import SelectField from "../../components/form/SelectField";
import { Translations } from "@/lib/i18n";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { BookingFormData } from "./schemas/booking-schema";

interface TripDetailsFormProps {
  t: Translations;
  meetingPoints: string[];
  register: UseFormRegister<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
}

/**
 * A form component for trip-specific details like number of guests and meeting point.
 * @param {TripDetailsFormProps} props - The props for the component.
 */
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
        label={t.guests}
        id="guests"
        type="number"
        min="1"
        {...register("guests", { valueAsNumber: true })}
        error={errors.guests?.message}
      />
      <SelectField
        label={t.meeting_point}
        id="meeting-point"
        options={meetingPointOptions}
        {...register("gatheringPlace")}
        error={errors.gatheringPlace?.message}
      />
    </>
  );
};

export default TripDetailsForm;
