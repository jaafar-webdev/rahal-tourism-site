import React from "react";
import InputField from "../../components/form/InputField";
import { Translations } from "@/lib/i18n";

interface PersonalDetailsFormProps {
  t: Translations;
}

/**
 * A form component for collecting personal details like name, email, and phone.
 * @param {PersonalDetailsFormProps} props - The props for the component.
 */
const PersonalDetailsForm = ({ t }: PersonalDetailsFormProps) => {
  return (
    <>
      <InputField label={t.name} id="name" type="text" required />
      <InputField label={t.email} id="email" type="email" required />
      <InputField label={t.phone} id="phone" type="tel" required />
    </>
  );
};

export default PersonalDetailsForm;
