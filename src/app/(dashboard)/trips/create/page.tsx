import { CreateTripForm } from "@/features/dashboard/trips/components/CreateTripForm";
import { getCategories } from "@/lib/data/get-categories";

export default async function CreateTripPage() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Trip</h1>
      <div className="max-w-4xl mx-auto">
        <CreateTripForm categories={categories} />
      </div>
    </div>
  );
}
