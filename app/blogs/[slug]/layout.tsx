"use client";

import Footer from "@/components/Footer";
import { Metadata } from "next";
import { useTranslation } from "react-i18next";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  const metadata: Metadata = {
    title: t("blogPost.title"),
    description: t("blogPost.description"),
  };


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0f1035] to-[#2e3267]">
        {children}
      </div>
      <Footer />
    </>
  );
}
