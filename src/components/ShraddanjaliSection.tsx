import { motion } from "framer-motion";
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

const ShraddanjaliSection = () => {
  return (
    <section id="shraddanjali" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Shraddanjali"
          subtitle="Heartfelt tributes from devotees whose lives were touched by Gurudev's grace"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tributes.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
        </div>
      </div>
    </section>
  );
};

export default ShraddanjaliSection;
