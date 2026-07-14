/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}

/**
 * مكون قسم "آراء عميلاتنا" (Testimonials Section) لصالون DECEMBER الفاخر
 * يتميز بخلفية شمبانيا ناعمة وتخطيط تحريري فخم يسلط الضوء على الكلمات بنقش رائع وحركة انسيابية.
 */
export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials: Testimonial[] = [
    {
      id: "t1",
      quote: "صالون DECEMBER ليس مجرد مكان لتصفيف الشعر والعناية، بل هو ملاذ ملوكي يمنح الروح السكينة والجسد فخامة الرعاية والاسترخاء.",
      author: "العنود الدوسري",
      role: "سيدة أعمال",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "t2",
      quote: "طقس العروس الملكي كان تجربة العمر الأكثر دقة وجمالاً؛ شعرت كأنني ملكة باريسية تتوّج في ليلة دافئة وحالمة.",
      author: "ملاك الحربي",
      role: "مصممة أزياء كوتور",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: "t3",
      quote: "الخصوصية المطلقة وجودة المستحضرات العضوية الفاخرة جعلتني أعتمد صالون وسبا ديسمبِر ملاذي الأسبوعي الأوحد بلا تردد.",
      author: "سارة بن فهد",
      role: "أخصائية فنون تشكيلية",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    },
  ];

  // تشغيل تلقائي بطيء للغاية (كل 6 ثوانٍ)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  return (
    <section
      id="lialy-client-testimonials"
      ref={sectionRef}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={() => setIsAutoPlaying(false)}
      onTouchEnd={() => setIsAutoPlaying(true)}
      className="w-full bg-champagne py-20 md:py-28 px-6 md:px-12 relative flex flex-col items-center justify-center overflow-hidden border-t border-b border-gold-start/10"
    >
      {/* خلفية إشعاعية ناعمة لعمق الفخامة والخصوصية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,254,251,0.5)_0%,transparent_80%)] pointer-events-none" />

      {/* زهرة أو إشارة رقيقة تعلو القسم */}
      <div className="text-center mb-8 relative z-10">
        <span className="font-serif italic text-xs md:text-sm text-gold-start tracking-[0.2em] uppercase block mb-2">
          L'Écho de Beauté
        </span>
        <div className="flex items-center justify-center text-gold-start/35">
          <Quote size={28} strokeWidth={1.0} className="transform scale-x-[-1]" />
        </div>
      </div>

      {/* حاوية عارض الشرائح التفاعلي بـ Vanilla React & AnimatePresence */}
      <div className="w-full max-w-4xl min-h-[220px] flex items-center justify-center relative z-10 text-center mb-10 px-4 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center"
          >
            {/* الاقتباس التحريري الكبير الجريء بخط Playfair Display Italic */}
            <blockquote className="font-serif italic text-xl md:text-3xl lg:text-4.5xl text-deep-bronze font-light leading-relaxed md:leading-loose tracking-wide mb-8">
              "{testimonials[currentIdx].quote}"
            </blockquote>

            {/* تفاصيل العميلة الراقية (الاسم والصورة والمنصب) */}
            <div className="flex items-center gap-4 flex-row-reverse text-right mt-2">
              {/* الصورة الدائرية الراقية للعميلة بحد ذهبي ناعم وشفاف */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full p-1 border border-gold-start/20 bg-ivory-white/40 flex items-center justify-center overflow-hidden">
                <img
                  src={testimonials[currentIdx].image}
                  alt={testimonials[currentIdx].author}
                  className="w-full h-full object-cover rounded-full grayscale-[20%]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* الاسم والتفاصيل الوظيفية بخط Inter */}
              <div>
                <h4 className="font-serif text-sm md:text-base text-deep-bronze font-light">
                  {testimonials[currentIdx].author}
                </h4>
                <p className="font-sans text-[10px] md:text-xs text-charcoal-text/60 tracking-wider font-light mt-0.5">
                  {testimonials[currentIdx].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* نقاط التنقل الدائرية الصغيرة والشفافة للغاية أسفل الشريحة للتنقل اليدوي البريء */}
      <div className="flex gap-3 justify-center relative z-10">
        {testimonials.map((test, idx) => {
          const isActive = idx === currentIdx;
          return (
            <button
              key={test.id}
              onClick={() => {
                setCurrentIdx(idx);
                setIsAutoPlaying(false); // إيقاف التشغيل التلقائي عند نقر المستخدم لمزيد من الاستقرار
              }}
              className="relative w-5 h-5 flex items-center justify-center cursor-pointer group"
              aria-label={`Show testimonial ${idx + 1}`}
            >
              {/* نقطة التنقل المضاءة */}
              <motion.div
                className="rounded-full"
                animate={{
                  width: isActive ? "8px" : "5px",
                  height: isActive ? "8px" : "5px",
                  backgroundColor: isActive ? "rgba(185, 138, 74, 1)" : "rgba(185, 138, 74, 0.25)",
                }}
                transition={{ duration: 0.4 }}
              />
              {/* هالة تظهر عند الـ hover */}
              <div className="absolute inset-0 rounded-full border border-gold-start/0 group-hover:border-gold-start/15 scale-75 group-hover:scale-100 transition-all duration-300" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
