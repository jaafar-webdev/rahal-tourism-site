"use server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import type { Category } from "@/types/category";
import type Trip from "@/types/trip";

export async function getTrips(): Promise<Trip[]> {
  try {
    const categoriesCollectionRef = collection(db, "categories");
    const querySnapshot = await getDocs(categoriesCollectionRef);

    const allTrips: Trip[] = [];

    querySnapshot.forEach((doc) => {
      const categoryData = doc.data() as Category;
      if (Array.isArray(categoryData.trips)) {
        allTrips.push(...categoryData.trips);
      }
    });

    return allTrips;
  } catch (error) {
    console.error("Error fetching trips:", error);
    return [];
  }
}
