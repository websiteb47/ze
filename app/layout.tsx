import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zenvora Group – Reliable Manpower Solutions | Domestic & International Staffing",
  description: "Zenvora Group provides skilled, semi-skilled, and unskilled manpower supply services across India and globally. Specializing in construction manpower, blue-collar staffing, white-collar recruitment, and contract staffing.",
  keywords: "manpower supply services, staffing solutions, construction manpower, blue collar staffing, white collar recruitment, workforce solutions India, international recruitment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
