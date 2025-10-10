import React from "react";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

/**
 * A standardized label component for form elements.
 * It supports an optional 'required' prop to display a red asterisk.
 * @param {FormLabelProps} props - The props for the component.
 */
const FormLabel = ({ children, required, ...props }: FormLabelProps) => {
  return (
    <label
      {...props}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default FormLabel;
