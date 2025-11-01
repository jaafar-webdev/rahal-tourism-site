import { getCategory } from "@/features/dashboard/categories/service/get-category";
import { notFound } from "next/navigation";
import { EditCategoryForm } from "@/features/dashboard/categories/components/EditCategoryForm";

interface EditCategoryPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditCategoryPage({
  params,
}: EditCategoryPageProps) {
  const { id } = await params;
  const category = await getCategory(id);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Category</h1>
      <EditCategoryForm category={category} />
    </div>
  );
}
