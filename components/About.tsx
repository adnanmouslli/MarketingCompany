"use client";

import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Lightbulb,
  Users,
  Code,
  Layers,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

const ICONS: Record<string, LucideIcon> = {
  Target,
  Rocket,
  Lightbulb,
  Users,
  Code,
  Layers,
};

const aboutContent = {
  title: "Marketing Excellence Meets Technical Innovation",
  subtitle: "Together, Atlants Marketing and AnyCode create powerful digital experiences that drive business growth",
  content: [
    "At Atlants Marketing, we believe in the power of strategic marketing combined with cutting-edge technology. Our partnership with AnyCode represents the perfect fusion of creative marketing expertise and technical innovation.",
    "We specialize in delivering comprehensive digital solutions that help businesses thrive in today's competitive landscape. From brand development to advanced web applications, our collaborative approach ensures exceptional results."
  ],
  stats: [
    { number: "200+", label: "Satisfied Clients" },
    { number: "90%", label: "Client Retention" },
    { number: "150+", label: "Projects Completed" },
    { number: "2", label: "Specialized Teams" }
  ],
  features: [
    {
      icon: "Rocket",
      title: "Strategic Marketing",
      text: "Data-driven marketing strategies that deliver measurable results and business growth.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: "Code",
      title: "Technical Excellence",
      text: "Cutting-edge development solutions powered by AnyCode's expert team.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: "Layers",
      title: "Integrated Solutions",
      text: "Seamless combination of marketing expertise and technical innovation.",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: "Users",
      title: "Collaborative Approach",
      text: "Two specialized teams working together to achieve your business goals.",
      color: "from-emerald-600 to-blue-600"
    }
  ]
};

export default function About() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50 to-blue-50"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4 inline-block">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              {aboutContent.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {aboutContent.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

          <div className="relative w-full h-96 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl overflow-hidden">
                {/* خلفية زخرفية */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10" />
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
                </div>
                
                {/* حاوية الشعارات */}
                <div className="relative flex items-center justify-center gap-8 lg:gap-16">
                  {/* شعار اطلنطش */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
                      <div className="relative p-8 bg-white rounded-2xl shadow-xl group-hover:shadow-2xl transform group-hover:-translate-y-1 transition-all duration-500">
                        <img src="/logo.png" alt="Atlants Logo" className="w-40 h-40 object-contain" />
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-4 text-center"
                    >
                      <h3 className="text-lg font-semibold text-slate-800">Atlants</h3>
                      <p className="text-sm text-slate-600">Marketing Excellence</p>
                    </motion.div>
                  </motion.div>

                  {/* عنصر الربط */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-lg opacity-20" />
                    <div className="relative w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-400">&</span>
                    </div>
                  </div>

                  {/* AnyCode شعار */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
                      <div className="relative p-8 bg-white rounded-2xl shadow-xl group-hover:shadow-2xl transform group-hover:-translate-y-1 transition-all duration-500">
                        <img src="/logo-anycode.png" alt="AnyCode Logo" className="w-40 h-40 object-contain" />
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 text-center"
                    >
                      <h3 className="text-lg font-semibold text-slate-800">AnyCode</h3>
                      <p className="text-sm text-slate-600">Technical Innovation</p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* تأثيرات الخلفية */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              </div>

            <div className="grid grid-cols-2 gap-4">
              {aboutContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content and Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              {aboutContent.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-6">
              {aboutContent.features.map((feature, index) => {
                const IconComponent = ICONS[feature.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600">{feature.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white
                transition-all duration-300 group shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
            >
              <span>Learn More About Our Partnership</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}