"use client";

import { motion } from "framer-motion";
import { Globe, Code, Layout, Database, Figma, ArrowRight } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function WebDevelopmentPage() {
  const { t } = useTranslation();

  // ترجمة الخدمات من ملف الترجمة
  const services = [
    {
      icon: Code,
      title: t(
        "sections.WebDevelopment.whatWeOffer.services.frontendDevelopment.title"
      ),
      description: t(
        "sections.WebDevelopment.whatWeOffer.services.frontendDevelopment.description"
      ),
      gradient: "from-[#3785CC] to-[#4A9BE4]",
    },
    {
      icon: Database,
      title: t(
        "sections.WebDevelopment.whatWeOffer.services.backendDevelopment.title"
      ),
      description: t(
        "sections.WebDevelopment.whatWeOffer.services.backendDevelopment.description"
      ),
      gradient: "from-[#4A9BE4] to-[#8590EA]",
    },
    {
      icon: Layout,
      title: t(
        "sections.WebDevelopment.whatWeOffer.services.cmsDevelopment.title"
      ),
      description: t(
        "sections.WebDevelopment.whatWeOffer.services.cmsDevelopment.description"
      ),
      gradient: "from-[#8590EA] to-[#B5C6F4]",
    },
    {
      icon: Globe,
      title: t(
        "sections.WebDevelopment.whatWeOffer.services.ecommerceSolutions.title"
      ),
      description: t(
        "sections.WebDevelopment.whatWeOffer.services.ecommerceSolutions.description"
      ),
      gradient: "from-[#3785CC] to-[#4A9BE4]",
    },
    {
      icon: Figma,
      title: t(
        "sections.WebDevelopment.whatWeOffer.services.webApplicationDevelopment.title"
      ),
      description: t(
        "sections.WebDevelopment.whatWeOffer.services.webApplicationDevelopment.description"
      ),
      gradient: "from-[#4A9BE4] to-[#8590EA]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title={t("sections.WebDevelopment.hero.title")}
        description={t("sections.WebDevelopment.hero.description")}
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
            {t("sections.WebDevelopment.overview.label")}
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent mb-8">
            {t("sections.WebDevelopment.overview.heading")}
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {t("sections.WebDevelopment.overview.text")}
          </p>
        </motion.div>

        <div className="w-full h-[2px] bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] my-12 opacity-50" />

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
              {t("sections.WebDevelopment.whatWeOffer.label")}
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              {t("sections.WebDevelopment.whatWeOffer.heading")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {t("sections.WebDevelopment.whatWeOffer.text")}
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

        {/* Technologies Section */}
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
              {t("sections.WebDevelopment.expertise.label")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent"
            >
              {t("sections.WebDevelopment.expertise.heading")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              {t("sections.WebDevelopment.expertise.text")}
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {(
              t("sections.WebDevelopment.expertise.technologies", {
                returnObjects: true,
              }) as string[]
            ).map((tech: string, index: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg border border-gray-100 text-center hover:shadow-md hover:bg-blue-50 transition-all"
              >
                <p className="text-[#111240]">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("sections.WebDevelopment.cta.heading")}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            {t("sections.WebDevelopment.cta.description")}
          </p>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] rounded-lg text-white font-medium hover:from-[#4A9BE4] hover:to-[#8590EA] transition-all duration-300"
          >
            {t("sections.WebDevelopment.cta.button")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
