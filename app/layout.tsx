"use client"; // مهم جداً عشان i18next يتفاعل مع المتصفح

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/components/providers/LoadingProvider";
import LayoutExtra from "@/components/providers/LayoutExtra";

import "../i18n"; // استدعاء ملف إعداد i18n هنا

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    // تحديث اتجاه الصفحة عند تغيير اللغة من i18n
    const handleLanguageChange = (lng: string) => {
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    };

    // اشتراك في حدث تغيير اللغة
    import("i18next").then(({ default: i18n }) => {
      handleLanguageChange(i18n.language);
      i18n.on("languageChanged", handleLanguageChange);
    });

    // تنظيف الاشتراك
    return () => {
      import("i18next").then(({ default: i18n }) => {
        i18n.off("languageChanged", handleLanguageChange);
      });
    };
  }, []);

  return (
    <html lang="en" className={inter.className}>
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
