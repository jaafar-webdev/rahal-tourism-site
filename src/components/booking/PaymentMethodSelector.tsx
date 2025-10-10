import React from "react";
import SelectField from "../form/SelectField";
import { Translations } from "@/lib/i18n";

interface PaymentMethodSelectorProps {
  t: Translations;
}

/**
 * A component for selecting a payment method.
 * @param {PaymentMethodSelectorProps} props - The props for the component.
 */

const PaymentMethodSelector = ({ t }: PaymentMethodSelectorProps) => {
  const paymentOptions = [
    { value: "credit_card", label: t.credit_card },
    { value: "paypal", label: t.paypal },
    { value: "bank_transfer", label: t.bank_transfer },
  ];

  return (
    <SelectField
      label={t.payment_method}
      id="payment-method"
      options={paymentOptions}
      required
    />
  );
};

export default PaymentMethodSelector;
