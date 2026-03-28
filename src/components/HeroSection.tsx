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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0e0500]"
    >
      {/* ── Subtle radial glow background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_40%,rgba(180,120,30,0.12),transparent_70%)]" />

      {/* ── Decorative top divider ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />

      {/* ── Content wrapper — everything centered ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-3xl mx-auto py-16"
      >

        {/* Om symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-6 w-14 h-14 rounded-full border border-amber-600/50 bg-amber-950/40 flex items-center justify-center"
          style={{ boxShadow: "0 0 24px rgba(180,120,30,0.25)" }}
        >
          <span className="text-2xl text-amber-300">ॐ</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-display text-4xl md:text-6xl font-bold text-amber-50 mb-2 leading-tight"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.8)" }}
        >
          ॐ श्री सद्गुरवे नमः
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-body text-amber-400/80 text-sm md:text-base tracking-[0.2em] mb-10 uppercase"
        >
          Pujya Swami Subodhananda ji Maharaj
        </motion.p>

        {/* ── MAIN PHOTO — large, centered, prominent ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mb-8"
        >
          {/* Glow ring behind photo */}
          <div
            className="absolute -inset-2 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(180,120,30,0.35) 0%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
          {/* Decorative border ring */}
          <div className="absolute -inset-1 rounded-full border border-amber-600/30" />

          {/* Photo circle */}
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-amber-500/50 shadow-2xl">
            <AnimatePresence mode="sync">
              <motion.img
                key={current}
                src={photos[current].src}
                alt={photos[current].label}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>
          </div>

          {/* Label below photo */}
          <motion.p
            key={`label-${current}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-3 text-amber-400/70 text-xs tracking-widest uppercase font-body"
          >
            {photos[current].label}
          </motion.p>
        </motion.div>

        {/* ── Thumbnail strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex justify-center gap-3 mb-10"
        >
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative w-11 h-11 rounded-full overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                i === current
                  ? "border-amber-400 scale-110"
                  : "border-amber-800/50 opacity-50 hover:opacity-80 hover:border-amber-600/60"
              }`}
              aria-label={photo.label}
              style={
                i === current
                  ? { boxShadow: "0 0 12px rgba(180,120,30,0.5)" }
                  : {}
              }
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover object-top"
              />
            </button>
          ))}
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600/60 to-transparent mb-8"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#gallery"
            className="px-8 py-3 rounded-lg bg-amber-700 hover:bg-amber-600 text-amber-50 font-body text-sm tracking-wide transition-all duration-200 shadow-lg"
            style={{ boxShadow: "0 4px 20px rgba(180,120,30,0.3)" }}
          >
            View Gallery
          </a>
          <a
            href="#talks"
            className="px-8 py-3 rounded-lg border border-amber-700/50 text-amber-200/80 font-body text-sm tracking-wide hover:bg-amber-950/60 hover:border-amber-600/70 transition-all duration-200"
          >
            Watch Talks
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0e0500] to-transparent" />
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-800/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
