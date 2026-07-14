/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { Phone, Calendar, MessageSquare, Sparkles, User, PhoneCall, Clock3, NotebookPen, Check } from "lucide-react";

/**
 * ============================================================
 * إعدادات الحجز — عدّلي هذه القيم فقط بما يخص صالونكِ الفعلي
 * ============================================================
 */
// رقم واتساب الصالون بصيغة دولية بدون علامة + وبدون أصفار في البداية (مثال: السعودية 9665xxxxxxxx)
const SALON_WHATSAPP_NUMBER = "966500000000";
// رقم الهاتف للاتصال المباشر (بصيغة دولية للاستخدام في رابط tel:)
const SALON_PHONE_NUMBER = "+966500000000";

const SERVICES = [
  "جلسات الشعر الفاخرة",
  "صبغات ديسمبر",
  "علاجات الشعر التحريرية",
  "رموش وشفاه كوتور",
  "باقات الصيف والمناسبات",
  "طقس العروس الملكي",
  "استشارة جمالية مخصصة",
];

const TIME_SLOTS = ["صباحًا (10ص - 1ظ)", "بعد الظهر (1ظ - 5م)", "مساءً (5م - 9م)"];

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const EMPTY_FORM: BookingFormData = {
  name: "",
  phone: "",
  service: SERVICES[0],
  date: "",
  time: TIME_SLOTS[0],
  notes: "",
};

/** يبني نص رسالة واتساب منسّقة من بيانات الحجز */
function buildWhatsAppMessage(data: BookingFormData) {
  const lines = [
    "مرحبًا صالون DECEMBER 🌹",
    "أرغب في حجز موعد بالتفاصيل التالية:",
    `• الاسم: ${data.name}`,
    `• رقم الهاتف: ${data.phone}`,
    `• الخدمة المطلوبة: ${data.service}`,
    data.date ? `• التاريخ المفضل: ${data.date}` : null,
    `• الوقت المفضل: ${data.time}`,
    data.notes ? `• ملاحظات إضافية: ${data.notes}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

function openWhatsApp(message: string) {
  const url = `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/** حقل نصي فاخر موحّد التنسيق */
function LuxuryField({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-right w-full">
      <span className="flex items-center gap-1.5 justify-end font-sans text-[10px] tracking-widest uppercase text-champagne/70">
        {label}
        {icon}
      </span>
      {children}
    </label>
  );
}

const inputClasses =
  "w-full bg-ivory-white/[0.06] border border-champagne/20 focus:border-gold-start outline-none rounded-[3px] px-4 py-3 text-sm text-ivory-white placeholder:text-champagne/40 font-sans transition-colors duration-300 text-right";

export default function BookingCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX * 0.35);
    y.set(mouseY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleToggleForm = () => {
    setSubmitted(false);
    setIsFormOpen((prev) => !prev);
  };

  const updateField = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("فضلاً أدخلي الاسم ورقم الهاتف لإتمام الحجز");
      return;
    }
    openWhatsApp(buildWhatsAppMessage(formData));
    setSubmitted(true);
  };

  const handleQuickCall = () => {
    window.location.href = `tel:${SALON_PHONE_NUMBER}`;
  };

  const handleQuickWhatsApp = () => {
    openWhatsApp("مرحبًا صالون DECEMBER 🌹، أرغب بالاستفسار عن الحجز.");
  };

  return (
    <section
      id="lialy-booking-cta"
      ref={containerRef}
      className="w-full max-w-5xl mx-auto py-16 md:py-24 px-4 md:px-0 z-10"
    >
      <div
        className="relative w-full rounded-[4px] overflow-hidden py-16 md:py-24 px-6 md:px-12 text-center border border-gold-start/30 shadow-[0_25px_60px_rgba(90,24,32,0.25)] flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #6E1F2A 0%, #5A1820 100%)",
        }}
      >
        <div className="absolute -top-12 -left-12 w-48 h-48 border border-ivory-white/5 rounded-full pointer-events-none" />
        <div className="absolute -top-6 -left-6 w-48 h-48 border border-gold-start/5 rounded-full pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-ivory-white/5 rounded-full pointer-events-none" />
        <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold-start/5 rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl w-full flex flex-col items-center relative z-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={14} className="text-champagne animate-pulse" />
            <span className="font-serif italic text-xs tracking-[0.25em] text-champagne uppercase font-light">
              Votre Rendez-vous d'Or
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory-white font-light tracking-wide leading-tight mb-4">
            لحظتكِ مع الفخامة تبدأ الآن
          </h2>

          <p className="font-sans text-xs md:text-sm text-champagne/90 leading-relaxed font-light mb-10 max-w-lg">
            خطوة واحدة تفصلكِ عن ولوج عالم مكرّس لخصوصيتكِ ورعاية جمالكِ بأرقى المستحضرات الباريسية العضوية وطقوس الكوتور الملكية.
          </p>

          {/* الزر الرئيسي المغناطيسي — يفتح ويغلق نموذج الحجز داخل نفس المربع */}
          <div className="relative mb-8 w-full flex justify-center">
            {!isFormOpen && (
              <div className="absolute inset-0 bg-champagne/30 rounded-[3px] blur-xl animate-pulse scale-105 pointer-events-none" />
            )}

            <motion.button
              ref={buttonRef}
              style={{ x: springX, y: springY, borderRadius: "3px" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleToggleForm}
              className="relative px-10 py-4.5 bg-[#FFFBF5] text-[#5A1820] hover:text-gold-start border border-gold-start/20 text-xs tracking-[0.3em] uppercase font-sans font-medium overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-colors duration-300 cursor-pointer"
            >
              {isFormOpen ? "إغلاق نموذج الحجز" : "احجزي طقس جمالكِ الفاخر"}
            </motion.button>
          </div>

          {/* نموذج الحجز المنسدل — يظهر داخل نفس مربع الدعوة، ويُرسل عبر واتساب عند التأكيد */}
          <AnimatePresence mode="wait">
            {isFormOpen && (
              <motion.div
                key={submitted ? "success" : "form"}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full overflow-hidden"
              >
                {submitted ? (
                  <div className="w-full bg-ivory-white/[0.06] border border-gold-start/25 rounded-[4px] p-8 flex flex-col items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border border-gold-start/50 flex items-center justify-center">
                      <Check size={18} className="text-gold-start" strokeWidth={1.5} />
                    </div>
                    <p className="font-serif text-lg text-ivory-white font-light">
                      تم تجهيز طلب حجزكِ
                    </p>
                    <p className="font-sans text-xs text-champagne/80 leading-relaxed max-w-sm">
                      فتحنا لكِ محادثة واتساب برسالة جاهزة تحتوي كل تفاصيل حجزكِ — فقط اضغطي إرسال هناك لتأكيد موعدكِ.
                    </p>
                    <button
                      onClick={() => {
                        setFormData(EMPTY_FORM);
                        setSubmitted(false);
                      }}
                      className="mt-2 font-sans text-[11px] tracking-widest uppercase text-gold-start underline underline-offset-4 hover:text-champagne transition-colors"
                    >
                      حجز موعد آخر
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="w-full bg-ivory-white/[0.05] border border-gold-start/20 rounded-[4px] p-6 md:p-8 flex flex-col gap-5 mb-4 text-right"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <LuxuryField label="الاسم الكامل" icon={<User size={12} />}>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          placeholder="اسمكِ الكريم"
                          className={inputClasses}
                          required
                        />
                      </LuxuryField>

                      <LuxuryField label="رقم الهاتف" icon={<PhoneCall size={12} />}>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          placeholder="05xxxxxxxx"
                          className={inputClasses}
                          dir="ltr"
                          required
                        />
                      </LuxuryField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <LuxuryField label="الخدمة المطلوبة" icon={<Sparkles size={12} />}>
                        <select
                          value={formData.service}
                          onChange={(e) => updateField("service", e.target.value)}
                          className={`${inputClasses} appearance-none cursor-pointer`}
                        >
                          {SERVICES.map((s) => (
                            <option key={s} value={s} className="bg-[#5A1820] text-ivory-white">
                              {s}
                            </option>
                          ))}
                        </select>
                      </LuxuryField>

                      <LuxuryField label="الوقت المفضل" icon={<Clock3 size={12} />}>
                        <select
                          value={formData.time}
                          onChange={(e) => updateField("time", e.target.value)}
                          className={`${inputClasses} appearance-none cursor-pointer`}
                        >
                          {TIME_SLOTS.map((t) => (
                            <option key={t} value={t} className="bg-[#5A1820] text-ivory-white">
                              {t}
                            </option>
                          ))}
                        </select>
                      </LuxuryField>
                    </div>

                    <LuxuryField label="التاريخ المفضل" icon={<Calendar size={12} />}>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => updateField("date", e.target.value)}
                        className={inputClasses}
                      />
                    </LuxuryField>

                    <LuxuryField label="ملاحظات إضافية (اختياري)" icon={<NotebookPen size={12} />}>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => updateField("notes", e.target.value)}
                        placeholder="أي تفاصيل تودين إخبارنا بها مسبقًا..."
                        rows={3}
                        className={`${inputClasses} resize-none`}
                      />
                    </LuxuryField>

                    {error && (
                      <p className="font-sans text-xs text-blush-accent text-right">{error}</p>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gold-start to-gold-end text-ivory-white hover:brightness-105 border border-gold-start py-3.5 rounded-[3px] text-xs tracking-[0.25em] uppercase font-sans font-medium flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                    >
                      <MessageSquare size={13} strokeWidth={1.2} />
                      تأكيد الحجز وإرسال عبر واتساب
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="w-24 h-[1px] bg-champagne/20 mb-8" />

          {/* البدائل السريعة للحجز */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <button
              onClick={handleQuickWhatsApp}
              className="flex items-center gap-2 text-champagne/80 hover:text-ivory-white transition-colors duration-300 group cursor-pointer"
            >
              <div className="p-2 border border-champagne/15 rounded-full group-hover:border-champagne/45 transition-colors duration-300 flex items-center justify-center">
                <MessageSquare size={13} strokeWidth={1.2} />
              </div>
              <span className="font-sans text-[11px] tracking-widest font-light">
                تنسيق عبر واتساب
              </span>
            </button>

            <button
              onClick={handleQuickCall}
              className="flex items-center gap-2 text-champagne/80 hover:text-ivory-white transition-colors duration-300 group cursor-pointer"
            >
              <div className="p-2 border border-champagne/15 rounded-full group-hover:border-champagne/45 transition-colors duration-300 flex items-center justify-center">
                <Phone size={13} strokeWidth={1.2} />
              </div>
              <span className="font-sans text-[11px] tracking-widest font-light">
                اتصال هاتفي مباشر
              </span>
            </button>

            <button
              onClick={handleToggleForm}
              className="flex items-center gap-2 text-champagne/80 hover:text-ivory-white transition-colors duration-300 group cursor-pointer"
            >
              <div className="p-2 border border-champagne/15 rounded-full group-hover:border-champagne/45 transition-colors duration-300 flex items-center justify-center">
                <Calendar size={13} strokeWidth={1.2} />
              </div>
              <span className="font-sans text-[11px] tracking-widest font-light">
                استشارة عبر التقويم
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
