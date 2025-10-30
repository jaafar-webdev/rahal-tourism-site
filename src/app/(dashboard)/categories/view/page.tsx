import CategoriesTable from "@/features/dashboard/categories/components/CategoriesTable";
import { getCategories } from "@/lib/data/get-categories";

export default async function ViewCategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            View Categories
          </h1>
          <p className="text-gray-600 text-lg">
            Manage and explore all available categories
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <CategoriesTable categories={categories} />
        </div>
      </div>
    </div>
  );
}
