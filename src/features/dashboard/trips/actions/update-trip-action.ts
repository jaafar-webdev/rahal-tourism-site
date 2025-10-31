import { doc, runTransaction } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import {
  CreateTripData,
  CreateTripSchema,
} from "../schemas/create-trip-schema";

export async function updateTripAction(
  currentCategoryId: string,
  tripId: string,
  data: CreateTripData
) {
  const validationResult = CreateTripSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      error: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    const { categoryId: newCategoryId, ...tripData } = validationResult.data;

    const isCategoryChanged = currentCategoryId !== newCategoryId;

    const currentCategoryRef = doc(db, "categories", currentCategoryId);
    const newCategoryRef = doc(db, "categories", newCategoryId);

    await runTransaction(db, async (transaction) => {
      const currentCategoryDoc = await transaction.get(currentCategoryRef);
      if (!currentCategoryDoc.exists()) {
        throw new Error("Current category not found!");
      }

      let newCategoryDoc;
      if (isCategoryChanged) {
        newCategoryDoc = await transaction.get(newCategoryRef);
        if (!newCategoryDoc.exists()) {
          throw new Error("New category not found!");
        }
      }

      const currentCategoryData = currentCategoryDoc.data();
      const currentTrips = currentCategoryData.trips || [];

      const tripIndex = currentTrips.findIndex(
        (trip: any) => trip.id === tripId
      );
      if (tripIndex === -1) {
        throw new Error("Trip not found in the current category!");
      }

      const currentTrip = currentTrips[tripIndex];

      const updatedTrip = {
        ...currentTrip,
        ...tripData,
        price: {
          amount: Number(tripData.price.amount),
          currency: tripData.price.currency,
        },
        id: tripId,
        categoryId: newCategoryId,
      };

      if (isCategoryChanged) {
        const updatedCurrentTrips = [...currentTrips];
        updatedCurrentTrips.splice(tripIndex, 1);
        transaction.update(currentCategoryRef, { trips: updatedCurrentTrips });

        const newCategoryData = newCategoryDoc!.data();
        const newTrips = newCategoryData.trips || [];
        newTrips.push(updatedTrip);
        transaction.update(newCategoryRef, { trips: newTrips });
      } else {
        const updatedCurrentTrips = [...currentTrips];
        updatedCurrentTrips[tripIndex] = updatedTrip;
        transaction.update(currentCategoryRef, { trips: updatedCurrentTrips });
      }
    });

    return { success: true };
  } catch (error) {
    console.error("Error updating trip:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred.";
    return { success: false, error: errorMessage };
  }
}
