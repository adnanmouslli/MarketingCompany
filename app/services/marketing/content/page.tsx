"use client";

import { motion } from "framer-motion";
import {
  FileText,
  PenTool,
  Compass,
  BarChart2,
  Users,
  ArrowRight,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ContentStrategyPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Compass,
      title: t(
        "sections.Content.servicesSection.services.contentStrategyDevelopment.title"
      ),
      description: t(
        "sections.Content.servicesSection.services.contentStrategyDevelopment.description"
      ),
      gradient: "from-[#14B8A6] to-[#2DD4BF]",
    },
    {
      icon: FileText,
      title: t(
        "sections.Content.servicesSection.services.contentCreation.title"
      ),
      description: t(
        "sections.Content.servicesSection.services.contentCreation.description"
      ),
      gradient: "from-[#2DD4BF] to-[#5EEAD4]",
    },
    {
      icon: Users,
      title: t(
        "sections.Content.servicesSection.services.audienceResearch.title"
      ),
      description: t(
        "sections.Content.servicesSection.services.audienceResearch.description"
      ),
      gradient: "from-[#5EEAD4] to-[#99F6E4]",
    },
    {
      icon: PenTool,
      title: t(
        "sections.Content.servicesSection.services.contentOptimization.title"
      ),
      description: t(
        "sections.Content.servicesSection.services.contentOptimization.description"
      ),
      gradient: "from-[#14B8A6] to-[#2DD4BF]",
    },
    {
      icon: BarChart2,
      title: t(
        "sections.Content.servicesSection.services.contentPerformanceAnalysis.title"
      ),
      description: t(
        "sections.Content.servicesSection.services.contentPerformanceAnalysis.description"
      ),
      gradient: "from-[#2DD4BF] to-[#5EEAD4]",
    },
  ];

  const contentTypes = [
    {
      title: t("sections.Content.contentFormats.types.blogPosts.title"),
      description: t(
        "sections.Content.contentFormats.types.blogPosts.description"
      ),
    },
    {
      title: t("sections.Content.contentFormats.types.caseStudies.title"),
      description: t(
        "sections.Content.contentFormats.types.caseStudies.description"
      ),
    },
    {
      title: t("sections.Content.contentFormats.types.whitepapers.title"),
      description: t(
        "sections.Content.contentFormats.types.whitepapers.description"
      ),
    },
    {
      title: t("sections.Content.contentFormats.types.infographics.title"),
      description: t(
        "sections.Content.contentFormats.types.infographics.description"
      ),
    },
    {
      title: t("sections.Content.contentFormats.types.videos.title"),
      description: t(
        "sections.Content.contentFormats.types.videos.description"
      ),
    },
    {
      title: t("sections.Content.contentFormats.types.emailNewsletters.title"),
      description: t(
        "sections.Content.contentFormats.types.emailNewsletters.description"
      ),
    },
    {
      title: t(
        "sections.Content.contentFormats.types.socialMediaContent.title"
      ),
      description: t(
        "sections.Content.contentFormats.types.socialMediaContent.description"
      ),
    },
    {
      title: t("sections.Content.contentFormats.types.websiteCopy.title"),
      description: t(
        "sections.Content.contentFormats.types.websiteCopy.description"
      ),
    },
  ];
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
      <ServiceHero
        title={t("sections.Content.hero.title")}
        description={t("sections.Content.hero.description")}
      />

      <div className="w-full lg:w-[1280px] mx-auto px-4 py-24">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-24 flex flex-col items-center text-justify"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-6 inline-block"
          >
            {t("sections.Content.overview.label")}
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] bg-clip-text text-transparent mb-8">
            {t("sections.Content.overview.heading")}
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {t("sections.Content.overview.paragraph")}
          </p>
        </motion.div>

        {/* Divider before services */}
        <div className="w-full h-[2px] bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] my-12 opacity-50" />

        {/* Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center mb-16">
            <motion.span
              variants={itemVariants}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-4 inline-block"
            >
              {t("sections.Content.servicesSection.label")}
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#2DD4BF] to-[#5EEAD4] bg-clip-text text-transparent"
            >
              {t("sections.Content.servicesSection.heading")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {t("sections.Content.servicesSection.description")}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative p-8 rounded-2xl bg-white backdrop-blur-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300 shadow-sm">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111240] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#111240]/60">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Content Types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-4 inline-block"
            >
              {t("sections.Content.contentFormats.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] bg-clip-text text-transparent"
            >
              {t("sections.Content.contentFormats.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              {t("sections.Content.contentFormats.paragraph")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(
              t("sections.Content.contentFormats.types", {
                returnObjects: true,
              })
            ).map(([key, value]: any, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#111240] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#111240]/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("sections.Content.processSection.heading")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t("sections.Content.processSection.paragraph")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(
              t("sections.Content.processSection.steps", {
                returnObjects: true,
              })
            ).map(([key, step]: any, index) => (
              <div
                key={key}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold text-[#111240] mb-6">
            {t("sections.Content.cta.heading")}
          </h2>
          <p className="text-[#111240]/70 max-w-2xl mx-auto mb-8">
            {t("sections.Content.cta.paragraph")}
          </p>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] rounded-lg text-white font-medium hover:from-[#2DD4BF] hover:to-[#5EEAD4] transition-all duration-300"
          >
            {t("sections.Content.cta.button")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
