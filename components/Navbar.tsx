"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const [isLangOpen, setIsLangOpen] = useState(false);

  // إغلاق القائمة لما المستخدم يضغط خارجها
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".lang-dropdown")) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ضبط اتجاه الصفحة تلقائياً حسب اللغة
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  const menuItems = [
    {
      title: t("navbar.services"),
      submenu: [
        {
          title: t("navbar.marketing"),
          href: "/services/marketing",
          items: [
            {
              name: t("navbar.digitalMarketing"),
              href: "/services/marketing/digital",
            },
            {
              name: t("navbar.contentStrategy"),
              href: "/services/marketing/content",
            },
            {
              name: t("navbar.brandDevelopment"),
              href: "/services/marketing/branding",
            },
            {
              name: t("navbar.socialMedia"),
              href: "/services/marketing/social-media",
            },
          ],
        },
        {
          title: t("navbar.development"),
          href: "/services/development",
          items: [
            {
              name: t("navbar.webDevelopment"),
              href: "/services/development/web-development",
            },
            {
              name: t("navbar.mobileApps"),
              href: "/services/development/mobile-apps",
            },
            {
              name: t("navbar.uiux"),
              href: "/services/development/ui-ux-design",
            },
            {
              name: t("navbar.customSolutions"),
              href: "/services/development/custom-solutions",
            },
          ],
        },
      ],
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-emerald-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden rounded-xl p-2">
              <Image
                src="/logo_2.png"
                alt="Atlants Logo"
                width={200}
                height={200}
                className="relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center ${
              i18n.language === "ar"
                ? "flex-row gap-x-8" // بالعربي: ترتيب طبيعي من اليمين لليسار مع مسافات صحيحة
                : "flex-row gap-x-8" // لما إنجليزي: ترتيب طبيعي مع مسافة
            }`}
          >
            <Link
              href="/"
              className="text-white/90 hover:text-white relative group"
            >
              <span>{t("navbar.home")}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center text-white/90 hover:text-white"
              >
                {t("navbar.services")}
                <ChevronDown className="ml-1 h-4 w-4 text-emerald-500 group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[600px] p-1">
                <div className="bg-slate-900/95 backdrop-blur-xl border border-emerald-500/10 rounded-2xl p-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-8">
                    {menuItems[0].submenu.map((section) => (
                      <div key={section.title} className="space-y-4">
                        <Link href={section.href}>
                          <h3 className="text-white font-semibold mb-2 hover:text-emerald-500">
                            {section.title}
                          </h3>
                        </Link>
                        <div className="space-y-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center text-white/80 hover:text-emerald-500 py-2"
                            >
                              <ChevronRight className="w-4 h-4 mr-2 text-emerald-500 group-hover:translate-x-1 transition-transform duration-300" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-white/90 hover:text-white relative group"
            >
              <span>{t("navbar.about")}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/blogs"
              className="text-white/90 hover:text-white relative group"
            >
              <span>{t("navbar.blog")}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Language Dropdown Desktop */}
            <div className="relative lang-dropdown">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-white px-4 py-2 border border-emerald-500 rounded hover:bg-emerald-600 transition flex items-center gap-2"
              >
                {i18n.language === "en" ? "English" : "العربية"}
                <ChevronDown
                  className={`w-4 h-4 text-emerald-300 transition-transform duration-300 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute mt-2 right-0 w-36 rounded-md shadow-lg bg-white ring-1 ring-black/5 z-50">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                      localStorage.setItem("i18nextLng", "en");
                      setIsLangOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-emerald-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage("ar");
                      localStorage.setItem("i18nextLng", "ar");
                      setIsLangOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-emerald-100"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg"
            >
              {t("navbar.contact")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-emerald-500" />
            ) : (
              <Menu className="h-6 w-6 text-emerald-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-emerald-500/10"
            >
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/"
                  className="block text-white/90 hover:text-emerald-500 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navbar.home")}
                </Link>

                {menuItems[0].submenu.map((section) => (
                  <div key={section.title} className="space-y-2">
                    <Link href={section.href}>
                      <h3 className="text-white font-semibold mb-2 hover:text-emerald-500">
                        {section.title}
                      </h3>
                    </Link>
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-white/70 hover:text-emerald-500 py-2 pl-4"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}

                <Link
                  href="/about"
                  className="block text-white/90 hover:text-emerald-500 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navbar.about")}
                </Link>

                <Link
                  href="/blogs"
                  className="block text-white/90 hover:text-emerald-500 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navbar.blog")}
                </Link>

                {/* Language Dropdown */}
                <div className="relative lang-dropdown">
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="text-white px-4 py-2 border border-emerald-500 rounded hover:bg-emerald-600 transition flex items-center gap-2"
                  >
                    {i18n.language === "en" ? "English" : "العربية"}
                    <ChevronDown className="w-4 h-4 text-emerald-300" />
                  </button>

                  {isLangOpen && (
                    <div className="absolute mt-2 right-0 w-32 rounded-md shadow-lg bg-white ring-1 ring-black/5 z-20">
                      <button
                        onClick={() => {
                          i18n.changeLanguage("en");
                          localStorage.setItem("i18nextLng", "en");
                          setIsLangOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-emerald-100"
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          i18n.changeLanguage("ar");
                          localStorage.setItem("i18nextLng", "ar");
                          setIsLangOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-emerald-100"
                      >
                        العربية
                      </button>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="block px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-center shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navbar.contact")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
