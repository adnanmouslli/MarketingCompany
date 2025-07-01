"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Type,
  MessageCircle,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function BrandDevelopmentPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Palette,
      title: t(
        "sections.Brand.servicesSection.services.visualIdentityDesign.title"
      ),
      description: t(
        "sections.Brand.servicesSection.services.visualIdentityDesign.description"
      ),
      gradient: "from-[#9333EA] to-[#A855F7]",
    },
    {
      icon: Type,
      title: t("sections.Brand.servicesSection.services.brandMessaging.title"),
      description: t(
        "sections.Brand.servicesSection.services.brandMessaging.description"
      ),
      gradient: "from-[#A855F7] to-[#C084FC]",
    },
    {
      icon: MessageCircle,
      title: t("sections.Brand.servicesSection.services.brandStrategy.title"),
      description: t(
        "sections.Brand.servicesSection.services.brandStrategy.description"
      ),
      gradient: "from-[#C084FC] to-[#D8B4FE]",
    },
    {
      icon: Target,
      title: t("sections.Brand.servicesSection.services.brandGuidelines.title"),
      description: t(
        "sections.Brand.servicesSection.services.brandGuidelines.description"
      ),
      gradient: "from-[#9333EA] to-[#A855F7]",
    },
    {
      icon: Heart,
      title: t("sections.Brand.servicesSection.services.rebranding.title"),
      description: t(
        "sections.Brand.servicesSection.services.rebranding.description"
      ),
      gradient: "from-[#A855F7] to-[#C084FC]",
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
        title={t("sections.Brand.hero.title")}
        description={t("sections.Brand.hero.description")}
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
            {t("sections.Brand.overview.label")}
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#9333EA] to-[#A855F7] bg-clip-text text-transparent mb-8">
            {t("sections.Brand.overview.heading")}
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {t("sections.Brand.overview.paragraph")}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#9333EA] to-[#A855F7] my-12 opacity-50" />
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
              {t("sections.Brand.servicesSection.label")}
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#A855F7] to-[#C084FC] bg-clip-text text-transparent"
            >
              {t("sections.Brand.servicesSection.heading")}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {t("sections.Brand.servicesSection.description")}
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

        {/* Brand Development Process */}
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
              {t("sections.Brand.processSection.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#9333EA] to-[#A855F7] bg-clip-text text-transparent"
            >
              {t("sections.Brand.processSection.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              {t("sections.Brand.processSection.paragraph")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "discoveryResearch",
              "strategyConcept",
              "designImplementation",
            ].map((stepKey, i) => (
              <motion.div
                key={stepKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-[${
                    ["#9333EA", "#A855F7", "#C084FC"][i]
                  }]/10`}
                >
                  <span
                    className={`text-2xl font-bold text-[${
                      ["#9333EA", "#A855F7", "#C084FC"][i]
                    }]`}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#111240] mb-4">
                  {t(`sections.Brand.processSection.steps.${stepKey}.title`)}
                </h3>
                <p className="text-[#111240]/60">
                  {t(
                    `sections.Brand.processSection.steps.${stepKey}.description`
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies - Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("sections.Brand.caseStudies.heading")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t("sections.Brand.caseStudies.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1].map((index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t(`sections.Brand.caseStudies.examples.${index}.title`)}
                </h3>
                <p className="text-sm text-white/60 mb-4">
                  {t(`sections.Brand.caseStudies.examples.${index}.industry`)}
                </p>
                <p className="text-white/70 mb-4">
                  {t(`sections.Brand.caseStudies.examples.${index}.summary`)}
                </p>
                <div className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors">
                  <span className="mr-2">
                    {t(`sections.Brand.caseStudies.examples.${index}.linkText`)}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
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
            {t("sections.Brand.cta.heading")}
          </h2>
          <p className="text-[#111240]/70 max-w-2xl mx-auto mb-8">
            {t("sections.Brand.cta.paragraph")}
          </p>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#9333EA] to-[#A855F7] rounded-lg text-white font-medium hover:from-[#A855F7] hover:to-[#C084FC] transition-all duration-300"
          >
            {t("sections.Brand.cta.button")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
