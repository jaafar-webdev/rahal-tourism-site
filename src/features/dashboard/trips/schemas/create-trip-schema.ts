import { z } from "zod";

export const CreateTripSchema = z.object({
  nameAr: z.string().min(1, "Arabic name is required"),
  nameEn: z.string().min(1, "English name is required"),
  durationAr: z.string().min(1, "Arabic duration is required"),
  durationEn: z.string().min(1, "English duration is required"),
  price: z.object({
    amount: z.coerce.number().min(1, "Price is required"),
    currency: z.enum(["EGP", "USD"]),
  }),
  accommodationAr: z.string().min(1, "Arabic accommodation is required"),
  accommodationEn: z.string().min(1, "English accommodation is required"),
  departureDate: z.string().min(1, "Departure date is required"),
  descriptionAr: z.string().min(1, "Arabic description is required"),
  descriptionEn: z.string().min(1, "English description is required"),
  imageUrl: z.string().min(1, "Image URL is required"),
  categoryId: z.string().min(1, "Category is required"),
});

export type CreateTripData = z.infer<typeof CreateTripSchema>;
