"use server";
import { revalidatePath } from "next/cache";
import { doc, runTransaction, arrayUnion } from "firebase/firestore";
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
    const { categoryId, ...tripData } = validationResult.data;

    const newTrip = {
      ...tripData,
    };

    const categoryRef = doc(db, "categories", categoryId);

    await runTransaction(db, async (transaction) => {
      const categoryDoc = await transaction.get(categoryRef);

      if (!categoryDoc.exists()) {
        throw new Error("Category not found!");
      }

      transaction.update(categoryRef, {
        trips: arrayUnion(newTrip),
      });
    });

    revalidatePath("/");

    return {
      success: true,
      data: newTrip,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred.";

    return {
      success: false,
      error: {
        _errors: [errorMessage],
      },
    };
  }
}
