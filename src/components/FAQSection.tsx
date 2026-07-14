/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Plus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * مكون قسم "الأسئلة الشائعة" (FAQ Section) لصالون DECEMBER الفاخر
 * يتميز بخلفية Ivory White ناعمة، وتصميم أكورديون كلاسيكي رفيع للغاية بنقش ذهبي هادئ.
 */
export default function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [openId, setOpenId] = useState<string | null>(null);

  // قائمة الأسئلة الشائعة المطروحة حول طقوس ومواعيد الصالون
  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "كيف يمكنني حجز طقوس تصفيف الشعر أو السبا مع خبيرة معينة؟",
      answer: "يمكنكِ الحجز بسهولة عبر الضغط على زر الحجز الرئيسي واختيار خيار التواصل الذي يروق لكِ. يسعد مستشار الجمال لدينا بتوجيهكِ وحجز موعدكِ مع خبيرتكِ المفضلة لضمان الخصوصية التامة والاهتمام بكوتور مظهركِ.",
    },
    {
      id: "faq-2",
      question: "هل مستحضرات العناية والتجميل المستخدمة عضوية وآمنة تمامًا؟",
      answer: "بالتأكيد. جميع المواد والمستحضرات المستخدمة في صالون DECEMBER مستوردة من دور كوتور باريسية رائدة وعضوية 100% وخالية تمامًا من السيليكون والبارابين لتكريم صحتكِ وبشرتكِ وجمالكِ الطبيعي.",
    },
    {
      id: "faq-3",
      question: "ما هي شروط وسياسة إلغاء أو تغيير موعد الحجز؟",
      answer: "نظرًا لأننا نخصص صالة الخدمة بالكامل لتجربة جمالية تليق بخصوصيتكِ، فإننا نرجو بكل لطف وإكرام تغيير الموعد أو إلغائه قبل 24 ساعة على الأقل من موعد الطقس المجدول حتى نتمكن من تنسيق أوقات الخبيرات.",
    },
    {
      id: "faq-4",
      question: "هل تتوفر خدمات مخصصة للعرائس والمناسبات الخاصة؟",
      answer: "نعم، نقدم 'باقة العروس الملكية' التي تشمل طقوسًا فريدة مصممة خريصًا لملامحكِ من علاجات البشرة المذهبة، وفن الأظافر الدقيق، وتصفيف الشعر الكلاسيكي والحديث، مع توفير جناح هادئ وخاص لراحتكِ وصديقاتكِ.",
    },
    {
      id: "faq-5",
      question: "هل يتطلب الأمر استشارة مسبقة قبل علاجات البشرة والشعر الطويلة؟",
      answer: "نوصي دائمًا بجلسة استشارة هادئة تسبق الطقوس بـ 15 دقيقة، حيث تقوم الخبيرة بفحص خصلاتكِ وبشرتكِ بدقة لتحديد التركيبة العضوية والزيوت الطبيعية الملائمة تمامًا لإبراز نضارتكِ الطبيعية وصحة شعركِ.",
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section
      id="lialy-salon-faq"
      ref={containerRef}
      className="w-full bg-[#FFFDF9] py-16 md:py-24 px-6 md:px-12 relative flex flex-col items-center justify-center border-b border-gold-start/10"
    >
      {/* رأس القسم المركزي الفخم والبسيط */}
      <div className="text-center max-w-xl mb-16 relative z-10">
        <span className="font-serif italic text-xs md:text-sm text-gold-start tracking-widest uppercase block mb-3">
          Sagesse & Clarté
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-deep-bronze tracking-[0.1em] font-light uppercase">
          الأسئلة الشائعة
        </h2>
        <div className="w-16 h-[1px] bg-gold-start/20 mx-auto mt-4" />
      </div>

      {/* الأكورديون العمودي البسيط والفخم */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="w-full max-w-3xl flex flex-col relative z-10"
      >
        {faqs.map((faq) => {
          const isOpen = faq.id === openId;

          return (
            <div
              key={faq.id}
              className="border-b border-gold-start/15 py-5 text-right transition-colors duration-300"
            >
              {/* زر السؤال مع حركة دوران الأيقونة الرفيعة */}
              <button
                onClick={() => handleToggle(faq.id)}
                className="w-full flex items-center justify-between flex-row-reverse text-right group cursor-pointer py-1"
                aria-expanded={isOpen}
              >
                {/* نص السؤال بخط Inter متزن وعميق */}
                <span className="font-sans text-sm md:text-base text-deep-bronze font-medium tracking-wide group-hover:text-gold-start transition-colors duration-300">
                  {faq.question}
                </span>

                {/* أيقونة + الرفيعة التي تتحول إلى x عند الفتح بدوران ناعم وسلس */}
                <div className="text-gold-start/80 p-1 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Plus size={16} strokeWidth={1.2} />
                  </motion.div>
                </div>
              </button>

              {/* إجابة السؤال المنزلقة بسلاسة مذهلة عن طريق Framer Motion */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-xs md:text-sm text-charcoal-text/75 leading-relaxed font-light mt-3 pl-8 pb-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
