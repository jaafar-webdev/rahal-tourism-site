import React from "react";
import Link from "next/link";
import { Translations } from "@/lib/i18n";

interface ConfirmationSuccessProps {
  t: Translations;
}

const ConfirmationSuccess = ({ t }: ConfirmationSuccessProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="w-24 h-24 flex items-center justify-center bg-green-100 dark:bg-green-900/50 rounded-full mb-6">
        <svg
          className="w-16 h-16 text-green-500 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {t.Order_Received_Successfully}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
        {t.Contact_Confirmation}
      </p>
      <Link
        href="/ar"
        className="px-8 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors duration-200"
      >
        {t.Back_to_Homepage}
      </Link>
    </div>
  );
};

export default ConfirmationSuccess;
