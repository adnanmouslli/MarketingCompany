"use client";

import { motion } from "framer-motion";
import { Search, Upload, Bell, Activity, BookOpen } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function JobsIciPage() {
  const { t } = useTranslation();
  const params = useParams();
  const { name } = params;

  const services = [
    {
      icon: Search,
      title: t("services.extensiveJobListings.title"),
      description: t("services.extensiveJobListings.description"),
      gradient: "from-[#00B4D8] to-[#4A9BE4]",
    },
    {
      icon: Upload,
      title: t("services.resumeSubmission.title"),
      description: t("services.resumeSubmission.description"),
      gradient: "from-[#4A9BE4] to-[#8590EA]",
    },
    {
      icon: Bell,
      title: t("services.personalizedJobAlerts.title"),
      description: t("services.personalizedJobAlerts.description"),
      gradient: "from-[#8590EA] to-[#B5C6F4]",
    },
    {
      icon: Activity,
      title: t("services.applicationTracking.title"),
      description: t("services.applicationTracking.description"),
      gradient: "from-[#00B4D8] to-[#4A9BE4]",
    },
    {
      icon: BookOpen,
      title: t("services.careerResources.title"),
      description: t("services.careerResources.description"),
      gradient: "from-[#4A9BE4] to-[#8590EA]",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero
        title={t("hero.title")}
        description={t("hero.description")}
      />

      <div className="w-full lg:w-[1280px]  mx-auto px-4 py-24">
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
            {t("overview.title")}
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00B4D8] to-[#4A9BE4] bg-clip-text text-transparent mb-8">
            {t("overview.heading")}
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed">
            {t("overview.description")}
          </p>
        </motion.div>

        <div className="w-full h-[1px] bg-gradient-to-r from-[#00B4D8] to-[#4A9BE4] my-8 opacity-50" />

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center mb-16">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-4 inline-block"
            >
              {t("features.title")}
            </motion.span>
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              {t("features.heading")}
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {t("features.description")}
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
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
                  <p className="text-[#111240]/60 mb-6">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
