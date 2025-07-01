// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Services from '@/components/Services';
// import Features from '@/components/Features';
// import CTA from '@/components/CTA';
// import BlogPreview from '@/components/BlogPreview';

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <About />
//       <Services />
//       {/* <Features /> */}
//       <CTA />
//       <BlogPreview />
//     </main>
//   );
// }

"use client";

import { useTranslation } from "react-i18next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      {/* إذا حابب تمرر نصوص مترجمة كـ props */}
      <Hero />
      <About />
      <Services />
      {/* <Features /> */}
      <CTA />
      <BlogPreview />
    </main>
  );
}
