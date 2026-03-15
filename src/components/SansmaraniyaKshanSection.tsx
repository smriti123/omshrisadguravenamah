import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Video {
  title: string;
  youtubeUrl: string;
}

const videos: Video[] = [
  {
    title: "संस्मरणीय क्षण - परम पूज्य स्वामीजी के प्रश्नोत्तर सत्र - भाग १/५",
    youtubeUrl: "https://www.youtube.com/watch?v=QNnvs30ZSWI&list=PLPZZ4rJCboBWn_XKHZdo1Q5XuP77a8h1j&index=5",
  },
  {
    title: "संस्मरणीय क्षण - परम पूज्य स्वामीजी के प्रश्नोत्तर सत्र - भाग २/५",
    youtubeUrl: "https://www.youtube.com/watch?v=_lUCoYvXfK0&list=PLPZZ4rJCboBWn_XKHZdo1Q5XuP77a8h1j&index=4",
  },
  {
    title: "संस्मरणीय क्षण - परम पूज्य स्वामीजी के प्रश्नोत्तर सत्र - भाग ३/५",
    youtubeUrl: "https://www.youtube.com/watch?v=iaPj8RaSwzs&list=PLPZZ4rJCboBWn_XKHZdo1Q5XuP77a8h1j&index=3",
  },
  {
    title: "संस्मरणीय क्षण - परम पूज्य स्वामीजी के प्रश्नोत्तर सत्र - भाग ४/५",
    youtubeUrl: "https://www.youtube.com/watch?v=2XWE_dexkaY&list=PLPZZ4rJCboBWn_XKHZdo1Q5XuP77a8h1j&index=2",
  },
  {
    title: "संस्मरणीय क्षण - परम पूज्य स्वामीजी के प्रश्नोत्तर सत्र - भाग ५/५",
    youtubeUrl: "https://www.youtube.com/watch?v=ygrcevdjgnY&list=PLPZZ4rJCboBWn_XKHZdo1Q5XuP77a8h1j&index=1",
  },
];

const SansmaraniyaKshanSection = () => {
  return (
    <section id="sansmaraniya" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="संस्मरणीय क्षण"
          subtitle="परम पूज्य स्वामीजी के प्रश्नोत्तर सत्र"
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {videos.map((video, i) => (
            <motion.a
              key={video.title}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-background border border-gold/20 hover:shadow-gold hover:border-gold/40 transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                <Play size={18} className="text-secondary-foreground group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                {video.title}
              </h3>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SansmaraniyaKshanSection;
