"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookingData {
  name: string;
  email: string;
  phoneNumber: string;
  guests: number;
  gatheringPlace: string;
}

interface BookingActions {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setGuests: (guests: number) => void;
  setGatheringPlace: (gatheringPlace: string) => void;
  reset: () => void;
  setBookingData: (data: Partial<BookingData>) => void; // إضافة جديدة
}

type BookingState = BookingData & BookingActions;

const initialBookingState: BookingData = {
  name: "",
  email: "",
  phoneNumber: "",
  guests: 0,
  gatheringPlace: "",
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
