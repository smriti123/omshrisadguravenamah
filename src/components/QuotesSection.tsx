import { useState } from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────
// YOUR 31 QUOTES — replace with Swamiji's actual teachings
// ─────────────────────────────────────────────────────────
const quotes: { day: number; quote: string; source: string }[] = [
  { day: 1,  quote: "जीवभाव का अनुभव इस प्रकार होता है कि मैं कर्म का कर्ता हूं, मेरे बिना यह कर्म नहीं होता, इसलिए इसका श्रेय और फल मुझे मिलना चाहिए।", source: "परम पूज्य स्वामीजी" },
  { day: 2,  quote: "आत्मदेव को छोड़कर कहीं भी अगर जीवन का समाधान दिखता है तो वह एक मिथ्या प्रत्यय है, गलत समझ है।", source: "केनोपिनषद २००६ प्रवचन" },
  { day: 3,  quote: "Service to others is the highest form of worship.", source: "On selfless service" },
  { day: 4,  quote: "Love is not a feeling, it is your very existence.", source: "Bhagavad Gita commentary" },
  { day: 5,  quote: "अपने को भक्त बना दो, मेरा सेवक बनकर कर्म करो। प्रभु की प्रीति के लिया सारी चेष्टाएँ होए यह प्रयास करो।", source: "परम पूज्य स्वामीजी" },
  { day: 6,  quote: "The mind that is free from desire is the mind that can truly meditate.", source: "Upanishad discourse" },
  { day: 7,  quote: "जब तक यह गलत समझ हमारे चित्त से निकल न जाए, तो बहिर्मुखता कैसे जाएगी?", source: "केनोपिनषद प्रवचन" },
  { day: 8,  quote: "Surrender is not weakness — it is the highest courage of the soul.", source: "Satsang teaching" },
  { day: 9,  quote: "जगत में अपने कर्तव्य निभाते जाओ पर जगत में अपना समाधान मत खोजो।", source: "परम पूज्य स्वामीजी" },
  { day: 10, quote: "The Guru does not give you anything new. He only removes what was always hiding the truth.", source: "Guru Purnima discourse" },
  { day: 11, quote: "प्रभु के सेवक का कभी अहित नहीं हो सकता।", source: "परम पूज्य स्वामीजी" },
  { day: 12, quote: "Silence is the language of the Self. Words are only its shadow.", source: "Meditation retreat" },
  { day: 13, quote: "जो ईश्वर को जानता है वह सब में ईश्वर को देखता है।", source: "वेदान्त प्रवचन" },
  { day: 14, quote: "When you stop asking 'what will I get', the whole universe conspires to give you everything.", source: "Bhagavad Gita commentary" },
  { day: 15, quote: "समाधान अगर प्रसिद्धि में दिखता है तो प्रसिद्ध लोगों की हालत देख लो।", source: "केनोपिनषद प्रवचन" },
  { day: 16, quote: "Devotion is not a practice. It is a recognition of what already is.", source: "Satsang teaching" },
  { day: 17, quote: "कर्म करो, फल की चिंता छोड़ो — यही गीता का सार है।", source: "गीता प्रवचन" },
  { day: 18, quote: "The greatest obstacle to peace is the belief that peace is somewhere else.", source: "Upanishad discourse" },
  { day: 19, quote: "भगवान कहते हैं कि तुम इन वृत्तियों से निकल नहीं पाते तो कोई बात नहीं।", source: "परम पूज्य स्वामीजी" },
  { day: 20, quote: "A disciple who truly listens to the Guru has already begun the journey home.", source: "Guru Purnima discourse" },
  { day: 21, quote: "आनंद बाहर से नहीं आता, वह तुम्हारे अंदर ही है।", source: "वेदान्त प्रवचन" },
  { day: 22, quote: "Your thoughts are not you. You are the awareness that witnesses the thoughts.", source: "Meditation retreat" },
  { day: 23, quote: "सत्य को जानने के लिए पहले यह जानना होगा कि मैं कौन हूं।", source: "केनोपिनषद प्रवचन" },
  { day: 24, quote: "Compassion without wisdom is sentiment. Wisdom without compassion is dry. Together they are liberation.", source: "Satsang teaching" },
  { day: 25, quote: "जो मन को जीत लेता है, उसने सारी दुनिया जीत ली।", source: "गीता प्रवचन" },
  { day: 26, quote: "The purpose of life is not to be happy — it is to know who you truly are. Happiness follows.", source: "Upanishad discourse" },
  { day: 27, quote: "भक्ति वह नहीं जो हम मंदिर में करते हैं — भक्ति वह है जो हर पल में होती है।", source: "परम पूज्य स्वामीजी" },
  { day: 28, quote: "Let your life itself be your prayer. Let your every action be an offering.", source: "Guru Purnima discourse" },
  { day: 29, quote: "जो दूसरों की सेवा करता है, वह भगवान की सेवा करता है।", source: "वेदान्त प्रवचन" },
  { day: 30, quote: "The seeker and the sought are not two. That discovery is moksha.", source: "Upanishad discourse" },
  { day: 31, quote: "हर दिन एक नया अवसर है — प्रभु को याद करने का, सेवा करने का, और स्वयं को जानने का।", source: "परम पूज्य स्वामीजी" },
];

// How many empty cells before day 1 (0=Sun, 1=Mon, 2=Tue...)
// Change this to match the actual weekday of the 1st of the month
const MONTH_START_OFFSET = 2;

const today = new Date().getDate();

const QuotesSection = () => {
  const [selectedDay, setSelectedDay] = useState<number>(today);

  const selectedQuote = quotes.find((q) => q.day === selectedDay)!;

  const goTo = (day: number) => {
    const clamped = Math.max(1, Math.min(31, day));
    setSelectedDay(clamped);
    // Scroll quote into view on mobile
    setTimeout(() => {
      document.getElementById("quote-display")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  };

  return (
    <section
      id="quotes"
      className="py-20"
      style={{ background: "linear-gradient(180deg,#fdf3e3 0%,#f5e0c0 40%,#efe0c8 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-amber-700/60 text-xs tracking-[0.28em] uppercase mb-3">
            Divya Vani · दिव्य वाणी
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#7a3a00", fontFamily: "serif" }}>
            Gurudev's Wisdom
          </h2>
          <p className="text-amber-800/55 text-sm mb-5 tracking-wide">
            A teaching for every day — click any date to read
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-px bg-amber-700/40" />
            <span className="text-amber-600 text-lg">✦</span>
            <div className="w-16 h-px bg-amber-700/40" />
          </div>
        </div>

        {/* ── Calendar grid ── */}
        <div className="mb-8 rounded-2xl overflow-hidden p-4 md:p-6" style={{ background: "rgba(255,245,230,0.6)", border: "1px solid rgba(180,100,20,0.15)" }}>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 mb-2">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
              <div key={d} className="text-center text-xs tracking-wider py-2 font-medium" style={{ color: "#a05a10" }}>
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-1.5">
            {/* Offset empty cells */}
            {Array.from({ length: MONTH_START_OFFSET }).map((_, i) => (
              <div key={`e${i}`} />
            ))}

            {quotes.map(({ day }) => {
              const isToday    = day === today;
              const isSelected = day === selectedDay;

              return (
                <button
                  key={day}
                  onClick={() => goTo(day)}
                  className="relative flex flex-col items-center justify-center rounded-xl transition-all duration-150 active:scale-95"
                  style={{
                    aspectRatio: "1",
                    background: isSelected
                      ? "#a05a10"
                      : isToday
                      ? "rgba(160,90,16,0.18)"
                      : "rgba(180,100,20,0.07)",
                    border: isSelected
                      ? "2px solid #7a3a00"
                      : isToday
                      ? "1.5px solid rgba(160,90,16,0.5)"
                      : "1px solid rgba(180,100,20,0.12)",
                    color: isSelected ? "#fff8f0" : "#7a3a00",
                    cursor: "pointer",
                  }}
                >
                  <span className="text-sm md:text-base font-medium leading-none">{day}</span>
                  <span
                    className="mt-1 w-1 h-1 rounded-full"
                    style={{ background: isSelected ? "rgba(255,220,150,0.9)" : "rgba(160,90,16,0.35)" }}
                  />
                  {isToday && !isSelected && (
                    <span
                      className="absolute top-0.5 right-1 text-[8px] font-semibold leading-none"
                      style={{ color: "#a05a10" }}
                    >
                      ●
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Quote display ── */}
        <motion.div
          id="quote-display"
          key={selectedDay}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative rounded-2xl p-7 md:p-10"
          style={{
            background: "rgba(255,245,230,0.9)",
            border: "1px solid rgba(180,100,20,0.22)",
            boxShadow: "0 4px 24px rgba(120,60,0,0.08)",
          }}
        >
          {/* Day badge + Om */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold shadow-sm flex-shrink-0"
                style={{ background: "#a05a10", color: "#fff8f0" }}
              >
                {selectedDay}
              </div>
              <div>
                <p className="text-amber-800/50 text-xs tracking-widest uppercase">Day {selectedDay}</p>
                {selectedDay === today && (
                  <p className="text-amber-700 text-xs font-semibold">Today's teaching</p>
                )}
              </div>
            </div>
            <span className="text-3xl opacity-15 select-none" style={{ color: "#a05a10" }}>ॐ</span>
          </div>

          {/* Opening quote mark */}
          <span
            className="block text-7xl leading-none font-serif opacity-10 -mb-6 select-none"
            style={{ color: "#a05a10" }}
          >
            "
          </span>

          {/* Quote */}
          <p
            className="text-lg md:text-xl leading-relaxed italic pl-2 mb-6"
            style={{ color: "#4a1e00", fontFamily: "serif", lineHeight: "1.9" }}
          >
            {selectedQuote.quote}
          </p>

          {/* Source */}
          <p className="text-sm tracking-wide mb-8" style={{ color: "#a05a10" }}>
            — {selectedQuote.source}
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-amber-800/15" />
            <span className="text-amber-600/40 text-xs">✦</span>
            <div className="flex-1 h-px bg-amber-800/15" />
          </div>

          {/* Prev / Next */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => goTo(selectedDay - 1)}
              disabled={selectedDay <= 1}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-wider transition-all disabled:opacity-30"
              style={{ border: "1px solid rgba(160,90,16,0.3)", color: "#a05a10", background: "rgba(160,90,16,0.06)" }}
            >
              ← Day {selectedDay - 1 >= 1 ? selectedDay - 1 : "—"}
            </button>
            <span className="text-amber-700/30 text-xs">{selectedDay} / 31</span>
            <button
              onClick={() => goTo(selectedDay + 1)}
              disabled={selectedDay >= 31}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-wider transition-all disabled:opacity-30"
              style={{ border: "1px solid rgba(160,90,16,0.3)", color: "#a05a10", background: "rgba(160,90,16,0.06)" }}
            >
              Day {selectedDay + 1 <= 31 ? selectedDay + 1 : "—"} →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuotesSection;
