"use client";

import { motion } from "framer-motion";
import { Cog, Database, Lightbulb, Puzzle, Settings, ArrowRight } from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function CustomSolutionsPage() {
  const services = [
    {
      icon: Cog,
      title: "Enterprise Software",
      description:
        "Tailored enterprise applications designed to optimize your specific business processes, workflows, and operations.",
      gradient: "from-[#10B981] to-[#059669]",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description:
        "Custom database design, migration, and optimization services to ensure your data is structured, secure, and accessible.",
      gradient: "from-[#059669] to-[#047857]",
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description:
        "Strategic technology consulting to identify opportunities for digital transformation and competitive advantage.",
      gradient: "from-[#047857] to-[#065F46]",
    },
    {
      icon: Puzzle,
      title: "Systems Integration",
      description:
        "Seamless integration of multiple systems, applications, and data sources to create unified and efficient workflows.",
      gradient: "from-[#10B981] to-[#059669]",
    },
    {
      icon: Settings,
      title: "Legacy Modernization",
      description:
        "Transforming outdated systems into modern, scalable applications while preserving critical business functionality.",
      gradient: "from-[#059669] to-[#047857]",
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
        title="Custom Software Solutions"
        description="Tailored software development to solve your unique business challenges and drive innovation."
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

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent mb-8">
            Bespoke Software Development
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`When off-the-shelf solutions don't meet your specific business requirements, our custom software development services provide tailored answers to your unique challenges. We specialize in building bespoke applications that align perfectly with your workflows, increase operational efficiency, and provide a competitive edge in your industry. Our experienced development team works closely with you throughout the process, from initial concept and design to development, testing, and ongoing support, ensuring that the final solution exceeds your expectations and delivers tangible business value.`}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#10B981] to-[#059669] my-12 opacity-50" />

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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#059669] to-[#047857] bg-clip-text text-transparent"
            >
              Custom Software Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {`Our comprehensive custom software development services are designed to address your specific business challenges with tailored solutions.`}
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

        {/* Benefits Section */}
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
              Why Custom Solutions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent"
            >
              Benefits of Custom Software
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              Discover the advantages of investing in custom-built software tailored to your business needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#111240] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center mr-3">
                  <span className="text-[#10B981] font-bold">1</span>
                </span>
                Perfect Fit for Your Business
              </h3>
              <p className="text-[#111240]/60">
                Custom software is designed specifically for your business processes, workflow, and requirements, eliminating the compromises that come with off-the-shelf solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#111240] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#059669]/10 flex items-center justify-center mr-3">
                  <span className="text-[#059669] font-bold">2</span>
                </span>
                Scalability & Flexibility
              </h3>
              <p className="text-[#111240]/60">
                Custom software can grow and evolve with your business, easily adapting to changing requirements and scaling as your operations expand.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#111240] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#047857]/10 flex items-center justify-center mr-3">
                  <span className="text-[#047857] font-bold">3</span>
                </span>
                Competitive Advantage
              </h3>
              <p className="text-[#111240]/60">
                Proprietary software tailored to your unique business model can provide a significant edge over competitors using standard solutions available to everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#111240] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#065F46]/10 flex items-center justify-center mr-3">
                  <span className="text-[#065F46] font-bold">4</span>
                </span>
                Integration Capabilities
              </h3>
              <p className="text-[#111240]/60">
                Custom software can be designed to seamlessly integrate with your existing systems and third-party applications, creating a unified technology ecosystem.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Development Process */}
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
              Our Approach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent"
            >
              Custom Development Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              Our structured and transparent development process ensures high-quality custom solutions that meet your specific business objectives.
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#10B981] to-[#065F46] opacity-20 rounded-full"></div>
            
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <div className="flex items-center mb-4">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#10B981]"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-[#111240]">Requirements Analysis</h3>
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-[#111240]/60">
                    We work closely with you to understand your business processes, challenges, and objectives to define clear requirements for your custom solution.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <div className="flex items-center mb-4">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#059669]"></div>
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-[#111240]/60">
                    Our architects and designers create a detailed blueprint for your custom solution, including system architecture, database design, and user interfaces.
                  </p>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-semibold text-[#111240]">Solution Design</h3>
                </div>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <div className="flex items-center mb-4">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#047857]"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-[#111240]">Development & Testing</h3>
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-[#111240]/60">
                    Our experienced development team brings your solution to life using modern technologies and best practices, with rigorous testing at every stage.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center mb-4">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#065F46]"></div>
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-[#111240]/60">
                    We ensure a smooth transition to your new software with comprehensive training, and provide ongoing maintenance and support to keep your solution operating optimally.
                  </p>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-semibold text-[#111240]">Deployment & Support</h3>
                </div>
              </div>
            </motion.div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready for a Custom Solution?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Contact our team to discuss your unique business challenges and discover how our custom software solutions can help you achieve your goals.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-lg text-white font-medium hover:from-[#059669] hover:to-[#047857] transition-all duration-300"
          >
            Schedule a contact
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}