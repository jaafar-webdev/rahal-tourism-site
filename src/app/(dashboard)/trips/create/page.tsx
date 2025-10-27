import { CreateTripForm } from "@/features/dashboard/trips/components/CreateTripForm";

export default function CreateTripPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Trip</h1>
      <div className="max-w-4xl mx-auto">
        <CreateTripForm />
      </div>
    </div>
  );
}
