import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import swamijiImage from "@/assets/swamiji-photo.jpg";

const lines = [
  "हे शंकर-रूप!",
  "हे वेदांत-मूर्ति!",
  "हे ब्रह्मसूत्र, उपनिषद, भगवद्गीता, रामायण व भागवत के मूर्तिमान स्वरूप!",
  "हमारे चित्त के परमाश्रय!",
  "आध्यात्मिक जगत के किसी भी प्रश्न का उत्तर आपके हस्ताक्षर के बिना अपूर्ण रहेगा...",
  "ॐ पूर्णमदः पूर्णमिदं...",
];

const HridaySamraatSection = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const totalLines = useMemo(() => lines.length, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisibleCount((current) => {
        if (current >= totalLines) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 1700);

    return () => window.clearInterval(timer);
  }, [totalLines]);

  return (
    <section id="hriday-samraat" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Hriday-Samraat"
          subtitle="A humble offering at the lotus feet of Pujya Swamiji"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(139,69,19,0.22)] border border-primary/20"
          >
            <img
              src={swamijiImage}
              alt="Pujya Swamiji"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-2xl p-6 md:p-8 lg:p-10 border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-gold/10 shadow-[0_16px_40px_rgba(133,70,18,0.14)]"
          >
            <div className="space-y-4 text-center md:text-left">
              <AnimatePresence>
                {lines.slice(0, visibleCount).map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: index === 0 ? 0.08 : 0 }}
                    className="font-display text-xl md:text-2xl leading-relaxed text-foreground"
                  >
                    {line}
                  </motion.p>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HridaySamraatSection;
