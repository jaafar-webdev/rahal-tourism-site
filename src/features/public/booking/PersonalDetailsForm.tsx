import React from "react";
import InputField from "@/components/form/InputField";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { BookingFormData } from "./schemas/booking-schema";
import { useTranslations } from "next-intl";

interface PersonalDetailsFormProps {
  t: ReturnType<typeof useTranslations>;
  register: UseFormRegister<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
}

const PersonalDetailsForm = ({
  t,
  register,
  errors,
}: PersonalDetailsFormProps) => {
  return (
    <>
      <InputField
        label={t("name")}
        id="name"
        type="text"
        {...register("name")}
        error={errors.name?.message}
      />
      <InputField
        label={t("email")}
        id="email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <InputField
        label={t("phone")}
        id="phone"
        type="tel"
        {...register("phoneNumber")}
        error={errors.phoneNumber?.message}
      />
    </>
  );
};

export default PersonalDetailsForm;
