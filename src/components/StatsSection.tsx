/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

interface StatItem {
  id: string;
  target: number;
  decimals: number;
  prefix?: string;
  suffix?: string;
  label: string;
  desc: string;
}

interface CounterProps {
  target: number;
  duration: number;
  decimals: number;
  prefix?: string;
  suffix?: string;
  trigger: boolean;
}

/**
 * مكون عداد تصاعدي ذكي وسلس باستخدام requestAnimationFrame لمنع التقطيع
 */
function SmoothCounter({ target, duration, decimals, prefix = "", suffix = "", trigger }: CounterProps) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const rate = Math.min(progress / duration, 1);

      // منحنى تخفيف سينمائي مرن (Ease Out Quad)
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedRate = easeOutQuad(rate);

      setCount(easedRate * target);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [trigger, target, duration]);

  // تنسيق الأرقام لتناسب العرض العربي واللاتيني بشكل أنيق
  const formattedCount = count.toFixed(decimals);

  return (
    <span className="font-serif">
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}

/**
 * مكون قسم "أرقامنا" (Stats Section) الإحصائي لصالون DECEMBER الفاخر
 * يتميز بخلفية Deep Burgundy غامقة وعدادات تفاعلية انسيابية للغاية.
 */
export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  // بيانات الأرقام الأيقونية لنجاحات صالون ديسمبِر
  const stats: StatItem[] = [
    {
      id: "stat-1",
      target: 2000,
      decimals: 0,
      suffix: "+",
      label: "عميلة ممتنة",
      desc: "ثقة مطلقة وتجارب تفوق الخيال",
    },
    {
      id: "stat-2",
      target: 12,
      decimals: 0,
      suffix: " سنة",
      label: "من الخبرة الباريسية",
      desc: "شغف وإبداع كوتور ممتد",
    },
    {
      id: "stat-3",
      target: 4.9,
      decimals: 1,
      suffix: " / 5",
      label: "تقييم العميلات",
      desc: "خدمة ملكية ترتقي للتطلعات",
    },
    {
      id: "stat-4",
      target: 8,
      decimals: 0,
      label: "خبيرات دوليات",
      desc: "حرفيات وصانعات الجمال الفريد",
    },
  ];

  return (
    <section
      id="lialy-salon-stats"
      ref={sectionRef}
      className="w-full bg-[#5A1820] py-16 md:py-24 px-6 md:px-12 relative flex items-center justify-center overflow-hidden border-b border-gold-start/20 text-ivory-white"
      style={{ backgroundColor: "#5A1820" }}
    >
      {/* هالة إضاءة مذهبة دافئة في الخلفية لعمق جمالي صامت */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(185,138,74,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,233,218,0.1)_0%,transparent_50%)] pointer-events-none" />

      {/* الحاوية الأساسية للشبكة الإحصائية المتجاوبة */}
      <div className="w-full max-w-5xl relative z-10">
        
        {/* شبكة الأرقام الأربعة: 4 أعمدة على الديسكتوب، عمودان على الجوال */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: idx * 0.15, ease: "easeOut" }}
              className={`flex flex-col items-center justify-center relative ${
                idx > 0 ? "lg:border-r lg:border-gold-start/15" : ""
              } pr-0 md:pr-4 pl-0 md:pl-4`}
            >
              {/* الرقم الكبير جدًا الفخم */}
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory-white font-light tracking-wide mb-3 flex items-center justify-center">
                <SmoothCounter
                  target={stat.target}
                  duration={2000}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  trigger={isInView}
                />
              </div>

              {/* خط فاصل ذهبي صغير يعبر عن الهوية الملكية */}
              <div className="w-10 h-[1px] bg-gradient-to-r from-gold-start to-gold-end my-2.5 opacity-60" />

              {/* التسمية الوصفية الصغيرة بخط Inter */}
              <h3 className="font-serif text-sm md:text-base text-gold-start font-medium tracking-wide mb-1">
                {stat.label}
              </h3>

              {/* الشرح التحريري البسيط الرفيع */}
              <p className="font-sans text-[10px] md:text-xs text-ivory-white/70 leading-relaxed font-light">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
