import React from "react";
import InputField from "../../components/form/InputField";
import { Translations } from "@/lib/i18n";
import { useBookingStore } from "./store/booking-store";

interface PersonalDetailsFormProps {
  t: Translations;
}

/**
 * A form component for collecting personal details like name, email, and phone.
 * @param {PersonalDetailsFormProps} props - The props for the component.
 */

const PersonalDetailsForm = ({ t }: PersonalDetailsFormProps) => {
  const { name, email, phoneNumber, setName, setEmail, setPhoneNumber } =
    useBookingStore();

  return (
    <>
      <InputField
        label={t.name}
        id="name"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label={t.email}
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label={t.phone}
        id="phone"
        type="tel"
        required
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </>
  );
};

export default PersonalDetailsForm;
