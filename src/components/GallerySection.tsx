/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  aspectRatio: string; // يُستخدم لتحديد الارتفاع في شبكة الميسونري التحريرية
}

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // قائمة أعمال ومعارض صالون DECEMBER الفنية الراقية
  const galleryItems: GalleryItem[] = [
    {
      id: "g1",
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
      title: "قص وتصفيف الكوتور الباريسي",
      category: "تصفيف شعر",
      aspectRatio: "h-[320px] md:h-[420px]",
    },
    {
      id: "g2",
      url: "/src/assets/images/lialy_azra_hero_1783980692167.jpg",
      title: "الهوية الإبداعية للوجه والشعر",
      category: "صيحات الموضة",
      aspectRatio: "h-[240px] md:h-[280px]",
    },
    {
      id: "g3",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      title: "طقس التدليك وزيوت زهرة اللوتس",
      category: "سبا وعناية",
      aspectRatio: "h-[280px] md:h-[360px]",
    },
    {
      id: "g4",
      url: "https://images.unsplash.com/photo-1604654894610-df4906b197ae?auto=format&fit=crop&q=80&w=800",
      title: "أظافر جل مرسومة بخطوط الذهب الكلاسيكية",
      category: "عناية بالأظافر",
      aspectRatio: "h-[240px] md:h-[300px]",
    },
    {
      id: "g5",
      url: "/src/assets/images/lialy_signature_oil_1783981378485.jpg",
      title: "علاج الترطيب بجزيئات الذهب",
      category: "بشرة نضرة",
      aspectRatio: "h-[320px] md:h-[440px]",
    },
    {
      id: "g6",
      url: "/src/assets/images/lialy_azra_interior_1783980704073.jpg",
      title: "الملاذ الرخامي الهادئ لصالون ديسمبِر",
      category: "بيئة الصالون",
      aspectRatio: "h-[260px] md:h-[320px]",
    },
    {
      id: "g7",
      url: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      title: "تنظيف الهيدرو ديرمال الفرنسي",
      category: "عناية بالبشرة",
      aspectRatio: "h-[280px] md:h-[380px]",
    },
    {
      id: "g8",
      url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
      title: "لمسة مكياج السهرات المخملي",
      category: "مكياج فاخر",
      aspectRatio: "h-[240px] md:h-[280px]",
    },
    {
      id: "g9",
      url: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800",
      title: "مستحضرات التجميل العضوية النادرة",
      category: "منتجات كوتور",
      aspectRatio: "h-[300px] md:h-[400px]",
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="lialy-art-gallery"
      ref={containerRef}
      className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 md:px-0 z-10 flex flex-col items-center"
    >
      {/* رأس قسم المعرض التحريري */}
      <div className="text-center max-w-xl mb-16">
        <span className="font-serif italic text-xs md:text-sm text-gold-start tracking-widest uppercase block mb-3">
          Le Portfolio d'Élégance
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-deep-bronze tracking-[0.1em] font-light uppercase">
          معرض الأعمال والجمال
        </h2>
        <p className="font-sans text-xs text-charcoal-text/60 mt-2 tracking-widest font-light">
          A Visual Chronicle of DECEMBER Craftsmanship
        </p>
        <div className="w-16 h-[1px] bg-gold-start/20 mx-auto mt-4" />
      </div>

      {/* تخطيط ميسونري مخصص غير متماثل (3 أعمدة على الكمبيوتر، عمودان تابلت، عمود واحد جوال) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full space-y-6"
      >
        {galleryItems.map((item, idx) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            onClick={() => setSelectedIdx(idx)}
            className="break-inside-avoid relative overflow-hidden group cursor-pointer bg-ivory-white border border-gold-start/15 p-1 hover:border-gold-start hover:shadow-lg transition-all duration-500 rounded-[3px]"
          >
            {/* إطار الصورة المعزول */}
            <div className={`relative ${item.aspectRatio} w-full overflow-hidden rounded-[2px]`}>
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[12%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* طبقة التظليل الفاخرة بالذهب والنحاس عند الـ Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-bronze/90 via-gold-start/35 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-5 text-right z-10" />

              {/* نصوص وتفاصيل المعرض تظهر رشفة برشفة */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-right z-20 pointer-events-none">
                {/* الجزء العلوي: أيقونة التكبير والتصنيف */}
                <div className="flex justify-between items-center flex-row-reverse opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500">
                  <span className="font-serif italic text-[11px] text-blush-accent tracking-widest">
                    {item.category}
                  </span>
                  <div className="text-ivory-white/80">
                    <Maximize2 size={13} strokeWidth={1.2} />
                  </div>
                </div>

                {/* الجزء السفلي: عنوان العمل الفني */}
                <div className="opacity-0 group-hover:opacity-100 translate-y-[10px] group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="font-serif text-sm md:text-base text-ivory-white font-light tracking-wide leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* نافذة المعاينة التفاعلية الفاخرة (Lightbox) */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            id="lialy-gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 bg-charcoal-text/95 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none cursor-zoom-out"
          >
            {/* زر الإغلاق × الأنيق من النمط الهادئ */}
            <button
              id="lightbox-close-btn"
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 p-3 bg-ivory-white/5 hover:bg-ivory-white/10 text-ivory-white border border-gold-start/20 rounded-full hover:border-gold-start transition-all duration-300 cursor-pointer"
            >
              <X size={18} strokeWidth={1.2} />
            </button>

            {/* سهم التنقل لليسار */}
            <button
              id="lightbox-prev-btn"
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-ivory-white/5 hover:bg-ivory-white/10 text-ivory-white border border-gold-start/20 rounded-full hover:border-gold-start transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft size={20} strokeWidth={1.2} />
            </button>

            {/* سهم التنقل لليمين */}
            <button
              id="lightbox-next-btn"
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-ivory-white/5 hover:bg-ivory-white/10 text-ivory-white border border-gold-start/20 rounded-full hover:border-gold-start transition-all duration-300 cursor-pointer"
            >
              <ChevronRight size={20} strokeWidth={1.2} />
            </button>

            {/* محتوى الصورة الفنية الكبيرة */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center cursor-default bg-ivory-white p-2 rounded-[3px] border border-gold-start/20 shadow-2xl"
            >
              <img
                src={galleryItems[selectedIdx].url}
                alt={galleryItems[selectedIdx].title}
                className="max-h-[70vh] w-full object-contain rounded-[2px]"
                referrerPolicy="no-referrer"
              />

              {/* تفاصيل الصورة الكبيرة في الأسفل */}
              <div className="w-full text-right p-4 mt-2">
                <span className="font-serif italic text-xs text-gold-start tracking-widest block mb-1">
                  {galleryItems[selectedIdx].category}
                </span>
                <h3 className="font-serif text-lg text-deep-bronze font-light">
                  {galleryItems[selectedIdx].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
