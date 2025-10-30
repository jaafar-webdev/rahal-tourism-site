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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
