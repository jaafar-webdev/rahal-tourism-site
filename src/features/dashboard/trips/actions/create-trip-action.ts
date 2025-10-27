"use server";
import { revalidatePath } from "next/cache";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
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
    const tripsCollectionRef = collection(db, "trips");
    const newTripRef = await addDoc(tripsCollectionRef, validationResult.data);

    const newTripDocRef = doc(db, "trips", newTripRef.id);
    await setDoc(newTripDocRef, { id: newTripRef.id }, { merge: true });

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
