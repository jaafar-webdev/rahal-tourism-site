import { useState } from "react";
import { useBookingStore } from "@/features/public/booking/store/booking-store";
import { submitOrder } from "../actions/submit-order";

export const useSubmitOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const bookingData = useBookingStore((state) => state);

  const handleSubmitOrder = async () => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    const result = await submitOrder(bookingData);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || "An unknown error occurred.");
    }

    setIsLoading(false);
    return result.success;
  };

  return { handleSubmitOrder, isLoading, error, isSuccess };
};
