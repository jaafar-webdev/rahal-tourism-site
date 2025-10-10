"use client";

import { useI18n } from "@/app/context/I18nProvider";
import { useState } from "react";

const PaymentForm = ({ price }: { price: string }) => {
   const { t } = useI18n();
   const [paymentMethod, setPaymentMethod] = useState("e-wallet");

   const renderPaymentFields = () => {
      switch (paymentMethod) {
         case "e-wallet":
            return (
               <div>
                  <p className="text-gray-700 dark:text-gray-300">
                     يرجى تحويل المبلغ إلى الرقم التالي:{" "}
                     <span className="font-bold">01234567890</span>
                  </p>
                  <div className="mt-4">
                     <label
                        htmlFor="transaction-id"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                     >
                        {t.transaction_id}
                     </label>
                     <input
                        type="text"
                        id="transaction-id"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                     />
                  </div>
               </div>
            );
         case "bank-transfer":
            return (
               <div>
                  <p className="text-gray-700 dark:text-gray-300">
                     يرجى تحويل المبلغ إلى الحساب البنكي التالي:
                     <br />
                     <span className="font-bold text-gray-900 dark:text-white">
                        البنك:
                     </span>{" "}
                     بنك مصر
                     <br />
                     <span className="font-bold text-gray-900 dark:text-white">
                        رقم الحساب:
                     </span>{" "}
                     1234567890123456
                  </p>
               </div>
            );
         case "visa":
            return (
               <div>
                  <div className="mb-4">
                     <label
                        htmlFor="card-number"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                     >
                        {t.card_number}
                     </label>
                     <input
                        type="text"
                        id="card-number"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                     />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label
                           htmlFor="expiry-date"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                           {t.expiry_date}
                        </label>
                        <input
                           type="text"
                           id="expiry-date"
                           placeholder="MM/YY"
                           className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                     </div>
                     <div>
                        <label
                           htmlFor="cvc"
                           className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                           {t.cvc}
                        </label>
                        <input
                           type="text"
                           id="cvc"
                           className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        />
                     </div>
                  </div>
               </div>
            );
         default:
            return null;
      }
   };

   return (
      <div className="mt-8">
         <h3 className="text-xl font-bold mb-4">{t.payment}</h3>
         <div className="mb-4">
            <p className="text-lg text-gray-900 dark:text-white">
               {t.amount_due}:{" "}
               <span className="font-bold text-primary">{price}</span>
            </p>
         </div>
         <div className="flex space-x-4 mb-6">
            <button
               type="button"
               onClick={() => setPaymentMethod("e-wallet")}
               className={`px-4 py-2 rounded-lg ${
                  paymentMethod === "e-wallet"
                     ? "bg-primary text-secondary"
                     : "bg-gray-200 dark:bg-gray-600 cursor-pointer"
               }`}
            >
               {t.e_wallet}
            </button>
            <button
               type="button"
               onClick={() => setPaymentMethod("bank-transfer")}
               className={`px-4 py-2 rounded-lg ${
                  paymentMethod === "bank-transfer"
                     ? "bg-primary text-secondary"
                     : "bg-gray-200 dark:bg-gray-600 cursor-pointer"
               }`}
            >
               {t.bank_transfer}
            </button>
            <button
               type="button"
               onClick={() => setPaymentMethod("visa")}
               className={`px-4 py-2 rounded-lg ${
                  paymentMethod === "visa"
                     ? "bg-primary text-secondary"
                     : "bg-gray-200 dark:bg-gray-600 cursor-pointer"
               }`}
            >
               {t.visa_mastercard}
            </button>
         </div>
         {renderPaymentFields()}
         <button
            type="submit"
            className="w-full mt-6 bg-secondary text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
         >
            {t.confirm_payment}
         </button>
      </div>
   );
};

export default PaymentForm;
