"use client";

import { motion } from "framer-motion";
import {
  Search,
  Shield,
  ArrowLeftRight,
  Activity,
  BookOpen,
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useTranslation } from "react-i18next";

const fetchingFeatures = async () => {
  const response = axios("http://localhost:3001/admin/features");
  return (await response).data.response;
};

interface featureObj {
  id: number;
  title: string;
  description: string;
  serviceId: number;
}

const icons = [
  <Search key="search" />,
  <Shield key="shield" />,
  <ArrowLeftRight key="arrowLeftRight" />,
  <Activity key="activity" />,
  <BookOpen key="bookOpen" />,
];

export default function JobsIciPage() {
  const { t } = useTranslation();

  const { data, isFetching, isLoading, error } = useQuery({
    queryKey: ["features"],
    queryFn: fetchingFeatures,
  });

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
        title={t("jobsIci.hero.title")}
        description={t("jobsIci.hero.description")}
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
            {t("jobsIci.overview.label")}
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00B4D8] to-[#4A9BE4] bg-clip-text text-transparent mb-8">
            {t("jobsIci.overview.heading")}
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed">
            {t("jobsIci.overview.text")}
          </p>
        </motion.div>

        <div className="w-full h-[1px] bg-gradient-to-r from-[#00B4D8] to-[#4A9BE4] my-8 opacity-50" />

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
              {t("jobsIci.featuresSection.label")}
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              {t("jobsIci.featuresSection.heading")}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {t("jobsIci.featuresSection.text")}
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data &&
              data.map((feature: featureObj, index: number) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative p-8 rounded-2xl bg-white backdrop-blur-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300 shadow-sm">
                    {icons[index] && (
                      <div className="pb-[20px] bg-gradient-to-r from-[#92c1ed] to-[#2284da] transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center p-4 rounded-xl">
                        {icons[index]}
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-[#111240] mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-[#111240]/60 mb-6">
                      {feature.description}
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
