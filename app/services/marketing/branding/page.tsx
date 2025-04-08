"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Type, 
  MessageCircle, 
  Target, 
  Heart, 
  ArrowRight 
} from "lucide-react";
import ServiceHero from "@/components/services/ServiceHero";
import Link from "next/link";

export default function BrandDevelopmentPage() {
  const services = [
    {
      icon: Palette,
      title: "Visual Identity Design",
      description:
        "Professional logo design, color palette selection, and visual elements that create a cohesive and memorable brand identity.",
      gradient: "from-[#9333EA] to-[#A855F7]",
    },
    {
      icon: Type,
      title: "Brand Messaging",
      description:
        "Development of clear, compelling brand messaging including taglines, value propositions, and brand voice guidelines.",
      gradient: "from-[#A855F7] to-[#C084FC]",
    },
    {
      icon: MessageCircle,
      title: "Brand Strategy",
      description:
        "Comprehensive brand strategy that defines your positioning, differentiators, and roadmap for building brand equity.",
      gradient: "from-[#C084FC] to-[#D8B4FE]",
    },
    {
      icon: Target,
      title: "Brand Guidelines",
      description:
        "Detailed brand guidelines that ensure consistency across all channels and touchpoints to strengthen brand recognition.",
      gradient: "from-[#9333EA] to-[#A855F7]",
    },
    {
      icon: Heart,
      title: "Rebranding",
      description:
        "Strategic rebranding services to refresh or completely transform your brand to better align with your evolving business goals.",
      gradient: "from-[#A855F7] to-[#C084FC]",
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
        title="Brand Development"
        description="Building distinctive, memorable brand identities that connect with your audience and create lasting business value."
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

          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#9333EA] to-[#A855F7] bg-clip-text text-transparent mb-8">
            Building Powerful Brand Identities
          </h2>

          <p className="text-lg text-[#111240]/70 leading-relaxed text-justify">
            {`Your brand is more than just a logo—it's the complete experience customers have with your company, from visual elements to messaging and customer interactions. Our Brand Development services help you create a cohesive, compelling brand identity that resonates with your target audience and differentiates you from competitors. Whether you're launching a new brand, refreshing an existing one, or undergoing a complete rebrand, our strategic approach focuses on creating authentic brand experiences that build recognition, loyalty, and business value.`}
          </p>
        </motion.div>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#9333EA] to-[#A855F7] my-12 opacity-50" />

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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#A855F7] to-[#C084FC] bg-clip-text text-transparent"
            >
              Brand Development Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto"
            >
              {`Our comprehensive brand development services are designed to help you create, evolve, and strengthen your brand identity in the marketplace.`}
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

        {/* Brand Development Process */}
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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#9333EA] to-[#A855F7] bg-clip-text text-transparent"
            >
              Brand Development Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#111240]/70 max-w-2xl mx-auto mb-16"
            >
              Our strategic, research-driven process ensures we develop authentic brands that connect with audiences and drive business results.
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
              <div className="w-12 h-12 rounded-full bg-[#9333EA]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#9333EA]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Discovery & Research</h3>
              <p className="text-[#111240]/60">
                We begin by understanding your business goals, target audience, market position, and competitive landscape through in-depth research.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#A855F7]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#A855F7]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Strategy & Concept</h3>
              <p className="text-[#111240]/60">
                Developing your brand strategy including positioning, value proposition, personality, and conceptual creative directions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-[#C084FC]/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-[#C084FC]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#111240] mb-4">Design & Implementation</h3>
              <p className="text-[#111240]/60">
                Creating and refining all brand elements, developing comprehensive guidelines, and supporting implementation across channels.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Case Studies - Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-r from-[#111240] to-[#1a1f4b] rounded-2xl p-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Brand Success Stories</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              See how our brand development services have helped businesses transform their market presence and achieve growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Retail Brand Transformation</h3>
              <p className="text-sm text-white/60 mb-4">E-commerce | Retail</p>
              <p className="text-white/70 mb-4">
                Complete rebranding for a retail chain that increased brand recognition by 45% and customer engagement by 60% within six months.
              </p>
              <div className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors">
                <span className="mr-2">View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Tech Startup Brand Launch</h3>
              <p className="text-sm text-white/60 mb-4">Technology | SaaS</p>
              <p className="text-white/70 mb-4">
                Brand development for a tech startup that helped secure $3M in funding and established them as an industry innovator from day one.
              </p>
              <div className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors">
                <span className="mr-2">View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </div>
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
          <h2 className="text-3xl font-bold text-[#111240] mb-6">Ready to Build a Stronger Brand?</h2>
          <p className="text-[#111240]/70 max-w-2xl mx-auto mb-8">
            Let's discuss how our brand development services can help you create a distinctive identity that resonates with your audience and drives business growth.
          </p>
          <Link 
            href="/contact" 
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#9333EA] to-[#A855F7] rounded-lg text-white font-medium hover:from-[#A855F7] hover:to-[#C084FC] transition-all duration-300"
          >
            Schedule a Brand contact
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}