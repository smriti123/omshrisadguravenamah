import { useState } from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────
// STEP 1 — Import your quote images
// Put your WhatsApp quote images in src/assets/quotes/
// Name them q1.jpg, q2.jpg ... q9.jpg (and so on)
// Each image already has the quote text + Swamiji's photo
// ─────────────────────────────────────────────────────────
import q6 from "@/assets/q6.jpg";
import q7 from "@/assets/q7.jpg";
import q8 from "@/assets/q8.jpg";
import q9 from "@/assets/q9.jpg";
// Add more as you get them:
// import q10 from "@/assets/quotes/q10.jpg";

// ─────────────────────────────────────────────────────────
// STEP 2 — Map each day to its quote image + short label
// label = short preview text shown on hover in calendar
// ─────────────────────────────────────────────────────────
const quotes: { day: number; img: string; label: string }[] = [
  
  { day: 6,  img: q6, label: "राम विमुख और संपत्ति" },
  { day: 7,  img: q7, label: "महापुरुष का संग" },
  { day: 8,  img: q8, label: "निर्विकल्पः" },
  { day: 9,  img: q9, label: "चित्त में शांति" },
  // Add more days as you upload images:
  // { day: 10, img: q10, label: "Your short label" },
];

// How many empty cells before day 1 (0=Sun,1=Mon,2=Tue,3=Wed...)
const MONTH_START_OFFSET = 2;

const today = new Date().getDate();

const QuotesSection = () => {
  const [selectedDay, setSelectedDay] = useState<number>(today <= 9 ? today : 1);

  const selectedQuote = quotes.find((q) => q.day === selectedDay);

  const goTo = (day: number) => {
    // Only allow days that have a quote image
    if (quotes.find((q) => q.day === day)) {
      setSelectedDay(day);
      setTimeout(() => {
        document.getElementById("quote-display")?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 50);
    }
  };

  return (
    <section
      id="quotes"
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg,#fdf3e3 0%,#f5e0c0 40%,#efe0c8 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
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
            A teaching for every day — click any date to read
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-px bg-amber-700/40" />
            <span className="text-amber-600 text-lg">✦</span>
            <div className="w-16 h-px bg-amber-700/40" />
          </div>
        </div>

        {/* ── Calendar grid ── */}
        <div
          className="mb-8 rounded-2xl p-4 md:p-6"
          style={{
            background: "rgba(255,245,230,0.6)",
            border: "1px solid rgba(180,100,20,0.15)",
          }}
        >
          {/* Weekday headers */}
          <div className="grid grid-cols-7 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div
                key={d}
                className="text-center text-xs tracking-wider py-2 font-medium"
                style={{ color: "#a05a10" }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-1.5">
            {/* Offset */}
            {Array.from({ length: MONTH_START_OFFSET }).map((_, i) => (
              <div key={`e${i}`} />
            ))}

            {/* Days 1–31 */}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const hasQuote   = !!quotes.find((q) => q.day === day);
              const isSelected = day === selectedDay;
              const isToday    = day === today;
              const q          = quotes.find((q) => q.day === day);

              return (
                <div key={day} className="relative group">
                  <button
                    onClick={() => goTo(day)}
                    disabled={!hasQuote}
                    className="relative w-full flex flex-col items-center justify-center rounded-xl transition-all duration-150 active:scale-95"
                    style={{
                      aspectRatio: "1",
                      background: isSelected
                        ? "#a05a10"
                        : isToday && hasQuote
                        ? "rgba(160,90,16,0.18)"
                        : hasQuote
                        ? "rgba(180,100,20,0.10)"
                        : "rgba(180,100,20,0.03)",
                      border: isSelected
                        ? "2px solid #7a3a00"
                        : isToday && hasQuote
                        ? "1.5px solid rgba(160,90,16,0.5)"
                        : hasQuote
                        ? "1px solid rgba(180,100,20,0.2)"
                        : "1px solid rgba(180,100,20,0.06)",
                      color: isSelected
                        ? "#fff8f0"
                        : hasQuote
                        ? "#7a3a00"
                        : "#c4a882",
                      cursor: hasQuote ? "pointer" : "default",
                      opacity: hasQuote ? 1 : 0.4,
                    }}
                  >
                    <span className="text-sm md:text-base font-medium leading-none">
                      {day}
                    </span>
                    {hasQuote && (
                      <span
                        className="mt-1 w-1 h-1 rounded-full"
                        style={{
                          background: isSelected
                            ? "rgba(255,220,150,0.9)"
                            : "rgba(160,90,16,0.5)",
                        }}
                      />
                    )}
                    {isToday && hasQuote && !isSelected && (
                      <span
                        className="absolute top-0.5 right-1 text-[8px] font-bold"
                        style={{ color: "#a05a10" }}
                      >
                        ●
                      </span>
                    )}
                  </button>

                  {/* Hover tooltip with label */}
                  {hasQuote && q && !isSelected && (
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10"
                      style={{
                        background: "#7a3a00",
                        color: "#fff8f0",
                        fontSize: "10px",
                      }}
                    >
                      {q.label}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-4 justify-center">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded" style={{ background: "rgba(180,100,20,0.10)", border: "1px solid rgba(180,100,20,0.2)" }} />
              <span className="text-xs" style={{ color: "#a05a10" }}>Has quote</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded" style={{ background: "#a05a10" }} />
              <span className="text-xs" style={{ color: "#a05a10" }}>Selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded opacity-40" style={{ background: "rgba(180,100,20,0.03)", border: "1px solid rgba(180,100,20,0.06)" }} />
              <span className="text-xs" style={{ color: "#a05a10" }}>Coming soon</span>
            </div>
          </div>
        </div>

        {/* ── Quote image display ── */}
        <div id="quote-display">
          {selectedQuote ? (
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ border: "1px solid rgba(180,100,20,0.22)" }}
            >
              {/* Day badge bar */}
              <div
                className="flex items-center justify-between px-6 py-3"
                style={{ background: "#a05a10" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: "rgba(255,255,255,0.2)", color: "#fff8f0" }}
                  >
                    {selectedDay}
                  </span>
                  <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,240,200,0.8)" }}>
                    Day {selectedDay} · {selectedQuote.label}
                    {selectedDay === today && " · Today's teaching"}
                  </span>
                </div>
                <span className="text-xl opacity-30 select-none" style={{ color: "#fff8f0" }}>ॐ</span>
              </div>

              {/* The quote image — full width, just like your WhatsApp images */}
              <img
                src={selectedQuote.img}
                alt={selectedQuote.label}
                className="w-full object-contain"
                style={{ maxHeight: "70vh", background: "#fdf3e3" }}
              />

              {/* Prev / Next */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ background: "rgba(255,245,230,0.95)", borderTop: "1px solid rgba(180,100,20,0.12)" }}
              >
                <button
                  onClick={() => {
                    const prev = [...quotes].reverse().find((q) => q.day < selectedDay);
                    if (prev) goTo(prev.day);
                  }}
                  disabled={!quotes.find((q) => q.day < selectedDay)}
                  className="px-5 py-2 rounded-full text-xs tracking-wider transition-all disabled:opacity-30"
                  style={{
                    border: "1px solid rgba(160,90,16,0.3)",
                    color: "#a05a10",
                    background: "rgba(160,90,16,0.06)",
                  }}
                >
                  ← Prev
                </button>
                <span className="text-xs" style={{ color: "rgba(160,90,16,0.5)" }}>
                  {quotes.indexOf(selectedQuote) + 1} / {quotes.length} quotes
                </span>
                <button
                  onClick={() => {
                    const next = quotes.find((q) => q.day > selectedDay);
                    if (next) goTo(next.day);
                  }}
                  disabled={!quotes.find((q) => q.day > selectedDay)}
                  className="px-5 py-2 rounded-full text-xs tracking-wider transition-all disabled:opacity-30"
                  style={{
                    border: "1px solid rgba(160,90,16,0.3)",
                    color: "#a05a10",
                    background: "rgba(160,90,16,0.06)",
                  }}
                >
                  Next →
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-10" style={{ color: "rgba(160,90,16,0.4)" }}>
              <p className="text-sm tracking-wider">Select a highlighted day to read the teaching ✦</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
