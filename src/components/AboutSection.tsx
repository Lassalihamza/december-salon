/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowLeft } from "lucide-react";

/**
 * مكون قسم "قصة العلامة" (About Section) لمنصة DECEMBER الفاخرة
 * يتميز بتخطيط غير متماثل مستوحى من المجلات التحريرية الراقية، حركة كشف تدريجية ناعمة، وتكامل بصرى دافئ.
 */
export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  // استخدام Intersection Observer عبر مكتبة motion لمراقبة دخول القسم لمجال الرؤية
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1], // Curve مريح وناعم
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section
      id="lialy-about-story"
      ref={containerRef}
      className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-0 z-10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center"
      >
        
        {/* العمود الأيسر (الصورة الفنية غير المتماثلة - تظهر في الأعلى على الجوال) */}
        <motion.div
          variants={imageVariants}
          className="col-span-1 md:col-span-5 relative group"
        >
          {/* إطار ديكوري ذهبي رفيع خلف الصورة للتعبير عن الفخامة التحريرية */}
          <div className="absolute -top-3 -right-3 w-full h-full border border-gold-start/20 pointer-events-none rounded-[3px] transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" />
          
          {/* حاوية الصورة الأساسية مع زاوية مقصوصة طفيفة وتأثير ملمس مخملي */}
          <div className="relative overflow-hidden aspect-[4/5] bg-deep-bronze/5 rounded-[2px] shadow-[0_15px_35px_rgba(90,24,32,0.04)]">
            <img
              src="/src/assets/images/lialy_azra_interior_1783980704073.jpg"
              alt="DECEMBER Interior Design"
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-[2s] ease-out pointer-events-none"
              referrerPolicy="no-referrer"
            />
            {/* غطاء دافئ يدمج تدرجات النحاس والخوخ الفاتح للحفاظ على الهوية */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-bronze/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* تعليق صغير أسفل الصورة بأسلوب المجلات الفاخرة */}
          <div className="mt-3 text-right">
            <span className="font-serif italic text-[10px] tracking-widest text-gold-start/70">
              DECEMBER — Place de la Beauté, Paris & Riyadh
            </span>
          </div>
        </motion.div>

        {/* العمود الأيمن (السرد القصصي الفني والشاعري) */}
        <motion.div
          variants={textVariants}
          className="col-span-1 md:col-span-7 flex flex-col justify-center text-right"
        >
          {/* عنوان صغير مع خط فاصل ذهبي رفيع مزخرف جانبي */}
          <div className="flex items-center justify-start gap-3 mb-4 flex-row-reverse">
            <div className="h-[1px] w-12 bg-gold-start/30" />
            <span className="font-serif italic text-sm md:text-base text-gold-start tracking-wider">
              قصتنا وملاذنا الفني
            </span>
          </div>

          {/* العنوان الأساسي التحريري */}
          <h2 className="font-serif text-2xl md:text-4xl text-deep-bronze tracking-[0.08em] font-light leading-tight uppercase mb-6">
            أكثر من صالون... تجربة تعكس جمالكِ        
          </h2>

          {/* الفقرة السردية الدافئة والملهمة بارتفاع سطر سخي */}
          <div className="font-sans text-sm md:text-[15px] text-charcoal-text/80 font-light leading-[1.9] space-y-5">
            <p>
              في قلب الرياض الصاخب، تأسس صالون وسبا <span className="font-serif text-deep-bronze font-normal tracking-wide">DECEMBER</span> ليكون الملاذ المفضّل الذي تستحقه أنوثتكِ. نحن نؤمن بأن العناية والجمال ليسا مجرد ترفٍ عابر، بل هما فنٌ ناعم ونقاءٌ يعبّر عن تميزكِ وهدوئكِ المطلق.
            </p>
            <p>
              بخطوط مستوحاة من فخامة العمارة الكلاسيكية الراقية ورخام السبا الفخم وتناغم الألوان العميقة من البرغندي الدافئ والذهب العتيق، نسقنا لكِ تجربة تأخذكِ بعيداً في عالمٍ من السكينة. هنا يمتزج الشغف العالي بالخدمة الملوكية لتشعر دقات ديسمبر الدافئة في كل تفصيل.
            </p>
          </div>

          {/* الرابط النصي الفاخر بأسلوب الكوتور */}
          <div className="mt-8">
            <a
              id="lialy-read-more-link"
              href="#lialy-hero-cinematic"
              onClick={(e) => {
                e.preventDefault();
                alert("قصة DECEMBER الكاملة قيد التحضير التحريري وسيتم نشرها قريبًا في الكتالوج المخصص.");
              }}
              className="inline-flex items-center gap-2 font-serif text-xs md:text-sm tracking-widest text-deep-bronze hover:text-gold-start transition-colors duration-300 group cursor-pointer"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.2}
                className="transform group-hover:-translate-x-1 transition-transform duration-300"
              />
              <span>تعرفي على قصتنا الكاملة</span>
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
