import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────
// ADD YOUR 31 QUOTES HERE
// Each entry: { day, quote, source }
// ─────────────────────────────────────────────────────────
const quotes = [
  {
    day: 1,
    quote: "जीवभाव का अनुभव इस प्रकार होता है कि मैं कर्म का कर्ता हूं, मेरे बिना यह कर्म नहीं होता, इसलिए इसका श्रेय और फल मुझे मिलना चाहिए।",
    source: "परम पूज्य स्वामीजी",
  },
  {
    day: 2,
    quote: "आत्मदेव को छोड़कर कहीं भी अगर जीवन का समाधान दिखता है तो वह एक मिथ्या प्रत्यय है, गलत समझ है।",
    source: "केनोपिनषद २००६ प्रवचन",
  },
  {
    day: 3,
    quote: "Service to others is the highest form of worship.",
    source: "On selfless service",
  },
  {
    day: 4,
    quote: "Love is not a feeling, it is your very existence.",
    source: "Bhagavad Gita commentary",
  },
  {
    day: 5,
    quote: "अपने को भक्त बना दो, मेरा सेवक बनकर कर्म करो। प्रभु की प्रीति के लिया सारी चेष्टाएँ होए यह प्रयास करो।",
    source: "परम पूज्य स्वामीजी",
  },
  {
    day: 6,
    quote: "The mind that is free from desire is the mind that can truly meditate.",
    source: "Upanishad discourse",
  },
  {
    day: 7,
    quote: "जब तक यह गलत समझ हमारे चित्त से निकल न जाए, तो बहिर्मुखता कैसे जाएगी?",
    source: "केनोपिनषद प्रवचन",
  },
  {
    day: 8,
    quote: "Surrender is not weakness — it is the highest courage of the soul.",
    source: "Satsang teaching",
  },
  {
    day: 9,
    quote: "जगत में अपने कर्तव्य निभाते जाओ पर जगत में अपना समाधान मत खोजो।",
    source: "परम पूज्य स्वामीजी",
  },
  {
    day: 10,
    quote: "The Guru does not give you anything new. He only removes what was always hiding the truth.",
    source: "Guru Purnima discourse",
  },
  {
    day: 11,
    quote: "प्रभु के सेवक का कभी अहित नहीं हो सकता।",
    source: "परम पूज्य स्वामीजी",
  },
  {
    day: 12,
    quote: "Silence is the language of the Self. Words are only its shadow.",
    source: "Meditation retreat",
  },
  {
    day: 13,
    quote: "जो ईश्वर को जानता है वह सब में ईश्वर को देखता है।",
    source: "वेदान्त प्रवचन",
  },
  {
    day: 14,
    quote: "When you stop asking 'what will I get', the whole universe conspires to give you everything.",
    source: "Bhagavad Gita commentary",
  },
  {
    day: 15,
    quote: "समाधान अगर प्रसिद्धि में दिखता है तो प्रसिद्ध लोगों की हालत देख लो।",
    source: "केनोपिनषद प्रवचन",
  },
  {
    day: 16,
    quote: "Devotion is not a practice. It is a recognition of what already is.",
    source: "Satsang teaching",
  },
  {
    day: 17,
    quote: "कर्म करो, फल की चिंता छोड़ो — यही गीता का सार है।",
    source: "गीता प्रवचन",
  },
  {
    day: 18,
    quote: "The greatest obstacle to peace is the belief that peace is somewhere else.",
    source: "Upanishad discourse",
  },
  {
    day: 19,
    quote: "भगवान कहते हैं कि तुम इन वृत्तियों से निकल नहीं पाते तो कोई बात नहीं।",
    source: "परम पूज्य स्वामीजी",
  },
  {
    day: 20,
    quote: "A disciple who truly listens to the Guru has already begun the journey home.",
    source: "Guru Purnima discourse",
  },
  {
    day: 21,
    quote: "आनंद बाहर से नहीं आता, वह तुम्हारे अंदर ही है।",
    source: "वेदान्त प्रवचन",
  },
  {
    day: 22,
    quote: "Your thoughts are not you. You are the awareness that witnesses the thoughts.",
    source: "Meditation retreat",
  },
  {
    day: 23,
    quote: "सत्य को जानने के लिए पहले यह जानना होगा कि मैं कौन हूं।",
    source: "केनोपिनषद प्रवचन",
  },
  {
    day: 24,
    quote: "Compassion without wisdom is sentiment. Wisdom without compassion is dry. Together they are liberation.",
    source: "Satsang teaching",
  },
  {
    day: 25,
    quote: "जो मन को जीत लेता है, उसने सारी दुनिया जीत ली।",
    source: "गीता प्रवचन",
  },
  {
    day: 26,
    quote: "The purpose of life is not to be happy — it is to know who you truly are. Happiness follows.",
    source: "Upanishad discourse",
  },
  {
    day: 27,
    quote: "भक्ति वह नहीं जो हम मंदिर में करते हैं — भक्ति वह है जो हर पल में होती है।",
    source: "परम पूज्य स्वामीजी",
  },
  {
    day: 28,
    quote: "Let your life itself be your prayer. Let your every action be an offering.",
    source: "Guru Purnima discourse",
  },
  {
    day: 29,
    quote: "जो दूसरों की सेवा करता है, वह भगवान की सेवा करता है।",
    source: "वेदान्त प्रवचन",
  },
  {
    day: 30,
    quote: "The seeker and the sought are not two. That discovery is moksha.",
    source: "Upanishad discourse",
  },
  {
    day: 31,
    quote: "हर दिन एक नया अवसर है — प्रभु को याद करने का, सेवा करने का, और स्वयं को जानने का।",
    source: "परम पूज्य स्वामीजी",
  },
];

const today = new Date().getDate();

const QuotesSection = () => {
  const [selected, setSelected] = useState<number | null>(today);

  const selectedQuote = quotes.find((q) => q.day === selected);

  return (
    <section
      id="quotes"
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #fdf3e3 0%, #f5e0c0 40%, #efe0c8 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-amber-700/60 text-xs tracking-[0.28em] uppercase mb-3">
            Divya Vani · दिव्य वाणी
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "#7a3a00", fontFamily: "serif" }}
          >
            Gurudev's Wisdom
          </h2>
          <p className="text-amber-800/55 text-sm mb-5 tracking-wide">
            A teaching for every day of the month — click any date to read
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-px bg-amber-700/40" />
            <span className="text-amber-600 text-lg">✦</span>
            <div className="w-16 h-px bg-amber-700/40" />
          </div>
        </motion.div>

        {/* Calendar grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-7 gap-2 mb-10"
        >
          {/* Day-of-week headers */}
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div
              key={d}
              className="text-center text-amber-700/50 text-xs tracking-wider py-1 font-medium"
            >
              {d}
            </div>
          ))}

          {/* Empty cells to offset day 1 (adjust startDay to match real month if needed) */}
          {/* startDay = 0 means day 1 is Sunday. Change to 1 for Monday, 2 for Tuesday, etc. */}
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {/* Day cells */}
          {quotes.map(({ day }) => {
            const isToday = day === today;
            const isSelected = day === selected;
            return (
              <button
                key={day}
                onClick={() => setSelected(day === selected ? null : day)}
                className={`
                  relative aspect-square rounded-xl flex flex-col items-center justify-center
                  text-sm font-medium transition-all duration-200
                  ${isSelected
                    ? "scale-105 shadow-md"
                    : "hover:scale-102 hover:shadow-sm"
                  }
                `}
                style={{
                  background: isSelected
                    ? "#a05a10"
                    : isToday
                    ? "rgba(160,90,16,0.15)"
                    : "rgba(180,100,20,0.07)",
                  color: isSelected ? "#fff8f0" : "#7a3a00",
                  border: isToday && !isSelected
                    ? "1.5px solid rgba(160,90,16,0.5)"
                    : "1px solid rgba(180,100,20,0.15)",
                }}
              >
                <span className="text-base leading-none">{day}</span>
                {/* Dot indicator */}
                <span
                  className="mt-1 w-1 h-1 rounded-full"
                  style={{
                    background: isSelected
                      ? "rgba(255,220,150,0.8)"
                      : "rgba(160,90,16,0.4)",
                  }}
                />
                {isToday && !isSelected && (
                  <span
                    className="absolute top-1 right-1.5 text-[9px] font-medium tracking-tight"
                    style={{ color: "#a05a10" }}
                  >
                    today
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Quote display */}
        <AnimatePresence mode="wait">
          {selected && selectedQuote && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl p-8 md:p-10 shadow-sm"
              style={{
                background: "rgba(255,245,230,0.85)",
                border: "1px solid rgba(180,100,20,0.2)",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* Day badge */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm"
                  style={{ background: "#a05a10", color: "#fff8f0" }}
                >
                  {selected}
                </div>
                <div>
                  <p className="text-amber-800/50 text-xs tracking-widest uppercase">
                    Day {selected}
                  </p>
                  {selected === today && (
                    <p className="text-amber-700 text-xs font-medium">
                      Today's teaching
                    </p>
                  )}
                </div>
                {/* Decorative Om */}
                <span
                  className="ml-auto text-2xl opacity-20"
                  style={{ color: "#a05a10" }}
                >
                  ॐ
                </span>
              </div>

              {/* Large quote mark */}
              <span
                className="absolute top-6 left-7 text-6xl leading-none font-serif opacity-10 select-none"
                style={{ color: "#a05a10" }}
              >
                "
              </span>

              {/* Quote text */}
              <p
                className="text-lg md:text-xl leading-relaxed mb-6 italic pl-2"
                style={{
                  color: "#4a1e00",
                  fontFamily: "serif",
                  lineHeight: "1.85",
                }}
              >
                {selectedQuote.quote}
              </p>

              {/* Source */}
              <p
                className="text-sm tracking-wide"
                style={{ color: "#a05a10" }}
              >
                — {selectedQuote.source}
              </p>

              {/* Prev / Next navigation */}
              <div className="flex gap-3 mt-8 justify-end">
                <button
                  onClick={() =>
                    setSelected((s) => (s && s > 1 ? s - 1 : 31))
                  }
                  className="px-5 py-2 rounded-full text-xs tracking-wider transition-all"
                  style={{
                    border: "1px solid rgba(160,90,16,0.3)",
                    color: "#a05a10",
                    background: "rgba(160,90,16,0.06)",
                  }}
                >
                  ← Prev day
                </button>
                <button
                  onClick={() =>
                    setSelected((s) => (s && s < 31 ? s + 1 : 1))
                  }
                  className="px-5 py-2 rounded-full text-xs tracking-wider transition-all"
                  style={{
                    border: "1px solid rgba(160,90,16,0.3)",
                    color: "#a05a10",
                    background: "rgba(160,90,16,0.06)",
                  }}
                >
                  Next day →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selected && (
          <p className="text-center text-amber-700/40 text-sm mt-4 tracking-wider">
            Select a day above to read the teaching ✦
          </p>
        )}
      </div>
    </section>
  );
};

export default QuotesSection;
