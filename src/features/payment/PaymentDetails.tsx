import React, { useState } from "react";
import { useBookingStore } from "@/features/booking/store/booking-store";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/Button";

interface PaymentDetailsProps {
  onNext: () => void;
  onBack: () => void;
  t: (key: string) => string;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  onNext,
  onBack,
  t,
}) => {
  const { payment, setBankAccount, setTransactionNumber } = useBookingStore();
  const [errors, setErrors] = useState<{
    bankAccount?: string;
    transactionNumber?: string;
  }>({});

  const validateForm = () => {
    const newErrors: { bankAccount?: string; transactionNumber?: string } = {};

    if (!payment.bankAccount?.trim()) {
      newErrors.bankAccount = t("Bank_Account_Required");
    }

    if (!payment.transactionNumber?.trim()) {
      newErrors.transactionNumber = t("Transaction_Number_Required_Error");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBankAccountChange = (value: string) => {
    setBankAccount(value);
    if (errors.bankAccount && value.trim()) {
      setErrors((prev) => ({ ...prev, bankAccount: undefined }));
    }
  };

  const handleTransactionNumberChange = (value: string) => {
    setTransactionNumber(value);
    if (errors.transactionNumber && value.trim()) {
      setErrors((prev) => ({ ...prev, transactionNumber: undefined }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const getBankAccountNumber = () => {
    // This would typically come from your backend or configuration
    return "010012345678901";
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {payment.method === "bank_transfer"
            ? t("Transfer_Details")
            : t("E_Wallet_Details")}
        </h2>

        <div className="space-y-6">
          {payment.method === "bank_transfer" && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 dark:text-blue-400 text-xl">
                  🏦
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200">
                    {t("Bank_Account_Info")}
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 mt-1">
                    {t("Transfer_to_account")}
                  </p>
                  <div className="bg-white dark:bg-gray-900 rounded p-3 mt-2 font-mono text-sm">
                    <p className="dark:text-white">
                      {t("Account_Number")}: {getBankAccountNumber()}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {t("Bank_Name_Branch")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <InputField
              label={
                payment.method === "bank_transfer"
                  ? t("Account_Number")
                  : t("E_Wallet_Number")
              }
              type="text"
              value={payment.bankAccount || ""}
              onChange={(e) => handleBankAccountChange(e.target.value)}
              error={errors.bankAccount}
              placeholder={
                payment.method === "bank_transfer"
                  ? t("Enter_Bank_Account_Number")
                  : t("Enter_E_Wallet_Number")
              }
              required
            />

            <InputField
              label={t("Transaction_Number")}
              type="text"
              value={payment.transactionNumber || ""}
              onChange={(e) => handleTransactionNumberChange(e.target.value)}
              error={errors.transactionNumber}
              placeholder={t("Enter_Transaction_Number")}
              required
            />
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="text-yellow-600 dark:text-yellow-400 text-xl">
                ⚠️
              </div>
              <div>
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-200">
                  {t("Important_Note")}
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300 mt-1">
                  {t("Transaction_Number_Required")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={onBack} variant="outline" size="lg">
          {t("Back")}
        </Button>
        <Button onClick={handleSubmit} variant="primary" size="lg">
          {t("Next")}
        </Button>
      </div>
    </div>
  );
};

export default PaymentDetails;
