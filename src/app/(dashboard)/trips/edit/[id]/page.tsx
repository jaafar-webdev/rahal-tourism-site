import { getTrip } from "@/lib/data/get-trip";
import { notFound } from "next/navigation";
import { EditTripForm } from "@/features/dashboard/trips/components/EditTripForm";

interface EditTripPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditTripPage({ params }: EditTripPageProps) {
  const { id } = await params;
  const trip = undefined;
  if (!trip) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Trip</h1>
      <EditTripForm trip={trip} />
    </div>
  );
}
