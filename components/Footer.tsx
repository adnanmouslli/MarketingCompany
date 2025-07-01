"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    services: {
      title: t("sections.footer.services.title"),
      links: [
        {
          text: t("sections.footer.services.links.marketingStrategy"),
          href: "/services/marketing-strategy",
        },
        {
          text: t("sections.footer.services.links.digitalMarketing"),
          href: "/services/digital-marketing",
        },
        {
          text: t("sections.footer.services.links.socialMedia"),
          href: "/services/social-media",
        },
        {
          text: t("sections.footer.services.links.contentCreation"),
          href: "/services/content",
        },
      ],
    },
    solutions: {
      title: t("sections.footer.solutions.title"),
      links: [
        {
          text: t("sections.footer.solutions.links.webDevelopment"),
          href: "/solutions/web-development",
        },
        {
          text: t("sections.footer.solutions.links.mobileApps"),
          href: "/solutions/mobile-apps",
        },
        {
          text: t("sections.footer.solutions.links.uiUxDesign"),
          href: "/solutions/design",
        },
        {
          text: t("sections.footer.solutions.links.customSoftware"),
          href: "/solutions/custom-software",
        },
      ],
    },
  };

  const contactInfo = [
    { Icon: MapPin, text: t("sections.footer.contactInfo.address") },
    { Icon: Phone, text: t("sections.footer.contactInfo.phone") },
    { Icon: Mail, text: t("sections.footer.contactInfo.email") },
    { Icon: Globe, text: t("sections.footer.contactInfo.website") },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#", label: t("sections.footer.social.facebook") },
    { Icon: Twitter, href: "#", label: t("sections.footer.social.twitter") },
    { Icon: Linkedin, href: "#", label: t("sections.footer.social.linkedin") },
    { Icon: Instagram, href: "#", label: t("sections.footer.social.instagram") },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const pathname = usePathname();
  if (pathname.startsWith("/admin") || pathname.startsWith("/blogs/")) {
    return null;
  }

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="relative group">
              {/* Glow Effects */}
              <div
                className="absolute inset-0 -m-4 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-blue-500/0 
                              group-hover:from-emerald-500/20 group-hover:via-emerald-500/20 group-hover:to-blue-500/20 
                              rounded-full blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"
              />

              {/* Inner Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-blue-500/0 
                              group-hover:from-emerald-500/10 group-hover:to-blue-500/10 
                              rounded-full blur-md transition-all duration-500"
              />

              {/* Logo Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                <Link href="/" className="block relative group">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/logo_4.png"
                      alt={t("sections.footer.companyName", "Atlants Logo")}
                      width={100}
                      height={100}
                      className="transform transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div
                        className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000
                                    bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            <div className="space-y-3 mt-6">
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("sections.footer.companyDescription")}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 
                      transition-all duration-300 group hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.Icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              {footerLinks.services.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {footerLinks.solutions.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("sections.footer.contactInfo.title")}
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                    <item.Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <span className="text-slate-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Powered by Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8 border-t border-slate-800"
        >
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Main Powered by Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center justify-center space-x-3 px-6 py-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300">
                <span className="text-sm text-slate-400">
                  {t("sections.footer.poweredBy")}
                </span>

                <div className="flex items-center space-x-2 pl-2 border-l border-slate-700">
                  <Image
                    src="/logo-anycode.png"
                    alt={t("sections.footer.poweredByLogoAlt", "AnyCode Logo")}
                    width={90}
                    height={30}
                    className="h-6 w-auto transition-transform duration-300 group-hover:scale-110"
                  />

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-700 font-mono font-medium"
                  >
                    &lt; AnyCode /&gt;
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Optional Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-slate-500 text-center max-w-md"
            >
              {t("sections.footer.poweredByDescription")}
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              {t("sections.footer.copyright", {
                year: new Date().getFullYear(),
              })}
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-slate-500 hover:text-slate-400 transition-colors duration-300"
              >
                {t("sections.footer.privacyPolicy")}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-500 hover:text-slate-400 transition-colors duration-300"
              >
                {t("sections.footer.termsOfService")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
