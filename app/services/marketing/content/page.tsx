"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  PenTool, 
  Compass, 
  BarChart2, 
  Users, 
  ArrowRight 
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";

export default function ContentStrategyPage() {
  const services = [
    {
      icon: Compass,
      title: "Content Strategy Development",
      description:
        "Comprehensive content strategies aligned with your business goals, target audience needs, and marketing objectives.",
      gradient: "from-[#14B8A6] to-[#2DD4BF]",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description:
        "High-quality, engaging content creation across various formats including blog posts, articles, whitepapers, and more.",
      gradient: "from-[#2DD4BF] to-[#5EEAD4]",
    },
    {
      icon: Users,
      title: "Audience Research",
      description:
        "In-depth audience analysis to understand their needs, pain points, and content preferences to guide your strategy.",
      gradient: "from-[#5EEAD4] to-[#99F6E4]",
    },
    {
      icon: PenTool,
      title: "Content Optimization",
      description:
        "Refining existing content to improve performance, SEO visibility, engagement, and conversion rates.",
      gradient: "from-[#14B8A6] to-[#2DD4BF]",
    },
    {
      icon: BarChart2,
      title: "Content Performance Analysis",
      description:
        "Comprehensive analytics and reporting to measure content effectiveness and guide future content decisions.",
      gradient: "from-[#2DD4BF] to-[#5EEAD4]",
    },
  ];

  const contentTypes = [
    { title: "Blog Posts", description: "Regular articles that demonstrate expertise and improve SEO" },
    { title: "Case Studies", description: "Success stories that showcase real results for clients" },
    { title: "Whitepapers", description: "In-depth research reports that establish thought leadership" },
    { title: "Infographics", description: "Visual content that simplifies complex information" },
    { title: "Videos", description: "Engaging visual content for demonstrations and storytelling" },
    { title: "Email Newsletters", description: "Regular updates to nurture leads and maintain engagement" },
    { title: "Social Media Content", description: "Platform-specific content for community building" },
    { title: "Website Copy", description: "Persuasive text that drives visitors to take action" },
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
        title="Content Strategy"
        description="Strategic content planning and creation that engages your audience, builds authority, and drives business results."
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

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] bg-clip-text text-transparent mb-8">
            Strategic Content That Drives Results
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`Content is at the heart of effective digital marketing, but random content creation without a clear strategy rarely delivers results. Our Content Strategy services provide a structured approach to planning, creating, and optimizing content that resonates with your target audience and supports your business objectives. We focus on developing comprehensive strategies that align with your brand voice, address audience needs throughout the customer journey, and leverage the right formats and channels to maximize impact. From initial audience research to ongoing performance analysis, we ensure your content marketing efforts are strategic, cohesive, and measurable.`}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] my-12 opacity-50" />

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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#2DD4BF] to-[#5EEAD4] bg-clip-text text-transparent"
            >
              Content Strategy Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {`Our comprehensive content strategy services are designed to help you create purposeful content that engages your audience and achieves your business goals.`}
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

        {/* Content Types */}
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
              Content Formats
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] bg-clip-text text-transparent"
            >
              Strategic Content Types
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              We develop and create various content formats tailored to your audience preferences and marketing objectives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#111240] mb-2">{type.title}</h3>
                <p className="text-sm text-[#111240]/60">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Content Strategy Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We follow a systematic approach to developing and implementing content strategies that deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Research & Analysis</h3>
              <p className="text-white/70">
                Understanding your audience, competitors, and business objectives to develop a data-informed strategy.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Strategy Development</h3>
              <p className="text-white/70">
                Creating a comprehensive content plan with topics, formats, channels, and editorial calendar.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Content Creation</h3>
              <p className="text-white/70">
                Producing high-quality content that aligns with your brand voice and resonates with your audience.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Distribution & Analysis</h3>
              <p className="text-white/70">
                Publishing, promoting, measuring performance, and continuously optimizing your content strategy.
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
          <h2 className="text-3xl font-bold text-[#111240] mb-6">Ready to Develop Your Content Strategy?</h2>
          <p className="text-[#111240]/70 max-w-2xl mx-auto mb-8">
            Contact our content strategy specialists to discuss how we can help you create purposeful content that engages your audience and drives results.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] rounded-lg text-white font-medium hover:from-[#2DD4BF] hover:to-[#5EEAD4] transition-all duration-300"
          >
            Schedule a Content Strategy contact
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}