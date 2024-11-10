import type { Metadata } from "next";

import DashboardSidebar from "@/components/sidebars/dashboardSidebar";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import LoadingScreen from "@/components/screens/loading";

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
