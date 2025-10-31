import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import Trip from "@/types/trip";

export async function getTrip(
  categoryId: string,
  tripId: string
): Promise<Trip | null> {
  if (!categoryId || !tripId) {
    console.error("Error: Category ID or Trip ID is missing.");
    return null;
  }

  try {
    const tripDocRef = doc(db, "categories", categoryId, "trips", tripId);
    const tripDoc = await getDoc(tripDocRef);

    if (tripDoc.exists()) {
      return { id: tripDoc.id, ...tripDoc.data() } as Trip;
    } else {
      console.log("No such trip!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching trip:", error);
    return null;
  }
}
