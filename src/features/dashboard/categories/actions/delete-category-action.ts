"use server";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

export async function deleteCategoryAction(id: string) {
  try {
    const categoryRef = doc(db, "categories", id);
    await deleteDoc(categoryRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting category:", error);
    return { success: false, error: "Failed to delete category" };
  }
}
