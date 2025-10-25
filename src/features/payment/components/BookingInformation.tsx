import React from "react";
import SummaryField from "./SummaryField";
import { BookingSummaryData } from "../types";

interface BookingInformationProps {
  bookingData: BookingSummaryData;
  t: (key: string) => string;
}

const BookingInformation = ({ bookingData, t }: BookingInformationProps) => (
  <div className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      {t("Booking_Information")}
    </h2>
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SummaryField label={t("Full_Name")} value={bookingData.name} />
        <SummaryField label={t("Email_Address")} value={bookingData.email} />
        <SummaryField
          label={t("Phone_Number")}
          value={bookingData.phoneNumber}
        />
        <SummaryField
          label={t("Number_of_Guests")}
          value={bookingData.guests}
        />
        <div className="md:col-span-2">
          <SummaryField
            label={t("Gathering_Place")}
            value={bookingData.gatheringPlace}
          />
        </div>
      </div>
    </div>
  </div>
);

export default BookingInformation;
