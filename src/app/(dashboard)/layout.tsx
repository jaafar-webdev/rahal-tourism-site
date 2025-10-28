import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            <Link href="/trips/create">Dashboard</Link>
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="/trips/create"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              Create Trip
            </Link>
            <Link
              href="/categories/create"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              Create Category
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
