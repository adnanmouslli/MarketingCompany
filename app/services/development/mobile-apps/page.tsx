"use client";

import { motion } from "framer-motion";
import { Smartphone, PhoneOutgoing, Zap, Send, Shield, ArrowRight } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function MobileAppsPage() {
  const services = [
    {
      icon: Smartphone,
      title: "Native App Development",
      description:
        "Custom iOS and Android applications developed specifically for each platform to deliver exceptional performance and user experience.",
      gradient: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
      icon: PhoneOutgoing,
      title: "Cross-Platform Development",
      description:
        "Efficient solutions using React Native and Flutter to build apps that work seamlessly across multiple platforms from a single codebase.",
      gradient: "from-[#8B5CF6] to-[#D946EF]",
    },
    {
      icon: Zap,
      title: "Progressive Web Apps",
      description:
        "Web applications that offer app-like experiences, including offline functionality, push notifications, and home screen installation.",
      gradient: "from-[#D946EF] to-[#EC4899]",
    },
    {
      icon: Send,
      title: "App Store Deployment",
      description:
        "Comprehensive support for publishing your app to the Apple App Store and Google Play Store, including optimization for discoverability.",
      gradient: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
      icon: Shield,
      title: "Maintenance & Updates",
      description:
        "Ongoing support services to keep your app secure, compatible with the latest OS versions, and aligned with evolving user needs.",
      gradient: "from-[#8B5CF6] to-[#D946EF]",
    },
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
        title="Mobile App Development"
        description="Creating innovative mobile experiences that connect you with your users wherever they are."
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

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-8">
            Mobile Solutions for Modern Businesses
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`Our mobile app development team specializes in creating intuitive, feature-rich applications that help businesses engage with their customers, streamline operations, and drive growth. Whether you need a consumer-facing app or an enterprise solution, we develop mobile experiences that are not only visually stunning but also technically robust and scalable. Our expertise spans across iOS, Android, and cross-platform technologies, allowing us to deliver the right solution for your specific business requirements and user expectations.`}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] my-12 opacity-50" />

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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent"
            >
              Mobile App Development Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {`From concept to deployment, we provide comprehensive mobile app development services to bring your ideas to life on any device.`}
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

        {/* Development Process */}
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
              Our Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent"
            >
              How We Build Your App
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              Our structured mobile app development process ensures we deliver high-quality, user-focused applications that meet your business objectives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#6366F1]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#6366F1]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Discovery & Strategy</h3>
              <p className="text-[#111240]/60">
                We begin by understanding your business goals, target audience, and app requirements to develop a comprehensive strategy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#8B5CF6]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Design & Prototyping</h3>
              <p className="text-[#111240]/60">
                Our designers create intuitive user interfaces and interactive prototypes to visualize the app before development begins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#D946EF]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#D946EF]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Development & Testing</h3>
              <p className="text-[#111240]/60">
                Our developers build your app using the most suitable technologies, with continuous testing to ensure quality and performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#EC4899]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#EC4899]">4</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Deployment & Support</h3>
              <p className="text-[#111240]/60">
                We handle the app store submission process and provide ongoing maintenance and updates to keep your app running smoothly.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Technologies */}
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
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent"
            >
              Technologies We Use
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              We leverage leading mobile development technologies to create high-performance applications for any platform.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Swift",
              "Kotlin",
              "React Native",
              "Flutter",
              "Ionic",
              "Firebase",
              "AWS Amplify",
              "GraphQL",
              "REST APIs",
              "Redux",
              "UIKit",
              "Material Design",
              "ARKit",
              "Core ML",
              "Jetpack Compose",
              "Realm",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg border border-gray-100 text-center hover:shadow-md hover:bg-purple-50 transition-all"
              >
                <p className="text-[#111240]">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Mobile App?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Contact our mobile development team today to discuss your app idea and discover how we can help bring it to life on iOS and Android.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white font-medium hover:from-[#8B5CF6] hover:to-[#D946EF] transition-all duration-300"
          >
            Start Your App Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}