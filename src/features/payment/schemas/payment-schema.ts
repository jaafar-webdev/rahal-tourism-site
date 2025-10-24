import { z } from "zod";

export const createPaymentSchema = (t: (key: string) => string) =>
  z.object({
    bankAccount: z.string().min(1, { message: t("Bank_Account_Required") }),
    transactionNumber: z
      .string()
      .min(1, { message: t("Transaction_Number_Required_Error") }),
  });

export type PaymentSchema = z.infer<ReturnType<typeof createPaymentSchema>>;
