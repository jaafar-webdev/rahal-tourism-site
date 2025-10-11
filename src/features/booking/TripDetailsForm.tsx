import React from "react";
import InputField from "../../components/form/InputField";
import SelectField from "../../components/form/SelectField";
import { Translations } from "@/lib/i18n";

interface TripDetailsFormProps {
  t: Translations;
  meetingPoints: string[];
}

/**
 * A form component for trip-specific details like number of guests and meeting point.
 * @param {TripDetailsFormProps} props - The props for the component.
 */
const TripDetailsForm = ({ t, meetingPoints }: TripDetailsFormProps) => {
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
        defaultValue="2"
        required
      />
      <SelectField
        label={t.meeting_point}
        id="meeting-point"
        options={meetingPointOptions}
        required
      />
    </>
  );
};

export default TripDetailsForm;
