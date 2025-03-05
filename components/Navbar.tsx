"use client";

import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Our Services",
      submenu: [
        {
          title: "Marketing Solutions",
          href: "/services/marketing",
          items: [
            {
              name: "Digital Marketing",
              href: "/services/marketing/digital",
            },
            {
              name: "Content Strategy",
              href: "/services/marketing/content",
            },
            {
              name: "Brand Development",
              href: "/services/marketing/branding",
            },
            {
              name: "Social Media Management",
              href: "/services/marketing/social-media",
            },
          ],
        },
        {
          title: "Development Services",
          href: "/services/development",
          items: [
            {
              name: "Web Development",
              href: "/services/development/web",
            },
            {
              name: "Mobile Apps",
              href: "/services/development/mobile",
            },
            {
              name: "UI/UX Design",
              href: "/services/development/design",
            },
            {
              name: "Custom Solutions",
              href: "/services/development/custom",
            },
          ],
        },
      ],
    },
  ];

  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

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
              {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-600/10 group-hover:from-emerald-500/20 group-hover:to-blue-600/20 transition-all duration-300" /> */}
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
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors relative group"
            >
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center text-white/90 hover:text-white transition-colors"
              >
                What We Offer
                <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300 text-emerald-500" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block w-[600px] p-1">
                <div className="bg-slate-900/95 backdrop-blur-xl border border-emerald-500/10 rounded-2xl p-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-8">
                    {menuItems[0].submenu.map((section) => (
                      <div key={section.title} className="space-y-4">
                        <Link href={section.href} className="block">
                          <h3 className="text-white font-semibold mb-2 hover:text-emerald-500 transition-colors">
                            {section.title}
                          </h3>
                        </Link>
                        <div className="space-y-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group flex items-center text-white/80 hover:text-emerald-500 transition-colors py-2"
                            >
                              <ChevronRight className="w-4 h-4 mr-2 text-emerald-500 transform group-hover:translate-x-1 transition-transform duration-300" />
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
              className="text-white/90 hover:text-white transition-colors relative group"
            >
              <span>About Us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/blogs"
              className="text-white/90 hover:text-white transition-colors relative group"
            >
              <span>Blog</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
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
                  className="block text-white/90 hover:text-emerald-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {menuItems[0].submenu.map((section) => (
                  <div key={section.title} className="space-y-2">
                    <Link href={section.href} className="block">
                      <h3 className="text-white font-semibold mb-2 hover:text-emerald-500 transition-colors">
                        {section.title}
                      </h3>
                    </Link>
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-white/70 hover:text-emerald-500 transition-colors py-2 pl-4"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}

                <Link
                  href="/about"
                  className="block text-white/90 hover:text-emerald-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  href="/blogs"
                  className="block text-white/90 hover:text-emerald-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="block px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full text-center shadow-lg shadow-emerald-500/20"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
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