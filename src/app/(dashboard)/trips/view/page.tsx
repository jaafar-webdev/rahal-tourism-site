import { getTrips } from "@/lib/data/get-trips";
import TripsTable from "@/features/dashboard/trips/components/TripsTable";

export default async function ViewTripsPage() {
  const trips = await getTrips();

  return (
    <div>
      <h1>View Trips</h1>
      <TripsTable trips={trips} />
    </div>
  );
}
