import { PaymentData, TripData } from "@/features/public/payment/types";
import { FieldValue, Timestamp } from "firebase/firestore";

export interface Order {
  id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  guests: number;
  gatheringPlace: string;
  trip: TripData;
  payment: PaymentData;
  totalPrice: number;
  status: "Pending" | "Confirmed" | "Cancelled";
  createdAt: FieldValue | Timestamp;
}
