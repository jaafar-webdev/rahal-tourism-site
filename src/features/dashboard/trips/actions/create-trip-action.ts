"use server";
import { revalidatePath } from "next/cache";
import {
  collection,
  doc,
  runTransaction,
  arrayUnion,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import {
  CreateTripSchema,
  CreateTripData,
} from "../schemas/create-trip-schema";

export async function createTripAction(data: CreateTripData) {
  const validationResult = CreateTripSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      error: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    const { categoryId, ...tripDataWithoutCategory } = validationResult.data;

    const newTripRef = doc(collection(db, "trips"));

    await runTransaction(db, async (transaction) => {
      const categoryRef = doc(db, "categories", categoryId);
      const categoryDoc = await transaction.get(categoryRef);

      if (!categoryDoc.exists()) {
        throw new Error("Category not found!");
      }

      const newTrip = {
        ...tripDataWithoutCategory,
        id: newTripRef.id,
        categoryId: categoryId,
      };

      transaction.set(newTripRef, newTrip);
      transaction.update(categoryRef, { trips: arrayUnion(newTripRef.id) });
    });

    revalidatePath("/");

    return {
      success: true,
      data: { ...validationResult.data, id: newTripRef.id },
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
