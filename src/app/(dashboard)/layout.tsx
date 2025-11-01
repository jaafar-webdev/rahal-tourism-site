import React from "react";
import "./globals.css";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div>
      <DashboardHeader />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
