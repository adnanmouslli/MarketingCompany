"use client";

import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  Code, 
  Database, 
  Server, 
  Lock, 
  Cloud,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';

export default function DevelopmentServicesPage() {
  // Main development services based on the navigation menu
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom website and web application development using the latest technologies and frameworks to create responsive, scalable, and high-performance solutions.",
      link: "/services/development/web-development",
      gradient: "from-[#3785CC] to-[#4A9BE4]"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile application development for iOS and Android, delivering intuitive user experiences and robust functionality.",
      link: "/services/development/mobile-apps",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "User-centered design services that focus on creating intuitive, accessible, and engaging interfaces that enhance user satisfaction and drive adoption.",
      link: "/services/development/ui-ux-design",
      gradient: "from-[#8590EA] to-[#B5C6F4]"
    },
    {
      icon: Code,
      title: "Custom Solutions",
      description: "Bespoke software solutions tailored to your specific business requirements, solving unique challenges and optimizing operational efficiency.",
      link: "/services/development/custom-solutions",
      gradient: "from-[#3785CC] to-[#4A9BE4]"
    }
  ];

  // Additional development services and features
  const additionalServices = [
    {
      icon: Database,
      title: "ERP Systems",
      description: "Enterprise Resource Planning solutions that integrate core business processes and provide a single source of truth for operational data.",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
    },
    {
      icon: Server,
      title: "HR Systems",
      description: "Human Resource management systems that streamline employee data management, recruitment, performance evaluation, and more.",
      gradient: "from-[#8590EA] to-[#B5C6F4]"
    },
    {
      icon: Lock,
      title: "Accounting Software",
      description: "Financial management solutions that automate accounting processes, ensure compliance, and provide actionable financial insights.",
      gradient: "from-[#3785CC] to-[#4A9BE4]"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud-based infrastructure and application development that provides scalability, reliability, and accessibility from anywhere.",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ServiceHero 
        title="Development Services"
        description="Cutting-edge software development solutions that power digital transformation, from websites and mobile apps to custom enterprise solutions tailored to your unique business needs."
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
            Innovative Software Development
          </h2>
          
          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`Our development team delivers robust, scalable, and innovative software solutions designed to transform your business operations and enhance your digital presence. From responsive web applications and intuitive mobile apps to comprehensive enterprise systems, we combine technical expertise with creative problem-solving to build solutions that drive efficiency, growth, and competitive advantage. Our development process emphasizes clean code, security best practices, and future-proof architecture to ensure your software investment continues to deliver value well into the future.`}
          </p>
        </motion.div>

        <div className="w-full h-[1px] bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] my-8 opacity-50" />

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
              Our Development Services
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              Comprehensive Development Solutions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              Explore our range of specialized development services designed to create powerful digital experiences and transform your business operations.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl transform rotate-1 scale-[1.02] opacity-50 group-hover:rotate-2 transition-transform duration-300"></div>
                <Link href={service.link} prefetch={true}>
                  <div className="relative rounded-2xl bg-white backdrop-blur-sm border border-gray-100 overflow-hidden transition-all duration-300 group-hover:bg-gray-50 shadow-sm">
                    <div className="p-8">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} transform group-hover:scale-110 transition-transform duration-300 mb-6 w-16 h-16 flex items-center justify-center`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#111240] mb-4">{service.title}</h3>
                      <p className="text-[#111240]/60 mb-6">{service.description}</p>
                      <div className="inline-flex items-center text-[#111240]/80 hover:text-[#111240] group/link">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Digital Products Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-32 space-y-16"
        >
          <div className="text-center mb-16">
            <motion.span
              variants={itemVariants}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#111240]/5 text-[#111240] backdrop-blur-sm mb-4 inline-block"
            >
              Digital Products
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              Enterprise Solutions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              Ready-to-deploy digital products and enterprise systems that streamline operations, enhance productivity, and drive business growth.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.gradient} w-12 h-12 flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#111240] mb-2">{service.title}</h3>
                <p className="text-sm text-[#111240]/60">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Development Process Section */}
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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] bg-clip-text text-transparent"
            >
              Development Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              Our structured and transparent development process ensures high-quality deliverables that meet your business objectives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#3785CC]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#3785CC]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Discovery & Planning</h3>
              <p className="text-[#111240]/60">
                We begin by understanding your business goals, user needs, and technical requirements to create a comprehensive development roadmap.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#4A9BE4]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#4A9BE4]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Design & Development</h3>
              <p className="text-[#111240]/60">
                Our designers and developers work collaboratively to create intuitive interfaces and robust backend systems, with regular client feedback.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#8590EA]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#8590EA]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Testing & Deployment</h3>
              <p className="text-[#111240]/60">
                Rigorous quality assurance and testing ensure your solution is robust, secure, and ready for a smooth deployment to your target environment.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Development Project?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Contact our development team today to discuss your project requirements and discover how our expertise can help bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3785CC] to-[#4A9BE4] rounded-lg text-white font-medium hover:from-[#4A9BE4] hover:to-[#8590EA] transition-all duration-300"
          >
            Schedule a contact
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}