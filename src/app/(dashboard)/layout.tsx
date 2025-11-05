import React from "react";
import "./globals.css";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { requireAuth } from "@/lib/auth";

type Props = {
  children: React.ReactNode;
};

export default async function DashboardLayout({ children }: Props) {
  await requireAuth();
  return (
    <div>
      <DashboardHeader />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
