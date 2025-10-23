import { z } from "zod";

const egyptianPhoneRegex = /^(01[0125][0-9]{8}|\+201[0125][0-9]{8})$/;

export const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (val) => !val || egyptianPhoneRegex.test(val),
      "Phone number must be a valid Egyptian number (e.g., 01012345678 or +201012345678)"
    ),
  guests: z.coerce.number().min(1, "At least one guest is required"),
  gatheringPlace: z.string().min(1, "Meeting point is required"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
