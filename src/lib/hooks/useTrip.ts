import { useMemo } from "react";
import { Category } from "@/types/category";
import Trip from "@/types/trip";

export function findTripBySlug(categories: Category[], slug: string): Trip | undefined {
  for (const category of categories) {
    const trip = category.trips.find((t: Trip) => t.id === slug);
    if (trip) return trip;
  }
  return undefined;
}

export function useTrip(categories: Category[], slug: string) {
  const trip = useMemo(() => findTripBySlug(categories, slug), [categories, slug]);
  return trip;
}