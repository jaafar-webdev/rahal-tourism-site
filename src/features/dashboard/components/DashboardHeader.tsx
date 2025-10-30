import Link from "next/link";

const navItems = [
  { href: "/trips/create", label: "Create Trip" },
  { href: "/categories/create", label: "Create Category" },
  { href: "/trips/view", label: "View Trips" },
  { href: "/categories/view", label: "View Categories" },
];

export default function DashboardHeader() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/trips/create"
          className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          Rahal Dashboard
        </Link>

        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium text-sm border border-transparent hover:border-blue-100 dark:hover:border-gray-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
