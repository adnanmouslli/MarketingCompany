"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Transform Your Digital Presence",
    subtitle: "ATLANTS MARKETING",
    description:
      "We combine innovative marketing strategies with cutting-edge development by AnyCode to deliver exceptional digital experiences that drive real business growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    accent: "from-[#3AA39C] to-[#1B365D]",
    buttons: {
      primary: { text: "Our Services", href: "/services" },
      secondary: { text: "Get Started", href: "/contact" },
    },
  },
  {
    title: "Data-Driven Marketing Solutions",
    subtitle: "STRATEGIC GROWTH",
    description:
      "Leverage our expertise in digital marketing and analytics to make informed decisions that boost your ROI and market presence.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    accent: "from-[#1B365D] to-[#3AA39C]",
    buttons: {
      primary: { text: "View Case Studies", href: "/case-studies" },
      secondary: { text: "Free Consultation", href: "/contact" },
    },
  },
  {
    title: "The Power of Marketing & Development Synergy",
    subtitle: "ATLANTS & ANYCODE",
    description: "Experience the perfect blend of marketing excellence and technical innovation. Our partnership delivers end-to-end solutions that transform ideas into market-leading digital products.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    accent: "from-purple-600 to-emerald-600",
    buttons: {
      primary: { text: "Partnership Benefits", href: "/partnership" },
      secondary: { text: "Success Stories", href: "/success-stories" }
    }
  }
];

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Swiper
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-[2s]"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-80`} />
              </div>
              <div className="relative h-full flex items-center justify-center px-6 md:px-12">
                <div className="max-w-3xl text-center text-white">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-block text-lg font-medium mb-4 bg-white/10 px-6 py-2 rounded-full"
                  >
                    {slide.subtitle}
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl mb-8 bg-black/30 p-6 rounded-xl shadow-lg"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <Link
                      href={slide.buttons.primary.href}
                      className="group bg-[#3AA39C] text-white px-8 py-3 rounded-full transition-all hover:scale-105 hover:bg-[#2F8B7C] shadow-lg"
                    >
                      {slide.buttons.primary.text}
                    </Link>
                    <Link
                      href={slide.buttons.secondary.href}
                      className="group border-2 border-[#3AA39C] text-white px-8 py-3 rounded-full transition-all hover:scale-105 hover:bg-[#3AA39C]/10"
                    >
                      {slide.buttons.secondary.text}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev text-white hover:text-[#3AA39C] transition-colors">
        <ChevronLeft className="w-8 h-8" />
      </div>
      <div className="swiper-button-next text-white hover:text-[#3AA39C] transition-colors">
        <ChevronRight className="w-8 h-8" />
      </div>
    </div>
  );
}
