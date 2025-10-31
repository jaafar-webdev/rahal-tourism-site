import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import Trip from "@/types/trip";
import { Category } from "@/types/category";

export async function getTrip(
  categoryId: string,
  tripId: string
): Promise<Trip | null> {
  const cleanCategoryId = categoryId?.trim();
  const cleanTripId = tripId?.trim();

  if (!cleanCategoryId || !cleanTripId) {
    console.error("Error: Category ID or Trip ID is missing or invalid.");
    return null;
  }

  try {
    const categoryDocRef = doc(db, "categories", cleanCategoryId);
    const categoryDoc = await getDoc(categoryDocRef);

    if (categoryDoc.exists()) {
      const categoryData = categoryDoc.data() as Category;

      const foundTrip = categoryData.trips.find(
        (trip) => trip.id === cleanTripId
      );

      if (foundTrip) {
        console.log("Trip found:", foundTrip);
        return foundTrip;
      } else {
        console.log("No trip found with ID:", cleanTripId);
        console.log(
          "Available trips:",
          categoryData.trips.map((t) => t.id)
        );
        return null;
      }
    } else {
      console.log("Category not found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching trip:", error);
    return null;
  }
}
