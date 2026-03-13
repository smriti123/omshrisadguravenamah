import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const quotes = [
  {
    text: "जीवभाव का अनुभव इस प्रकार होता है कि मैं कर्म का कर्ता हूं, मेरे बिना यह कर्म नहीं होता, इसलिए इसका श्रेय और फल मुझे मिलना चाहिए। उसमें कोई बाधा डालता है तो बुरा लगता है। भगवान कहते हैं कि तुम इन वृत्तियों से निकल नहीं पाते तो कोई बात नहीं। अपने को भक्त बना दो, मेरा सेवक बनकर कर्म करो। प्रभु की प्रीति के लिया सारी चेष्टाएँ होए यह प्रयास करो। यह विश्वास रखो कि प्रभु के सेवक का कभी अहित नहीं हो सकता।......",
    context: "परम पूज्य स्वामीजी",
  },
  {
    text: "आत्मदेव को छोड़कर कहीं भी अगर जीवन का समाधान दिखता है तो वह एक मिथ्या प्रत्यय है, गलत समझ है। और जब तक यह गलत समझ हमारे चित्त से निकल न जाए, तो बहिर्मुखता कैसे जाएगी? समाधान अगर प्रसिद्धि में दिखता है तो प्रसिद्ध लोगों की हालत देख लो। उस रस्ते पे चढ़ने से पहले उन्हें देख लिया जाए जो उस रस्ते पे चल रहें हैं। जगत में अपने कर्तव्य निभाते जाओ पर जगत में अपना समाधान मत खोजो।...",
    context: "केनोपनिषद २००६ प्रवचन-परम पूज्य स्वामीजी",
  },
  {
    text: "Service to others is the highest form of worship.",
    context: "On selfless service",
  },
  {
    text: "Love is not a feeling, it is your very existence.",
    context: "Bhagavad Gita commentary",
  },
];

const ITEMS_PER_PAGE = 4;

const QuotesSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(quotes.length / ITEMS_PER_PAGE);
  const currentQuotes = quotes.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section id="quotes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Gurudev's Wisdom"
          subtitle="Timeless teachings that illuminate the path of dharma"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {currentQuotes.map((q, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative p-8 rounded-xl bg-card border border-gold/20 shadow-gold"
              >
                <span className="absolute top-4 left-6 text-gold/30 text-5xl font-display">"</span>
                <p className="font-body text-foreground text-lg italic leading-relaxed mb-4 relative z-10">
                  {q.text}
                </p>
                <cite className="font-body text-sm text-muted-foreground not-italic">
                  — {q.context}
                </cite>
              </motion.blockquote>
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

export default QuotesSection;
