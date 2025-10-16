"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TripData {
  title: string;
  price: number;
}

interface PaymentData {
  method: "bank_transfer" | "ewallet" | null;
  bankAccount?: string;
  transactionNumber?: string;
}

interface BookingData {
  name: string;
  email: string;
  phoneNumber: string;
  guests: number;
  gatheringPlace: string;
  trip: TripData;
  payment: PaymentData;
}

interface BookingActions {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setGuests: (guests: number) => void;
  setGatheringPlace: (gatheringPlace: string) => void;
  setTrip: (trip: TripData) => void;
  setPaymentMethod: (method: "bank_transfer" | "ewallet") => void;
  setBankAccount: (account: string) => void;
  setTransactionNumber: (number: string) => void;
  reset: () => void;
  setBookingData: (data: Partial<BookingData>) => void;
}

type BookingState = BookingData & BookingActions;

const initialBookingState: BookingData = {
  name: "",
  email: "",
  phoneNumber: "",
  guests: 0,
  gatheringPlace: "",
  trip: { title: "", price: 0 },
  payment: {
    method: null,
    bankAccount: "",
    transactionNumber: "",
  },
};

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      ...initialBookingState,

      setName: (name: string) => set({ name }),
      setEmail: (email: string) => set({ email }),
      setPhoneNumber: (phoneNumber: string) => set({ phoneNumber }),
      setGuests: (guests: number) => set({ guests }),
      setGatheringPlace: (gatheringPlace: string) => set({ gatheringPlace }),
      setTrip: (trip: TripData) => set({ trip }),
      setPaymentMethod: (method: "bank_transfer" | "ewallet") =>
        set((state) => ({
          ...state,
          payment: { ...state.payment, method },
        })),
      setBankAccount: (account: string) =>
        set((state) => ({
          ...state,
          payment: { ...state.payment, bankAccount: account },
        })),
      setTransactionNumber: (number: string) =>
        set((state) => ({
          ...state,
          payment: { ...state.payment, transactionNumber: number },
        })),

      setBookingData: (data: Partial<BookingData>) =>
        set((state) => ({ ...state, ...data })),

      reset: () => set(initialBookingState),
    }),
    {
      name: "booking-storage",
      version: 1,
    }
  )
);
