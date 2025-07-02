"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Globe, 
  Mail, 
  PieChart, 
  Megaphone, 
  ArrowRight 
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function DigitalMarketingPage() {

  const { t } = useTranslation();

  const services = [
    {
      icon: Search,
      title: t("sections.digital.servicesSection.services.seo.title"),
      description: t(
        "sections.digital.servicesSection.services.seo.description"
      ),
      gradient: "from-[#3B82F6] to-[#60A5FA]",
    },
    {
      icon: Megaphone,
      title: t(
        "sections.digital.servicesSection.services.paidAdvertising.title"
      ),
      description: t(
        "sections.digital.servicesSection.services.paidAdvertising.description"
      ),
      gradient: "from-[#60A5FA] to-[#93C5FD]",
    },
    {
      icon: Mail,
      title: t(
        "sections.digital.servicesSection.services.emailMarketing.title"
      ),
      description: t(
        "sections.digital.servicesSection.services.emailMarketing.description"
      ),
      gradient: "from-[#93C5FD] to-[#BFDBFE]",
    },
    {
      icon: Globe,
      title: t(
        "sections.digital.servicesSection.services.contentMarketing.title"
      ),
      description: t(
        "sections.digital.servicesSection.services.contentMarketing.description"
      ),
      gradient: "from-[#3B82F6] to-[#60A5FA]",
    },
    {
      icon: PieChart,
      title: t(
        "sections.digital.servicesSection.services.analyticsReporting.title"
      ),
      description: t(
        "sections.digital.servicesSection.services.analyticsReporting.description"
      ),
      gradient: "from-[#60A5FA] to-[#93C5FD]",
    },
  ];
  const steps = [
    { key: "research" },
    { key: "strategy" },
    { key: "implementation" },
    { key: "monitoring" },
    { key: "optimization" },
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
        title={t("sections.digital.hero.title")}
        description={t("sections.digital.hero.description")}
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
            {t("sections.digital.overview.label")}
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent mb-8">
            {t("sections.digital.overview.heading")}
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {t("sections.digital.overview.paragraph")}
          </p>
        </motion.div>

        <div className="w-full h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] my-12 opacity-50" />

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
              {t("sections.digital.servicesSection.label")}
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent"
            >
              {t("sections.digital.servicesSection.heading")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {t("sections.digital.servicesSection.description")}
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

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16 px-4 sm:px-0">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-5 py-2 rounded-full text-sm font-semibold bg-[#111240]/10 text-[#111240] backdrop-blur-sm mb-5 inline-block tracking-wide"
            >
              {t("sections.digital.processSection.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent tracking-tight"
            >
              {t("sections.digital.processSection.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-[#111240]/75 max-w-3xl mx-auto leading-relaxed"
            >
              {t("sections.digital.processSection.paragraph")}
            </motion.p>
          </div>

          <div className="relative mb-24 px-4 sm:px-0">
            {/* الخط الأفقي */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] transform -translate-y-1/2 rounded-full opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
              {steps.map(({ key }, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 * (index + 1) }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* الدائرة */}
                  <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white border-2 border-[#3B82F6] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-md"></div>

                  {/* المحتوى */}
                  <div
                    className={`${
                      index % 2 === 0 ? "pt-28" : "pb-24"
                    } text-center max-w-xs mx-auto`}
                  >
                    <h3 className="text-lg font-semibold text-[#111240] mt-8 mb-3 leading-snug tracking-tight">
                      {t(`sections.digital.processSection.steps.${key}.title`)}
                    </h3>
                    <p className="text-sm text-[#111240]/70 leading-relaxed">
                      {t(
                        `sections.digital.processSection.steps.${key}.description`
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("sections.digital.resultsSection.heading")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t("sections.digital.resultsSection.paragraph")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">
                {t(
                  "sections.digital.resultsSection.metrics.organicTraffic.value"
                )}
              </h3>
              <p className="text-lg font-medium text-white/80 mb-2">
                {t(
                  "sections.digital.resultsSection.metrics.organicTraffic.label"
                )}
              </p>
              <p className="text-white/70">
                {t(
                  "sections.digital.resultsSection.metrics.organicTraffic.description"
                )}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">
                {t("sections.digital.resultsSection.metrics.roi.value")}
              </h3>
              <p className="text-lg font-medium text-white/80 mb-2">
                {t("sections.digital.resultsSection.metrics.roi.label")}
              </p>
              <p className="text-white/70">
                {t("sections.digital.resultsSection.metrics.roi.description")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">
                {t(
                  "sections.digital.resultsSection.metrics.conversionRate.value"
                )}
              </h3>
              <p className="text-lg font-medium text-white/80 mb-2">
                {t(
                  "sections.digital.resultsSection.metrics.conversionRate.label"
                )}
              </p>
              <p className="text-white/70">
                {t(
                  "sections.digital.resultsSection.metrics.conversionRate.description"
                )}
              </p>
            </div>
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
            {t("sections.digital.cta.heading")}
          </h2>
          <p className="text-[#111240]/70 max-w-2xl mx-auto mb-8">
            {t("sections.digital.cta.paragraph")}
          </p>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-lg text-white font-medium hover:from-[#60A5FA] hover:to-[#93C5FD] transition-all duration-300"
          >
            {t("sections.digital.cta.button")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}