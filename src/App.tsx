/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Scissors, Eye, RotateCcw, Heart, Star } from "lucide-react";
import IntroScreen from "./components/IntroScreen";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ServicesSection from "./components/ServicesSection";
import SignatureService from "./components/SignatureService";
import GallerySection from "./components/GallerySection";
import ExpertsSection from "./components/ExpertsSection";
import ProductsSection from "./components/ProductsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatsSection from "./components/StatsSection";
import BookingCTA from "./components/BookingCTA";
import FAQSection from "./components/FAQSection";
import InstagramSection from "./components/InstagramSection";
import VisitUsSection from "./components/VisitUsSection";
import FooterSection from "./components/FooterSection";

// ✅ اللوغو الحقيقي لعلامة DECEMBER — تأكدي إنو الملف موجود بهالمسار بالضبط
import logoDecember from "./assets/images/logo-december.png";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // إغلاق شاشة التحميل تلقائيًا بعد فترة زمنية كافية لمشاهدة التحريك الفني (4.2 ثانية)
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 4200);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // مراقبة التمرير لتفعيل شريط التنقل العلوي الفاخر اللاصق
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إعادة تشغيل شاشة التحميل الافتتاحية لاستعراض الحركة مجددًا
  const handleReplayIntro = () => {
    setIsLoading(true);
  };

  // التنقل السلس التحريري للروابط الفاخرة
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-champagne text-charcoal-text font-sans selection:bg-blush-accent selection:text-deep-bronze overflow-x-hidden">
      
      {/* 1. شاشة التحميل الافتتاحية الفاخرة (تنزلق للأعلى عند الاكتمال) */}
      <IntroScreen
        isLoading={isLoading}
        onComplete={() => console.log("Intro loaded successfully.")}
      />

      {/* 2. شريط التنقل الفاخر اللاصق المتكامل (Sticky Luxury Navigation Header) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.0, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-between items-center px-6 md:px-12 ${
          isScrolled 
            ? "bg-charcoal-text/95 backdrop-blur-md py-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border-b border-gold-start/20" 
            : "bg-transparent py-6"
        }`}
      >
        {/* الشعار الفاخر — اللوغو الحقيقي جنب اسم العلامة */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <img
            src={logoDecember}
            alt="DECEMBER Logo"
            className="w-9 h-9 md:w-11 md:h-11 object-contain shrink-0"
          />
          <div className="flex flex-col items-start">
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] text-ivory-white font-light">
              DECEMBER
            </span>
            <span className="font-serif italic text-[10px] tracking-[0.1em] text-gold-start">
              L'Atelier de Beauté
            </span>
          </div>
        </div>

        {/* روابط التنقل المريحة المنسقة بالكامل */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-sans tracking-widest text-ivory-white/80 uppercase">
          <a href="#lialy-about-story" onClick={(e) => handleScrollTo(e, "#lialy-about-story")} className="hover:text-gold-start transition-colors relative group py-1">
            قصتنا
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
          <a href="#lialy-why-choose-us" onClick={(e) => handleScrollTo(e, "#lialy-why-choose-us")} className="hover:text-gold-start transition-colors relative group py-1">
            ميزاتنا
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
          <a href="#lialy-salon-services" onClick={(e) => handleScrollTo(e, "#lialy-salon-services")} className="hover:text-gold-start transition-colors relative group py-1">
            الخدمات
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
          <a href="#lialy-signature-service" onClick={(e) => handleScrollTo(e, "#lialy-signature-service")} className="hover:text-gold-start transition-colors relative group py-1">
            الطقس الملكي
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
          <a href="#lialy-art-gallery" onClick={(e) => handleScrollTo(e, "#lialy-art-gallery")} className="hover:text-gold-start transition-colors relative group py-1">
            المعرض
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
          <a href="#lialy-editorial-products" onClick={(e) => handleScrollTo(e, "#lialy-editorial-products")} className="hover:text-gold-start transition-colors relative group py-1">
            المنتجات
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
          <a href="#lialy-visit-us" onClick={(e) => handleScrollTo(e, "#lialy-visit-us")} className="hover:text-gold-start transition-colors relative group py-1">
            موقعنا
            <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
        </div>

        {/* أزرار الإجراءات */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleReplayIntro}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[10px] tracking-widest font-sans text-ivory-white uppercase border border-gold-start/40 hover:border-gold-start bg-transparent hover:bg-gold-start/10 transition-all duration-300 cursor-pointer"
            style={{ borderRadius: "2px" }}
          >
            <RotateCcw size={10} strokeWidth={1.2} />
            إعادة العرض
          </button>
          
          <a
            href="#lialy-booking-cta"
            onClick={(e) => handleScrollTo(e, "#lialy-booking-cta")}
            className="px-4 py-2 text-[10px] tracking-widest font-sans text-charcoal-text bg-gold-start hover:bg-gold-end transition-colors duration-300 uppercase font-medium cursor-pointer"
            style={{ borderRadius: "2px" }}
          >
            احجزي الآن
          </a>
        </div>
      </motion.nav>

      {/* 3. قسم الـ Hero السينمائي الفاخر المتكامل مع شاشة التحميل */}
      <HeroSection onBookNow={() => {
        const el = document.getElementById("lialy-booking-cta");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }} />

      {/* 4. قسم الترحيب السردي الدافئ */}
      <section className="w-full bg-champagne py-24 px-6 md:px-12 relative flex flex-col items-center justify-center border-b border-gold-start/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,254,251,0.6)_0%,transparent_75%)] pointer-events-none" />
        <div className="text-center max-w-2xl relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="font-serif italic text-base text-gold-start tracking-wider block mb-3"
          >
            L'Atelier de Beauté
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.1, ease: "easeOut" }}
            className="font-serif text-3xl md:text-5xl text-deep-bronze tracking-[0.12em] font-light uppercase leading-tight mb-6"
          >
            الفخامة الهادئة والجمال الواثق
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="font-sans text-sm md:text-base text-charcoal-text/80 leading-relaxed max-w-xl mx-auto font-light"
          >
            مرحبًا بكِ في ملاذ DECEMBER وسبا المترف. حيث تلتقي الهوية الفنية للأزياء الراقية بالتفاصيل الدقيقة لصالونات التجميل الفاخرة. استمتعي بتجربة بصرية هادئة تعبّر عن الأنوثة الواثقة والراحة المطلقة.
          </motion.p>
        </div>
      </section>

      {/* 5. الأقسام المتتالية بنظام الفلو المفتوح والكامل (Full bleed backgrounds & custom containers) */}
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <SignatureService />
      <GallerySection />
      <ExpertsSection />
      <StatsSection />
      <ProductsSection />
      <TestimonialsSection />
      <BookingCTA />
      <FAQSection />
      <InstagramSection />
      <VisitUsSection />

    
      {/* 7. تذييل الصفحة الفخم المتكامل المصمم بالكامل (Footer Section) */}
      <FooterSection />
    </div>
  );
}
