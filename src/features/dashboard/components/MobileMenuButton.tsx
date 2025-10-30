import React from "react";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({
  isMenuOpen,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
      aria-label="Toggle navigation menu"
      aria-expanded={isMenuOpen}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isMenuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}
