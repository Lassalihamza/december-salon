/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Scissors, Sparkles, HelpCircle, Eye, Sparkle } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: string;
  desc: string;
  image: string;
}

interface ServicesData {
  [category: string]: ServiceItem[];
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("hair");

  // تصنيف الخدمات الفاخرة لصالون وسبا ديسمبِر بالرياض
  const categories = [
    { id: "hair", name: "جلسات الشعر", engName: "Hair Sessions" },
    { id: "lashes", name: "رموش", engName: "Lashes" },
    { id: "lips", name: "شفاه", engName: "Lips" },
    { id: "summer", name: "باقات الصيف", engName: "Summer Packages" },
    { id: "celebration", name: "باقات المناسبات", engName: "Celebration Packages" },
  ];

  const services: ServicesData = {
    hair: [
      {
        id: "h1",
        name: "علاج الترطيب العميق بالكافيار والبرغندي",
        duration: "90 دقيقة",
        price: "750 ر.س",
        desc: "ترميم متكامل لخصلات شعركِ بأرقى بروتينات الكافيار والزيوت العضوية النادرة لتألق ساحر وحماية قصوى.",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "h2",
        name: "تسريحة الويفي الملكي والقص التحريري",
        duration: "60 دقيقة",
        price: "450 ر.س",
        desc: "تصفيف وتسريحة الويفي الفاتن والقص الدقيق الذي يتناغم مع ملامحكِ وتفاصيل وجهكِ برؤية خبيراتنا.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "h3",
        name: "صبغة بالياج ديسمبر الفاخرة",
        duration: "180 دقيقة",
        price: "1400 ر.س",
        desc: "تلوين تدريجي مدروس بخصلات دافئة تمنح شعركِ بُعداً وحيوية مذهلة تلمع ببريق هادئ تحت الضوء.",
        image: "https://images.unsplash.com/photo-1605497746444-ac9dbd3244a6?auto=format&fit=crop&q=80&w=600",
      },
    ],
    lashes: [
      {
        id: "la1",
        name: "تركيب رموش روسية ثلاثية الأبعاد مخصصة",
        duration: "90 دقيقة",
        price: "550 ر.س",
        desc: "تركيب رموش ناعمة وخفيفة للغاية بكل دقة لتعطيكِ نظرة واسعة وجاذبية واثقة دون أي إثقال لجفونكِ.",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "la2",
        name: "رفع رموش العين وتغبيش الكيراتين",
        duration: "60 دقيقة",
        price: "350 ر.س",
        desc: "رفع وتقويس الرموش الطبيعية وتغذيتها ببروتين الكيراتين الفاخر لإبراز لمعانها الطبيعي لأسابيع.",
        image: "https://images.unsplash.com/photo-1582284540020-8acae01fa5bc?auto=format&fit=crop&q=80&w=600",
      },
    ],
    lips: [
      {
        id: "li1",
        name: "تلوين وتحديد الشفاه المخملية",
        duration: "75 دقيقة",
        price: "900 ر.س",
        desc: "جلسة تلوين ناعمة بأصباغ عضوية فاخرة تمنح شفاهكِ لوناً طبيعياً متجانساً وممتلئاً يدوم برونق صحي.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "li2",
        name: "طقوس تقشير وتنعيم الشفاه بالورد والكريستال",
        duration: "30 دقيقة",
        price: "250 ر.س",
        desc: "إزالة خلايا الجلد بلطف باستخدام حبيبات السكر الفاخرة وزيوت الورد الدمشقي لتغذية فائقة ونعومة مخملية.",
        image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=600",
      },
    ],
    summer: [
      {
        id: "su1",
        name: "باقة الإشراق الصيفي المتكاملة",
        duration: "180 دقيقة",
        price: "1250 ر.س",
        desc: "طقوس صيفية ملكية تجمع بين باديكير السبا المائي المنعش، وجلسة نضارة الوجه العميقة، ومساج ديتوكس مبرد.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "su2",
        name: "باقة نسيم البحر للعناية بالبشرة والأظافر",
        duration: "120 دقيقة",
        price: "850 ر.س",
        desc: "علاج مغذٍ متكامل للبشرة بخصائص البحر الميت مع جل مانيكير كلاسيكي ولمسات مذهبة للأظافر.",
        image: "https://images.unsplash.com/photo-1604654894610-df4906b197ae?auto=format&fit=crop&q=80&w=600",
      },
    ],
    celebration: [
      {
        id: "ce1",
        name: "باقة العروس والاحتفال الملوكي الفخم",
        duration: "240 دقيقة",
        price: "2800 ر.س",
        desc: "إطلالتكِ الكبرى المخصصة لمناسباتكِ السعيدة؛ تشمل مكياج كوتور، تصفيف الشعر المتناسق، واستشارة حصرية مغلقة.",
        image: "https://images.unsplash.com/photo-1522337660859-02f69250a1d9?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "ce2",
        name: "طقوس ديسمبر للتدليل الاستثنائي",
        duration: "150 دقيقة",
        price: "1600 ر.س",
        desc: "باقة احتفالية خاصة تدمج المساج بالأحجار البركانية الدافئة مع ترطيب عميق للبشرة ورموش كوتور لافتة.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
      },
    ],
  };

  const handleBookingClick = (serviceName: string) => {
    alert(`شكرًا لاختياركِ خدمة "${serviceName}". تم حجز طقوسكِ المبدئية بنجاح في DECEMBER Salon & Spa وسيتصل بكِ فريق الضيافة فوراً لتنسيق الموعد.`);
  };

  return (
    <section
      id="lialy-salon-services"
      className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 md:px-0 z-10 flex flex-col items-center"
    >
      {/* رأس القسم الفاخر */}
      <div className="text-center max-w-xl mb-12">
        <span className="font-serif italic text-xs md:text-sm text-gold-start tracking-widest uppercase block mb-3">
          Le Menu de Beauté
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-deep-bronze tracking-[0.1em] font-light uppercase">
          خدماتنا الحصرية
        </h2>
        <p className="font-serif italic text-xs text-gold-start/80 mt-2 tracking-widest">
          Savoir-Faire Tailored to Your Essence
        </p>
        <div className="w-16 h-[1px] bg-gold-start/20 mx-auto mt-4" />
      </div>

      {/* التبويبات الأفقية مع خط سفلي ذهبي متحرك (أو قائمة متجاوبة على الجوال) */}
      <div className="w-full flex justify-center mb-12 border-b border-gold-start/15 pb-2 overflow-x-auto scrollbar-none">
        <div className="flex gap-6 md:gap-12 px-4 whitespace-nowrap justify-center relative">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative pb-3 text-xs md:text-sm tracking-widest uppercase font-serif cursor-pointer transition-colors duration-300 ${
                  isActive ? "text-deep-bronze font-medium" : "text-charcoal-text/50 hover:text-charcoal-text"
                }`}
              >
                <span className="block text-center">{cat.name}</span>
                <span className="block text-[9px] text-center italic text-gold-start/70 font-light mt-0.5">
                  {cat.engName}
                </span>

                {/* الخط السفلي الذهبي المتحرك باستخدام framer-motion */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold-start to-gold-end"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* حاوية بطاقات الخدمات المفلترة بحركة انتقال ناعمة */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services[activeTab]?.map((service) => (
              <div
                key={service.id}
                className="group relative bg-ivory-white border border-gold-start/15 p-5 flex flex-col justify-between hover:border-gold-start hover:shadow-[0_12px_30px_rgba(110,78,46,0.04)] transition-all duration-500 rounded-[3px]"
              >
                {/* الجزء العلوي: الصورة المربعة */}
                <div className="relative aspect-square w-full overflow-hidden bg-champagne/20 rounded-[2px] mb-5">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[1s] ease-out pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* طبقة تظليل خفيفة */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* السعر يظهر فوق الصورة عند hover برقة */}
                  <div className="absolute inset-0 bg-deep-bronze/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-serif italic text-xs text-blush-accent tracking-widest mb-1">
                      INVESTMENT
                    </span>
                    <span className="font-serif text-2xl text-ivory-white tracking-wider font-light">
                      {service.price}
                    </span>
                    <button
                      onClick={() => handleBookingClick(service.name)}
                      className="mt-4 px-5 py-2 border border-gold-start/60 hover:border-gold-start bg-transparent text-ivory-white text-[10px] tracking-widest uppercase hover:bg-gold-start/10 transition-all duration-300 cursor-pointer"
                      style={{ borderRadius: "2px" }}
                    >
                      حجز الموعد
                    </button>
                  </div>
                </div>

                {/* التفاصيل السفلية */}
                <div className="text-right flex-grow flex flex-col justify-between">
                  <div>
                    {/* معلومات الوقت والنوع */}
                    <div className="flex items-center justify-end gap-1.5 text-gold-start text-[10px] tracking-wider uppercase mb-2 font-medium">
                      <span>{service.duration}</span>
                      <Clock size={11} strokeWidth={1.2} />
                    </div>

                    {/* اسم الخدمة */}
                    <h3 className="font-serif text-lg text-deep-bronze font-light mb-2.5">
                      {service.name}
                    </h3>

                    {/* الوصف القصير الفخم */}
                    <p className="font-sans text-xs text-charcoal-text/75 leading-relaxed font-light mb-4">
                      {service.desc}
                    </p>
                  </div>

                  {/* السعر في وضع الجوال / الوضع العادي أسفل البطاقة خافت لجمال التصميم */}
                  <div className="pt-3 border-t border-gold-start/10 flex justify-between items-center flex-row-reverse">
                    <span className="font-sans text-[11px] text-charcoal-text/50">السعر المبدئي</span>
                    <span className="font-serif text-base text-deep-bronze font-light tracking-wide">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
