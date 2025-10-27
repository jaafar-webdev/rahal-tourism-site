import { CreateCategoryForm } from '@/features/dashboard/categories/components/CreateCategoryForm';

export default function CreateCategoryPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Category</h1>
      <div className="max-w-4xl mx-auto">
        <CreateCategoryForm />
      </div>
    </div>
  );
}
