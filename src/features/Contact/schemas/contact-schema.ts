import { z } from 'zod';

export const contactSchema = z.object({
  issueType: z.enum([
    'payment-issue',
    'booking-issue',
    'delivery-issue',
    'lost-and-found',
    'other',
  ]),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
