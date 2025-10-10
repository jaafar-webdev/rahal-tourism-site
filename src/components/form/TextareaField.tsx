import React from "react";
import FormLabel from "./FormLabel";

interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

/**
 * A reusable textarea field component with a label and error message handling.
 * @param {TextareaFieldProps} props - The props for the component.
 */
const TextareaField = ({
  label,
  id,
  required,
  error,
  ...props
}: TextareaFieldProps) => {
  const textareaId = id || label.toLowerCase().replace(/\s/g, "-");
  const errorId = `${textareaId}-error`;

  return (
    <div className="mb-4">
      <FormLabel htmlFor={textareaId} required={required}>
        {label}
      </FormLabel>
      <textarea
        id={textareaId}
        required={required}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
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
};

export default TextareaField;
