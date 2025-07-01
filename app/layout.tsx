"use client";

import React from "react";
import { Cairo } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/components/providers/LoadingProvider";
import LayoutExtra from "@/components/providers/LayoutExtra";

import "../i18n";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    };

    import("i18next").then(({ default: i18n }) => {
      handleLanguageChange(i18n.language);
      i18n.on("languageChanged", handleLanguageChange);
    });

    return () => {
      import("i18next").then(({ default: i18n }) => {
        i18n.off("languageChanged", handleLanguageChange);
      });
    };
  }, []);

  return (
    <html lang="en" className={cairo.className}>
      <body>
        <QueryProvider>
          <LoadingProvider>
            <div className="flex flex-col min-h-screen bg-gray-50">
              <Navbar />
              <LayoutExtra />
              <main className="flex-grow">{children}</main>
              {/* <Footer /> */}
            </div>
          </LoadingProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
