import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroPortrait  from "@/assets/pic1.jpg";
import heroHimalaya from "@/assets/pic2.jpg";
import heroFeet     from "@/assets/pic4.jpg";
import heroShiva    from "@/assets/pic5.jpg";

const photos = [
  { src: heroPortrait,  label: "Swamiji" },
  { src: heroHimalaya, label: "Himalaya" },
  { src: heroShiva,    label: "Shiva Puja" },
  { src: heroFeet,     label: "Lotus Feet" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % photos.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #c97b10 0%, #e8950a 25%, #f5a800 50%, #e08800 75%, #b86800 100%)" }}
    >
      {/* ── Divine ray burst (CSS conic gradient) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 42%,
            transparent 0deg,
            rgba(255,245,180,0.18) 4deg,
            transparent 8deg,
            rgba(255,245,180,0.14) 12deg,
            transparent 16deg,
            rgba(255,245,180,0.20) 20deg,
            transparent 24deg,
            rgba(255,245,180,0.12) 28deg,
            transparent 32deg,
            rgba(255,245,180,0.18) 36deg,
            transparent 40deg,
            rgba(255,245,180,0.16) 44deg,
            transparent 48deg,
            rgba(255,245,180,0.22) 52deg,
            transparent 56deg,
            rgba(255,245,180,0.14) 60deg,
            transparent 64deg,
            rgba(255,245,180,0.18) 68deg,
            transparent 72deg,
            rgba(255,245,180,0.20) 76deg,
            transparent 80deg,
            rgba(255,245,180,0.12) 84deg,
            transparent 88deg,
            rgba(255,245,180,0.16) 92deg,
            transparent 96deg,
            rgba(255,245,180,0.22) 100deg,
            transparent 104deg,
            rgba(255,245,180,0.14) 108deg,
            transparent 112deg,
            rgba(255,245,180,0.18) 116deg,
            transparent 120deg,
            rgba(255,245,180,0.20) 124deg,
            transparent 128deg,
            rgba(255,245,180,0.12) 132deg,
            transparent 136deg,
            rgba(255,245,180,0.18) 140deg,
            transparent 144deg,
            rgba(255,245,180,0.16) 148deg,
            transparent 152deg,
            rgba(255,245,180,0.22) 156deg,
            transparent 160deg,
            rgba(255,245,180,0.14) 164deg,
            transparent 168deg,
            rgba(255,245,180,0.18) 172deg,
            transparent 176deg,
            rgba(255,245,180,0.20) 180deg,
            transparent 184deg,
            rgba(255,245,180,0.12) 188deg,
            transparent 192deg,
            rgba(255,245,180,0.18) 196deg,
            transparent 200deg,
            rgba(255,245,180,0.16) 204deg,
            transparent 208deg,
            rgba(255,245,180,0.22) 212deg,
            transparent 216deg,
            rgba(255,245,180,0.14) 220deg,
            transparent 224deg,
            rgba(255,245,180,0.18) 228deg,
            transparent 232deg,
            rgba(255,245,180,0.20) 236deg,
            transparent 240deg,
            rgba(255,245,180,0.12) 244deg,
            transparent 248deg,
            rgba(255,245,180,0.18) 252deg,
            transparent 256deg,
            rgba(255,245,180,0.16) 260deg,
            transparent 264deg,
            rgba(255,245,180,0.22) 268deg,
            transparent 272deg,
            rgba(255,245,180,0.14) 276deg,
            transparent 280deg,
            rgba(255,245,180,0.18) 284deg,
            transparent 288deg,
            rgba(255,245,180,0.20) 292deg,
            transparent 296deg,
            rgba(255,245,180,0.12) 300deg,
            transparent 304deg,
            rgba(255,245,180,0.18) 308deg,
            transparent 312deg,
            rgba(255,245,180,0.16) 316deg,
            transparent 320deg,
            rgba(255,245,180,0.22) 324deg,
            transparent 328deg,
            rgba(255,245,180,0.14) 332deg,
            transparent 336deg,
            rgba(255,245,180,0.18) 340deg,
            transparent 344deg,
            rgba(255,245,180,0.20) 348deg,
            transparent 352deg,
            rgba(255,245,180,0.12) 356deg,
            transparent 360deg
          )`,
        }}
      />

      {/* ── Central glow behind portrait ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,240,160,0.55) 0%, rgba(255,200,60,0.2) 50%, transparent 75%)",
          filter: "blur(18px)",
        }}
      />

      {/* ── Lotus — bottom left ── */}
      <div className="absolute bottom-0 left-0 w-56 md:w-72 pointer-events-none select-none" style={{ transform: "translateY(20%)" }}>
        <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-60">
          {/* Water reflection */}
          <ellipse cx="110" cy="165" rx="90" ry="12" fill="rgba(180,100,0,0.25)" />
          {/* Stem */}
          <path d="M110 160 Q105 130 108 100" stroke="rgba(120,70,0,0.5)" strokeWidth="3" fill="none"/>
          {/* Back petals */}
          <path d="M110 105 Q70 60 55 30 Q90 55 110 90" fill="rgba(255,200,150,0.55)"/>
          <path d="M110 105 Q150 60 165 30 Q130 55 110 90" fill="rgba(255,200,150,0.55)"/>
          <path d="M110 105 Q50 90 20 80 Q65 85 100 100" fill="rgba(255,185,130,0.50)"/>
          <path d="M110 105 Q170 90 200 80 Q155 85 120 100" fill="rgba(255,185,130,0.50)"/>
          {/* Front petals */}
          <path d="M110 110 Q80 65 75 35 Q100 70 110 100" fill="rgba(255,210,170,0.75)"/>
          <path d="M110 110 Q140 65 145 35 Q120 70 110 100" fill="rgba(255,210,170,0.75)"/>
          <path d="M110 110 Q60 100 40 110 Q75 100 105 108" fill="rgba(255,195,150,0.65)"/>
          <path d="M110 110 Q160 100 180 110 Q145 100 115 108" fill="rgba(255,195,150,0.65)"/>
          {/* Center */}
          <circle cx="110" cy="105" r="14" fill="rgba(255,170,60,0.8)"/>
          <circle cx="110" cy="105" r="8" fill="rgba(255,200,80,0.9)"/>
        </svg>
      </div>

      {/* ── Lotus — bottom right ── */}
      <div className="absolute bottom-0 right-0 w-56 md:w-72 pointer-events-none select-none" style={{ transform: "translateY(20%) scaleX(-1)" }}>
        <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-60">
          <ellipse cx="110" cy="165" rx="90" ry="12" fill="rgba(180,100,0,0.25)" />
          <path d="M110 160 Q105 130 108 100" stroke="rgba(120,70,0,0.5)" strokeWidth="3" fill="none"/>
          <path d="M110 105 Q70 60 55 30 Q90 55 110 90" fill="rgba(255,200,150,0.55)"/>
          <path d="M110 105 Q150 60 165 30 Q130 55 110 90" fill="rgba(255,200,150,0.55)"/>
          <path d="M110 105 Q50 90 20 80 Q65 85 100 100" fill="rgba(255,185,130,0.50)"/>
          <path d="M110 105 Q170 90 200 80 Q155 85 120 100" fill="rgba(255,185,130,0.50)"/>
          <path d="M110 110 Q80 65 75 35 Q100 70 110 100" fill="rgba(255,210,170,0.75)"/>
          <path d="M110 110 Q140 65 145 35 Q120 70 110 100" fill="rgba(255,210,170,0.75)"/>
          <path d="M110 110 Q60 100 40 110 Q75 100 105 108" fill="rgba(255,195,150,0.65)"/>
          <path d="M110 110 Q160 100 180 110 Q145 100 115 108" fill="rgba(255,195,150,0.65)"/>
          <circle cx="110" cy="105" r="14" fill="rgba(255,170,60,0.8)"/>
          <circle cx="110" cy="105" r="8" fill="rgba(255,200,80,0.9)"/>
        </svg>
      </div>

      {/* ── Water shimmer at bottom ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, rgba(160,80,0,0.45) 0%, rgba(200,110,0,0.15) 60%, transparent 100%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-2xl mx-auto">

        {/* Rotating portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Outer glow ring */}
          <div
            className="absolute -inset-3 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,220,80,0.5) 0%, transparent 70%)",
              filter: "blur(10px)",
            }}
          />
          {/* Gold border */}
          <div
            className="absolute -inset-1.5 rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,230,100,0.9), rgba(200,130,20,0.7), rgba(255,220,80,0.9))",
            }}
          />
          {/* Photo circle */}
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden">
            {photos.map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt={p.label}
                className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000"
                style={{ opacity: i === current ? 1 : 0 }}
              />
            ))}
          </div>

          {/* Thumbnail dots */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === current ? "rgba(255,230,100,1)" : "rgba(255,255,255,0.4)",
                  transform: i === current ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Sanskrit title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl font-bold mb-2 mt-4"
          style={{
            color: "#fff8e8",
            textShadow: "0 2px 20px rgba(100,40,0,0.6), 0 0 40px rgba(255,200,50,0.3)",
            fontFamily: "serif",
          }}
        >
          ॐ श्री सद्गुरवे नमः
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-base tracking-[0.2em] mb-10 uppercase"
          style={{ color: "rgba(255,235,160,0.85)" }}
        >
          Pujya Swami Subodhananda ji Maharaj
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-20 h-px" style={{ background: "rgba(255,220,100,0.5)" }} />
          <span style={{ color: "rgba(255,220,100,0.8)", fontSize: "18px" }}>✦</span>
          <div className="w-20 h-px" style={{ background: "rgba(255,220,100,0.5)" }} />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#gallery"
            className="px-8 py-3 rounded-lg font-medium text-sm tracking-wide transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(180,90,10,0.85)",
              color: "#fff8e8",
              border: "1px solid rgba(255,200,80,0.4)",
              boxShadow: "0 4px 20px rgba(120,50,0,0.4)",
            }}
          >
            View Gallery
          </a>
          <a
            href="#talks"
            className="px-8 py-3 rounded-lg font-medium text-sm tracking-wide transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#fff8e8",
              border: "1px solid rgba(255,220,120,0.45)",
              backdropFilter: "blur(4px)",
            }}
          >
            Watch Talks
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(150,70,0,0.3), transparent)" }}
      />
    </section>
  );
};

export default HeroSection;
