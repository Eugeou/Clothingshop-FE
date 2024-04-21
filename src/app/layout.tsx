import { Navbars, Footers } from "@/components";
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


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
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          
            <Navbars />
            {children}
            <Footers />

        </ThemeProvider>

      </body>
    </html>
  );
}
