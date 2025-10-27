import { z } from "zod";

const egyptianPhoneRegex = /^(01[0125][0-9]{8}|\+201[0125][0-9]{8})$/;

export const contactSchema = z.object({
  issueType: z.enum([
    "payment-issue",
    "booking-issue",
    "delivery-issue",
    "lost-and-found",
    "other",
  ]),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || egyptianPhoneRegex.test(val),
      "Phone number must be a valid Egyptian number (e.g., 01012345678 or +201012345678)"
    ),
  message: z.string().min(80, "Message must be at least 80 characters long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
