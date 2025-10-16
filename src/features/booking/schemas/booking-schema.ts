import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  guests: z.coerce.number().min(1, "At least one guest is required"),
  gatheringPlace: z.string().min(1, "Meeting point is required"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
