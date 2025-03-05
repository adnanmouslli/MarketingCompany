"use client";

import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Sparkles } from "lucide-react";
import { apiClient } from "@/lib/api";
import Link from "next/link";

interface Service {
  categoryId: number;
  description: string;
  id: number;
  overviewcontent: string;
  overviewtitle: string;
  servicelink: string;
  title: string;
}

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      },
    },
  },
  shine: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: [0, 1, 0],
      x: 100,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  }
};

// @ts-ignore
const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={variants.item}
      className="group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="relative overflow-hidden mb-6">
          <motion.div
            variants={variants.shine}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
            {service.title}
          </h3>
          <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-teal-500" />
        </div>
        
        <p className="text-white/70 leading-relaxed mb-6">
          {service.description}
        </p>
        
        <Link 
          href={`/services/${service.servicelink}`}
          className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await apiClient.get("/services");
      return response.data.services;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm space-x-3">
          <div className="w-4 h-4 border-2 border-t-blue-500 border-blue-500/30 rounded-full animate-spin" />
          <span className="text-white/70">Loading services...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-[#111240] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181c52] via-[#181c52] to-[#3785CC] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={variants.container}
        className="relative z-10 max-w-7xl mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.div
            variants={variants.item}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>What We Offer</span>
          </motion.div>
          
          <motion.h2
            variants={variants.item}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>
          
          <motion.p
            variants={variants.item}
            className="max-w-2xl mx-auto text-lg text-white/60"
          >
            Discover our comprehensive range of services designed to help your business grow and succeed in the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services?.map((service: Service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}