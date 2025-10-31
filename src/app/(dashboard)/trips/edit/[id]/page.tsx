import { getTrip } from "@/lib/data/get-trip";
import { notFound } from "next/navigation";
import { EditTripForm } from "@/features/dashboard/trips/components/EditTripForm";

interface EditTripPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ categoryId: string }>;
}

export default async function EditTripPage({
  params,
  searchParams,
}: EditTripPageProps) {
  const { id } = await params;
  const { categoryId } = await searchParams;
  const trip = await getTrip(categoryId, id);
  if (!trip) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Trip</h1>
      <EditTripForm trip={trip} categoryId={categoryId} />
    </div>
  );
}
