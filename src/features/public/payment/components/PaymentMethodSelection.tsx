import { useBookingStore } from "@/features/public/booking/store/booking-store";
import { Button } from "@/components/ui/Button";
import { getPaymentMethods } from "../data/payment-methods";
import { PaymentMethodId } from "../types";

interface PaymentMethodSelectionProps {
  onNext: () => void;
  onBack: () => void;
  t: (key: string) => string;
}

const PaymentMethodSelection = ({
  onNext,
  onBack,
  t,
}: PaymentMethodSelectionProps) => {
  const { payment, setPaymentMethod } = useBookingStore();
  const paymentMethods = getPaymentMethods(t);

  const handleMethodSelect = (methodId: PaymentMethodId) => {
    setPaymentMethod(methodId);
  };

  const isMethodSelected = payment.method !== null;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t("Choose_Payment_Method")}
        </h2>

        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => handleMethodSelect(method.id)}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                payment.method === method.id
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/50"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {method.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {method.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      payment.method === method.id
                        ? "border-indigo-500 bg-indigo-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {payment.method === method.id && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={onBack} variant="outline" size="lg">
          {t("Back")}
        </Button>
        <Button
          onClick={onNext}
          disabled={!isMethodSelected}
          variant="primary"
          size="lg"
        >
          {t("Next")}
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethodSelection;
