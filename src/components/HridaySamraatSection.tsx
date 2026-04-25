import { useEffect, useMemo, useRef, useState } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  const handleAudioToggle = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section id="hriday-samraat" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Hriday-Samraat" />

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
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleAudioToggle}
                className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 font-semibold text-primary hover:bg-primary/20 transition-colors"
                aria-label={isPlaying ? "Pause Hey Shankar Roop music" : "Play Hey Shankar Roop music"}
              >
                <span className="text-lg" aria-hidden="true">
                  {isPlaying ? "⏸️" : "▶️"}
                </span>
                <span>{isPlaying ? "Pause Hey Shankar Roop" : "Play Hey Shankar Roop"}</span>
              </button>

              <div className="flex items-end gap-1.5 h-7" aria-hidden="true">
                {[0, 1, 2, 3].map((bar) => (
                  <motion.span
                    key={bar}
                    className="w-1.5 rounded-full bg-primary/70"
                    animate={{ height: isPlaying ? [8, 26, 10, 22, 8] : [8, 8, 8] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: bar * 0.12,
                    }}
                  />
                ))}
              </div>
            </div>

            <audio
              ref={audioRef}
              src="/hey-shankar-roop.mp3"
              preload="none"
              onEnded={() => setIsPlaying(false)}
            />

            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence>
                {lines.slice(0, visibleCount).map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: index === 0 ? 0.08 : 0 }}
                    className="font-display text-2xl md:text-3xl lg:text-4xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-700 to-orange-700 drop-shadow-[0_2px_10px_rgba(161,98,7,0.20)]"
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
