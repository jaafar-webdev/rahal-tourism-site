"use client";

import { useLocalizedField } from "@/lib/useLocalizedField";
import { Category } from "@/types/category";
import TripCard from "./TripCard";

interface CategorySectionProps {
  category: Category;
}

const CategorySection= ({category} : CategorySectionProps)=> {
  const categoryName = useLocalizedField(category.nameAr, category.nameEn);

  return (
    <section className="w-full mb-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">{categoryName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.trips.map((trip) => (
          <TripCard
            key={trip.id}
            trip={trip}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;