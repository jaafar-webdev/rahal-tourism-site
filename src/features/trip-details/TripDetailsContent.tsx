"use client";

import Trip from "@/types/trip";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

interface TripDetailsContentProps {
  trip: Trip;
}

const TripImage = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
  <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
    <Image
      src={imageUrl}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
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

export default function TripDetailsContent({ trip }: TripDetailsContentProps) {
  const t = useTranslations();
  const locale = useLocale();

  const name = locale === "ar" ? trip.nameAr : trip.nameEn;
  const description = locale === "ar" ? trip.descriptionAr : trip.descriptionEn;
  const duration = locale === "ar" ? trip.durationAr : trip.durationEn;
  const accommodation =
    locale === "ar" ? trip.accommodationAr : trip.accommodationEn;
  const price = `${trip.price.amount} ${trip.price.currency}`;

  return (
    <div>
      <TripImage imageUrl={trip.imageUrl} alt={name} />
      <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <DetailItem label={t("duration")} value={duration} />
          <DetailItem label={t("price")} value={price} />
          <DetailItem label={t("accommodation")} value={accommodation} />
          <DetailItem label={t("Departure_time")} value={trip.departureDate} />
        </div>
      </div>
    </div>
  );
}
