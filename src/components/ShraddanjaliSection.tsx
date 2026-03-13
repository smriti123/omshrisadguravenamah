import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const tributes = [
  {
    name: "Devotee",
    message:
      "Gurudev's grace transformed my life. His words are not mere teachings—they are living experiences that continue to guide me every day.",
  },
  {
    name: "Devotee",
    message:
      "In Gurudev's presence, all worries dissolved. His compassion knew no bounds, and his love was unconditional.",
  },
  {
    name: "Devotee",
    message:
      "Every moment spent at Gurudev's feet was a blessing. His teachings are the foundation upon which our spiritual lives are built.",
  },
  {
    name: "Devotee",
    message:
      "Gurudev showed us that divinity resides within every soul. His vision of universal love continues to inspire generations.",
  },
];

const ITEMS_PER_PAGE = 4;

const ShraddanjaliSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(tributes.length / ITEMS_PER_PAGE);
  const current = tributes.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section id="shraddanjali" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Shraddanjali"
          subtitle="Heartfelt tributes from devotees whose lives were touched by Gurudev's grace"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {current.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-background border border-gold/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-lg">
                    🙏
                  </div>
                  <span className="font-display text-lg text-foreground font-semibold">
                    {t.name}
                  </span>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed italic">
                  "{t.message}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 rounded-full border border-gold/20 text-muted-foreground hover:text-foreground hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-8 h-8 rounded-full text-sm font-body font-medium transition-all ${
                    page === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-gold/20 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-full border border-gold/20 text-muted-foreground hover:text-foreground hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShraddanjaliSection;
