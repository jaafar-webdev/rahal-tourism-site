"use client";

import Link from "next/link";
import { useState } from "react";
import DashboardNavLinks from "./DashboardNavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/trips/create", label: "Create Trip" },
  { href: "/categories/create", label: "Create Category" },
  { href: "/trips/view", label: "View Trips" },
  { href: "/categories/view", label: "View Categories" },
];

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link
            href="/trips/create"
            className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity hidden md:block"
          >
            Rahal Dashboard
          </Link>

          <MobileMenuButton
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          <div className="md:hidden text-xl font-semibold text-gray-800 dark:text-gray-100">
            <Link
              href="/trips/create"
              className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Rahal
            </Link>
          </div>

          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
        </div>

        {isMenuOpen && (
          <MobileMenu
            navItems={navItems}
            onLinkClick={() => setIsMenuOpen(false)}
          />
        )}

        <div className="hidden md:flex justify-center mt-2 md:mt-0">
          <DashboardNavLinks />
        </div>
      </nav>
    </header>
  );
}
