import { Navbars, Footers } from "@/components";
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";


//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion shop",
  description: "Explore your true style!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbars />
        {children}
        <Footers />
      </body>
    </html>
  );
}
