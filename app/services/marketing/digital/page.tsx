"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Globe, 
  Mail, 
  PieChart, 
  Megaphone, 
  ArrowRight 
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Comprehensive SEO strategies to improve your organic rankings, drive qualified traffic, and increase online visibility.",
      gradient: "from-[#3B82F6] to-[#60A5FA]",
    },
    {
      icon: Megaphone,
      title: "Paid Advertising",
      description:
        "Strategic PPC campaigns across search, social, and display networks to drive targeted traffic and maximize ROI.",
      gradient: "from-[#60A5FA] to-[#93C5FD]",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Personalized email campaigns that nurture leads, build relationships, and drive conversions throughout the customer journey.",
      gradient: "from-[#93C5FD] to-[#BFDBFE]",
    },
    {
      icon: Globe,
      title: "Content Marketing",
      description:
        "Strategic content creation and distribution to attract, engage, and convert your target audience while building brand authority.",
      gradient: "from-[#3B82F6] to-[#60A5FA]",
    },
    {
      icon: PieChart,
      title: "Analytics & Reporting",
      description:
        "Comprehensive data analysis and reporting to track performance, measure ROI, and continuously optimize your digital marketing efforts.",
      gradient: "from-[#60A5FA] to-[#93C5FD]",
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
        title="Digital Marketing"
        description="Data-driven digital marketing strategies that drive traffic, generate leads, and increase conversions for sustainable business growth."
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

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent mb-8">
            Strategic Digital Marketing Solutions
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`In today's competitive digital landscape, a strategic and data-driven approach to digital marketing is essential for business success. Our comprehensive Digital Marketing services help you navigate the complex digital ecosystem to reach your target audience, build brand awareness, generate quality leads, and drive conversions. We combine industry expertise with the latest technologies and best practices to create customized digital marketing strategies that align with your business objectives and deliver measurable results. Whether you're looking to increase website traffic, improve conversion rates, or enhance your overall online presence, our team of digital marketing specialists will work closely with you to achieve your goals.`}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] my-12 opacity-50" />

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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] bg-clip-text text-transparent"
            >
              Digital Marketing Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {`Our comprehensive digital marketing services are designed to help you achieve your business goals through strategic online initiatives.`}
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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent"
            >
              The Digital Marketing Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              Our strategic approach to digital marketing ensures we deliver measurable results that drive business growth.
            </motion.p>
          </div>

          <div className="relative mb-20">
            {/* Horizontal line through the middle */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {/* Stage 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white border-4 border-[#3B82F6] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="pt-12 text-center">
                  <h3 className="text-lg font-semibold text-[#111240] mb-2">Research & Analysis</h3>
                  <p className="text-sm text-[#111240]/60">
                    Understanding your business, audience, competitors, and market to develop data-driven strategies.
                  </p>
                </div>
              </motion.div>

              {/* Stage 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white border-4 border-[#3B82F6] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="pb-12 text-center">
                  <h3 className="text-lg font-semibold text-[#111240] mb-2">Strategy Development</h3>
                  <p className="text-sm text-[#111240]/60">
                    Creating a comprehensive digital marketing strategy aligned with your business objectives.
                  </p>
                </div>
              </motion.div>

              {/* Stage 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white border-4 border-[#3B82F6] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="pt-12 text-center">
                  <h3 className="text-lg font-semibold text-[#111240] mb-2">Implementation</h3>
                  <p className="text-sm text-[#111240]/60">
                    Executing the strategy across relevant channels with attention to detail and best practices.
                  </p>
                </div>
              </motion.div>

              {/* Stage 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white border-4 border-[#3B82F6] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="pb-12 text-center">
                  <h3 className="text-lg font-semibold text-[#111240] mb-2">Monitoring & Analysis</h3>
                  <p className="text-sm text-[#111240]/60">
                    Continuous tracking of performance metrics to measure effectiveness and identify opportunities.
                  </p>
                </div>
              </motion.div>

              {/* Stage 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white border-4 border-[#3B82F6] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="pt-12 text-center">
                  <h3 className="text-lg font-semibold text-[#111240] mb-2">Optimization</h3>
                  <p className="text-sm text-[#111240]/60">
                    Refining strategies and tactics based on data insights to improve performance and ROI.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Driving Measurable Results</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our digital marketing strategies focus on delivering tangible business outcomes and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+142%</h3>
              <p className="text-lg font-medium text-white/80 mb-2">Organic Traffic Growth</p>
              <p className="text-white/70">
                Average organic traffic increase for our clients through strategic SEO and content marketing.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">3.8x</h3>
              <p className="text-lg font-medium text-white/80 mb-2">ROI on Ad Spend</p>
              <p className="text-white/70">
                Average return on investment for our clients&apos; digital advertising campaigns.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-2">+58%</h3>
              <p className="text-lg font-medium text-white/80 mb-2">Conversion Rate</p>
              <p className="text-white/70">
                Average increase in website conversion rates through optimization and targeted campaigns.
              </p>
            </div>
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
          <h2 className="text-3xl font-bold text-[#111240] mb-6">Ready to Grow Your Digital Presence?</h2>
          <p className="text-[#111240]/70 max-w-2xl mx-auto mb-8">
            Contact our digital marketing specialists to discuss how we can help you achieve your business goals through strategic online initiatives.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-lg text-white font-medium hover:from-[#60A5FA] hover:to-[#93C5FD] transition-all duration-300"
          >
            Request a Digital Marketing Strategy
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}