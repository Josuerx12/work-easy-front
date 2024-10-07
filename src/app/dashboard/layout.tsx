import type { Metadata } from "next";

import { Nunito } from "next/font/google";
import DashboardSidebar from "@/components/dashboardSidebar";

export const metadata: Metadata = {
  title: "Work Easy - Dashboard",
  description: "Dashboard administrativo WorkEasy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`flex gap-5`}>
      <DashboardSidebar />
      {children}
    </main>
  );
}
