import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import heroShiva from "@/assets/mandir.jpg";
import heroPortrait from "@/assets/pic5.jpg";
import heroFeet from "@/assets/h1.jpg";
import heroSignature from "@/assets/pic2.jpg";
import sign from "@/assets/gallery/sign.jpg";
import ma from "@/assets/gallery/ma.jpeg";

const leftLinks = [
  { label: "Leela", href: "#leela" },
  { label: "View Charitra Jhalak", href: "#gallery" },
  { label: "Watch Pravachan", href: "#talks" },
];

const rightLinks = [
  { label: "Bhaajan", href: "#bhajans" },
  { label: "Stuti", href: "#stuti" },
  { label: "Virah Stuti", href: "#shraddanjali" },
];

const linkStyle: CSSProperties = {
  background: "rgba(86,38,6,0.42)",
  color: "hsl(40 85% 95%)",
  border: "1px solid rgba(255,202,121,0.4)",
};

const dedicationLines = [
  "हे शंकर-रूप! हे वेदांत-मूर्ति!",
  "हे ब्रह्मसूत्र, उपनिषद, भगवद्गीता, रामायण व भागवत के मूर्तिमान स्वरूप!",
  "मेरे चित्त के परमाश्रय!",
  "आध्यात्मिक जगत के किसी भी प्रश्न का उत्तर आपके हस्ताक्षर के बिना अपूर्ण रहेगा...",
  "ॐ पूर्णमदः पूर्णमिदं...",
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92svh] md:min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-2 md:pt-24 md:pb-4"
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

        {/* Top row: mobile = mandir full width; desktop = ma + mandir */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[44%] md:h-[42%]">
          {/* ma — desktop only */}
          <div className="hidden md:block relative overflow-hidden">
            <img
              src={ma}
              alt="Mataji"
              className="w-full h-full object-cover"
              style={{ objectPosition: "25% 0%" }}
            />
          </div>
          {/* Mandir — full width on mobile, centered so not right-clipped */}
          <div className="relative overflow-hidden">
            <img
              src={heroShiva}
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 0%" }}
            />
          </div>
        </div>

        {/* Bottom row: 2 cols on mobile (sign hidden), 3 cols on md+ */}
        <div className="absolute left-0 right-0 bottom-0 h-[30%] md:h-[42%] grid grid-cols-2 md:grid-cols-3">
          <div className="relative overflow-hidden">
            <img
              src={heroFeet}
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: "left top" }}
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src={heroPortrait}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="hidden md:block relative overflow-hidden">
            <img
              src={sign}
              alt=""
              className="w-full h-full object-cover object-center"
              style={{ filter: "contrast(1.18) saturate(1.08) brightness(1.05)" } as CSSProperties}
            />
          </div>
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
        className="relative z-10 w-full max-w-6xl px-2 md:px-4 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative w-full mb-0 md:mb-6"
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-2 md:gap-12 items-center px-1 md:px-0">

            {/* Left links */}
            <div className="flex flex-col items-end gap-[5px] md:gap-2 md:pr-8 pr-1">
              {leftLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2.5 py-[5px] md:px-4 md:py-2 rounded text-[10px] md:text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105 text-center whitespace-nowrap"
                  style={linkStyle}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Circle */}
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="relative mx-auto w-[120px] h-[120px] sm:w-40 sm:h-40 md:w-56 md:h-56"
              >
                {/* Glow */}
                <div
                  className="absolute -inset-6 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(255,215,130,0.44) 0%, transparent 70%)",
                    filter: "blur(14px)",
                  }}
                />

                {/* Rotating Sanskrit text ring */}
                <svg
                  className="absolute -inset-7 sm:-inset-8 md:-inset-12 w-[calc(100%+3.5rem)] h-[calc(100%+3.5rem)] sm:w-[calc(100%+4rem)] sm:h-[calc(100%+4rem)] md:w-[calc(100%+6rem)] md:h-[calc(100%+6rem)] pointer-events-none"
                  viewBox="0 0 300 300"
                  style={{ animation: "spinRing 20s linear infinite", transformOrigin: "center" }}
                >
                  <defs>
                    <path id="textCircle" d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
                    <style>{`@keyframes spinRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                  </defs>
                  <text fill="hsl(40 90% 96%)" fontSize="16" fontWeight="600" letterSpacing="2.5" className="md:hidden" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    <textPath href="#textCircle" startOffset="0%">
                      ॐ श्री सद्गुरवे नमः ✦ ॐ श्री सद्गुरवे नमः ✦ ॐ श्री सद्गुरवे नमः ✦
                    </textPath>
                  </text>
                  <text fill="hsl(40 90% 96%)" fontSize="13" fontWeight="600" letterSpacing="3" className="hidden md:block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
                    style={{ filter: "contrast(1.1) saturate(1.06)" }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right links */}
            <div className="flex flex-col items-start gap-[5px] md:gap-2 md:pl-8 pl-1">
              {rightLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2.5 py-[5px] md:px-4 md:py-2 rounded text-[10px] md:text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105 text-center whitespace-nowrap"
                  style={{
                    background: "rgba(255,229,175,0.18)",
                    color: "hsl(40 85% 95%)",
                    border: "1px solid rgba(255,202,121,0.4)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Subtitle — one line gap above */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-[9px] sm:text-base md:text-lg tracking-widest mt-6 sm:mt-8 md:mt-4 mb-0 uppercase font-body text-center leading-tight"
          style={{ color: "hsl(38 50% 88%)" }}
        >
          Param Pujya Swami Subodhananda ji Maharaj
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-4 md:mt-6 w-[92%] max-w-4xl rounded-2xl border border-amber-100/35 bg-amber-100/10 backdrop-blur-[2px] p-3 sm:p-4 md:p-6 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <div className="shrink-0">
              <img
                src={heroSignature}
                alt="पूज्य गुरुदेव का चित्र"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-amber-100/70 shadow-lg"
              />
            </div>
            <div className="text-center md:text-left space-y-1 sm:space-y-2">
              {dedicationLines.map((line) => (
                <p
                  key={line}
                  className="font-serif text-[11px] sm:text-sm md:text-base leading-relaxed"
                  style={{ color: "hsl(40 80% 95%)" }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: "linear-gradient(0deg, hsl(34 50% 82%) 0%, transparent 100%)" }}
      />
    </section>
  );
};

export default HeroSection;
