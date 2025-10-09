import PaymentForm from "@/components/PaymentForm";
import { getCategories } from "@/lib/data/get-categories";
import { getTranslations } from "@/lib/i18n";
import Trip from "@/types/trip";
import Image from "next/image";
import Link from "next/link";

const meetingPoints = ["القاهرة - ميدان التحرير", "الإسكندرية - محطة الرمل", "أسوان - كورنيش النيل"];

export default async function TripDetailsPage({
   params,
}: {
   params: Promise<{ locale: string; slug: string }>;
}) {
   const { locale, slug } = await params;
   const t = getTranslations(locale as "ar" | "en");
   const categories = await getCategories();

   let trip: Trip | undefined;
   for (const category of categories) {
      trip = category.trips.find((t) => t.id === slug);
      if (trip) break;
   }

   if (!trip) {
      return <div>{t.trip_not_found || "Trip not found"}</div>;
   }

   const name = locale === "ar" ? trip.nameAr : trip.nameEn;
   const description =
      locale === "ar" ? trip.descriptionAr : trip.descriptionEn;
   const duration = locale === "ar" ? trip.durationAr : trip.durationEn;
   const accommodation=
      locale === "ar" ? trip.accommodationAr : trip.accommodationEn;
   const priceText = trip.price.amount;
   const fullPrice = `${priceText} ${trip.price.currency}`;

   return (
      <main className="container mx-auto p-4 md:p-8">
         <div className="mb-8">
            <Link
               href={`/${locale}`}
               className="bg-primary text-secondary rounded-lg px-2 py-1"
            >
                {t.back_to_all_trips}
            </Link>
         </div>
         <div className="grid md:grid-cols-2 gap-8">
            <div>
               <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                     src={trip.imageUrl}
                     alt={name}
                     fill
                     className="object-cover"
                  />
               </div>
               <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                     {name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                     {description}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                     <p>
                        <span className="font-bold text-gray-900 dark:text-white">
                           {t.duration}:
                        </span>{" "}
                        {duration}
                     </p>
                     <p>
                        <span className="font-bold text-gray-900 dark:text-white">
                           {t.price}:
                        </span>{" "}
                        {fullPrice}
                     </p>
                     <p>
                        <span className="font-bold text-gray-900 dark:text-white">
                           {t.accommodation}:
                        </span>{" "}
                        {accommodation}
                     </p>
                     <p>
                        <span className="font-bold text-gray-900 dark:text-white">
                          {t.Departure_time}:
                        </span>{" "}
                        {trip.departureDate}
                     </p>
                  </div>
               </div>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
               <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t.book_your_trip}
               </h2>
               <form>
                  <div className="mb-4">
                     <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                     >
                        {t.name}
                     </label>
                     <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                     >
                        {t.email}
                     </label>
                     <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                     >
                        {t.phone}
                     </label>
                     <input
                        type="tel"
                        id="phone"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                     />
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="guests"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                     >
                        {t.guests}
                     </label>
                     <input
                        type="number"
                        id="guests"
                        min="1"
                        defaultValue={2}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                     />
                  </div>
                  <div className="mb-6">
                     <label
                        htmlFor="meeting-point"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                     >
                        {t.meeting_point}
                     </label>
                     <select
                        id="meeting-point"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
                     >
                        {meetingPoints.map((point) => (
                           <option key={point}>{point}</option>
                        ))}
                     </select>
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-primary text-secondary font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                     {t.confirm_booking}
                  </button>
               </form>
               <PaymentForm price={fullPrice} />
            </div>
         </div>
      </main>
   );
}
