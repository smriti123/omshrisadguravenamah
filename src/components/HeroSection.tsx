import { motion } from "framer-motion";
import heroShiva from "@/assets/mandir.jpg";
import heroPortrait from "@/assets/pic5.jpg";
import heroFeet from "@/assets/h1.jpg";
import heroSignature from "@/assets/pic2.jpg";
import sign from "@/assets/gallery/sign.jpg";
import ma from "@/assets/gallery/ma.jpeg";

const lowerPhotos = [
  { src: heroFeet, label: "Lotus Feet" },
  { src: heroPortrait, label: "Swamiji", imageClassName: "object-top" },
  { src: sign, label: "Sign", containerClassName: "opacity-95" },
];

const leftLinks = [
  { label: "View Gallery", href: "#gallery" },
  { label: "Stuti", href: "#stuti" },
];

const rightLinks = [
  { label: "Watch Talks", href: "#talks" },
  { label: "Virah Stuti", href: "#shraddanjali" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[88svh] md:min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-14 pb-6 md:pt-24 md:pb-8"
      style={{
        background:
          "linear-gradient(170deg, hsl(38 78% 58%) 0%, hsl(36 78% 48%) 28%, hsl(33 80% 42%) 58%, hsl(30 82% 36%) 100%)",
      }}
    >
      {/* Soft radial light */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(600px, 88vw)",
          height: "min(600px, 88vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,234,178,0.65) 0%, rgba(255,214,128,0.3) 38%, transparent 70%)",
        }}
      />

      {/* Background photos */}
      <div className="absolute inset-0 opacity-[0.45]">
        <div className="grid grid-cols-2 h-[34%] md:h-[42%]">
          <div className="relative overflow-hidden">
            <img src={ma} alt="Mataji" className="w-full h-full object-cover object-top" />
          </div>
          <div className="relative overflow-hidden">
            <img src={heroShiva} alt="" className="w-full h-full object-cover object-center" />
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-[26%] md:h-[42%] grid grid-cols-3">
          {lowerPhotos.map((photo) => (
            <div key={photo.label} className={`relative overflow-hidden ${photo.containerClassName ?? ""}`}>
              <img
                src={photo.src}
                alt=""
                className={`w-full h-full object-cover object-center ${photo.imageClassName ?? ""}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Warm overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(170deg, rgba(242,165,40,0.24) 0%, rgba(220,138,28,0.18) 45%, rgba(191,106,8,0.26) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, hsl(38 40% 97%) 0%, transparent 100%)",
        }}
      />

      {/* ── CONTENT ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center"
      >
        {/* Circle with curved text around it */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto mb-4 md:mb-6 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64"
        >
          {/* Glow */}
          <div
            className="absolute -inset-6 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,215,130,0.44) 0%, transparent 70%)",
              filter: "blur(14px)",
            }}
          />

          {/* Curved Hindi text ring - SVG */}
          <svg
            className="absolute -inset-8 sm:-inset-10 md:-inset-12 w-[calc(100%+4rem)] h-[calc(100%+4rem)] sm:w-[calc(100%+5rem)] sm:h-[calc(100%+5rem)] md:w-[calc(100%+6rem)] md:h-[calc(100%+6rem)] pointer-events-none animate-spin-slow"
            viewBox="0 0 300 300"
          >
            <defs>
              <path
                id="textCircle"
                d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
              />
            </defs>
            <text
              fill="hsl(40 90% 96%)"
              fontSize="20"
              fontWeight="600"
              letterSpacing="4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <textPath href="#textCircle" startOffset="0%">
                ॐ श्री सद्गुरवे नमः ✦ ॐ श्री सद्गुरवे नमः ✦ ॐ श्री सद्गुरवे नमः ✦
              </textPath>
            </text>
          </svg>

          {/* Gold ring */}
          <div
            className="absolute -inset-1.5 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(246,199,82,0.9), rgba(221,160,44,0.7), rgba(246,199,82,0.9))",
            }}
          />
          {/* Circle photo */}
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
            <img
              src={heroSignature}
              alt="Swami Subodhananda ji Maharaj"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Subtitle below circle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-sm sm:text-base md:text-lg tracking-widest mb-5 md:mb-8 uppercase font-body text-center"
          style={{ color: "hsl(38 50% 88%)" }}
        >
          Param Pujya Swami Subodhananda ji Maharaj
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-3 mb-5 md:mb-8"
        >
          <div className="w-16 h-px" style={{ background: "rgba(255,220,150,0.5)" }} />
          <span style={{ color: "rgba(255,220,150,0.7)", fontSize: "16px" }}>✦</span>
          <div className="w-16 h-px" style={{ background: "rgba(255,220,150,0.5)" }} />
        </motion.div>

        {/* Navigation links - left & right of center */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="w-full"
        >
          {/* Desktop: side-by-side layout */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-6">
            {/* Left links */}
            <div className="flex justify-end gap-4">
              {leftLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105"
                  style={{
                    background: "hsl(25 50% 25%)",
                    color: "hsl(40 70% 92%)",
                    border: "1px solid rgba(160,100,30,0.4)",
                    boxShadow: "0 4px 20px rgba(80,40,0,0.3)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Center diamond */}
            <span style={{ color: "rgba(255,220,150,0.6)", fontSize: "14px" }}>✦</span>

            {/* Right links */}
            <div className="flex justify-start gap-4">
              {rightLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105"
                  style={{
                    background: "rgba(255,220,150,0.2)",
                    color: "hsl(40 80% 94%)",
                    border: "1px solid rgba(255,200,100,0.35)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: 2x2 grid */}
          <div className="md:hidden grid grid-cols-2 gap-3 max-w-xs mx-auto">
            {[...leftLinks, ...rightLinks].map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide text-center transition-all duration-200 hover:scale-105"
                style={{
                  background: i < 2 ? "hsl(25 50% 25%)" : "rgba(255,220,150,0.2)",
                  color: i < 2 ? "hsl(40 70% 92%)" : "hsl(40 80% 94%)",
                  border: i < 2 ? "1px solid rgba(160,100,30,0.4)" : "1px solid rgba(255,200,100,0.35)",
                  boxShadow: i < 2 ? "0 4px 20px rgba(80,40,0,0.3)" : "none",
                  backdropFilter: i >= 2 ? "blur(4px)" : "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(0deg, hsl(34 50% 82%) 0%, transparent 100%)" }} />
    </section>
  );
};

export default HeroSection;
