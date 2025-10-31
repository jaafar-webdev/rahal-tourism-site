"use server";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

export async function deleteTripAction(id: string) {
  try {
    const tripRef = doc(db, "trips", id);
    await deleteDoc(tripRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting trip:", error);
    return { success: false, error: "Failed to delete trip" };
  }
}
