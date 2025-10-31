import Link from "next/link";
import Trip from "@/types/trip";

interface TripsTableProps {
  trips: Trip[];
}

export default function TripsTable({ trips }: TripsTableProps) {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Trip Name</th>
            <th>Price</th>
            <th>Accommodation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id}>
              <td>{trip.nameEn}</td>
              <td>
                {trip.price.amount} {trip.price.currency}
              </td>
              <td>{trip.accommodationEn}</td>
              <td>
                <Link
                  href={`/trips/edit/${trip.id}?categoryId=${trip.categoryId}`}
                >
                  <button className="text-blue-600 hover:text-blue-800">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
