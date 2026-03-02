import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

const talks = [
  {
    title: "The Essence of Bhagavad Gita",
    description: "A profound discourse on the timeless wisdom of the Gita.",
    youtubeUrl: "#",
  },
  {
    title: "Path of Self-Realization",
    description: "Gurudev explains the journey inward to discover the true Self.",
    youtubeUrl: "#",
  },
  {
    title: "The Power of Surrender",
    description: "Understanding the depth and beauty of surrendering to the divine will.",
    youtubeUrl: "#",
  },
  {
    title: "Living with Awareness",
    description: "How to bring mindfulness and awareness into every moment of daily life.",
    youtubeUrl: "#",
  },
  {
    title: "Dharma in Modern Times",
    description: "Applying ancient wisdom to navigate the complexities of modern life.",
    youtubeUrl: "#",
  },
  {
    title: "The Nature of the Mind",
    description: "Deep insights into how the mind works and how to transcend its limitations.",
    youtubeUrl: "#",
  },
];

const YouTubeTalksSection = () => {
  return (
    <section id="talks" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Talks & Discourses"
          subtitle="An indexed collection of Gurudev's YouTube talks for easy reference"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {talks.map((talk, i) => (
            <motion.a
              key={i}
              href={talk.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
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
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary flex-shrink-0" />
            </motion.a>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body text-sm mt-8 italic">
          Replace the # links with actual YouTube URLs
        </p>
      </div>
    </section>
  );
};

export default YouTubeTalksSection;
