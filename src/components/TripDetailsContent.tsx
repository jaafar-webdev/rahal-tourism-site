"use client";

import Trip from "@/types/trip";
import { Translations } from "@/lib/i18n";
import { useLocalizedField } from "@/lib/useLocalizedField";
import Image from "next/image";

interface TripDetailsContentProps {
  trip: Trip;
  t: Translations;
}

const TripImage = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
  <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
    <Image
      src={imageUrl}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>
);

const DetailItem = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <p>
    <span className="font-bold text-gray-900 dark:text-white">{label}:</span>{" "}
    {value}
  </p>
);

const TripInfo = ({ trip, t }: TripDetailsContentProps) => {
  const name = useLocalizedField(trip.nameAr, trip.nameEn);
  const description = useLocalizedField(trip.descriptionAr, trip.descriptionEn);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {name}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  );
};

const TripDetailsGrid = ({ trip, t }: TripDetailsContentProps) => {
  const duration = useLocalizedField(trip.durationAr, trip.durationEn);
  const accommodation = useLocalizedField(
    trip.accommodationAr,
    trip.accommodationEn
  );
  const price = `${trip.price.amount} ${trip.price.currency}`;

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <DetailItem label={t.duration} value={duration} />
      <DetailItem label={t.price} value={price} />
      <DetailItem label={t.accommodation} value={accommodation} />
      <DetailItem label={t.Departure_time} value={trip.departureDate} />
    </div>
  );
};

export default function TripDetailsContent({
  trip,
  t,
}: TripDetailsContentProps) {
  const name = useLocalizedField(trip.nameAr, trip.nameEn);

  return (
    <div>

      <TripImage imageUrl={trip.imageUrl} alt={name} />
      <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <TripInfo trip={trip} t={t} />
      <TripDetailsGrid trip={trip} t={t} />
      </div>
    </div>
  );
}