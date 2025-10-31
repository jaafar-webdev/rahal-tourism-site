"use server";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { CreateTripData } from "../schemas/create-trip-schema";

export async function updateTripAction(id: string, data: CreateTripData) {
  try {
    const tripRef = doc(db, "trips", id);
    await updateDoc(tripRef, {
      ...data,
      price: {
        amount: Number(data.price.amount),
        currency: data.price.currency,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating trip:", error);
    return { success: false, error: "Failed to update trip" };
  }
}
