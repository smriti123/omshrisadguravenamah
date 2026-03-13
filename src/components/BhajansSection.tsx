import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";
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

interface Bhajan {
  title: string;
  youtubeUrl: string;
  category: Category;
}

const bhajans: Bhajan[] = [
  { title: "श्री कृष्ण गोविन्द हरे मुरारे", youtubeUrl: "https://www.youtube.com/watch?v=JCFpv5ueKPE&list=PLPZZ4rJCboBXg6K2w_2v6_0kqlcYhmjVO&index=4", category: "Bhagwatam" },
  { title: "Hare Krishna Mahamantra", youtubeUrl: "#", category: "Bhagwatam" },
  { title: "Guru Vandana", youtubeUrl: "#", category: "Others" },
  { title: "Raghupati Raghav Raja Ram", youtubeUrl: "#", category: "Ramayana" },
  { title: "Achyutam Keshavam", youtubeUrl: "#", category: "Bhagwatam" },
  { title: "Shri Ram Jai Ram", youtubeUrl: "#", category: "Ramayana" },
  { title: "Govind Bolo Hari Gopal Bolo", youtubeUrl: "#", category: "Bhagwatam" },
  { title: "Om Jai Jagdish Hare", youtubeUrl: "#", category: "Others" },
];

const BhajansSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? bhajans : bhajans.filter((b) => b.category === active);

  return (
    <section id="bhajans" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Bhajans"
          subtitle="Soul-stirring devotional songs sung in Gurudev's satsangs"
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
                  : "bg-background text-muted-foreground border-gold/20 hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {filtered.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground font-body py-12 italic">
                No bhajans in this category yet. More coming soon!
              </p>
            ) : (
              filtered.map((bhajan, i) => (
                <motion.a
                  key={bhajan.title}
                  href={bhajan.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-gold/20 hover:shadow-gold hover:border-gold/40 transition-all group"
                >
                  <Music size={18} className="text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors flex-1">
                    {bhajan.title}
                  </span>
                  <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </motion.a>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BhajansSection;
