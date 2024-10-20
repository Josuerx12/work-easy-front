import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Nunito } from "next/font/google";
import { AuthContextProvider } from "@/context/AuthContext";
import ReactQueryProvider from "@/providers/reactQueryProvider";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work Easy",
  description: "Work Easy a solução de chamados perfeita para sua empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${nunito.className} antialiased`}>
        <AuthContextProvider>
          <ReactQueryProvider>
            <Navbar />
            {children}
            <Toaster />
          </ReactQueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
