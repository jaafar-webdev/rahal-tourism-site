"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocalizedField } from "@/lib/useLocalizedField";
import Trip from "@/types/trip";
import { useI18n } from "@/app/context/I18nProvider";

interface TripCardProps {
  trip: Trip;
}

const TripCard = ({ trip }: TripCardProps) => {
  const { t, locale } = useI18n();
  const name = useLocalizedField(trip.nameAr, trip.nameEn);
  const duration = useLocalizedField(trip.durationAr, trip.durationEn);
  const accommodation = useLocalizedField(
    trip.accommodationAr,
    trip.accommodationEn
  );
  const description = useLocalizedField(trip.descriptionAr, trip.descriptionEn);
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
      <div className="relative h-56">
        <Image
          src={trip.imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{duration}</p>
        <p className="text-gray-600 dark:text-gray-400">
          {trip.price.amount} {trip.price.currency}
        </p>
        <p className="text-gray-600 dark:text-gray-400">{accommodation}</p>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <Link href={`/${locale}/trips/${trip.id}`}>
          <button className="mt-4 w-full bg-primary text-secondary font-bold py-2 px-4 rounded hover:bg-yellow-400 transition-colors cursor-pointer">
            {t.show_details}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TripCard;
