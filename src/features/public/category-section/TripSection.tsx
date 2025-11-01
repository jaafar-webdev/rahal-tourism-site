import { Category } from "@/types/category";
import CategorySection from "./CategorySection";

interface TripSectionProps {
  categories: Category[];
  locale: "ar" | "en";
}

export default function TripSection({ categories, locale }: TripSectionProps) {
  return (
    <div>
      {categories.map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          locale={locale}
        />
      ))}
    </div>
  );
}
