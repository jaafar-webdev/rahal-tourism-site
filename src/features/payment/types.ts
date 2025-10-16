export interface TripData {
  title: string;
  price: number;
}

export interface PaymentData {
  method: "bank_transfer" | "ewallet" | null;
  bankAccount?: string;
  transactionNumber?: string;
}

export interface BookingSummaryData {
  name: string;
  email: string;
  phoneNumber: string;
  guests: number;
  gatheringPlace: string;
  trip: TripData;
}

export type PaymentStep =
  | "summary"
  | "payment_method"
  | "payment_details"
  | "confirmation";

export interface PaymentFlowProps {
  onBack?: () => void;
}
