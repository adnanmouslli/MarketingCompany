"use client";

import { motion } from "framer-motion";
import { Layers, PenTool, Eye, Users, LineChart, ArrowRight } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function UIUXDesignPage() {
  const services = [
    {
      icon: Users,
      title: "User Research",
      description:
        "In-depth research to understand your users' needs, behaviors, and pain points, guiding design decisions that truly resonate with your audience.",
      gradient: "from-[#F59E0B] to-[#F97316]",
    },
    {
      icon: PenTool,
      title: "UI Design",
      description:
        "Visually stunning interfaces that reflect your brand identity while creating intuitive, accessible, and engaging experiences for your users.",
      gradient: "from-[#F97316] to-[#FB7185]",
    },
    {
      icon: Eye,
      title: "UX Design",
      description:
        "User experience strategies and solutions that enhance usability, accessibility, and satisfaction, creating products that users love to interact with.",
      gradient: "from-[#FB7185] to-[#F43F5E]",
    },
    {
      icon: Layers,
      title: "Prototyping",
      description:
        "Interactive prototypes that simulate the user experience, allowing for testing and refinement before development begins.",
      gradient: "from-[#F59E0B] to-[#F97316]",
    },
    {
      icon: LineChart,
      title: "Usability Testing",
      description:
        "Comprehensive testing with real users to identify issues, gather feedback, and validate design decisions to ensure optimal user experience.",
      gradient: "from-[#F97316] to-[#FB7185]",
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
        title="UI/UX Design"
        description="Creating intuitive, engaging, and user-centered digital experiences that delight your audience."
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

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent mb-8">
            User-Centered Design Excellence
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`Our UI/UX design team combines artistic creativity with strategic thinking to create digital experiences that not only look stunning but also deliver exceptional usability and accessibility. We put users at the center of every design decision, ensuring that your website, application, or digital product provides seamless interactions that keep users engaged and satisfied. From initial user research and wireframing to high-fidelity prototypes and design systems, we deliver comprehensive design solutions that align with your brand identity and business objectives.`}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#F59E0B] to-[#F97316] my-12 opacity-50" />

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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] to-[#FB7185] bg-clip-text text-transparent"
            >
              UI/UX Design Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {`Our comprehensive UI/UX design services focus on creating intuitive, accessible, and engaging user experiences that drive adoption and satisfaction.`}
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

        {/* Design Process */}
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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent"
            >
              Design Thinking Methodology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              We follow a proven design thinking approach to create user experiences that truly meet the needs of your audience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#F59E0B]">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Empathize</h3>
              <p className="text-sm text-[#111240]/60">
                Understanding your users through research, interviews, and observation to identify their needs and pain points.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#F97316]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#F97316]">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Define</h3>
              <p className="text-sm text-[#111240]/60">
                Defining the core problems and user needs that will guide our design decisions and solutions.
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
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Ideate</h3>
              <p className="text-sm text-[#111240]/60">
                Generating a wide range of creative ideas and solutions to address the identified user needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#F43F5E]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#F43F5E]">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Prototype</h3>
              <p className="text-sm text-[#111240]/60">
                Creating interactive prototypes to visualize and test our design solutions before implementation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#F59E0B]">5</span>
              </div>
              <h3 className="text-lg font-semibold text-[#111240] mb-4">Test</h3>
              <p className="text-sm text-[#111240]/60">
                Testing our designs with real users to gather feedback and iterate until we achieve the optimal solution.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Tools */}
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
              Our Toolkit
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent"
            >
              Design Tools We Use
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              We utilize industry-leading tools and technologies to deliver exceptional design solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Figma",
              "Adobe XD",
              "Sketch",
              "InVision",
              "Protopie",
              "Zeplin",
              "Illustrator",
              "Photoshop",
              "Principle",
              "Framer",
              "Maze",
              "Hotjar",
              "Miro",
              "UserTesting",
              "Axure RP",
              "Abstract",
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg border border-gray-100 text-center hover:shadow-md hover:bg-orange-50 transition-all"
              >
                <p className="text-[#111240]">{tool}</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your User Experience?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let our UI/UX design team help you create intuitive, engaging digital experiences that your users will love.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-lg text-white font-medium hover:from-[#F97316] hover:to-[#FB7185] transition-all duration-300"
          >
            Start Your Design Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}