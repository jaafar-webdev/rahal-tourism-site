"use server";

import { contactSchema } from "@/features/Contact/schemas/contact-schema";

export async function submitContactForm(data: unknown) {
  const parsedData = contactSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      errors: parsedData.error.flatten().fieldErrors,
    };
  }

  console.log("Contact form data:", parsedData.data);

  return {
    success: true,
    message: "Your message has been sent successfully!",
  };
}
