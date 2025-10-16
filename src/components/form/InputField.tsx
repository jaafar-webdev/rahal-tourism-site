import React, { forwardRef } from "react";
import FormLabel from "./FormLabel";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

/**
 * A reusable input field component with a label and error message handling.
 * It supports all standard input attributes.
 * @param {InputFieldProps} props - The props for the component.
 */
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, id, required, error, name, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s/g, "-");
    const errorId = `${inputId}-error`;

    return (
      <div className="mb-4">
        <FormLabel htmlFor={inputId} required={required}>
          {label}
        </FormLabel>
        <input
          id={inputId}
          required={required}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={!!error}
          ref={ref}
          name={name}
          {...props}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
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

InputField.displayName = "InputField";

export default InputField;
