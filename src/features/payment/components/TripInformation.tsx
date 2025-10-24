import React from "react";
import SummaryField from "./SummaryField";
import { TripData } from "../types";

interface TripInformationProps {
  trip: TripData;
  totalPrice: number;
  t: (key: string) => string;
}

const TripInformation: React.FC<TripInformationProps> = ({
  trip,
  totalPrice,
  t,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      {t("Trip_Details")}
    </h2>
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SummaryField label={t("Trip_Name")} value={trip.title} />
        <SummaryField
          label={t("Total_Price")}
          value={`${totalPrice} ${t("currency")}`}
        />
      </div>
    </div>
  </div>
);

export default TripInformation;
