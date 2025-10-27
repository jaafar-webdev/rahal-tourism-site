import React from "react";

interface SummaryFieldProps {
  label: string;
  value: string | number;
}

const SummaryField = ({ label, value }: SummaryFieldProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
      {value}
    </p>
  </div>
);

export default SummaryField;
