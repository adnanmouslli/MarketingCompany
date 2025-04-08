"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  ShoppingCart, 
  Camera, 
  Globe, 
  BarChart2, 
  LineChart, 
  Users, 
  MessageSquare, 
  ArrowRight,
  PenTool,
  Palette
} from 'lucide-react';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';

export default function MarketingSolutionsPage() {
  // Main marketing services based on the document and new links
  const services = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Digital Marketing",
      description: "Comprehensive digital marketing strategies and e-commerce solutions to maximize your online presence, drive traffic, and increase conversions and sales.",
      link: "/services/marketing/digital",
      gradient: "from-[#FF6B6B] to-[#FF8E53]"
    },
    {
      icon: PenTool,
      title: "Content Strategy",
      description: "Strategic content planning and creation that engages your audience, builds authority, and drives business results throughout the customer journey.",
      link: "/services/marketing/content",
      gradient: "from-[#14B8A6] to-[#2DD4BF]"
    },
    {
      icon: Palette,
      title: "Brand Development",
      description: "Building distinctive, memorable brand identities that connect with your audience and create lasting business value through visual identity and messaging.",
      link: "/services/marketing/branding",
      gradient: "from-[#9333EA] to-[#A855F7]"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Strategic social media solutions to build your brand presence, engage your audience, and drive meaningful business results across all relevant platforms.",
      link: "/services/marketing/social-media",
      gradient: "from-[#EC4899] to-[#F472B6]"
    }
  ];

  // Additional marketing features and services
  const additionalServices = [
    {
      icon: BarChart2,
      title: "Marketing Analytics",
      description: "Advanced analytics and performance tracking systems to measure campaign effectiveness, consumer behavior, and ROI for all your marketing initiatives.",
      gradient: "from-[#4A9BE4] to-[#8590EA]"
    },
    {
      icon: Camera,
      title: "Content Creation & Photography",
      description: "Professional content creation services including high-quality photography, video production, copywriting, and creative assets that tell your brand story.",
      gradient: "from-[#FF8E53] to-[#FFBD80]"
    },
    {
      icon: LineChart,
      title: "CRM Integration",
      description: "Customer Relationship Management solutions that help track prospects, manage customer interactions, and personalize marketing efforts for better results.",
      gradient: "from-[#3785CC] to-[#4A9BE4]"
    },
    {
      icon: MessageSquare,
      title: "AI Marketing Assistance",
      description: "Cutting-edge AI-powered marketing tools to optimize campaigns, provide customer insights, and automate routine marketing tasks for improved efficiency.",
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
        title="Marketing Solutions"
        description="Comprehensive digital marketing and e-commerce solutions tailored to help businesses establish their online presence, engage with their target audience, and drive growth through innovative strategies."
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
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent mb-8">
            Digital Marketing & E-commerce Excellence
          </h2>
          
          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`Our marketing department offers a comprehensive suite of digital services designed to elevate your brand's online presence and drive business growth. From strategic e-commerce solutions and content creation to website development and mobile applications, we provide end-to-end marketing services tailored to your specific needs. Our team combines cutting-edge technology with creative expertise to deliver exceptional results across all digital platforms, helping you connect with your audience, increase engagement, and maximize conversions.`}
          </p>
        </motion.div>

        <div className="w-full h-[1px] bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] my-8 opacity-50" />

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
              Our Digital Services
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF8E53] to-[#FFBD80] bg-clip-text text-transparent"
            >
              Comprehensive Marketing Solutions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              Explore our range of specialized marketing and digital services designed to transform your business and achieve sustainable growth in the digital landscape.
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

        {/* Additional Services Section */}
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
              Marketing Features
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#4A9BE4] to-[#8590EA] bg-clip-text text-transparent"
            >
              Advanced Marketing Solutions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              Enhance your marketing strategy with our advanced tools and specialized services designed to optimize performance and deliver exceptional results.
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

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Schedule a contact with our marketing experts to discuss how our solutions can help your business grow in the digital landscape.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-lg text-white font-medium hover:from-[#FF8E53] hover:to-[#FFBD80] transition-all duration-300"
          >
            Book a contact
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}