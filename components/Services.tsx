"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShoppingCart,
  PenTool,
  Palette,
  Users,
  Globe,
  Smartphone,
  Layers,
  Code,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  },
  shine: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: [0, 1, 0],
      x: 100,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  },
};

const ServiceCard = ({ service }: any) => {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={variants.item}
      className="group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="relative overflow-hidden mb-6">
          <motion.div
            variants={variants.shine}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
            {t(service.title)}
          </h3>
          <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-teal-500" />
        </div>

        <p className="text-white/70 leading-relaxed mb-6">
          {t(service.description)}
        </p>

        <Link
          href={service.link}
          className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors group/link"
        >
          <span>{t("sections.category.learnMore")}</span>
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const { t } = useTranslation();

  const marketingServices = [
    {
      icon: ShoppingCart,
      title: "services.marketing.digitalMarketing.title",
      description: "services.marketing.digitalMarketing.description",
      link: "/services/marketing/digital",
    },
    {
      icon: PenTool,
      title: "services.marketing.contentStrategy.title",
      description: "services.marketing.contentStrategy.description",
      link: "/services/marketing/content",
    },
    {
      icon: Palette,
      title: "services.marketing.brandDevelopment.title",
      description: "services.marketing.brandDevelopment.description",
      link: "/services/marketing/branding",
    },
    {
      icon: Users,
      title: "services.marketing.socialMediaManagement.title",
      description: "services.marketing.socialMediaManagement.description",
      link: "/services/marketing/social-media",
    },
  ];

  const developmentServices = [
    {
      icon: Globe,
      title: "services.development.webDevelopment.title",
      description: "services.development.webDevelopment.description",
      link: "/services/development/web-development",
    },
    {
      icon: Smartphone,
      title: "services.development.mobileApps.title",
      description: "services.development.mobileApps.description",
      link: "/services/development/mobile-apps",
    },
    {
      icon: Layers,
      title: "services.development.uiUxDesign.title",
      description: "services.development.uiUxDesign.description",
      link: "/services/development/ui-ux-design",
    },
    {
      icon: Code,
      title: "services.development.customSolutions.title",
      description: "services.development.customSolutions.description",
      link: "/services/development/custom-solutions",
    },
  ];

  return (
    <section className="py-24 bg-[#111240] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants.container}
        className="relative z-10 max-w-7xl mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.div
            variants={variants.item}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>{t("sections.services.badge1")}</span>
          </motion.div>

          <motion.h2
            variants={variants.item}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              {t("sections.services.title1")}
            </span>
          </motion.h2>

          <motion.p
            variants={variants.item}
            className="max-w-2xl mx-auto text-lg text-white/60"
          >
            {t("sections.services.description1")}
          </motion.p>
        </div>

        {/* Marketing Services Section */}
        <motion.div variants={variants.item} className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 pb-2 border-b border-white/10">
            {t("services.marketing.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </motion.div>

        {/* Development Services Section */}
        <motion.div variants={variants.item}>
          <h3 className="text-2xl font-bold text-white mb-8 pb-2 border-b border-white/10">
            {t("services.development.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
