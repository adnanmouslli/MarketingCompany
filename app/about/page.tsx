"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Target,
  Compass,
  Shield,
  Users,
  Heart,
  Code,
  Megaphone,
} from "lucide-react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { Icon } from "@radix-ui/react-select";

export default function AboutPage() {
  // const DynamicIcon = ({ iconName }) => {
  //   const Icon = LucideIcons[
  //     iconName
  //   ] || LucideIcons["Circle"];
  //   return <Icon className="w-8 h-8 text-white" />;
  // };

  // Static data for the marketing and development company
  const aboutData = {
    title: "Atlants",
    subtitle: "Integrated partnership between marketing and programming for your business success",
    description: [
      "Atlants was founded in 2018 as a strategic partnership between digital marketing experts and software developers to provide integrated solutions for companies and institutions. We combine the power of professional marketing and innovative technical development to help our clients grow in the digital world.",
      "We have a team of professional marketers and programmers who work together harmoniously to achieve our clients' goals. Over the past years, we have built a strong reputation for providing exceptional services and achieving tangible results. Our commitment to excellence is reflected in the trust and loyalty we have earned from a wide range of clients.",
      "With our presence in all major cities and main offices in Damascus, Aleppo, Homs, and Latakia, we are strategically positioned to provide first-class services wherever they are needed."
    ],
    img: "/background.png", // Put your office image path here
    mission: "To provide integrated marketing and technical solutions that enable companies to achieve their maximum potential in the digital world by combining strategic marketing and innovative technical development.",
    vision: "To become the preferred strategic partner for companies looking to achieve sustainable growth in the digital age, by transforming challenges into opportunities using the latest marketing and programming technologies.",
    values: [
      {
        id: 1,
        icon: "Globe",
        title: "Global Approach",
        text: "We adopt global best practices in marketing and programming",
      },
      {
        id: 2,
        icon: "Target",
        title: "Results-Focused",
        text: "We measure our success through the results we achieve for our clients",
      },
      {
        id: 3,
        icon: "Compass",
        title: "Clear Vision",
        text: "We drive innovation and deliver exceptional performance in every project",
      },
      {
        id: 4,
        icon: "Shield",
        title: "Strong Ethics",
        text: "We adhere to the highest standards of integrity and professionalism in all our dealings",
      },
      {
        id: 5,
        icon: "Code",
        title: "Technical Excellence",
        text: "We develop innovative programming solutions that meet changing market needs",
      },
      {
        id: 6,
        icon: "Megaphone",
        title: "Marketing Creativity",
        text: "We design innovative marketing strategies that deliver exceptional results",
      },
    ],
    stats: [
      { id: 1, number: "7+", label: "Years Experience" },
      { id: 2, number: "150+", label: "Completed Projects" },
      { id: 3, number: "35+", label: "Team Experts" },
      { id: 4, number: "96%", label: "Client Satisfaction" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <div className="relative overflow-hidden bg-[#111240]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] animate-gradient"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32">
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
              About Us
            </motion.span>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent mb-6">
              {aboutData.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {aboutData.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Light */}
      <div className="bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#3785CC]/5 via-[#5B8AF0]/5 to-[#8590EA]/5 animate-gradient"></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company History */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={aboutData.img}
                    alt="Atlants Office"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {aboutData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[#111240]/60 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Story Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent">
                  Our Story
                </h2>
                <div className="space-y-4 text-[#111240]/70 text-lg leading-relaxed">
                  {aboutData.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <p className="text-[#111240]/70">{aboutData.mission}</p>
                </div>
                <div className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                  <p className="text-[#111240]/70">{aboutData.vision}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Values Section - Dark */}
      <div className="relative overflow-hidden bg-[#111240]">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] animate-gradient"></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.span
                variants={itemVariants}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-4 inline-block"
              >
                Our Values
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white/80 bg-clip-text text-transparent"
              >
                What Drives Us
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-white/80 max-w-2xl mx-auto"
              >
                Our core values shape everything we do and guide us in delivering excellence
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {aboutData.values.map((value, index) => (
                <motion.div
                  key={value.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative p-8 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-300">
                    <div
                      className="p-4 rounded-xl bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-white/80">{value.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent"
            >
              Ready to Take Your Business to the Next Level?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              We are here to help you achieve your goals through our integrated marketing and programming solutions
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="px-8 py-3 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] text-white font-medium rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center mx-auto"
            >
              <a href="/contact">Contact Us</a>
              <LucideIcons.ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}