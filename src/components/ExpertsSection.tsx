/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ExpertMember {
  id: string;
  name: string;
  role: string;
  signature: string;
  image: string;
}

/**
 * مكون قسم "خبيراتنا" (Our Experts Section) لصالون DECEMBER الفاخر
 * يعرض طاقم العمل من الخبيرات بأسلوب مستوحى من الهندسة الدائرية لشعار العلامة التجارية.
 */
export default function ExpertsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // تفاصيل طاقم خبيرات التجميل المعتمدات لدى صالون DECEMBER
  const experts: ExpertMember[] = [
    {
      id: "e1",
      name: "نادين لوران",
      role: "كبار مصففي الشعر والكوتور",
      signature: "Nadine Laurent",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "e2",
      name: "د. صوفيا آل ثاني",
      role: "أخصائية العناية بالبشرة والسبا",
      signature: "Dr. Sophia Al-Thani",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "e3",
      name: "ليلى الحربي",
      role: "كبيرة خبيرات المكياج السينمائي",
      signature: "Laila Al-Harbi",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: "e4",
      name: "أوليفيا غارسيا",
      role: "خبيرة تصميم وفن الأظافر",
      signature: "Olivia Garcia",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="lialy-salon-experts"
      ref={containerRef}
      className="w-full bg-[#FFFEFB] py-16 md:py-24 px-6 md:px-12 relative flex flex-col items-center justify-center overflow-hidden border-b border-gold-start/10"
    >
      {/* خلفية جمالية مدمجة ناعمة تبرز الفراغ السخي وعمق الفخامة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,233,218,0.3)_0%,transparent_75%)] pointer-events-none" />

      {/* رأس القسم المركزي الفخم */}
      <div className="text-center max-w-xl mb-16 relative z-10">
        <span className="font-serif italic text-xs md:text-sm text-gold-start tracking-widest uppercase block mb-3">
          Nos Artisans Célestes
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-deep-bronze tracking-[0.1em] font-light uppercase">
          خبيرات ملاذنا
        </h2>
        <div className="w-16 h-[1px] bg-gold-start/20 mx-auto mt-4" />
      </div>

      {/* شبكة خبيرات التجميل الأربعة */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
      >
        {experts.map((expert) => (
          <motion.div
            key={expert.id}
            id={expert.id}
            variants={cardVariants}
            className="flex flex-col items-center text-center group"
          >
            {/* إطار الصورة الدائري المنسجم مع الشعار الدائري للعلامة */}
            <div className="relative w-44 h-44 md:w-48 md:h-48 mb-6 p-1.5 border border-gold-start/25 rounded-full transition-all duration-700 group-hover:border-gold-start group-hover:shadow-[0_10px_30px_rgba(185,138,74,0.12)]">
              {/* الصورة الدائرية مع تأثير الدوران اللطيف عند الـ hover */}
              <div className="w-full h-full rounded-full overflow-hidden bg-champagne/20">
                <motion.img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 pointer-events-none"
                  referrerPolicy="no-referrer"
                  whileHover={{
                    rotate: 4,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                />
              </div>

              {/* حلقة داخلية مذهبة ناعمة */}
              <div className="absolute inset-2 border border-ivory-white/40 rounded-full pointer-events-none" />
            </div>

            {/* اسم الخبيرة بخط Playfair Display */}
            <h3 className="font-serif text-lg md:text-xl text-deep-bronze font-light mb-1.5 tracking-wide">
              {expert.name}
            </h3>

            {/* التخصص الدقيق بخط Inter صغير */}
            <p className="font-sans text-xs text-charcoal-text/65 tracking-wider font-light mb-2">
              {expert.role}
            </p>

            {/* التوقيع التحريري اللطيف الفاخر الذي يظهر بتأثير انسيابي عند الـ Hover */}
            <div className="h-6 overflow-hidden relative w-full flex items-center justify-center">
              <motion.span
                className="font-serif italic text-xs md:text-sm text-gold-start/80 tracking-widest opacity-0 group-hover:opacity-100 block transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 select-none"
              >
                {expert.signature}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
