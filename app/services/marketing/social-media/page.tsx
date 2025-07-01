"use client";

import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  BarChart2, 
  ArrowRight 
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SocialMediaPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Instagram,
      title: t(
        "sections.SocialMedia.servicesSection.services.contentCreation.title"
      ),
      description: t(
        "sections.SocialMedia.servicesSection.services.contentCreation.description"
      ),
      gradient: "from-[#EC4899] to-[#F472B6]",
    },
    {
      icon: BarChart2,
      title: t("sections.SocialMedia.servicesSection.services.analytics.title"),
      description: t(
        "sections.SocialMedia.servicesSection.services.analytics.description"
      ),
      gradient: "from-[#F472B6] to-[#FB7185]",
    },
    {
      icon: Facebook,
      title: t(
        "sections.SocialMedia.servicesSection.services.communityManagement.title"
      ),
      description: t(
        "sections.SocialMedia.servicesSection.services.communityManagement.description"
      ),
      gradient: "from-[#FB7185] to-[#FCA5A5]",
    },
    {
      icon: Twitter,
      title: t(
        "sections.SocialMedia.servicesSection.services.paidCampaigns.title"
      ),
      description: t(
        "sections.SocialMedia.servicesSection.services.paidCampaigns.description"
      ),
      gradient: "from-[#EC4899] to-[#F472B6]",
    },
    {
      icon: Linkedin,
      title: t(
        "sections.SocialMedia.servicesSection.services.strategyDevelopment.title"
      ),
      description: t(
        "sections.SocialMedia.servicesSection.services.strategyDevelopment.description"
      ),
      gradient: "from-[#F472B6] to-[#FB7185]",
    },
  ];
  

  const platforms = [
    { name: "Instagram", icon: Instagram, color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]" },
    { name: "Facebook", icon: Facebook, color: "bg-[#1877F2]" },
    { name: "Twitter/X", icon: Twitter, color: "bg-black" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-[#0A66C2]" },
    { name: "TikTok", icon: BarChart2, color: "bg-black" }, // Using BarChart2 as a placeholder for TikTok
    { name: "Pinterest", icon: BarChart2, color: "bg-[#E60023]" }, // Using BarChart2 as a placeholder for Pinterest
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
        title={t("sections.SocialMedia.hero.title")}
        description={t("sections.SocialMedia.hero.description")}
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
            {t("sections.SocialMedia.overview.label")}
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent mb-8">
            {t("sections.SocialMedia.overview.heading")}
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {t("sections.SocialMedia.overview.paragraph")}
          </p>
        </motion.div>

        <div className="w-full h-[2px] bg-gradient-to-r from-[#EC4899] to-[#F472B6] my-12 opacity-50" />
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
              {t("sections.SocialMedia.servicesSection.label")}
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F472B6] to-[#FB7185] bg-clip-text text-transparent"
            >
              {t("sections.SocialMedia.servicesSection.heading")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {t("sections.SocialMedia.servicesSection.description")}
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

        {/* Platforms We Manage */}
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
              {t("sections.SocialMedia.platforms.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent"
            >
              {t("sections.SocialMedia.platforms.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              {t("sections.SocialMedia.platforms.paragraph")}
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mb-3`}
                >
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-[#111240]">
                  {platform.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("sections.SocialMedia.metrics.heading")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t("sections.SocialMedia.metrics.paragraph")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+48%</h3>
              <p className="text-white/70">
                {t("sections.SocialMedia.metrics.stats.engagement")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+65%</h3>
              <p className="text-white/70">
                {t("sections.SocialMedia.metrics.stats.followers")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+32%</h3>
              <p className="text-white/70">
                {t("sections.SocialMedia.metrics.stats.traffic")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+43%</h3>
              <p className="text-white/70">
                {t("sections.SocialMedia.metrics.stats.conversion")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Approach */}
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
              {t("sections.SocialMedia.processSection.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent"
            >
              {t("sections.SocialMedia.processSection.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              {t("sections.SocialMedia.processSection.paragraph")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "audit",
              "planning",
              "creation",
              "management",
              "optimization",
            ].map((stepKey, idx) => (
              <motion.div
                key={stepKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6`}
                  style={{
                    backgroundColor: [
                      "rgba(236, 72, 153, 0.1)",
                      "rgba(244, 114, 182, 0.1)",
                      "rgba(251, 113, 133, 0.1)",
                      "rgba(252, 165, 165, 0.1)",
                      "rgba(236, 72, 153, 0.1)",
                    ][idx],
                  }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{
                      color: [
                        "#EC4899",
                        "#F472B6",
                        "#FB7185",
                        "#FCA5A5",
                        "#EC4899",
                      ][idx],
                    }}
                  >
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#111240] mb-4">
                  {t(
                    `sections.SocialMedia.processSection.steps.${stepKey}.title`
                  )}
                </h3>
                <p className="text-sm text-[#111240]/60">
                  {t(
                    `sections.SocialMedia.processSection.steps.${stepKey}.description`
                  )}
                </p>
              </motion.div>
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
            {t("sections.SocialMedia.cta.heading")}
          </h2>
          <p className="text-[#111240]/70 max-w-2xl mx-auto mb-8">
            {t("sections.SocialMedia.cta.paragraph")}
          </p>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#EC4899] to-[#F472B6] rounded-lg text-white font-medium hover:from-[#F472B6] hover:to-[#FB7185] transition-all duration-300"
          >
            {t("sections.SocialMedia.cta.button")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}