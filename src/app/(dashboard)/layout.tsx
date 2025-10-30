import React from "react";
import "./globals.css";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardHeader />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
