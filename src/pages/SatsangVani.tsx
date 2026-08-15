import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight, ExternalLink, Home } from "lucide-react";
import { talks, type Talk } from "@/components/YouTubeTalksSection";

type Cat = Talk["category"];

const CATEGORY_ORDER: { key: Cat; hi: string }[] = [
  { key: "Ramayana", hi: "रामायण" },
  { key: "Bhagwat Geeta", hi: "भगवद्गीता" },
  { key: "Bhagwatam", hi: "श्रीमद्भागवतम्" },
  { key: "Upanishads", hi: "उपनिषद्" },
  { key: "Prakaran Granth", hi: "प्रकरण ग्रन्थ" },
  { key: "Others", hi: "अन्य" },
];

const SatsangVani = () => {
  const [active, setActive] = useState<Cat | null>(null);

  const list = active ? talks.filter((t) => t.category === active) : [];
  const activeHi = CATEGORY_ORDER.find((c) => c.key === active)?.hi ?? "";

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-2xl px-4 pb-24 pt-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <p className="font-display text-3xl text-primary">ॐ</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            सत्संग वाणी
          </h1>
          <p className="mt-3 font-body text-base text-muted-foreground">
            परम पूज्य स्वामी सुबोधानन्दजी के प्रवचन
          </p>
        </header>

        <AnimatePresence mode="wait">
          {!active ? (
            <motion.div
              key="cats"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {CATEGORY_ORDER.map(({ key, hi }) => {
                const count = talks.filter((t) => t.category === key).length;
                if (!count) return null;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setActive(key);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-card px-5 py-6 text-left transition-all hover:border-gold/60 hover:shadow-gold"
                  >
                    <span className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                      {hi}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="font-body text-xl text-primary">{count}</span>
                      <ChevronRight className="text-primary" size={26} />
                    </span>
                  </button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => {
                  setActive(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="mb-6 flex items-center gap-3 font-display text-2xl text-primary"
              >
                <ArrowLeft size={26} />
                {activeHi}
              </button>

              <div className="space-y-3">
                {list.map((talk) => (
                  <a
                    key={talk.title + talk.youtubeUrl}
                    href={talk.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-3 rounded-2xl border border-gold/30 bg-card px-5 py-5 transition-all hover:border-gold/60 hover:shadow-gold sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="min-w-0">
                      <span className="block font-display text-xl font-semibold leading-snug text-foreground">
                        {talk.title}
                      </span>
                      {(talk.location || talk.year) && (
                        <span className="mt-1 block font-body text-sm text-muted-foreground">
                          {[talk.location, talk.year].filter(Boolean).join(" · ")}
                        </span>
                      )}
                    </span>
                    <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary px-5 py-3 font-body text-base text-primary">
                      YouTube पर सुनें
                      <ExternalLink size={18} />
                    </span>
                  </a>
                ))}
              </div>

              <p className="mt-8 rounded-2xl bg-secondary px-5 py-5 text-center font-body text-base text-secondary-foreground">
                YouTube पर खुलेगा — वहाँ आप Like और Comment कर सकते हैं।
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-base text-muted-foreground hover:text-primary"
          >
            <Home size={18} />
            मुख्य पृष्ठ
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SatsangVani;