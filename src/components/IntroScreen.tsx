/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ✅ اللوغو الحقيقي لعلامة DECEMBER
import logoDecember from "../assets/images/logo-december.png";

interface IntroScreenProps {
  /** تحديد ما إذا كانت شاشة التحميل نشطة أم لا */
  isLoading: boolean;
  /** تُستدعى عند انتهاء شاشة التحميل بالكامل */
  onComplete: () => void;
}

/**
 * مكون شاشة التحميل الافتتاحية الفاخرة لمنصة DECEMBER
 * يتميز بلوغو العلامة الحقيقي داخل إطار دائري مذهّب وحركة تدريجية للأحرف
 */
export default function IntroScreen({ isLoading, onComplete }: IntroScreenProps) {
  const [progress, setProgress] = useState(0);

  // تحديث خط التحميل الرفيع تدريجيًا بما يتناسب مع مدة الـ 3.8 ثوانٍ
  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    const duration = 3800; // 3.8 ثوانٍ للتحميل الكامل
    const intervalTime = 40;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isLoading]);

  // تقسيم اسم DECEMBER لتحريك كل حرف بشكل مستقل بأسلوب Stagger
  const brandName = "DECEMBER";
  const letters = Array.from(brandName);

  // إعدادات حركة الظهور المتتابع للأحرف
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.1, // تبدأ بعد اقتراب ظهور اللوغو من الاكتمال (2.1 ثانية)
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.215, 0.61, 0.355, 1], // Quiet luxury slow easing
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          id="lialy-intro-screen"
          className="fixed inset-0 bg-ivory-white z-50 flex flex-col items-center justify-between py-16 px-4 overflow-hidden select-none"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.3,
              ease: [0.76, 0, 0.24, 1], // Curtain reveal curve
            },
          }}
        >
          {/* عنصر خلفية توهج ذهبي خفيف جدًا ليعطي دفء وفخامة هادئة */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,201,176,0.18)_0%,transparent_70%)] pointer-events-none" />

          {/* Aesthetic Accents - زوايا حدودية تزيد من طابع الفخامة لصالونات الكوتور */}
          <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 border-t border-l border-blush-accent/40 opacity-40 pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32 border-b border-r border-blush-accent/40 opacity-40 pointer-events-none" />

          {/* تباعد علوي لإعطاء مساحة فارغة سخية */}
          <div className="h-6 w-full" />

          {/* الحاوية المركزية: اللوغو الحقيقي وشعار العلامة التجارية */}
          <div className="flex flex-col items-center justify-center max-w-sm w-full text-center relative z-10">
            
            {/* إطار اللوغو الدائري المذهّب — يحتوي صورة اللوغو الحقيقي لصالون ديسمبر */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="w-40 h-40 md:w-48 md:h-48 relative flex items-center justify-center mb-8 rounded-full bg-[#5A1820] border-2 shadow-[0_4px_25px_rgba(90,24,32,0.15)]"
              style={{ borderColor: "#C9A15E" }}
            >
              {/* حلقة داخلية دقيقة ومنقطة باللون العاجي المطفي */}
              <motion.div
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.0 }}
                className="absolute inset-3 rounded-full border pointer-events-none"
                style={{ borderColor: "rgba(255,252,249,0.5)", borderStyle: "dashed", borderWidth: "0.8px" }}
              />

              {/* اللوغو الحقيقي — صورة PNG بخلفية شفافة */}
              <motion.img
                src={logoDecember}
                alt="DECEMBER Monogram"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.215, 0.61, 0.355, 1], delay: 0.4 }}
                className="w-[62%] h-[62%] object-contain relative z-10"
              />
            </motion.div>

            {/* اسم العلامة التجارية الفخم DECEMBER */}
            <motion.div
              variants={titleContainerVariants}
              initial="hidden"
              animate="show"
              className="flex justify-center items-center flex-wrap select-none"
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="font-serif text-3xl md:text-4xl tracking-[0.25em] text-deep-bronze font-light inline-block"
                  style={{ marginRight: char === " " ? "0.6em" : "0px" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* الوصف الإضافي الفاخر LUXURY SALON & SPA */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.9,
                duration: 1.1,
                ease: "easeOut",
              }}
              className="font-serif italic text-sm md:text-base tracking-[0.15em] text-gold-start mt-4 font-light opacity-90 select-none"
            >
              LUXURY SALON & SPA
            </motion.p>
          </div>

          {/* شريط التحميل السفلي الرفيع (Progress Line) المنسجم مع المزاج العام */}
          <div className="w-full max-w-xs md:max-w-sm px-4 flex flex-col items-center">
            <div className="w-full h-[1px] bg-champagne/40 relative overflow-hidden">
              <motion.div
                id="loading-progress-line"
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-gold-start to-gold-end"
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
            
            {/* نسبة التحميل مكتوبة بخط رفيع خافت */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="font-sans text-[10px] tracking-widest text-deep-bronze/70 mt-2 font-light"
            >
              {Math.round(progress)}%
            </motion.span>

            {/* Branding Meta - تفاصيل التأسيس الفاخرة للصالون من تصميم Immersive UI */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.0, duration: 1.2 }}
              className="text-[9px] uppercase tracking-[0.3em] text-gold-start mt-6 font-light select-none font-sans text-center"
            >
              Est. 2024 &bull; Luxury Sanctuary
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
