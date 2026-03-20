import { motion } from "framer-motion";
import heroPortrait   from "@/assets/pic1.jpg";
import heroHimalaya  from "@/assets/pic4.jpg";
import heroFeet      from "@/assets/pic3.jpg";
import heroShiva     from "@/assets/pic2.jpg";
import heroSignature from "@/assets/pic5.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0900]"
    >
      {/* ── Collage mosaic background ───────────────────────────────── */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-0.5 opacity-70">

        {/* Large portrait — spans 2 rows on the left */}
        <div className="row-span-2 relative overflow-hidden">
          <img src={heroPortrait} alt="" className="w-full h-full object-cover object-top scale-105" />
        </div>

        {/* Himalaya — top centre */}
        <div className="relative overflow-hidden">
          <img src={heroHimalaya} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Shiva puja — top right */}
        <div className="relative overflow-hidden">
          <img src={heroShiva} alt="" className="w-full h-full object-cover object-top" />
        </div>

        {/* Lotus feet — bottom centre */}
        <div className="relative overflow-hidden">
          <img src={heroFeet} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Signature — bottom right */}
        <div className="relative overflow-hidden bg-white/10">
          <img src={heroSignature} alt="" className="w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* ── Dark overlay ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0900]/90 via-[#1a0900]/50 to-[#1a0900]/40" />

      {/* ── Content ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        {/* Om symbol badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-5 w-16 h-16 rounded-full border-2 border-gold/50 bg-black/30 flex items-center justify-center"
        >
          <span className="text-3xl text-amber-200">ॐ</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl font-bold text-cream mb-4 leading-tight"
        >
          ॐ श्री सद्गुरवे नमः
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-amber-200/80 text-base md:text-lg tracking-wide mb-8"
        >
          Pujya Swami Subodhananda ji Maharaj
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
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

      {/* ── Subtle bottom fade into next section ─────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
