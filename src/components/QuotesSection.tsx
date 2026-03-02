import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const quotes = [
  {
    text: "Surrender to the divine, and the divine will take care of everything.",
    context: "From a morning Satsang",
  },
  {
    text: "The mind that is still reflects the truth, like a calm lake mirrors the sky.",
    context: "Discourse on meditation",
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

const QuotesSection = () => {
  return (
    <section id="quotes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Gurudev's Wisdom"
          subtitle="Timeless teachings that illuminate the path of dharma"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
