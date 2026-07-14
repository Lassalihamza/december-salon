/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Heart, Instagram } from "lucide-react";

interface InstagramPost {
  id: string;
  image: string;
  likes: string;
}

/**
 * مكون قسم "تابعونا على إنستغرام" (Instagram Grid Section) لصالون DECEMBER الفاخر
 * يعرض شبكة تحريرية سلسة متلاصقة من الصور تعبر عن أسلوب الحياة الراقي والجمال الهادئ للعلامة التجارية.
 */
export default function InstagramSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  // 6 منشورات منتقاة بعناية لتعكس فخامة الصالون وطقوس العناية الباريسية
  const posts: InstagramPost[] = [
    {
      id: "insta-1",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "1.2k",
    },
    {
      id: "insta-2",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "843",
    },
    {
      id: "insta-3",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "1.9k",
    },
    {
      id: "insta-4",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "956",
    },
    {
      id: "insta-5",
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "1.5k",
    },
    {
      id: "insta-6",
      image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=400&h=400",
      likes: "2.1k",
    },
  ];

  const handleFollowClick = () => {
    alert("سيتم نقلكِ إلى حساب صالون DECEMBER الفاخر على منصة Instagram لمتابعة آخر صيحات الموضة والجمال.");
  };

  return (
    <section
      id="lialy-instagram-feed"
      ref={containerRef}
      className="w-full bg-[#FFFEFB] py-12 md:py-16 relative flex flex-col items-center justify-center overflow-hidden border-b border-gold-start/10"
    >
      {/* رأس القسم الصغير الفخم والمساعد */}
      <div className="text-center mb-10 relative z-10 px-4">
        <span className="font-serif italic text-xs md:text-sm text-gold-start tracking-[0.25em] uppercase block mb-2">
          Galerie Numérique
        </span>
        <h2 className="font-serif text-lg md:text-xl text-deep-bronze tracking-[0.15em] font-light uppercase">
          @DECEMBER_SALON
        </h2>
        <div className="w-10 h-[1px] bg-gold-start/20 mx-auto mt-3" />
      </div>

      {/* شبكة إنستغرام المتلاصقة بلا فراغات على الإطلاق */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="w-full grid grid-cols-3 lg:grid-cols-6 gap-0 relative z-10 border-t border-b border-gold-start/10"
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative aspect-square overflow-hidden group cursor-pointer bg-champagne/10"
          >
            {/* الصورة الأساسية المربعة بدقة عالية */}
            <img
              src={post.image}
              alt="December Salon Instagram Lifestyle"
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out pointer-events-none group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />

            {/* طبقة التعتيم والتوهج الذهبي الشفاف عند Hover (0.3 ثانية) مع تفاعل كلاسيكي */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-bronze/70 via-gold-start/40 to-deep-bronze/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-ivory-white text-xs gap-1.5 md:gap-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center gap-1.5"
              >
                <Heart size={16} fill="currentColor" className="text-ivory-white" />
                <span className="font-sans text-[10px] md:text-xs tracking-wider font-light">
                  {post.likes} إعجابًا
                </span>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* زر المتابعة الرفيع والصغير أسفل الشبكة */}
      <div className="mt-10 relative z-10">
        <button
          onClick={handleFollowClick}
          className="inline-flex items-center gap-2.5 px-6 py-2.5 border border-gold-start/35 hover:border-gold-start hover:bg-champagne/5 text-[10px] tracking-[0.25em] text-deep-bronze uppercase font-sans font-medium rounded-[2px] transition-all duration-300 cursor-pointer"
        >
          <Instagram size={11} strokeWidth={1.5} />
          <span>تابعي حسابنا التحريري</span>
        </button>
      </div>
    </section>
  );
}
