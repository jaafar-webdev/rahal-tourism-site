import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { Category } from "@/types/category";

export async function getCategory(id: string): Promise<Category | null> {
  if (!id) {
    console.error("Error: ID is undefined.");
    return null;
  }
  try {
    const categoryDocRef = doc(db, "categories", id);
    const categoryDoc = await getDoc(categoryDocRef);

    if (categoryDoc.exists()) {
      return { id: categoryDoc.id, ...categoryDoc.data() } as Category;
    } else {
      console.log("No such category!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}
