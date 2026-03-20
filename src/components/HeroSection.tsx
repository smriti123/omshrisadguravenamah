import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroPortrait   from "@/assets/pic1.jpg";
import heroHimalaya  from "@/assets/pic2.jpg";
import heroFeet      from "@/assets/pic4.jpg";
import heroShiva     from "@/assets/pic5.jpg";
import heroSignature from "@/assets/pic3.jpg";

const photos = [
  { src: heroPortrait,   label: "Swamiji" },
  { src: heroHimalaya,  label: "Himalaya" },
  { src: heroShiva,     label: "Shiva Puja" },
  { src: heroFeet,      label: "Lotus Feet" },
  { src: heroSignature, label: "Signature" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0900]"
    >
      {/* ── Full-screen background — fades between photos ── */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={photos[current].src}
          alt=""
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.65, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>

      {/* ── Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#140500]/90 via-[#140500]/45 to-[#140500]/30" />

      {/* ── Content ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-2xl w-full"
      >
        {/* Pulsing Om ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-5 w-16 h-16 rounded-full border-2 border-gold/60 bg-black/35 flex items-center justify-center animate-pulse"
        >
          <span className="text-3xl text-amber-200">ॐ</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl font-bold text-cream mb-4 leading-tight"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
        >
          ॐ श्री सद्गुरवे नमः
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-amber-200/80 text-base md:text-lg tracking-widest mb-8"
        >
          Pujya Swami Subodhananda ji Maharaj
        </motion.p>

        {/* Photo circles — click to change bg */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex justify-center gap-3 mb-8"
        >
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                i === current
                  ? "border-amber-300 scale-110 shadow-lg"
                  : "border-gold/40 opacity-60 hover:opacity-90 hover:border-gold/70"
              }`}
              aria-label={photo.label}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover object-top"
              />
            </button>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#gallery"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm hover:bg-primary/90 transition-colors shadow-gold"
          >
            View Gallery
          </a>
          <a
            href="#talks"
            className="px-8 py-3 rounded-lg border border-gold/40 text-cream font-body text-sm hover:bg-cream/10 transition-colors"
          >
            Watch Talks
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
