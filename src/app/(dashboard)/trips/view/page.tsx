import { getTrips } from "@/lib/data/get-trips";
import TripsTable from "@/features/dashboard/trips/components/TripsTable";

export default async function ViewTripsPage() {
  const trips = await getTrips();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">View Trips</h1>
          <p className="text-gray-600 text-lg">
            Manage and explore all available trips
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <TripsTable trips={trips} />
        </div>
      </div>
    </div>
  );
}
