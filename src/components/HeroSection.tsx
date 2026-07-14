/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { Calendar, ChevronDown, Award, Star, Users, ArrowLeft } from "lucide-react";

// ✅ استيراد الملفات الفعلية من مجلد src/assets — لازم import مباشر لأي ملف داخل src
import heroVideoMp4 from "../assets/images/video/hero-hair-styling.mp4";
// ملاحظة: تأكدي من الامتداد الصحيح (jpg/jpeg) كما يظهر بالـ VSCode Explorer عندك بالضبط
import heroFallbackImg from "../assets/images/lialy_azra_hero_1783980692167.jpg";

/**
 * مكون تفاعلي للزر المغناطيسي (Magnetic Button) بأسلوب الفخامة الهادئة LIALY AZRA
 * ينجذب الزر برفق نحو مؤشر الماوس عند الاقتراب منه لإعطاء تجربة مستخدم مبهرة وباهظة الثمن.
 */
function MagneticButton({
  children,
  onClick,
  className,
  style = {},
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 120, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
        borderRadius: "2px",
        ...style,
      }}
      className={`relative px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-sans font-normal cursor-pointer transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
}

/**
 * مكون عداد تصاعدي رقمي متحرك (Count Up Animation)
 */
function CountUp({ end, suffix = "", duration = 2.5 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const currentVal = Math.floor(progress * (2 - progress) * end);
      setCount(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span className="font-serif text-2xl md:text-3xl font-light text-ivory-white">
      {count}
      {suffix}
    </span>
  );
}

/**
 * مكون الفيديو الخلفي السينمائي — يتحقق من تحميل الفيديو، يعرض poster احتياطي
 * أثناء التحميل، ويتعامل مع فشل التحميل بالسقوط الآمن (fallback) على الصورة الثابتة.
 * ملاحظة: لا يوجد حاليًا ملف .webm بالمشروع، لذا الخاصية اختيارية ولا تُستخدم إلا عند توفر الملف فعليًا.
 */
function CinematicBackgroundVideo({
  videoSrcMp4,
  videoSrcWebm,
  posterSrc,
}: {
  videoSrcMp4: string;
  videoSrcWebm?: string;
  posterSrc: string;
}) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-charcoal-text">
      {!videoFailed ? (
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          onError={() => setVideoFailed(true)}
        >
          {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
          <source src={videoSrcMp4} type="video/mp4" />
        </video>
      ) : (
        <img
          src={posterSrc}
          alt="LIALY AZRA — صالون تجميل فاخر"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* توهج ذهبي خفيف جدًا فوق الفيديو مباشرة (طبقة إضاءة إضافية، ليس بديلاً عن الفيديو) */}
      <div className="absolute top-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-gold-start/10 blur-[140px] mix-blend-soft-light animate-[pulse_8s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-blush-accent/10 blur-[120px] mix-blend-soft-light animate-[pulse_10s_ease-in-out_infinite] pointer-events-none" />
    </div>
  );
}

/**
 * مكون الـ Hero السينمائي الرئيسي لـ LIALY AZRA
 * يتميز بفيديو خلفية حقيقي بطيء الحركة، تأثير مغناطيسي للأزرار، شريط إحصائيات زجاجي عائم، وظهور متدرج مذهل.
 */
export default function HeroSection({ onBookNow }: { onBookNow?: () => void }) {
  const headingText = "حيث يلتقي الجمال بالفخامة الهادئة";
  const words = headingText.split(" ");

  const handleBookingClick = () => {
    if (onBookNow) onBookNow();
    alert("مرحبًا بكِ في عالم الفخامة! تم فتح نافذة حجز المواعيد الافتراضية لصالون LIALY AZRA.");
  };

  return (
    <section
      id="lialy-hero-cinematic"
      className="relative w-full h-[100vh] min-h-[600px] flex flex-col justify-between items-center overflow-hidden bg-charcoal-text"
    >
      {/* 1. خلفية الفيديو السينمائي الحقيقي — كل من الفيديو والصورة الاحتياطية مستوردة من src/assets */}
      <CinematicBackgroundVideo
        videoSrcMp4={heroVideoMp4}
        posterSrc={heroFallbackImg}
      />

      {/* 2. طبقة التعتيم البرونزية الشفافة (40%) والضباب الفاخر لضمان التباين الفائق فوق الفيديو */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-text/60 via-deep-bronze/45 to-charcoal-text/85 z-10 pointer-events-none" />

      {/* شبكة ناعمة من النقاط المتلألئة المتباعدة بخفوت (فوق الفيديو والتعتيم) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(rgba(243,233,218,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />

      {/* 3. ترويسة الهيرو العلوية (Header Spacer) */}
      <div className="w-full h-1 z-20" />

      {/* 4. الحاوية المركزية الرئيسية للنصوص والأزرار */}
      <div className="w-full max-w-4xl px-6 text-center z-20 flex flex-col items-center justify-center flex-grow pt-16">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center gap-2.5 mb-6"
        >
          <div className="w-8 h-px bg-gold-start/40" />
          <span className="font-serif italic text-xs tracking-[0.25em] text-gold-start uppercase">
            L'Éclat de la Femme
          </span>
          <div className="w-8 h-px bg-gold-start/40" />
        </motion.div>

        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-ivory-white tracking-wide font-light uppercase leading-snug max-w-3xl mb-6 text-center">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + i * 0.15,
                duration: 1.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block mx-1.5 md:mx-2.5"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 1.6, duration: 1.5 }}
          className="font-sans text-xs md:text-sm text-champagne tracking-[0.1em] max-w-md mx-auto mb-10 font-light leading-relaxed"
        >
          عيشي تجربة مخصصة تجمع بين مهارة الخبراء وأرقى تفاصيل الراحة في ملاذنا المصمم خصيصًا لجمالكِ الفريد.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-md"
        >
          <MagneticButton
            onClick={handleBookingClick}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-start to-gold-end text-ivory-white hover:brightness-105 border border-gold-start flex items-center justify-center gap-2 shadow-lg shadow-gold-start/10"
          >
            <Calendar size={13} strokeWidth={1.2} />
            احجزي الآن
          </MagneticButton>

          <MagneticButton
            onClick={() => {
              const el = document.getElementById("main-salon-content");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto bg-transparent border border-gold-start/40 text-champagne hover:border-gold-start hover:bg-gold-start/5"
          >
            اكتشفي خدماتنا
          </MagneticButton>
        </motion.div>
      </div>

      {/* 5. شريط الإحصائيات العائم الزجاجي السفلي (Glassmorphic Stats Bar) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-[90%] max-w-4xl backdrop-blur-xl bg-charcoal-text/30 border border-gold-start/15 p-5 md:p-6 mb-8 z-20 shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
        style={{ borderRadius: "4px" }}
      >
        <div className="grid grid-cols-3 divide-x divide-gold-start/15 divide-x-reverse text-center">
          <div className="flex flex-col justify-center items-center px-2">
            <div className="flex items-center gap-1.5 text-gold-start/80 mb-1">
              <Users size={14} strokeWidth={1.2} />
              <span className="font-sans text-[10px] tracking-widest uppercase text-champagne/60">عميلاتنا</span>
            </div>
            <CountUp end={4800} suffix="+" />
          </div>

          <div className="flex flex-col justify-center items-center px-2">
            <div className="flex items-center gap-1.5 text-gold-start/80 mb-1">
              <Award size={14} strokeWidth={1.2} />
              <span className="font-sans text-[10px] tracking-widest uppercase text-champagne/60">سنوات الخبرة</span>
            </div>
            <CountUp end={12} suffix=" عامًا" />
          </div>

          <div className="flex flex-col justify-center items-center px-2">
            <div className="flex items-center gap-1.5 text-gold-start/80 mb-1">
              <Star size={14} strokeWidth={1.2} />
              <span className="font-sans text-[10px] tracking-widest uppercase text-champagne/60">التقييم العام</span>
            </div>
            <CountUp end={5} suffix="/5" />
          </div>
        </div>
      </motion.div>

      {/* 6. أيقونة التمرير للأسفل (Scroll Indicator) بنبض ناعم وبطيء */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{
          delay: 3.0,
          duration: 3.0,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 cursor-pointer pointer-events-none"
        onClick={() => {
          const el = document.getElementById("main-salon-content");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-champagne/45">
          تمرير
        </span>
        <ChevronDown size={14} strokeWidth={1.2} className="text-gold-start" />
      </motion.div>
    </section>
  );
}
