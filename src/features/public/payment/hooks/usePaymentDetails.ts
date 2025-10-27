import { useState } from "react";
import { useBookingStore } from "@/features/public/booking/store/booking-store";
import { createPaymentSchema, PaymentSchema } from "../schemas/payment-schema";

export const usePaymentDetails = (
  onNext: () => void,
  t: (key: string) => string
) => {
  const { payment, setBankAccount, setTransactionNumber } = useBookingStore();
  const [errors, setErrors] = useState<Partial<PaymentSchema>>({});

  const paymentSchema = createPaymentSchema(t);

  const validateForm = () => {
    const result = paymentSchema.safeParse(payment);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors({
        bankAccount: fieldErrors.bankAccount?.[0],
        transactionNumber: fieldErrors.transactionNumber?.[0],
      });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleBankAccountChange = (value: string) => {
    setBankAccount(value);
    if (errors.bankAccount) {
      setErrors((prev) => ({ ...prev, bankAccount: undefined }));
    }
  };

  const handleTransactionNumberChange = (value: string) => {
    setTransactionNumber(value);
    if (errors.transactionNumber) {
      setErrors((prev) => ({ ...prev, transactionNumber: undefined }));
    }
  };

  const handleSubmit = () => {
    return validateForm();
  };

  return {
    payment,
    errors,
    handleBankAccountChange,
    handleTransactionNumberChange,
    handleSubmit,
  };
};
