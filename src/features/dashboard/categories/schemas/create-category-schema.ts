import { z } from 'zod';

export const createCategorySchema = z.object({
  nameAr: z.string().min(3, 'Arabic name must be at least 3 characters long'),
  nameEn: z.string().min(3, 'English name must be at least 3 characters long'),
});

export type CreateCategorySchema = z.infer<typeof createCategorySchema>;
