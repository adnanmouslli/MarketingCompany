"use client";

import { motion } from "framer-motion";
import { Globe, Code, Layout, Database, Figma, ArrowRight } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function WebDevelopmentPage() {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Modern, responsive web interfaces built with the latest technologies like React, Vue, and Angular to create engaging user experiences.",
      gradient: "from-[#3785CC] to-[#4A9BE4]",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust server-side solutions using Node.js, Python, PHP and other technologies to power your applications with scalable architecture.",
      gradient: "from-[#4A9BE4] to-[#8590EA]",
    },
    {
      icon: Layout,
      title: "CMS Development",
      description:
        "Custom content management systems and implementations of popular platforms like WordPress, allowing easy content updates.",
      gradient: "from-[#8590EA] to-[#B5C6F4]",
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description:
        "Comprehensive online stores with secure payment gateways, inventory management, and optimized checkout processes.",
      gradient: "from-[#3785CC] to-[#4A9BE4]",
    },
    {
      icon: Figma,
      title: "Web Application Development",
      description:
        "Feature-rich web applications with complex functionalities tailored to your specific business requirements and processes.",
      gradient: "from-[#4A9BE4] to-[#8590EA]",
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
        title="Web Development"
        description="Creating powerful, scalable web experiences that drive business growth."
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

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent mb-8">
            Custom Web Development Solutions
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`Our web development team creates powerful, scalable, and visually appealing websites and web applications that deliver exceptional user experiences. We combine creative design with cutting-edge technology to build web solutions that not only look great but also perform flawlessly across all devices and platforms. Whether you need a simple corporate website, a complex e-commerce platform, or a custom web application, our experienced developers work closely with you to understand your business goals and deliver solutions that drive results.`}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] my-12 opacity-50" />

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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              Web Development Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {`From front-end design to back-end functionality, we provide end-to-end web development services tailored to your business needs.`}
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

        {/* Technologies Section */}
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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent"
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
              We leverage the latest web technologies and frameworks to build modern, high-performance websites and applications.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "HTML5 & CSS3",
              "JavaScript",
              "React",
              "Vue.js",
              "Angular",
              "Node.js",
              "PHP",
              "Python",
              "Ruby on Rails",
              "WordPress",
              "MongoDB",
              "MySQL",
              "PostgreSQL",
              "GraphQL",
              "Docker",
              "AWS",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg border border-gray-100 text-center hover:shadow-md hover:bg-blue-50 transition-all"
              >
                <p className="text-[#111240]">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies/Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Web Project?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Contact our web development team today to discuss your project requirements and discover how our expertise can help bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] rounded-lg text-white font-medium hover:from-[#4A9BE4] hover:to-[#8590EA] transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}