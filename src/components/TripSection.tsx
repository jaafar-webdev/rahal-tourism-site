"use client";
import { useI18n } from "@/app/context/I18nProvider";
import TripCard from "./TripCard";
import { useLocalizedField } from "@/lib/useLocalizedField";
import { Category } from "@/types/category";
import React from 'react';

export default function TripSection({ categories }: { categories: Category[] }) {
  const { t } = useI18n(); 

  const showDetailsText = t.show_details;

  return (
    <div>
      {categories.map((category) => (
        <CategorySection key={category.id} category={category} showDetailsText={showDetailsText} />
      ))}
    </div>
  );
}

interface CategorySectionProps {
  category: Category;
  showDetailsText: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, showDetailsText }) => {
  const categoryName = useLocalizedField(category.nameAr, category.nameEn);

  return (
     <section key={category.id} className="w-full mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">{categoryName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {category.trips.map((trip) => (
              <TripCard
                 key={trip.id}
                 trip={trip}
                 showDetailsText={showDetailsText}
              />
           ))}
        </div>
     </section>
  );
}