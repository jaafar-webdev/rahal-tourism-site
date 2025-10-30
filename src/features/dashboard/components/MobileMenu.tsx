import Link from "next/link";
import React from "react";

interface MobileMenuProps {
  navItems: { href: string; label: string }[];
  onLinkClick: () => void;
}

export default function MobileMenu({ navItems, onLinkClick }: MobileMenuProps) {
  return (
    <div className="md:hidden mt-2 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium text-base border-b border-gray-100 dark:border-gray-700 last:border-b-0"
          onClick={onLinkClick}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
