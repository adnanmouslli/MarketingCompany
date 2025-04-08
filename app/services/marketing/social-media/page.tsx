"use client";

import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  BarChart2, 
  ArrowRight 
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";

export default function SocialMediaPage() {
  const services = [
    {
      icon: Instagram,
      title: "Content Creation & Publishing",
      description:
        "Strategic planning, creation, and publishing of engaging social media content tailored to each platform and your target audience.",
      gradient: "from-[#EC4899] to-[#F472B6]",
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      description:
        "Comprehensive tracking and analysis of your social media metrics to measure campaign effectiveness and optimize strategy.",
      gradient: "from-[#F472B6] to-[#FB7185]",
    },
    {
      icon: Facebook,
      title: "Community Management",
      description:
        "Proactive engagement with your audience through comments, messages, and social listening to build genuine connections.",
      gradient: "from-[#FB7185] to-[#FCA5A5]",
    },
    {
      icon: Twitter,
      title: "Paid Social Campaigns",
      description:
        "Strategic development and management of targeted social media advertising campaigns to reach specific audience segments.",
      gradient: "from-[#EC4899] to-[#F472B6]",
    },
    {
      icon: Linkedin,
      title: "Social Strategy Development",
      description:
        "Comprehensive social media strategy aligned with your business goals, brand identity, and target audience preferences.",
      gradient: "from-[#F472B6] to-[#FB7185]",
    },
  ];

  const platforms = [
    { name: "Instagram", icon: Instagram, color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]" },
    { name: "Facebook", icon: Facebook, color: "bg-[#1877F2]" },
    { name: "Twitter/X", icon: Twitter, color: "bg-black" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-[#0A66C2]" },
    { name: "TikTok", icon: BarChart2, color: "bg-black" }, // Using BarChart2 as a placeholder for TikTok
    { name: "Pinterest", icon: BarChart2, color: "bg-[#E60023]" }, // Using BarChart2 as a placeholder for Pinterest
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
        title="Social Media Management"
        description="Strategic social media solutions to build your brand presence, engage your audience, and drive meaningful business results."
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
            Overview
          </motion.span>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent mb-8">
            Elevate Your Social Media Presence
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`In today's digital landscape, effective social media management is essential for building brand awareness, engaging with your audience, and driving business growth. Our comprehensive Social Media Management services help you navigate the ever-evolving social landscape with strategic planning, creative content, consistent engagement, and data-driven optimization. Whether you're looking to establish your brand on social platforms, grow your following, or improve your social media ROI, our expert team will develop and execute a tailored strategy that aligns with your business objectives and resonates with your target audience.`}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#EC4899] to-[#F472B6] my-12 opacity-50" />

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
              What We Offer
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F472B6] to-[#FB7185] bg-clip-text text-transparent"
            >
              Social Media Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {`Our comprehensive social media management services are designed to help you build a strong, engaging presence across all relevant platforms.`}
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

        {/* Platforms We Manage */}
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
              Platforms
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent"
            >
              Social Platforms We Manage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              We provide expert management across all major social media platforms, tailoring our approach to each platform's unique features and audience.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mb-3`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-[#111240]">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Social Media Success Metrics</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We measure success through meaningful metrics that align with your business objectives and demonstrate real value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+48%</h3>
              <p className="text-white/70">
                Average engagement rate increase for our clients within the first 3 months
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+65%</h3>
              <p className="text-white/70">
                Average growth in social media followers across platforms
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+32%</h3>
              <p className="text-white/70">
                Average increase in website traffic from social media channels
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+43%</h3>
              <p className="text-white/70">
                Average improvement in social media conversion rates
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Approach */}
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
              Our Approach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent"
            >
              Social Media Management Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              Our strategic, data-driven approach ensures your social media presence consistently delivers value and meets your business objectives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#EC4899]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#EC4899]">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Audit & Strategy</h3>
              <p className="text-sm text-[#111240]/60">
                Analyzing your current social presence and developing a tailored strategy aligned with your goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#F472B6]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#F472B6]">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Content Planning</h3>
              <p className="text-sm text-[#111240]/60">
                Creating a detailed content calendar with platform-specific strategies and messaging.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#FB7185]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#FB7185]">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Content Creation</h3>
              <p className="text-sm text-[#111240]/60">
                Producing engaging multimedia content tailored to each platform's requirements and audience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#FCA5A5]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#FCA5A5]">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Community Management</h3>
              <p className="text-sm text-[#111240]/60">
                Active engagement with your audience through comments, messages, and proactive outreach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#EC4899]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#EC4899]">5</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Analysis & Optimization</h3>
              <p className="text-sm text-[#111240]/60">
                Continuous monitoring, reporting, and strategy refinement based on performance data.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold text-[#111240] mb-6">Ready to Transform Your Social Media Presence?</h2>
          <p className="text-[#111240]/70 max-w-2xl mx-auto mb-8">
            Contact our social media experts to discuss how we can help you build an engaging presence and achieve your business goals.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#EC4899] to-[#F472B6] rounded-lg text-white font-medium hover:from-[#F472B6] hover:to-[#FB7185] transition-all duration-300"
          >
            Schedule a Social Media contact
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}