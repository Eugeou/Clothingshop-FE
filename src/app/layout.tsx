import { Navbars, Footers } from "@/components";
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import Providers from "./Providers";


//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion shop",
  description: "Explore your true style!",
};

interface IProps {
  children: ReactNode;
}

export default function RootLayout ({children}: IProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative">
        <Providers>
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
        </Providers>

      </body>
    </html>
  );
}
