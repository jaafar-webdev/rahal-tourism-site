import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { CreateCategorySchema } from "../schemas/create-category-schema";

export async function updateCategoryAction(
  id: string,
  data: CreateCategorySchema
) {
  try {
    const categoryRef = doc(db, "categories", id);
    await updateDoc(categoryRef, {
      nameAr: data.nameAr,
      nameEn: data.nameEn,
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating category:", error);
    return { success: false, error: "Failed to update category" };
  }
}
