/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

/**
 * مكون قسم "لماذا تختارنا" (Why Choose Us) لمنصة DECEMBER الفاخرة
 * يعرض المزايا الأربعة بتصاميم وأيقونات مرسومة بالخطوط اليدوية الانسيابية (Fashion-inspired SVG Art)
 */
export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // تفاصيل المزايا الأربعة مع الأيقونات الفنية الانسيابية
  const features = [
    {
      id: "feat-expertise",
      title: "خبرة استثنائية",
      desc: "طاقم من الخبراء العالميين المعتمدين والمكرسين لتقديم أعلى مستويات الرعاية والجمال بدقة متناهية.",
      // أيقونة خطية مرسومة لتمثيل مصففة شعر / يد خبيرة
      svg: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 stroke-current text-gold-start" fill="none" strokeWidth="1.2" strokeLinecap="round">
          <path d="M12,48 C16,42 22,40 32,40 C42,40 48,42 52,48" />
          <path d="M32,40 C36,36 38,30 38,24 C38,18 34,14 32,14 C30,14 26,18 26,24 C26,30 28,36 32,40" />
          <path d="M18,22 C14,24 16,34 22,32" />
          <path d="M46,22 C50,24 48,34 42,32" />
          <path d="M32,14 C36,10 40,12 42,16 C44,20 40,24 38,24" />
        </svg>
      ),
    },
    {
      id: "feat-products",
      title: "منتجات فاخرة حصرية",
      desc: "نستخدم أفخم المنتجات العضوية ومستحضرات التجميل الباريسية النادرة والآمنة تمامًا على بشرتكِ وشعركِ.",
      // أيقونة خطية زجاجة عطر فاخرة ذات طابع انسيابي غير هندسي
      svg: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 stroke-current text-gold-start" fill="none" strokeWidth="1.2" strokeLinecap="round">
          <rect x="20" y="24" width="24" height="26" rx="3" />
          <path d="M28,24 L28,18 L36,18 L36,24" />
          <path d="M24,18 L40,18" />
          <circle cx="32" cy="12" r="3" />
          <path d="M20,32 C26,35 38,29 44,32" />
          <path d="M20,40 C26,43 38,37 44,40" />
        </svg>
      ),
    },
    {
      id: "feat-environment",
      title: "بيئة خاصة ومريحة",
      desc: "ملاذ هادئ يوفر لكِ خصوصية تامة وراحة مطلقة بعيدًا عن صخب الحياة لتستمتعي بلحظاتكِ الخاصة.",
      // أيقونة خطية لزهرة لوتس انسيابية دقيقة تعبر عن السبا والهدوء والخصوصية
      svg: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 stroke-current text-gold-start" fill="none" strokeWidth="1.2" strokeLinecap="round">
          <path d="M32,48 C32,48 24,34 24,24 C24,18 28,14 32,14 C36,14 40,18 40,24 C40,34 32,48 32,48 Z" />
          <path d="M32,48 C32,48 16,40 14,30 C12,24 16,18 22,20 C26,21 30,26 32,32" />
          <path d="M32,48 C32,48 48,40 50,30 C52,24 48,18 42,20 C38,21 34,26 32,32" />
          <path d="M18,48 C24,46 40,46 46,48" />
        </svg>
      ),
    },
    {
      id: "feat-results",
      title: "نتائج مضمونة",
      desc: "نهتم بالتفاصيل الدقيقة ونضمن لكِ مظهرًا رائعًا وثقة متجددة تدوم طويلاً بعد كل زيارة لملاذنا.",
      // أيقونة خطية لمرآة يدوية انسيابية مزينة بتأثير نجمي لامع
      svg: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 stroke-current text-gold-start" fill="none" strokeWidth="1.2" strokeLinecap="round">
          <circle cx="32" cy="24" r="14" />
          <path d="M32,38 L32,50" />
          <path d="M24,50 L40,50" />
          <path d="M42,16 Q44,14 46,16" />
          <path d="M44,14 Q46,16 48,14" />
          <path d="M24,24 C24,20 28,16 32,16" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // تتابع بمعدل 0.15 ثانية بين كل بطاقة
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1], // Quiet luxury slowing curve
      },
    },
  };

  return (
    <section
      id="lialy-why-choose-us"
      ref={sectionRef}
      className="w-full bg-champagne py-16 md:py-24 px-6 md:px-12 relative flex flex-col items-center justify-center overflow-hidden border-t border-b border-gold-start/10"
    >
      {/* خلفية جمالية مدمجة لإضافة نعومة تليق بـ DECEMBER */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,254,251,0.45)_0%,transparent_80%)] pointer-events-none" />

      {/* ترويسة القسم المركزية الفخمة */}
      <div className="text-center max-w-xl mb-16 relative z-10">
        <span className="font-serif italic text-xs md:text-sm text-gold-start tracking-widest uppercase block mb-3">
          Savoir-Faire Excellence
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-deep-bronze tracking-[0.1em] font-light uppercase leading-tight">
          لماذا تختارين ملاذ DECEMBER؟
        </h2>
        <div className="w-24 h-[1px] bg-gold-start/30 mx-auto mt-5" />
      </div>

      {/* شبكة البطاقات الأربعة المتجاوبة والمتتابعة في الظهور */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {features.map((feat) => (
          <motion.div
            key={feat.id}
            id={feat.id}
            variants={cardVariants}
            whileHover={{
              y: -4,
              borderColor: "rgba(201, 161, 94, 1)",
              backgroundColor: "rgba(255, 252, 249, 0.45)",
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="flex flex-col items-center text-center p-8 bg-ivory-white/20 border border-gold-start/15 rounded-[3px] shadow-sm hover:shadow-[0_10px_25px_rgba(110,78,46,0.02)] transition-all duration-300"
          >
            {/* حاوية الأيقونة الانسيابية */}
            <div className="mb-6 p-4 border border-gold-start/10 rounded-full bg-ivory-white/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              {feat.svg}
            </div>

            {/* عنوان البطاقة القصير */}
            <h3 className="font-serif text-lg text-deep-bronze font-light tracking-[0.05em] mb-3">
              {feat.title}
            </h3>

            {/* جملة الوصف القصيرة الدقيقة بـ Inter */}
            <p className="font-sans text-xs md:text-[13px] text-charcoal-text/85 font-light leading-relaxed">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
