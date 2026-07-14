/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Sparkles, Heart, Gift, ArrowLeft } from "lucide-react";

/**
 * مكون "الخدمة المميزة" (Signature Service) لصالون DECEMBER الفاخر
 * يسلط الضوء على تجربة طقس العروس الملكي الفريد بأسلوب الكوتور السينمائي الخلاب
 */
export default function SignatureService() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const [isHovered, setIsHovered] = useState(false);

  // نقاط تفاصيل طقس العروس الملكي الحصرية
  const features = [
    {
      id: "sig-f1",
      title: "استشارة جمالية مخصصة",
      desc: "جلسة تخطيط خاصة مع خبيراتنا لرسم ملامح إطلالتكِ وتحديد تدرجات الألوان المناسبة لبشرتكِ.",
      icon: <Sparkles size={16} strokeWidth={1.2} className="text-gold-start" />,
    },
    {
      id: "sig-f2",
      title: "طقس ترميم الشعر الملكي",
      desc: "علاج مكثف بجزيئات الذهب عيار 24 ومستخلص زهرة الأوركيد البرية لإعطاء شعركِ بريقًا لا ينسى.",
      icon: <Heart size={16} strokeWidth={1.2} className="text-gold-start" />,
    },
    {
      id: "sig-f3",
      title: "مجموعة العناية الفاخرة للعروس",
      desc: "حقيبة مخملية فاخرة تحتوي على أفخم مستحضرات العناية الباريسية المخصصة لتكملة جمالكِ في منزلكِ.",
      icon: <Gift size={16} strokeWidth={1.2} className="text-gold-start" />,
    },
  ];

  const handleBookingClick = () => {
    alert("لقد اخترتِ طقس العروس الملكي المتكامل من DECEMBER. سيقوم مستشار الجمال الخاص بنا بالتواصل معكِ فورًا بكل حب لتنسيق المواعيد وتفاصيل طقوسكِ.");
  };

  return (
    <section
      id="lialy-signature-service"
      ref={containerRef}
      className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-0 z-10"
    >
      {/* شبكة غير متماثلة: الصورة الفخمة على اليسار والسرد الشاعري على اليمين */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-charcoal-text border border-gold-start/20 rounded-[3px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative">
        
        {/* العمود الأيسر: الصورة السينمائية الكبيرة مع تأثير Ken Burns البطيء */}
        <div className="col-span-1 md:col-span-6 relative h-[350px] md:h-[580px] overflow-hidden group">
          <motion.img
            src="/src/assets/images/lialy_signature_oil_1783981378485.jpg"
            alt="DECEMBER Signature Oil Texture"
            className="w-full h-full object-cover grayscale-[15%] pointer-events-none"
            referrerPolicy="no-referrer"
            // تأثير Ken Burns البطيء جدًا طالما أن القسم ظاهر
            animate={
              isInView
                ? {
                    scale: [1.1, 1.0],
                  }
                : { scale: 1.1 }
            }
            transition={{
              duration: 12,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* تراكيب التعتيم البرونزية لضمان نعومة الاندماج وجمال العرض */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-charcoal-text md:block hidden pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-text via-transparent to-transparent pointer-events-none" />
        </div>

        {/* العمود الأيمن: النص السردي الشاعري المنسق */}
        <div className="col-span-1 md:col-span-6 p-6 md:p-12 text-right flex flex-col justify-center">
          
          {/* شارة دقيقة بخط Inter spaced */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 0.9, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="flex items-center justify-start gap-2 mb-4 flex-row-reverse"
          >
            <span className="font-sans text-[10px] tracking-[0.3em] text-blush-accent uppercase font-medium">
              Signature Experience
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold-start/60 animate-ping" />
          </motion.div>

          {/* العنوان الأساسي التحريري الفخم */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory-white tracking-[0.08em] font-light uppercase leading-snug mb-5"
          >
            طقس العروس الملكي المتكامل
          </motion.h2>

          {/* الوصف الشاعري القصير للخدمة */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-sans text-xs md:text-sm text-champagne/90 leading-[1.8] font-light mb-8"
          >
            لأن ليلة العمر تليق بأدق تفاصيل الرعاية الفاخرة، صممنا لكِ طقسًا متكاملاً يمتد لثلاثة أيام من الاسترخاء وتجديد الحيوية وتلوين ملامحكِ ببريق ذهبي دافئ يحبس الأنفاس.
          </motion.p>

          {/* قائمة المزايا الثلاثية بالأيقونات الخطية الرفيعة */}
          <div className="space-y-5 mb-10">
            {features.map((feat, index) => (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.15 }}
                className="flex items-start gap-3.5 flex-row-reverse text-right"
              >
                {/* الأيقونة الرفيعة */}
                <div className="p-2 border border-gold-start/20 rounded-full bg-ivory-white/5 flex items-center justify-center mt-0.5">
                  {feat.icon}
                </div>

                {/* النصوص الملحقة */}
                <div>
                  <h3 className="font-serif text-sm text-gold-start font-medium mb-1">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-[11px] text-ivory-white/70 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* الزر المميز بتأثير التعبئة التدريجي من اليسار (fill-from-left on hover) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 1.3 }}
            className="self-start w-full sm:w-auto"
          >
            <button
              id="lialy-signature-booking-btn"
              onClick={handleBookingClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full sm:w-auto px-8 py-3.5 border border-gold-start text-ivory-white text-xs tracking-[0.25em] uppercase font-sans font-light overflow-hidden transition-all duration-500 cursor-pointer"
              style={{ borderRadius: "2px" }}
            >
              {/* طبقة التعبئة التي تنساب من اليسار */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold-start to-gold-end z-0"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              />

              {/* النص والأيقونة لضمان الوجود فوق طبقة التعبئة */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ArrowLeft size={13} strokeWidth={1.2} />
                احجزي هذه التجربة الملكية
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
