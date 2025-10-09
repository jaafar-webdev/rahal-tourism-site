"use client";
import { Category } from "@/types/category";
import CategorySection from "./CategorySection";


export default function TripSection({ categories }: { categories: Category[] }) {


  return (
    <div>
      {categories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
    </div>
  );
}

