import Link from "next/link";
import React from "react";

const navItems = [
  { href: "/trips/create", label: "Create Trip" },
  { href: "/categories/create", label: "Create Category" },
  { href: "/trips/view", label: "View Trips" },
  { href: "/categories/view", label: "View Categories" },
];

export default function DashboardNavLinks() {
  return (
    <div className="flex items-center gap-2 min-w-max px-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium text-sm border border-transparent hover:border-blue-100 dark:hover:border-gray-600 whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
