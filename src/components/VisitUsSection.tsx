/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Phone, MapPin, Clock, Send, Sparkles } from "lucide-react";

/**
 * مكون حقل الإدخال البسيط ذو التسمية العائمة (Floating Label Input)
 */
interface FloatingInputProps {
  label: string;
  type?: string;
  id: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

function FloatingInput({ label, type = "text", id, value, onChange, required = true }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative w-full mb-8">
      <input
        type={type}
        id={id}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full bg-transparent border-b border-gold-start/20 text-deep-bronze text-sm py-2 px-1 focus:outline-none focus:border-gold-start transition-colors duration-400 font-sans"
      />
      {/* التسمية التي تطفو للأعلى بحركة ناعمة (Floating Label) */}
      <label
        htmlFor={id}
        className={`absolute right-1 text-right pointer-events-none transition-all duration-300 font-sans text-xs ${
          isFocused || hasValue
            ? "-top-4 text-gold-start scale-90"
            : "top-2 text-charcoal-text/50"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

/**
 * مكون مساحة الكتابة ذات التسمية العائمة (Floating Label Textarea)
 */
interface FloatingTextareaProps {
  label: string;
  id: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

function FloatingTextarea({ label, id, value, onChange, required = true }: FloatingTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative w-full mb-8">
      <textarea
        id={id}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={3}
        className="w-full bg-transparent border-b border-gold-start/20 text-deep-bronze text-sm py-2 px-1 focus:outline-none focus:border-gold-start transition-colors duration-400 resize-none font-sans"
      />
      {/* التسمية التي تطفو للأعلى بحركة ناعمة (Floating Label) */}
      <label
        htmlFor={id}
        className={`absolute right-1 text-right pointer-events-none transition-all duration-300 font-sans text-xs ${
          isFocused || hasValue
            ? "-top-4 text-gold-start scale-90"
            : "top-2 text-charcoal-text/50"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

/**
 * مكون قسم "زورينا" (Visit Us & Contact Section) لصالون DECEMBER الفاخر
 * يتميز بتخطيط غير متماثل متناغم، وخريطة فنية منسقة مع الهوية، ونموذج تواصل ذكي بلمسات هادئة.
 */
export default function VisitUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  // حالات نموذج الاتصال التحريري
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      alert(`سيدتي الجميلة ${name}، لقد تلقينا رسالتكِ بشغف. يسعد فريق الضيافة لدينا في DECEMBER الاتصال بكِ عبر الرقم (${phone}) لتنسيق تفاصيل طقوس زيارتكِ الحالمة.`);
      // إعادة تعيين النموذج
      setName("");
      setPhone("");
      setMessage("");
      setIsSubmitted(false);
    }, 600);
  };

  return (
    <section
      id="lialy-visit-us"
      ref={containerRef}
      className="w-full bg-[#FFFDF9] py-16 md:py-24 px-6 md:px-12 relative flex flex-col items-center justify-center border-b border-gold-start/10 overflow-hidden"
    >
      {/* رأس القسم المركزي الهادئ */}
      <div className="text-center max-w-xl mb-16 relative z-10">
        <span className="font-serif italic text-xs md:text-sm text-gold-start tracking-widest uppercase block mb-3">
          Le Sanctuaire de Beauté
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-deep-bronze tracking-[0.1em] font-light uppercase">
          استشيري خبيراتنا وزورينا
        </h2>
        <div className="w-16 h-[1px] bg-gold-start/20 mx-auto mt-4" />
      </div>

      {/* تخطيط العمودين: خريطة مخصصة + نموذج تواصل بسيط */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* العمود الأول: نموذج التواصل وتفاصيل الاتصال وساعات العمل (يأتي أولاً على الجوال) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-6 order-1 lg:order-1 flex flex-col justify-between h-full text-right"
        >
          <div>
            <div className="flex items-center justify-start gap-2 mb-6">
              <Sparkles size={13} className="text-gold-start animate-pulse" />
              <span className="font-serif italic text-xs text-gold-start tracking-wider">
                استمارة التواصل الخاص
              </span>
            </div>

            {/* النموذج البسيط الفخم */}
            <form onSubmit={handleSubmit} className="mb-10">
              <FloatingInput
                label="الاسم الكريم"
                id="contact-name"
                value={name}
                onChange={setName}
              />
              <FloatingInput
                label="رقم التواصل (الواتساب أو الهاتف)"
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={setPhone}
              />
              <FloatingTextarea
                label="رسالتكِ أو تفاصيل الطقوس التي ترغبين بها"
                id="contact-message"
                value={message}
                onChange={setMessage}
              />

              {/* زر إرسال راقٍ ورفيع متناسب مع الهوية */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="relative px-8 py-3.5 border border-gold-start/35 hover:border-gold-start text-[#6E4E2E] hover:text-white hover:bg-[#6E4E2E] text-xs tracking-[0.25em] uppercase font-sans font-medium rounded-[2px] transition-all duration-300 flex items-center gap-3 cursor-pointer group shadow-sm disabled:opacity-50"
                >
                  <Send
                    size={12}
                    className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                  <span>إرسال طقوس اهتمامكِ</span>
                </button>
              </div>
            </form>
          </div>

          {/* تفاصيل الاتصال وساعات العمل أسفل النموذج مباشرة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-gold-start/10">
            {/* ساعات العمل الملكية */}
            <div className="flex flex-col items-start text-right sm:items-end">
              <div className="flex items-center gap-2 mb-2 text-gold-start">
                <Clock size={14} strokeWidth={1.5} />
                <h4 className="font-serif text-xs tracking-wider uppercase font-medium">
                  ساعات الاستقبال الراقية
                </h4>
              </div>
              <p className="font-sans text-[11px] text-charcoal-text/80 leading-relaxed font-light">
                السبت - الخميس: 1:00 م - 10:00 م
              </p>
              <p className="font-sans text-[11px] text-charcoal-text/60 leading-relaxed font-light">
                الجمعة: مخصص فقط لطقوس العرائس الخاصة
              </p>
            </div>

            {/* العنوان ورقم الهاتف الرفيع */}
            <div className="flex flex-col items-start text-right sm:items-end">
              <div className="flex items-center gap-2 mb-2 text-gold-start">
                <MapPin size={14} strokeWidth={1.5} />
                <h4 className="font-serif text-xs tracking-wider uppercase font-medium">
                  موقع صالون DECEMBER
                </h4>
              </div>
              <p className="font-sans text-[11px] text-charcoal-text/80 leading-relaxed font-light">
                طريق الأمير محمد بن عبد العزيز، الرياض، المملكة العربية السعودية
              </p>
              <p className="font-sans text-[11px] text-charcoal-text/60 leading-relaxed font-light mt-1">
                هاتف: 96611488820+
              </p>
            </div>
          </div>
        </motion.div>

        {/* العمود الثاني: خريطة مخصصة ومصممة بألوان الهوية للتوافق الكلي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-6 order-2 lg:order-2 relative aspect-square lg:aspect-auto lg:h-[450px] w-full bg-champagne/10 border border-gold-start/20 p-2 rounded-[3px]"
        >
          {/* حاوية الخريطة التشكيلية بالألوان الذهبية والكريمية */}
          <div className="relative w-full h-full bg-[#FCF9F3] overflow-hidden rounded-[2px] flex items-center justify-center border border-gold-start/10">
            {/* خريطة جمالية مرسومة بـ SVG تحاكي تضاريس وشوارع حي الرياض الفخم بتدرجات ذهبية */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full opacity-65 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* خطوط الشوارع والأنهار التجريدية المتداخلة بنظام الهوية */}
              <path d="M 0,50 L 400,120" stroke="rgba(201, 161, 94, 0.12)" strokeWidth="8" fill="none" />
              <path d="M 120,0 L 250,400" stroke="rgba(201, 161, 94, 0.12)" strokeWidth="6" fill="none" />
              <path d="M 0,320 L 400,280" stroke="rgba(201, 161, 94, 0.12)" strokeWidth="10" fill="none" />
              <path d="M 300,0 L 0,380" stroke="rgba(201, 161, 94, 0.08)" strokeWidth="4" fill="none" />
              
              {/* شوارع فرعية ناعمة */}
              <line x1="50" y1="0" x2="100" y2="400" stroke="rgba(201, 161, 94, 0.04)" strokeWidth="2" />
              <line x1="200" y1="0" x2="350" y2="400" stroke="rgba(201, 161, 94, 0.04)" strokeWidth="1.5" />
              <line x1="0" y1="150" x2="400" y2="250" stroke="rgba(201, 161, 94, 0.04)" strokeWidth="2" />
              <line x1="0" y1="220" x2="400" y2="180" stroke="rgba(201, 161, 94, 0.04)" strokeWidth="1.5" />

              {/* النهر التجريدي أو المنطقة الدائرية الفخمة */}
              <circle cx="200" cy="200" r="120" stroke="rgba(201, 161, 94, 0.03)" strokeWidth="3" fill="none" />
              <circle cx="200" cy="200" r="60" stroke="rgba(201, 161, 94, 0.05)" strokeWidth="2" fill="none" />
            </svg>

            {/* المخطط الفعلي لموقع صالون ديسمبر الفاخر على الخريطة */}
            <div className="relative flex flex-col items-center justify-center z-10">
              {/* نبضات الإشعاع الدائري الملكي الفاخر للموقع */}
              <div className="absolute w-20 h-20 bg-gold-start/15 rounded-full animate-ping pointer-events-none" />
              <div className="absolute w-10 h-10 bg-gold-start/25 rounded-full animate-pulse pointer-events-none" />
              
              {/* الدبوس الذهبي الجمالي المصنوع بدقة باللون العنابي */}
              <div className="w-12 h-12 bg-[#5A1820] border border-gold-start rounded-full flex items-center justify-center shadow-lg relative">
                <MapPin size={22} className="text-gold-start" strokeWidth={1.5} />
              </div>

              {/* تسمية الموقع الأنيقة المعلقة على الدبوس */}
              <div className="mt-4 bg-[#5A1820]/95 backdrop-blur-md px-4 py-2 border border-gold-start/30 shadow-md text-center max-w-[180px]">
                <h5 className="font-serif text-[10px] tracking-widest text-gold-start uppercase font-bold mb-0.5">
                  DECEMBER
                </h5>
                <p className="font-sans text-[9px] text-ivory-white/80 leading-tight font-light">
                  صالون وسبا ديسمبِر الفاخر
                </p>
              </div>
            </div>

            {/* تدرج تظليل كريمي هادئ في الزوايا لمنع تشتت العين */}
            <div className="absolute inset-0 bg-gradient-to-t from-champagne/10 via-transparent to-champagne/10 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
