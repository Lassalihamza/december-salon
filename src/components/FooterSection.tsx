/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Instagram, Facebook, MessageSquare, MapPin, Mail, Phone, Heart } from "lucide-react";

// ✅ اللوغو الحقيقي لعلامة DECEMBER
import logoDecember from "../assets/images/logo-december.png";

/**
 * مكون تذييل الصفحة الفاخر (Footer Section) لصالون DECEMBER الفاخر
 * يتميز بخلفية Deep Burgundy غامقة ولوغو العلامة الحقيقي وأعمدة روابط منسقة وحقوق نشر شفافة.
 */
export default function FooterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // قوائم الروابط الأربعة المنظمة
  const footerLinks = {
    services: {
      title: "طقوس الخدمات",
      links: [
        { label: "جلسات الشعر الفاخرة", href: "#lialy-salon-services" },
        { label: "طقوس صبغات ديسمبر", href: "#lialy-salon-services" },
        { label: "علاجات الشعر التحريرية", href: "#lialy-salon-services" },
        { label: "رموش وشفاه كوتور", href: "#lialy-salon-services" },
        { label: "باقات الصيف والمناسبات", href: "#lialy-salon-services" }
      ]
    },
    about: {
      title: "عن الصالون",
      links: [
        { label: "قصة صالون ديسمبِر", href: "#" },
        { label: "فلسفة الفخامة الهادئة", href: "#" },
        { label: "مستحضراتنا العضوية", href: "#" },
        { label: "فريق الخبيرات الدوليات", href: "#" },
        { label: "معرض الصور الملكي", href: "#" }
      ]
    },
    contact: {
      title: "التواصل والحجز",
      links: [
        { label: "احجزي موعدكِ الذهبي", href: "#lialy-booking-cta" },
        { label: "تنسيق الفعاليات الخاصة", href: "#" },
        { label: "باقات العروس الملكية", href: "#" },
        { label: "موقعنا الفريد بالرياض", href: "#lialy-visit-us" },
        { label: "ساعات الاستقبال الراقية", href: "#lialy-visit-us" }
      ]
    },
    policies: {
      title: "السياسات والخصوصية",
      links: [
        { label: "سياسة الخصوصية المطلقة", href: "#" },
        { label: "شروط استخدام المنصة", href: "#" },
        { label: "سياسة الإلغاء والتغيير", href: "#" },
        { label: "الأسئلة الشائعة للعميلات", href: "#lialy-salon-faq" }
      ]
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      id="lialy-salon-footer"
      ref={containerRef}
      className="w-full bg-[#5A1820] py-16 md:py-20 px-6 md:px-12 relative flex flex-col items-center justify-center border-t border-gold-start/20 text-ivory-white overflow-hidden"
      style={{ backgroundColor: "#5A1820" }}
    >
      {/* هالة إضاءة مذهبة دافئة في الخلفية لعمق جمالي صامت ومطابق للهوية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,161,94,0.15)_0%,transparent_60%)] pointer-events-none" />

      {/* الجزء العلوي: اللوغو الحقيقي لصالون ديسمبر + الاسم والتباعد العريض للأحرف */}
      <div className="flex flex-col items-center justify-center text-center mb-16 relative z-10">
        
        {/* إطار اللوغو الدائري المذهّب بنبض هادئ جدًا — يحتوي صورة اللوغو الحقيقي */}
        <motion.div
          animate={{ opacity: [0.85, 1, 0.85], scale: [0.98, 1, 0.98] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 relative flex items-center justify-center mb-4 rounded-full border"
          style={{ borderColor: "rgba(201,161,94,0.35)" }}
        >
          <img
            src={logoDecember}
            alt="DECEMBER Logo"
            className="w-[70%] h-[70%] object-contain filter drop-shadow-[0_2px_10px_rgba(201,161,94,0.15)]"
          />
        </motion.div>

        {/* اسم الصالون بخط Playfair Display بتباعد أحرف واسع وعميق */}
        <h2 className="font-serif text-2xl md:text-3xl tracking-[0.3em] text-ivory-white font-light uppercase">
          DECEMBER
        </h2>
        
        {/* شارة فرنسية صغيرة */}
        <span className="font-serif italic text-[10px] text-gold-start tracking-widest uppercase mt-1 opacity-90">
          Salon &amp; Spa d'Exception
        </span>
      </div>

      {/* الجزء الأوسط: 4 أعمدة روابط منظمة باللغة العربية */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center sm:text-right relative z-10 mb-16">
        
        {/* العمود الأول: طقوس الخدمات */}
        <div className="flex flex-col">
          <h3 className="font-serif text-sm text-gold-start font-medium tracking-wider mb-5">
            {footerLinks.services.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.services.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-xs text-ivory-white/75 hover:text-ivory-white transition-colors duration-300 relative py-1 inline-block group"
                >
                  {link.label}
                  {/* خط سفلي ذهبي رفيع يظهر عند hover بحركة تمدد من الوسط */}
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثاني: عن الصالون */}
        <div className="flex flex-col">
          <h3 className="font-serif text-sm text-gold-start font-medium tracking-wider mb-5">
            {footerLinks.about.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.about.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-xs text-ivory-white/75 hover:text-ivory-white transition-colors duration-300 relative py-1 inline-block group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث: التواصل والحجز */}
        <div className="flex flex-col">
          <h3 className="font-serif text-sm text-gold-start font-medium tracking-wider mb-5">
            {footerLinks.contact.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.contact.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-xs text-ivory-white/75 hover:text-ivory-white transition-colors duration-300 relative py-1 inline-block group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الرابع: السياسات والخصوصية */}
        <div className="flex flex-col">
          <h3 className="font-serif text-sm text-gold-start font-medium tracking-wider mb-5">
            {footerLinks.policies.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.policies.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-xs text-ivory-white/75 hover:text-ivory-white transition-colors duration-300 relative py-1 inline-block group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-start scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* الجزء السفلي للتواصل الاجتماعي والروابط والخطوط الفاصلة */}
      <div className="w-full max-w-5xl flex flex-col items-center relative z-10 pt-8 border-t border-gold-start/15">
        
        {/* صف الأيقونات الخطية الرفيعة للشبكات الاجتماعية الفخمة */}
        <div className="flex items-center gap-6 mb-8">
          <a
            href="#"
            className="w-9 h-9 border border-gold-start/20 rounded-full flex items-center justify-center text-ivory-white/80 hover:text-gold-start hover:border-gold-start transition-all duration-300 cursor-pointer"
            aria-label="Instagram"
          >
            <Instagram size={14} strokeWidth={1.2} />
          </a>
          <a
            href="#"
            className="w-9 h-9 border border-gold-start/20 rounded-full flex items-center justify-center text-ivory-white/80 hover:text-gold-start hover:border-gold-start transition-all duration-300 cursor-pointer"
            aria-label="Facebook"
          >
            <Facebook size={14} strokeWidth={1.2} />
          </a>
          <a
            href="#"
            className="w-9 h-9 border border-gold-start/20 rounded-full flex items-center justify-center text-ivory-white/80 hover:text-gold-start hover:border-gold-start transition-all duration-300 cursor-pointer"
            aria-label="WhatsApp"
          >
            <MessageSquare size={14} strokeWidth={1.2} />
          </a>
          <a
            href="#"
            className="w-9 h-9 border border-gold-start/20 rounded-full flex items-center justify-center text-ivory-white/80 hover:text-gold-start hover:border-gold-start transition-all duration-300 cursor-pointer"
            aria-label="Map Location"
          >
            <MapPin size={14} strokeWidth={1.2} />
          </a>
        </div>

        {/* سطر حقوق النشر والتأسيس الفاخر */}
        <div className="flex flex-col sm:flex-row items-center gap-2 justify-center text-center text-[10px] text-ivory-white/60 font-light font-sans tracking-wider">
          <span>&copy; {new Date().getFullYear()} صالون وسبا ديسمبِر الفاخر DECEMBER. جميع الحقوق محفوظة.</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1">
            صنع بكل شغف وإكرام لجمالكِ الملكي
            <Heart size={10} className="text-gold-start animate-pulse" fill="currentColor" />
          </span>
        </div>

      </div>
    </footer>
  );
}
