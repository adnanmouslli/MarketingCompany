"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import React from "react";

export default function AboutPage() {
  const { t } = useTranslation();

  const aboutData = {
    title: t("about.title"),
    subtitle: t("about.subtitle"),
    description: [
      t("about.description.0"),
      t("about.description.1"),
      t("about.description.2"),
    ],
    img: "/background.png",
    mission: t("about.mission"),
    vision: t("about.vision"),
    values: [
      {
        id: 1,
        icon: "Globe",
        title: t("about.values.globalApproach.title"),
        text: t("about.values.globalApproach.text"),
      },
      {
        id: 2,
        icon: "Target",
        title: t("about.values.resultsFocused.title"),
        text: t("about.values.resultsFocused.text"),
      },
      {
        id: 3,
        icon: "Compass",
        title: t("about.values.clearVision.title"),
        text: t("about.values.clearVision.text"),
      },
      {
        id: 4,
        icon: "Shield",
        title: t("about.values.strongEthics.title"),
        text: t("about.values.strongEthics.text"),
      },
      {
        id: 5,
        icon: "Code",
        title: t("about.values.technicalExcellence.title"),
        text: t("about.values.technicalExcellence.text"),
      },
      {
        id: 6,
        icon: "Megaphone",
        title: t("about.values.marketingCreativity.title"),
        text: t("about.values.marketingCreativity.text"),
      },
    ],
    stats: [
      { id: 1, number: "7+", label: t("about.stats.yearsExperience") },
      { id: 2, number: "150+", label: t("about.stats.completedProjects") },
      { id: 3, number: "35+", label: t("about.stats.teamExperts") },
      { id: 4, number: "96%", label: t("about.stats.clientSatisfaction") },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // دالة لإرجاع أيقونة مع type assertion
  function getIcon(name: string): React.FC<React.SVGProps<SVGSVGElement>> {
    if (name in LucideIcons) {
      return LucideIcons[name as keyof typeof LucideIcons] as React.FC<
        React.SVGProps<SVGSVGElement>
      >;
    }
    return LucideIcons.Globe;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <div className="relative overflow-hidden bg-[#111240]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] animate-gradient"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-6 inline-block"
            >
              {t("about.headerBadge")}
            </motion.span>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent mb-6">
              {aboutData.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {aboutData.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Light */}
      <div className="bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3785CC]/5 via-[#5B8AF0]/5 to-[#8590EA]/5 animate-gradient"></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company History */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={aboutData.img}
                    alt={t("about.imgAlt")}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {aboutData.stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    variants={itemVariants}
                    className="p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[#111240]/60 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Story Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent">
                  {t("about.ourStoryTitle")}
                </h2>
                <div className="space-y-4 text-[#111240]/70 text-lg leading-relaxed">
                  {aboutData.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent">
                    {t("about.missionTitle")}
                  </h3>
                  <p className="text-[#111240]/70">{aboutData.mission}</p>
                </div>
                <div className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent">
                    {t("about.visionTitle")}
                  </h3>
                  <p className="text-[#111240]/70">{aboutData.vision}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Values Section - Dark */}
      <div className="relative overflow-hidden bg-[#111240]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] animate-gradient"></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.span
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-4 inline-block"
              >
                {t("about.valuesBadge")}
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent"
              >
                {t("about.valuesTitle")}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-white/80 max-w-2xl mx-auto"
              >
                {t("about.valuesDescription")}
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {aboutData.values.map((value) => {
                const IconComp = getIcon(value.icon);
                return (
                  <motion.div
                    key={value.id}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                    <div className="relative p-8 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-300">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center">
                        <IconComp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {value.title}
                      </h3>
                      <p className="text-white/80">{value.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent"
            >
              {t("about.ctaTitle")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              {t("about.ctaDescription")}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="px-8 py-3 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] text-white font-medium rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center mx-auto"
            >
              <a href="/contact">{t("about.ctaButton")}</a>
              <LucideIcons.ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
