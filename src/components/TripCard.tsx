import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/category";
import { Button } from "./ui/Button";
import { useTranslations } from "next-intl";

interface TripCardProps {
  trip: Category["trips"][number];
  locale: "ar" | "en";
}

export default function TripCard({ trip, locale }: TripCardProps) {
  const t = useTranslations();

  const name = locale === "ar" ? trip.nameAr : trip.nameEn;
  const duration = locale === "ar" ? trip.durationAr : trip.durationEn;
  const accommodation =
    locale === "ar" ? trip.accommodationAr : trip.accommodationEn;
  const description = locale === "ar" ? trip.descriptionAr : trip.descriptionEn;

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
          <Button variant="primary" size="md" fullWidth>
            {t("show_details")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
