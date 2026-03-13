import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  "All",
  "Bhagwat Geeta",
  "Ramayana",
  "Bhagwatam",
  "Upnishad",
  "Vedant",
  "Others",
] as const;

type Category = (typeof categories)[number];

interface Talk {
  title: string;
  description: string;
  youtubeUrl: string;
  category: Category;
}

const talks: Talk[] = [
  {
    title: "The Essence of Bhagavad Gita",
    description: "A profound discourse on the timeless wisdom of the Gita.",
    youtubeUrl: "#",
    category: "Bhagwat Geeta",
  },
  {
    title: "Path of Self-Realization",
    description: "Gurudev explains the journey inward to discover the true Self.",
    youtubeUrl: "#",
    category: "Vedant",
  },
  {
    title: "The Power of Surrender",
    description: "Understanding the depth and beauty of surrendering to the divine will.",
    youtubeUrl: "#",
    category: "Bhagwat Geeta",
  },
  {
    title: "Living with Awareness",
    description: "How to bring mindfulness and awareness into every moment of daily life.",
    youtubeUrl: "#",
    category: "Upnishad",
  },
  {
    title: "Dharma in Modern Times",
    description: "Applying ancient wisdom to navigate the complexities of modern life.",
    youtubeUrl: "#",
    category: "Ramayana",
  },
  {
    title: "The Nature of the Mind",
    description: "Deep insights into how the mind works and how to transcend its limitations.",
    youtubeUrl: "#",
    category: "Bhagwatam",
  },
];

const YouTubeTalksSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? talks : talks.filter((t) => t.category === active);

  return (
    <section id="talks" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Talks & Discourses"
          subtitle="An indexed collection of Gurudev's YouTube talks for easy reference"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all border ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-gold"
                  : "bg-card text-muted-foreground border-gold/20 hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filtered.length === 0 ? (
                <p className="text-center text-muted-foreground font-body py-12 italic">
                  No talks in this category yet. More coming soon!
                </p>
              ) : (
                filtered.map((talk, i) => (
                  <motion.a
                    key={talk.title}
                    href={talk.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex items-center gap-4 p-5 rounded-xl bg-card border border-gold/20 hover:shadow-gold hover:border-gold/40 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Play size={20} className="text-secondary-foreground group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {talk.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground truncate">
                        {talk.description}
                      </p>
                    </div>
                    <span className="hidden sm:inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-body">
                      {talk.category}
                    </span>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary flex-shrink-0" />
                  </motion.a>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default YouTubeTalksSection;
