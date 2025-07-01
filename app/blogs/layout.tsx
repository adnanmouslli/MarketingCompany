"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("blog.title");
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", t("blog.description"));
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = t("blog.description");
      document.head.appendChild(meta);
    }
  }, [t]);

  return <>{children}</>;
}
