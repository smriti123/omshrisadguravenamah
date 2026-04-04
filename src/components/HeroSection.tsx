import type { CSSProperties } from "react";
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
  {
    src: sign,
    label: "Sign",
    containerClassName: "opacity-100",
    imageClassName: "object-contain md:object-cover p-1 md:p-0",
    imageStyle: {
      filter: "contrast(1.18) saturate(1.08) brightness(1.05)",
      imageRendering: "-webkit-optimize-contrast",
    } as CSSProperties,
  },
];

const leftLinks = [
  { label: "Journey", href: "#journey" },
  { label: "View Gallery", href: "#gallery" },
  { label: "Watch Talks", href: "#talks" },
];

const rightLinks = [
  { label: "Bhaajan", href: "#bhajans" },
  { label: "Stuti", href: "#stuti" },
  { label: "Virah Stuti", href: "#shraddanjali" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92svh] md:min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-16 pb-7 md:pt-24 md:pb-8"
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
        <div className="grid grid-cols-2 h-[30%] md:h-[42%]">
          <div className="relative overflow-hidden">
            <img src={ma} alt="Mataji" className="w-full h-full object-cover object-top" />
          </div>
          <div className="relative overflow-hidden">
            <img src={heroShiva} alt="" className="w-full h-full object-cover object-top md:object-center" />
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-[30%] md:h-[42%] grid grid-cols-3">
          {lowerPhotos.map((photo) => (
            <div key={photo.label} className={`relative overflow-hidden ${photo.containerClassName ?? ""}`}>
              <img
                src={photo.src}
                alt=""
                className={`w-full h-full object-cover object-center ${photo.imageClassName ?? ""}`}
                style={photo.imageStyle}
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
        className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center"
      >
        {/* Orange bar with side links and centered circle */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative w-full px-3 py-5 sm:px-4 md:px-8 md:py-8 mb-6"
        >
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center">
            <div className="hidden md:flex items-center justify-end gap-3 md:pr-8">
              {leftLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105"
                  style={{
                    background: "rgba(86,38,6,0.42)",
                    color: "hsl(40 85% 95%)",
                    border: "1px solid rgba(255,202,121,0.4)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Circle with curved text around it */}
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="relative mx-auto w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56"
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
                  className="absolute -inset-6 sm:-inset-8 md:-inset-12 w-[calc(100%+3rem)] h-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] sm:h-[calc(100%+4rem)] md:w-[calc(100%+6rem)] md:h-[calc(100%+6rem)] pointer-events-none"
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
                    fontSize="15.5"
                    fontWeight="600"
                    letterSpacing="4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    <textPath href="#textCircle" startOffset="0%" textLength="754" lengthAdjust="spacing">
                      ॐ श्री सद्गुरवे नमः ✦ ॐ श्री सद्गुरवे नमः ✦ ॐ श्री सद्गुरवे नमः ✦ ॐ श्री सद्गुरवे नमः ✦ ॐ श्री सद्गुरवे नमः ✦
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

            <div className="hidden md:flex items-center justify-start gap-3 md:pl-8">
              {rightLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105"
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

          {/* Mobile links */}
          <div className="md:hidden mt-4 grid grid-cols-2 gap-2 max-w-md mx-auto">
            {[...leftLinks, ...rightLinks].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-2 rounded-lg text-[11px] sm:text-sm font-medium tracking-wide text-center transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(86,38,6,0.42)",
                  color: "hsl(40 85% 95%)",
                  border: "1px solid rgba(255,202,121,0.4)",
                }}
              >
                {link.label}
              </a>
            ))}
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

      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(0deg, hsl(34 50% 82%) 0%, transparent 100%)" }} />
    </section>
  );
};

export default HeroSection;
