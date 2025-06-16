"use client";

import axios from "axios";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Palette,
  PenTool,
  Users,
  BarChart2,
  Camera,
  Globe,
  LineChart,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ServicesPage() {
  const services = {
    marketing: {
      title: "Marketing Solutions",
      description:
        "Strategic marketing services designed to elevate your brand presence and drive business growth.",
      items: [
        {
          icon: ShoppingCart,
          title: "Digital Marketing",
          description:
            "Data-driven digital marketing strategies that drive traffic, generate leads, and increase conversions.",
          gradient: "from-[#3B82F6] to-[#60A5FA]",
          link: "/services/marketing/digital",
        },
        {
          icon: PenTool,
          title: "Content Strategy",
          description:
            "Strategic content planning and creation that engages your audience and builds authority.",
          gradient: "from-[#14B8A6] to-[#2DD4BF]",
          link: "/services/marketing/content",
        },
        {
          icon: Palette,
          title: "Brand Development",
          description:
            "Building distinctive, memorable brand identities that connect with your audience.",
          gradient: "from-[#9333EA] to-[#A855F7]",
          link: "/services/marketing/branding",
        },
        {
          icon: Users,
          title: "Social Media Management",
          description:
            "Strategic social media solutions to build your brand presence and engage your audience.",
          gradient: "from-[#EC4899] to-[#F472B6]",
          link: "/services/marketing/social-media",
        },
      ],
    },
    development: {
      title: "Development Services",
      description:
        "Cutting-edge development solutions that power digital transformation for your business.",
      items: [
        {
          icon: Globe,
          title: "Web Development",
          description: "Custom websites and applications that create powerful, scalable experiences.",
          gradient: "from-[#3785CC] to-[#4A9BE4]",
          link: "/services/development/web-development",
        },
        {
          icon: Camera,
          title: "Mobile Apps",
          description:
            "Native and cross-platform mobile applications that connect you with users on any device.",
          gradient: "from-[#6366F1] to-[#8B5CF6]",
          link: "/services/development/mobile-apps",
        },
        {
          icon: LineChart,
          title: "UI/UX Design",
          description: "User-centered design services that create intuitive, engaging digital experiences.",
          gradient: "from-[#F59E0B] to-[#F97316]",
          link: "/services/development/ui-ux-design",
        },
        {
          icon: MessageSquare,
          title: "Custom Solutions",
          description: "Tailored software development to solve your unique business challenges.",
          gradient: "from-[#10B981] to-[#059669]",
          link: "/services/development/custom-solutions",
        },
      ],
    },
    additional: {
      title: "Specialized Solutions",
      description:
        "Advanced tools and services to enhance your digital marketing and development efforts.",
      items: [
        {
          icon: BarChart2,
          title: "Marketing Analytics",
          description: "Comprehensive tracking and analysis to optimize your marketing campaigns.",
          gradient: "from-[#4A9BE4] to-[#8590EA]",
          link: "/services/specialized/analytics",
        },
        {
          icon: ShoppingCart,
          title: "E-commerce Solutions",
          description:
            "Custom online store development and optimization for maximum conversions.",
          gradient: "from-[#FF6B6B] to-[#FF8E53]",
          link: "/services/specialized/ecommerce",
        },
        {
          icon: Camera,
          title: "Content Creation",
          description: "Professional photography, video, and creative assets for your brand.",
          gradient: "from-[#FF8E53] to-[#FFBD80]",
          link: "/services/specialized/content-creation",
        },
      ],
    },
  };

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
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#111240]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#111240] via-[#1E1C52] to-[#EC4899] animate-gradient"></div>
        </div>

        <div className="relative w-full lg:w-[1280px]  mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-6 inline-block"
            >
              What We Offer
            </motion.span>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FFBD80] bg-clip-text text-transparent mb-6">
              Strategic Marketing & Development
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Empowering your business with innovative marketing strategies and cutting-edge development solutions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-[1280px]  mx-auto px-4 py-24">
        {Object.entries(services).map(([key, section]) => (
          <motion.div
            key={key}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <motion.span
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-4 inline-block"
              >
                {section.title}
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#111240] via-[#111240]/90 to-[#111240]/80 bg-clip-text text-transparent"
              >
                {section.title}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
              >
                {section.description}
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className={`grid gap-8 max-w-7xl mx-auto ${
                section.items.length <= 3
                  ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {section.items.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111240]/5 to-[#111240]/10 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative p-8 rounded-2xl bg-white shadow-lg border border-[#111240]/10 hover:bg-[#111240]/5 transition-all duration-300">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${item.gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#111240] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#111240]/70 mb-6">{item.description}</p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-[#111240]/80 hover:text-[#111240] group/link"
                    >
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}