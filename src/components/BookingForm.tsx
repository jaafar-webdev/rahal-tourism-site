"use client";

import Trip from "@/types/trip";

import { Translations } from "@/lib/i18n";
import PaymentForm from "./PaymentForm";

interface BookingFormProps {
  trip: Trip;
  t: Translations;
  meetingPoints: string[];
}

export default function BookingForm({
  trip,
  t,
  meetingPoints,
}: BookingFormProps) {
  const fullPrice = `${trip.price.amount} ${trip.price.currency}`;

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {t.book_your_trip}
      </h2>
      <BookingFormFields t={t} meetingPoints={meetingPoints} />
      <button
        type="submit"
        className="w-full bg-primary text-secondary font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors"
      >
        {t.confirm_booking}
      </button>
      <PaymentForm price={fullPrice} />
    </div>
  );
}

const InputField = ({
  id,
  label,
  type,
  ...props
}: {
  id: string;
  label: string;
  type: string;
  [key: string]: string | number;
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
      {...props}
    />
  </div>
);

const SelectField = ({
  id,
  label,
  options,
}: {
  id: string;
  label: string;
  options: string[];
}) => (
  <div className="mb-6">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {label}
    </label>
    <select
      id={id}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

function BookingFormFields({
  t,
  meetingPoints,
}: {
  t: Translations;
  meetingPoints: string[];
}) {
  return (
    <form>
      <InputField id="name" label={t.name} type="text" />
      <InputField id="email" label={t.email} type="email" />
      <InputField id="phone" label={t.phone} type="tel" />
      <InputField
        id="guests"
        label={t.guests}
        type="number"
        min="1"
        defaultValue={2}
      />
      <SelectField
        id="meeting-point"
        label={t.meeting_point}
        options={meetingPoints}
      />
    </form>
  );
}
