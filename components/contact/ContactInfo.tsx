"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();

  const contactDetails = [
    {
      icon: MapPin,
      title: t("info.address.title"),
      details: [
        t("info.address.line1"),
        t("info.address.line2"),
      ],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Phone,
      title: t("info.phone.title"),
      details: [
        { label: t("info.phone.main"), text: "+20 123 456 789" },
        { label: t("info.phone.support"), text: "+20 123 456 790" },
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: t("info.email.title"),
      details: ["contact@atlants.com", "support@atlants.com"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Globe,
      title: t("info.hours.title"),
      details: [t("info.hours.weekdays"), t("info.hours.saturday")],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      <motion.div variants={itemVariants} className="space-y-4">
        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm inline-block">
          {t("info.badge")}
        </span>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#111240] via-[#111240]/90 to-[#111240]/80 bg-clip-text text-transparent">
          {t("info.title")}
        </h2>
        <p className="text-[#111240]/70 text-lg leading-relaxed max-w-lg">
          {t("info.subtitle")}
        </p>
      </motion.div>

      <motion.div variants={containerVariants} className="space-y-8">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3785CC]/5 to-[#5B8AF0]/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative p-6 rounded-xl bg-white shadow-lg border border-[#111240]/10 hover:bg-[#111240]/5 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#111240] font-semibold mb-2">
                    {item.title}
                  </h3>
                  {item.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center space-x-2 text-[#111240]/70"
                    >
                      {typeof detail === "string" ? (
                        <span>{detail}</span>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-[#111240]">
                            {detail.label}
                          </span>
                          <span>{detail.text}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-lg font-semibold text-[#111240]">
          {t("info.followUs")}
        </h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="p-3 rounded-lg bg-[#111240]/5 hover:bg-[#111240]/10 text-[#111240]/80 hover:text-[#111240] transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
