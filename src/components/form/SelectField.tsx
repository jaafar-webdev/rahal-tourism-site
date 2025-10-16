import React, { forwardRef } from "react";
import FormLabel from "./FormLabel";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

/**
 * A reusable select field component with a label, options, and error handling.
 * @param {SelectFieldProps} props - The props for the component.
 */
const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, id, options, required, error, name, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s/g, "-");
    const errorId = `${selectId}-error`;

    return (
      <div className="mb-6">
        <FormLabel htmlFor={selectId} required={required}>
          {label}
        </FormLabel>
        <select
          id={selectId}
          required={required}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={!!error}
          ref={ref}
          name={name}
          {...props}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 dark:text-white"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p
            id={errorId}
            className="mt-2 text-sm text-red-600"
            aria-live="assertive"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";

export default SelectField;
