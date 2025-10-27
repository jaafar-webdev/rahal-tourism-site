import { PaymentMethod } from "../types";

export const getPaymentMethods = (
  t: (key: string) => string
): PaymentMethod[] => [
  {
    id: "bank_transfer",
    name: t("Bank_Transfer"),
    description: t("Transfer_Details"),
    icon: "🏦",
  },
  {
    id: "ewallet",
    name: t("E_Wallet"),
    description: t("E_Wallet_Details"),
    icon: "💳",
  },
];
