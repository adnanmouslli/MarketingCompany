"use client"; 

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code2, LineChart } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/20 to-emerald-900/20" />
        
        {/* Animated Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
        </div>
      </div>
    
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Transform Your Digital Presence</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Ready to Elevate Your Business to New Heights?
          </h2>
          
          <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partner with Atlants Marketing and AnyCode to create powerful digital experiences that drive growth and success in today's competitive landscape.
          </p>

          {/* Services Preview */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <LineChart className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Marketing Excellence</h3>
              </div>
              <p className="text-slate-300/80">Strategic digital marketing solutions that deliver measurable results</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Code2 className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Technical Innovation</h3>
              </div>
              <p className="text-slate-300/80">Cutting-edge development solutions for your digital needs</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full 
                overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative flex items-center text-white font-medium">
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              href="/services"
              className="group px-8 py-4 rounded-full border border-white/20 hover:bg-white/10
                backdrop-blur-sm transition-all duration-300 hover:border-white/40"
            >
              <span className="text-white/90 group-hover:text-white flex items-center font-medium">
                Explore Our Services
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}