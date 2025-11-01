"use server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  try {
    const categoriesCollectionRef = collection(db, "categories");
    const querySnapshot = await getDocs(categoriesCollectionRef);
    const categories = querySnapshot.docs.map((doc) => doc.data() as Category);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
