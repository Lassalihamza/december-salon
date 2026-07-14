/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  poeticDesc: string;
  price: string;
  image: string;
}

/**
 * مكون قسم "منتجاتنا" (Our Products) لصالون DECEMBER الفاخر
 * مصمم بأسلوب تحريري (Editorial Style) كأنه صفحة من مجلة Vogue الشهيرة، بتخطيط غير متماثل وسرد شاعري راقٍ.
 */
export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  // المنتج الاستثنائي الكبير (The Hero Product)
  const heroProduct: ProductItem = {
    id: "p-hero",
    name: "إكسير اللوتس الذهبي لإشعاع الليل",
    poeticDesc: "قطرات ثمينة تنساب على بشرتكِ كخيوط الحرير الذهبية لتوقظ إشراقة الخلايا العميقة تحت النجوم.",
    price: "850 ر.س",
    image: "/src/assets/images/lialy_signature_oil_1783981378485.jpg",
  };

  // المنتجات التحريرية المرافقة (Smaller Products Rows)
  const editorialProducts: ProductItem[] = [
    {
      id: "p1",
      name: "كريم الأوركيد المخملي الفاخر",
      poeticDesc: "عبير الهدوء وتغذية ملكية مكثفة تعيد ترميم النضارة والنعومة الطبيعية لبشرتكِ.",
      price: "490 ر.س",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: "p2",
      name: "رذاذ النيرولي وزهر البرتقال الباريسي",
      poeticDesc: "نسيم رقيق يرطب حواسكِ ويهيئ ملامحكِ لاستقبال طقوس العناية اليومية الفاخرة.",
      price: "320 ر.س",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: "p3",
      name: "ماسك الكافيار لترميم ألياف الشعر",
      poeticDesc: "إكسير مخملي غني بالبروتينات البحرية النادرة لإعادة إحياء لمعان وقوة خصلاتكِ الدقيقة.",
      price: "680 ر.س",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: "p4",
      name: "مصل الورد والذهب لتحديد محيط العين",
      poeticDesc: "لمسة ساحرة تزيل علامات التعب وتترك عينيكِ ببريق متألق يعكس سحر الليالي الشرقية.",
      price: "410 ر.س",
      image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=500",
    },
  ];

  const handleProductDetail = (productName: string) => {
    alert(`سيتم عرض كتالوج تفاصيل "${productName}" التحريرية الكاملة مع خيارات الطلب الخاص قريبًا.`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="lialy-editorial-products"
      ref={containerRef}
      className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 md:px-0 z-10 flex flex-col items-center"
    >
      {/* رأس قسم مستحضرات الموضة التحريرية */}
      <div className="text-center max-w-xl mb-16">
        <span className="font-serif italic text-xs md:text-sm text-gold-start tracking-widest uppercase block mb-3">
          La Boutique Poétique
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-deep-bronze tracking-[0.1em] font-light uppercase">
          مستحضراتنا الأيقونية
        </h2>
        <p className="font-sans text-xs text-charcoal-text/60 mt-2 tracking-widest font-light">
          Sculpted Beauty Essentials Featured in Vogue
        </p>
        <div className="w-16 h-[1px] bg-gold-start/20 mx-auto mt-4" />
      </div>

      {/* التخطيط غير المتماثل (Editorial Layout) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full space-y-16 md:space-y-24"
      >
        
        {/* الصف الأول: المنتج الكبير الاستثنائي (The Hero Product Layout) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center border-b border-gold-start/10 pb-16"
        >
          {/* نصف الشاشة اليسار: الصورة الكبيرة جدًا للمنتج الأيقوني */}
          <div className="col-span-1 md:col-span-7 relative group overflow-hidden bg-champagne/10 border border-gold-start/15 p-2 rounded-[3px]">
            <div className="relative overflow-hidden aspect-[16/10] w-full rounded-[2px]">
              <motion.img
                src={heroProduct.image}
                alt={heroProduct.name}
                className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.03] transition-transform duration-[2s] ease-out pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-bronze/10 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* إطار جانبي خفيف للتعبير عن الطابع التحريري الحصري لـ Vogue */}
            <div className="absolute top-4 left-4 bg-charcoal-text/90 backdrop-blur-sm px-3 py-1 border border-gold-start/30">
              <span className="font-serif italic text-[10px] tracking-widest text-gold-start">
                VOGUE SELECT
              </span>
            </div>
          </div>

          {/* نصف الشاشة اليمين: السرد الشاعري للمنتج والأسعار المخصصة */}
          <div className="col-span-1 md:col-span-5 text-right flex flex-col justify-center">
            <span className="font-serif italic text-xs text-gold-start tracking-widest uppercase block mb-2">
              L'Élixir Céleste
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-deep-bronze font-light mb-3 tracking-wide leading-tight">
              {heroProduct.name}
            </h3>
            {/* السعر أسفل الاسم مباشرة */}
            <span className="font-serif text-base text-gold-start font-medium tracking-wider mb-5 block">
              {heroProduct.price}
            </span>
            
            {/* وصف شاعري دافئ بخط مائل */}
            <p className="font-sans italic text-xs md:text-sm text-charcoal-text/80 leading-relaxed font-light mb-8 pl-4">
              "{heroProduct.poeticDesc}"
            </p>

            <div className="self-start">
              <button
                onClick={() => handleProductDetail(heroProduct.name)}
                className="inline-flex items-center gap-2 font-serif text-xs tracking-widest text-deep-bronze hover:text-gold-start transition-colors duration-300 group cursor-pointer"
              >
                <ArrowLeft
                  size={14}
                  strokeWidth={1.2}
                  className="transform group-hover:-translate-x-1 transition-transform duration-300"
                />
                <span>اكتشفي المزيد عن هذا الإكسير</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* الصف الثاني: المنتجات الأربعة المرافقة الأصغر حجماً مرتبة في شبكة كلاسيكية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {editorialProducts.map((prod) => (
            <motion.div
              key={prod.id}
              variants={itemVariants}
              className="flex flex-col justify-between group text-right bg-white/40 p-4 border border-gold-start/10 hover:border-gold-start/30 rounded-[3px] transition-all duration-500"
            >
              {/* صورة المنتج الأصغر */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-champagne/10 mb-5 border border-gold-start/5">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* التفاصيل التحريرية الأنيقة */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  {/* اسم المنتج الفخم بخط Playfair */}
                  <h4 className="font-serif text-base text-deep-bronze font-light mb-1 group-hover:text-gold-start transition-colors duration-300">
                    {prod.name}
                  </h4>
                  {/* السعر أسفل الاسم مباشرة */}
                  <span className="font-serif text-xs text-gold-start/90 font-medium tracking-wider mb-3.5 block">
                    {prod.price}
                  </span>
                  {/* الوصف الشاعري بخط Italic ناعم */}
                  <p className="font-sans italic text-[11px] text-charcoal-text/75 leading-relaxed font-light mb-5">
                    "{prod.poeticDesc}"
                  </p>
                </div>

                {/* رابط اكتشفي المزيد الرفيع */}
                <div className="pt-3 border-t border-gold-start/10 self-start">
                  <button
                    onClick={() => handleProductDetail(prod.name)}
                    className="inline-flex items-center gap-1.5 font-serif text-[10px] tracking-widest text-deep-bronze/70 hover:text-gold-start transition-all duration-300 group cursor-pointer"
                  >
                    <ArrowLeft
                      size={12}
                      strokeWidth={1.2}
                      className="transform group-hover:-translate-x-1 transition-transform duration-300"
                    />
                    <span>اكتشفي المزيد</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
