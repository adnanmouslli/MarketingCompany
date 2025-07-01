"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  PhoneOutgoing,
  Zap,
  Send,
  Shield,
  ArrowRight,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function MobileAppsPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Smartphone,
      title: t("sections.mobileAppsPage.servicesSection.services.native.title"),
      description: t(
        "sections.mobileAppsPage.servicesSection.services.native.description"
      ),
      gradient: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
      icon: PhoneOutgoing,
      title: t(
        "sections.mobileAppsPage.servicesSection.services.crossPlatform.title"
      ),
      description: t(
        "sections.mobileAppsPage.servicesSection.services.crossPlatform.description"
      ),
      gradient: "from-[#8B5CF6] to-[#D946EF]",
    },
    {
      icon: Zap,
      title: t("sections.mobileAppsPage.servicesSection.services.pwa.title"),
      description: t(
        "sections.mobileAppsPage.servicesSection.services.pwa.description"
      ),
      gradient: "from-[#D946EF] to-[#EC4899]",
    },
    {
      icon: Send,
      title: t(
        "sections.mobileAppsPage.servicesSection.services.deployment.title"
      ),
      description: t(
        "sections.mobileAppsPage.servicesSection.services.deployment.description"
      ),
      gradient: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
      icon: Shield,
      title: t(
        "sections.mobileAppsPage.servicesSection.services.maintenance.title"
      ),
      description: t(
        "sections.mobileAppsPage.servicesSection.services.maintenance.description"
      ),
      gradient: "from-[#8B5CF6] to-[#D946EF]",
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
        title={t("sections.mobileAppsPage.hero.title")}
        description={t("sections.mobileAppsPage.hero.description")}
      />

      <div className="w-full lg:w-[1280px] mx-auto px-4 py-24">
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
            {t("sections.mobileAppsPage.overview.label")}
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-8">
            {t("sections.mobileAppsPage.overview.heading")}
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {t("sections.mobileAppsPage.overview.text")}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] my-12 opacity-50" />

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
              {t("sections.mobileAppsPage.servicesSection.label")}
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent"
            >
              {t("sections.mobileAppsPage.servicesSection.heading")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {t("sections.mobileAppsPage.servicesSection.description")}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service) => (
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
              {t("sections.mobileAppsPage.technologiesSection.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent"
            >
              {t("sections.mobileAppsPage.technologiesSection.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              {t("sections.mobileAppsPage.technologiesSection.description")}
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Swift",
              "Kotlin",
              "React Native",
              "Flutter",
              "Ionic",
              "Firebase",
              "AWS Amplify",
              "GraphQL",
              "REST APIs",
              "Redux",
              "UIKit",
              "Material Design",
              "ARKit",
              "Core ML",
              "Jetpack Compose",
              "Realm",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg border border-gray-100 text-center hover:shadow-md hover:bg-purple-50 transition-all"
              >
                <p className="text-[#111240]">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("sections.mobileAppsPage.ctaSection.heading")}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            {t("sections.mobileAppsPage.ctaSection.description")}
          </p>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white font-medium hover:from-[#8B5CF6] hover:to-[#D946EF] transition-all duration-300"
          >
            {t("sections.mobileAppsPage.ctaSection.buttonText")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
