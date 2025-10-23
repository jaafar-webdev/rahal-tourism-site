"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormData,
} from "@/features/Contact/schemas/contact-schema";
import { submitContactForm } from "@/app/[locale]/contact/contact-action";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import TextareaField from "@/components/form/TextareaField";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function ContactForm() {
  const t = useTranslations("contact");
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const issueTypes = [
    { value: "payment-issue", label: t("issueTypes.payment-issue") },
    { value: "booking-issue", label: t("issueTypes.booking-issue") },
    { value: "delivery-issue", label: t("issueTypes.delivery-issue") },
    { value: "lost-and-found", label: t("issueTypes.lost-and-found") },
    { value: "other", label: t("issueTypes.other") },
  ];

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitContactForm(data);
    if (!result.success) {
      console.error("An unexpected error occurred. Please try again.");
    } else {
      setFormStatus({ success: true, message: t("success.message") });
    }
  };

  if (formStatus?.success) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">{t("success.title")}</h2>
        <p className="mb-6">{formStatus.message}</p>
        <Link href="/" className="inline-block">
          <Button variant="outline">{t("success.backToHome")}</Button>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <SelectField
        label={t("issueType")}
        {...register("issueType")}
        options={issueTypes}
        error={errors.issueType?.message}
        required
      />
      <InputField
        label={t("email")}
        {...register("email")}
        type="email"
        error={errors.email?.message}
        required
      />
      <InputField
        label={t("phone")}
        {...register("phone")}
        type="tel"
        error={errors.phone?.message}
      />
      <TextareaField
        label={t("message")}
        {...register("message")}
        rows={6}
        error={errors.message?.message}
        required
      />
      <Button type="submit" disabled={isSubmitting} fullWidth>
        {isSubmitting ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
