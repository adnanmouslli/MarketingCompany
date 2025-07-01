"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Palette,
  PenTool,
  Users,
  BarChart2,
  Camera,
  Globe,
  LineChart,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ICONS: Record<string, any> = {
  digital: ShoppingCart,
  content: PenTool,
  branding: Palette,
  "social-media": Users,
  "web-development": Globe,
  "mobile-apps": Camera,
  "ui-ux-design": LineChart,
  "custom-solutions": MessageSquare,
  analytics: BarChart2,
  ecommerce: ShoppingCart,
  "content-creation": Camera,
};

const sections = {
  marketing: ["digital", "content", "branding", "social-media"],
  development: [
    "web-development",
    "mobile-apps",
    "ui-ux-design",
    "custom-solutions",
  ],
  specialized: ["analytics", "ecommerce", "content-creation"],
};

export default function ServicesPage() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#111240]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#111240] via-[#1E1C52] to-[#EC4899] animate-gradient"></div>
        </div>

        <div className="relative w-full lg:w-[1280px] mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-6 inline-block"
            >
              {t("sections.services.badge")}
            </motion.span>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FFBD80] bg-clip-text text-transparent mb-6">
              {t("sections.services.title")}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t("sections.services.description")}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-[1280px] mx-auto px-4 py-24">
        {Object.entries(sections).map(([sectionKey, itemKeys]) => (
          <motion.div
            key={sectionKey}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <motion.span
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-4 inline-block"
              >
                {t(`sections.services.${sectionKey}.title`)}
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#111240] via-[#111240]/90 to-[#111240]/80 bg-clip-text text-transparent"
              >
                {t(`sections.services.${sectionKey}.title`)}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
              >
                {t(`sections.services.${sectionKey}.description`)}
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className={`grid gap-8 max-w-7xl mx-auto ${
                itemKeys.length <= 3
                  ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {itemKeys.map((itemKey) => {
                const Icon = ICONS[itemKey];
                const gradient = t(
                  `sections.services.${sectionKey}.items.${itemKey}.gradient`
                );
                const title = t(
                  `sections.services.${sectionKey}.items.${itemKey}.title`
                );
                const description = t(
                  `sections.services.${sectionKey}.items.${itemKey}.description`
                );
                return (
                  <motion.div
                    key={itemKey}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111240]/5 to-[#111240]/10 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative p-8 rounded-2xl bg-white shadow-lg border border-[#111240]/10 hover:bg-[#111240]/5 transition-all duration-300">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-r ${gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#111240] mb-4">
                        {title}
                      </h3>
                      <p className="text-[#111240]/70 mb-6">{description}</p>
                      <Link
                        href={`/services/${sectionKey}/${itemKey}`}
                        className="inline-flex items-center text-[#111240]/80 hover:text-[#111240] group/link"
                      >
                        <span className="mr-2">
                          {t("sections.services.learnMore")}
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
