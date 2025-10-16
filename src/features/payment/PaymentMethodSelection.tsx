import React from "react";
import { useBookingStore } from "@/features/booking/store/booking-store";
import { Translations } from "@/lib/i18n";

interface PaymentMethodSelectionProps {
  onNext: () => void;
  onBack: () => void;
  t: Translations;
}

const PaymentMethodSelection: React.FC<PaymentMethodSelectionProps> = ({
  onNext,
  onBack,
  t,
}) => {
  const { payment, setPaymentMethod } = useBookingStore();

  const paymentMethods = [
    {
      id: "bank_transfer",
      name: t.Bank_Transfer,
      description: t.Transfer_Details,
      icon: "🏦",
    },
    {
      id: "ewallet",
      name: t.E_Wallet,
      description: t.E_Wallet_Details,
      icon: "💳",
    },
  ];

  const handleMethodSelect = (methodId: "bank_transfer" | "ewallet") => {
    setPaymentMethod(methodId);
  };

  const isMethodSelected = payment.method !== null;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t.Choose_Payment_Method}
        </h2>

        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              onClick={() =>
                handleMethodSelect(method.id as "bank_transfer" | "ewallet")
              }
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
                    className={`w-5 h-5 rounded-full border-2 ${
                      payment.method === method.id
                        ? "border-indigo-500 bg-indigo-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {payment.method === method.id && (
                      <div className="w-3 h-3 bg-white rounded-full m-1"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {t.Back}
        </button>
        <button
          onClick={onNext}
          disabled={!isMethodSelected}
          className={`px-6 py-3 rounded-md font-medium text-white ${
            isMethodSelected
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          } transition-colors duration-200`}
        >
          {t.Next}
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodSelection;
