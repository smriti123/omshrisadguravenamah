import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const bhajans = [
  { title: "Om Namah Shivaya", youtubeUrl: "#" },
  { title: "Hare Krishna Mahamantra", youtubeUrl: "#" },
  { title: "Guru Vandana", youtubeUrl: "#" },
  { title: "Raghupati Raghav Raja Ram", youtubeUrl: "#" },
  { title: "Achyutam Keshavam", youtubeUrl: "#" },
  { title: "Shri Ram Jai Ram", youtubeUrl: "#" },
  { title: "Govind Bolo Hari Gopal Bolo", youtubeUrl: "#" },
  { title: "Om Jai Jagdish Hare", youtubeUrl: "#" },
];

const BhajansSection = () => {
  return (
    <section id="bhajans" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Bhajans"
          subtitle="Soul-stirring devotional songs sung in Gurudev's satsangs"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {bhajans.map((bhajan, i) => (
            <motion.a
              key={i}
              href={bhajan.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-background border border-gold/20 hover:shadow-gold hover:border-gold/40 transition-all group"
            >
              <Music size={18} className="text-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors flex-1">
                {bhajan.title}
              </span>
              <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
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

export default BhajansSection;
