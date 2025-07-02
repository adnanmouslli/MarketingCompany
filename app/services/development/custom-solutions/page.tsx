"use client";

import { motion } from "framer-motion";
import {
  Cog,
  Database,
  Lightbulb,
  Puzzle,
  Settings,
  ArrowRight,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export default function CustomSolutionsPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Cog,
      title: t("sections.customSolutions.services.enterpriseSoftware.title"),
      description: t(
        "sections.customSolutions.services.enterpriseSoftware.description"
      ),
      gradient: "from-[#10B981] to-[#059669]",
    },
    {
      icon: Database,
      title: t("sections.customSolutions.services.databaseSolutions.title"),
      description: t(
        "sections.customSolutions.services.databaseSolutions.description"
      ),
      gradient: "from-[#059669] to-[#047857]",
    },
    {
      icon: Lightbulb,
      title: t("sections.customSolutions.services.innovationConsulting.title"),
      description: t(
        "sections.customSolutions.services.innovationConsulting.description"
      ),
      gradient: "from-[#047857] to-[#065F46]",
    },
    {
      icon: Puzzle,
      title: t("sections.customSolutions.services.systemsIntegration.title"),
      description: t(
        "sections.customSolutions.services.systemsIntegration.description"
      ),
      gradient: "from-[#10B981] to-[#059669]",
    },
    {
      icon: Settings,
      title: t("sections.customSolutions.services.legacyModernization.title"),
      description: t(
        "sections.customSolutions.services.legacyModernization.description"
      ),
      gradient: "from-[#059669] to-[#047857]",
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
        title={t("sections.customSolutions.hero.title")}
        description={t("sections.customSolutions.hero.description")}
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
            {t("sections.customSolutions.overview.label")}
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent mb-8">
            {t("sections.customSolutions.overview.heading")}
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {t("sections.customSolutions.overview.text")}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#10B981] to-[#059669] my-12 opacity-50" />
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
              {t("sections.customSolutions.whatWeOffer.label")}
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#059669] to-[#047857] bg-clip-text text-transparent"
            >
              {t("sections.customSolutions.whatWeOffer.heading")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {t("sections.customSolutions.whatWeOffer.text")}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
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
              {t("sections.customSolutions.benefits.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent"
            >
              {t("sections.customSolutions.benefits.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              {t("sections.customSolutions.benefits.text")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: num % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * num }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#111240] mb-4 flex items-center">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-opacity-10 ${
                      num === 1
                        ? "bg-[#10B981]"
                        : num === 2
                        ? "bg-[#059669]"
                        : num === 3
                        ? "bg-[#047857]"
                        : "bg-[#065F46]"
                    }`}
                  >
                    <span
                      className={`font-bold ${
                        num === 1
                          ? "text-[#10B981]"
                          : num === 2
                          ? "text-[#059669]"
                          : num === 3
                          ? "text-[#047857]"
                          : "text-[#065F46]"
                      }`}
                    >
                      {num}
                    </span>
                  </span>
                  {t(`sections.customSolutions.benefits.points.${num}.title`)}
                </h3>
                <p className="text-[#111240]/60">
                  {t(
                    `sections.customSolutions.benefits.points.${num}.description`
                  )}
                </p>
              </motion.div>
            ))}
          </div>
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
              {t("sections.customSolutions.approach.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent"
            >
              {t("sections.customSolutions.approach.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              {t("sections.customSolutions.approach.text")}
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#10B981] to-[#065F46] opacity-20 rounded-full"></div>

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <div
                className="relative flex items-start gap-x-6"
                dir={t("isRTL") ? "rtl" : "ltr"}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#10B981] z-10"></div>

                {t("isRTL") ? (
                  <>
                    <div className="w-1/2 text-end pr-24">
                      <p className="text-[#111240]/60">
                        {t(
                          "sections.customSolutions.approach.steps.1.description"
                        )}
                      </p>
                    </div>
                    <div className="w-1/2 text-start pl-24">
                      <h3 className="text-xl font-semibold text-[#111240]">
                        {t("sections.customSolutions.approach.steps.1.title")}
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 text-end pr-24">
                      <h3 className="text-xl font-semibold text-[#111240]">
                        {t("sections.customSolutions.approach.steps.1.title")}
                      </h3>
                    </div>
                    <div className="w-1/2 text-start pl-24">
                      <p className="text-[#111240]/60">
                        {t(
                          "sections.customSolutions.approach.steps.1.description"
                        )}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <div
                className="relative flex items-start gap-x-6"
                dir={t("isRTL") ? "rtl" : "ltr"}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#059669] z-10"></div>

                {t("isRTL") ? (
                  <>
                    <div className="w-1/2 text-end pr-24">
                      <h3 className="text-xl font-semibold text-[#111240]">
                        {t("sections.customSolutions.approach.steps.2.title")}
                      </h3>
                    </div>
                    <div className="w-1/2 text-start pl-24">
                      <p className="text-[#111240]/60">
                        {t(
                          "sections.customSolutions.approach.steps.2.description"
                        )}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 text-end pr-24">
                      <p className="text-[#111240]/60">
                        {t(
                          "sections.customSolutions.approach.steps.2.description"
                        )}
                      </p>
                    </div>
                    <div className="w-1/2 text-start pl-24">
                      <h3 className="text-xl font-semibold text-[#111240]">
                        {t("sections.customSolutions.approach.steps.2.title")}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <div
                className="relative flex items-start gap-x-6"
                dir={t("isRTL") ? "rtl" : "ltr"}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#047857] z-10"></div>

                {t("isRTL") ? (
                  <>
                    <div className="w-1/2 text-end pr-24">
                      <p className="text-[#111240]/60">
                        {t(
                          "sections.customSolutions.approach.steps.3.description"
                        )}
                      </p>
                    </div>
                    <div className="w-1/2 text-start pl-24">
                      <h3 className="text-xl font-semibold text-[#111240]">
                        {t("sections.customSolutions.approach.steps.3.title")}
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 text-end pr-24">
                      <h3 className="text-xl font-semibold text-[#111240]">
                        {t("sections.customSolutions.approach.steps.3.title")}
                      </h3>
                    </div>
                    <div className="w-1/2 text-start pl-24">
                      <p className="text-[#111240]/60">
                        {t(
                          "sections.customSolutions.approach.steps.3.description"
                        )}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="relative flex items-start gap-x-6"
                dir={t("isRTL") ? "rtl" : "ltr"}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#065F46] z-10"></div>

                {t("isRTL") ? (
                  <>
                    <div className="w-1/2 text-end pr-24">
                      <h3 className="text-xl font-semibold text-[#111240]">
                        {t("sections.customSolutions.approach.steps.4.title")}
                      </h3>
                    </div>
                    <div className="w-1/2 text-start pl-24">
                      <p className="text-[#111240]/60">
                        {t(
                          "sections.customSolutions.approach.steps.4.description"
                        )}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 text-end pr-24">
                      <p className="text-[#111240]/60">
                        {t(
                          "sections.customSolutions.approach.steps.4.description"
                        )}
                      </p>
                    </div>
                    <div className="w-1/2 text-start pl-24">
                      <h3 className="text-xl font-semibold text-[#111240]">
                        {t("sections.customSolutions.approach.steps.4.title")}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
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
            {t("sections.customSolutions.cta.title")}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            {t("sections.customSolutions.cta.description")}
          </p>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-lg text-white font-medium hover:from-[#059669] hover:to-[#047857] transition-all duration-300"
          >
            {t("sections.customSolutions.cta.button")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
