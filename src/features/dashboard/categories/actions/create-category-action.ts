"use server";
import { revalidatePath } from "next/cache";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import {
  createCategorySchema,
  CreateCategorySchema,
} from "../schemas/create-category-schema";

export async function createCategoryAction(data: CreateCategorySchema) {
  const validationResult = createCategorySchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      error: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    const newCategoryRef = doc(collection(db, "categories"));
    const categoryData = {
      ...validationResult.data,
      id: newCategoryRef.id,
      trips: [],
    };

    await setDoc(newCategoryRef, categoryData);

    revalidatePath("/");

    return {
      success: true,
      data: categoryData,
    };
  } catch (error) {
    return {
      success: false,
      error: {
        _errors: ["An unexpected error occurred.", error],
      },
    };
  }
}
