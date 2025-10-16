import React from "react";
import { BookingSummaryData } from "./types";
import { useBookingStore } from "@/features/booking/store/booking-store";

import { Translations } from "@/lib/i18n";

interface BookingSummaryProps {
  onNext: () => void;
  t: Translations;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ onNext, t }) => {
  const { name, email, phoneNumber, guests, gatheringPlace, trip } =
    useBookingStore();
  console.log(trip);

  const bookingData: BookingSummaryData = {
    name,
    email,
    phoneNumber,
    guests,
    gatheringPlace,
    trip,
  };

  const isFormValid =
    bookingData.name &&
    bookingData.email &&
    bookingData.phoneNumber &&
    bookingData.guests > 0 &&
    bookingData.trip.title &&
    bookingData.trip.price > 0;

  return (
    <div className="space-y-6">
      <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t.Booking_Information}
        </h2>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.Full_Name}
              </label>
              <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
                {bookingData.name}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.Email_Address}
              </label>
              <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
                {bookingData.email}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.Phone_Number}
              </label>
              <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
                {bookingData.phoneNumber}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.Number_of_Guests}
              </label>
              <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
                {bookingData.guests}
              </p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.Gathering_Place}
              </label>
              <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
                {bookingData.gatheringPlace}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t.Trip_Details}
        </h2>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.Trip_Name}
              </label>
              <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
                {bookingData.trip.title}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.Total_Price}
              </label>
              <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
                {bookingData.trip.price} {t.currency}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`px-6 py-3 rounded-md font-medium text-white ${
            isFormValid
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          } transition-colors duration-200`}
        >
          {t.Next}
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
