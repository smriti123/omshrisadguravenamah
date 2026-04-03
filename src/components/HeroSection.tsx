import { motion } from "framer-motion";
import heroShiva     from "@/assets/mandir.jpg";
import heroPortrait   from "@/assets/pic5.jpg";
import heroFeet      from "@/assets/h1.jpg";
import heroSignature from "@/assets/pic2.jpg";
import sign from "@/assets/gallery/sign.jpg";
import ma from "@/assets/gallery/ma.jpeg";

const lowerPhotos = [
  { src: heroFeet, label: "Lotus Feet" },
  { src: heroPortrait, label: "Swamiji" },
  { src: sign, label: "Sign" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(170deg, hsl(38 78% 58%) 0%, hsl(36 78% 48%) 28%, hsl(33 80% 42%) 58%, hsl(30 82% 36%) 100%)",
      }}
    >

      {/* ── 1. Soft radial light behind portrait ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,234,178,0.65) 0%, rgba(255,214,128,0.3) 38%, transparent 70%)",
        }}
      />

      {/* ── 2. Hero backdrop with mandir top-right and other photos in lower section ── */}
      <div className="absolute inset-0 opacity-[0.45]">
        <div className="grid grid-cols-2 h-[42%]">
          <div className="relative overflow-hidden">
            <img src={ma} alt="Mataji" className="w-full h-full object-cover object-top" />
          </div>
          <div className="relative overflow-hidden">
            <img src={heroShiva} alt="" className="w-full h-full object-cover object-center" />
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-[42%] grid grid-cols-1 md:grid-cols-3">
          {lowerPhotos.map((photo) => (
            <div key={photo.label} className="relative overflow-hidden">
              <img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. Soft warm overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(170deg, rgba(242,165,40,0.24) 0%, rgba(220,138,28,0.18) 45%, rgba(191,106,8,0.26) 100%)",
        }}
      />

      {/* ── 4. Gentle divine rays ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 38%,
            transparent 0deg, rgba(210,175,110,0.2) 4deg,
            transparent 8deg, rgba(210,175,110,0.15) 12deg,
            transparent 16deg, rgba(210,175,110,0.2) 20deg,
            transparent 24deg, rgba(210,175,110,0.12) 28deg,
            transparent 32deg, rgba(210,175,110,0.18) 36deg,
            transparent 40deg, rgba(210,175,110,0.15) 44deg,
            transparent 48deg, rgba(210,175,110,0.2) 52deg,
            transparent 56deg, rgba(210,175,110,0.12) 60deg,
            transparent 64deg, rgba(210,175,110,0.18) 68deg,
            transparent 72deg, rgba(210,175,110,0.15) 76deg,
            transparent 80deg, rgba(210,175,110,0.12) 84deg,
            transparent 88deg, rgba(210,175,110,0.16) 92deg,
            transparent 96deg, rgba(210,175,110,0.2) 100deg,
            transparent 104deg, rgba(210,175,110,0.12) 108deg,
            transparent 112deg, rgba(210,175,110,0.18) 116deg,
            transparent 120deg, rgba(210,175,110,0.15) 124deg,
            transparent 128deg, rgba(210,175,110,0.12) 132deg,
            transparent 136deg, rgba(210,175,110,0.18) 140deg,
            transparent 144deg, rgba(210,175,110,0.15) 148deg,
            transparent 152deg, rgba(210,175,110,0.2) 156deg,
            transparent 160deg, rgba(210,175,110,0.12) 164deg,
            transparent 168deg, rgba(210,175,110,0.18) 172deg,
            transparent 176deg, rgba(210,175,110,0.15) 180deg,
            transparent 184deg, rgba(210,175,110,0.12) 188deg,
            transparent 192deg, rgba(210,175,110,0.18) 196deg,
            transparent 200deg, rgba(210,175,110,0.15) 204deg,
            transparent 208deg, rgba(210,175,110,0.2) 212deg,
            transparent 216deg, rgba(210,175,110,0.12) 220deg,
            transparent 224deg, rgba(210,175,110,0.18) 228deg,
            transparent 232deg, rgba(210,175,110,0.15) 236deg,
            transparent 240deg, rgba(210,175,110,0.12) 244deg,
            transparent 248deg, rgba(210,175,110,0.18) 252deg,
            transparent 256deg, rgba(210,175,110,0.15) 260deg,
            transparent 264deg, rgba(210,175,110,0.2) 268deg,
            transparent 272deg, rgba(210,175,110,0.12) 276deg,
            transparent 280deg, rgba(210,175,110,0.18) 284deg,
            transparent 288deg, rgba(210,175,110,0.15) 292deg,
            transparent 296deg, rgba(210,175,110,0.12) 300deg,
            transparent 304deg, rgba(210,175,110,0.18) 308deg,
            transparent 312deg, rgba(210,175,110,0.15) 316deg,
            transparent 320deg, rgba(210,175,110,0.2) 324deg,
            transparent 328deg, rgba(210,175,110,0.12) 332deg,
            transparent 336deg, rgba(210,175,110,0.18) 340deg,
            transparent 344deg, rgba(210,175,110,0.15) 348deg,
            transparent 352deg, rgba(210,175,110,0.12) 356deg,
            transparent 360deg
          )`,
        }}
      />

      {/* ── 4b. Vertical glass columns like reference ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,214,132,0.04) 0%, rgba(255,214,132,0.04) 33.33%, rgba(255,246,220,0.10) 33.33%, rgba(255,246,220,0.10) 66.66%, rgba(255,214,132,0.04) 66.66%, rgba(255,214,132,0.04) 100%)",
        }}
      />

      {/* ── 5. Lotus — bottom left ── */}
      <div
        className="absolute bottom-0 left-0 w-44 md:w-60 pointer-events-none select-none"
        style={{ transform: "translateY(22%)" }}
      >
        <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-40">
          <ellipse cx="110" cy="165" rx="90" ry="12" fill="rgba(190,150,90,0.2)" />
          <path d="M110 160 Q105 130 108 100" stroke="rgba(180,140,80,0.35)" strokeWidth="3" fill="none"/>
          <path d="M110 105 Q70 60 55 30 Q90 55 110 90"  fill="rgba(220,180,130,0.4)"/>
          <path d="M110 105 Q150 60 165 30 Q130 55 110 90" fill="rgba(220,180,130,0.4)"/>
          <path d="M110 105 Q50 90 20 80 Q65 85 100 100"  fill="rgba(210,170,120,0.35)"/>
          <path d="M110 105 Q170 90 200 80 Q155 85 120 100" fill="rgba(210,170,120,0.35)"/>
          <path d="M110 110 Q80 65 75 35 Q100 70 110 100"  fill="rgba(225,190,145,0.5)"/>
          <path d="M110 110 Q140 65 145 35 Q120 70 110 100" fill="rgba(225,190,145,0.5)"/>
          <path d="M110 110 Q60 100 40 110 Q75 100 105 108"  fill="rgba(215,175,130,0.45)"/>
          <path d="M110 110 Q160 100 180 110 Q145 100 115 108" fill="rgba(215,175,130,0.45)"/>
          <circle cx="110" cy="105" r="14" fill="rgba(200,160,80,0.5)"/>
          <circle cx="110" cy="105" r="8"  fill="rgba(215,180,100,0.6)"/>
        </svg>
      </div>

      {/* ── 6. Lotus — bottom right (mirrored) ── */}
      <div
        className="absolute bottom-0 right-0 w-44 md:w-60 pointer-events-none select-none"
        style={{ transform: "translateY(22%) scaleX(-1)" }}
      >
        <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-40">
          <ellipse cx="110" cy="165" rx="90" ry="12" fill="rgba(190,150,90,0.2)" />
          <path d="M110 160 Q105 130 108 100" stroke="rgba(180,140,80,0.35)" strokeWidth="3" fill="none"/>
          <path d="M110 105 Q70 60 55 30 Q90 55 110 90"  fill="rgba(220,180,130,0.4)"/>
          <path d="M110 105 Q150 60 165 30 Q130 55 110 90" fill="rgba(220,180,130,0.4)"/>
          <path d="M110 105 Q50 90 20 80 Q65 85 100 100"  fill="rgba(210,170,120,0.35)"/>
          <path d="M110 105 Q170 90 200 80 Q155 85 120 100" fill="rgba(210,170,120,0.35)"/>
          <path d="M110 110 Q80 65 75 35 Q100 70 110 100"  fill="rgba(225,190,145,0.5)"/>
          <path d="M110 110 Q140 65 145 35 Q120 70 110 100" fill="rgba(225,190,145,0.5)"/>
          <path d="M110 110 Q60 100 40 110 Q75 100 105 108"  fill="rgba(215,175,130,0.45)"/>
          <path d="M110 110 Q160 100 180 110 Q145 100 115 108" fill="rgba(215,175,130,0.45)"/>
          <circle cx="110" cy="105" r="14" fill="rgba(200,160,80,0.5)"/>
          <circle cx="110" cy="105" r="8"  fill="rgba(215,180,100,0.6)"/>
        </svg>
      </div>

      {/* ── 7. Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, hsl(38 40% 97%) 0%, transparent 100%)",
        }}
      />

      {/* ── 8. Content ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-5xl flex flex-col items-center justify-center -mt-6 md:-mt-8"
        style={{ paddingTop: "1rem" }}
      >
        {/* Rotating portrait circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto mb-3 w-48 h-48 md:w-60 md:h-60"
        >
          {/* Glow */}
          <div
            className="absolute -inset-4 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,215,130,0.44) 0%, transparent 70%)",
              filter: "blur(12px)",
            }}
          />
          {/* Gold ring */}
          <div
            className="absolute -inset-1.5 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(246,199,82,0.9), rgba(221,160,44,0.7), rgba(246,199,82,0.9))",
            }}
          />
          {/* Circle photo: keep only pic2 */}
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
            <img
              src={heroSignature}
              alt="Signature"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Side ribbons moved near portrait (as marked in reference) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
          className="w-full mb-6 md:-mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4">
            <div
              className="hidden md:flex justify-end px-4 py-2 rounded-xl"
              style={{
                background: "linear-gradient(120deg, rgba(182,96,14,0.9), rgba(226,131,30,0.85))",
                border: "1px solid rgba(255,220,160,0.35)",
                boxShadow: "0 6px 18px rgba(88,42,0,0.28)",
              }}
            >
              <span
                className="font-display text-2xl lg:text-3xl font-bold leading-tight"
                style={{ color: "hsl(40 90% 96%)" }}
              >
                ॐ श्री सद्गुरवे नमः
              </span>
            </div>

            <div className="hidden md:block w-10 h-px" style={{ background: "rgba(255,226,178,0.55)" }} />

            <div
              className="hidden md:flex justify-start px-4 py-2 rounded-xl"
              style={{
                background: "linear-gradient(120deg, rgba(226,131,30,0.85), rgba(182,96,14,0.9))",
                border: "1px solid rgba(255,220,160,0.35)",
                boxShadow: "0 6px 18px rgba(88,42,0,0.28)",
              }}
            >
              <span
                className="text-xs lg:text-sm tracking-wider uppercase font-body"
                style={{ color: "hsl(38 66% 90%)" }}
              >
                Param Pujya Swami Subodhananda ji Maharaj
              </span>
            </div>
          </div>
        </motion.div>

        {/* Buttons moved to previous ribbon position so they don't overlap photos */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-3 mb-4 md:mt-4"
        >
          <div
            className="mx-auto w-fit rounded-2xl px-4 py-3 md:px-6 md:py-4"
            style={{
              background: "linear-gradient(180deg, rgba(191,107,22,0.92), rgba(163,87,16,0.92))",
              border: "1px solid rgba(255,220,160,0.35)",
              boxShadow: "0 10px 28px rgba(70,32,0,0.34)",
              backdropFilter: "blur(1px)",
            }}
          >
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a
                href="#gallery"
                className="px-8 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105"
                style={{
                  background: "hsl(25 50% 25%)",
                  color: "hsl(40 70% 92%)",
                  border: "1px solid rgba(160,100,30,0.4)",
                  boxShadow: "0 4px 20px rgba(80,40,0,0.3)",
                }}
              >
                View Gallery
              </a>
              <a
                href="#talks"
                className="px-8 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(255,220,150,0.2)",
                  color: "hsl(40 80% 94%)",
                  border: "1px solid rgba(255,200,100,0.35)",
                  backdropFilter: "blur(4px)",
                }}
              >
                Watch Talks
              </a>
            </div>
          </div>
        </motion.div>

        {/* Main title (mobile + centered fallback) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl font-bold mb-2 -mt-1 leading-tight md:hidden"
          style={{
            color: "hsl(40 90% 96%)",
            textShadow: "0 2px 16px rgba(80,40,0,0.4)",
          }}
        >
          ॐ श्री सद्गुरवे नमः
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-base md:text-lg tracking-widest mb-2 uppercase font-body md:hidden"
          style={{ color: "hsl(38 50% 88%)" }}
        >
          Param Pujya Swami Subodhananda ji Maharaj
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-16 h-px" style={{ background: "rgba(255,220,150,0.5)" }} />
          <span style={{ color: "rgba(255,220,150,0.7)", fontSize: "16px" }}>✦</span>
          <div className="w-16 h-px" style={{ background: "rgba(255,220,150,0.5)" }} />
        </motion.div>
      </motion.div>

      {/* ── 9. Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(0deg, hsl(34 50% 82%) 0%, transparent 100%)" }} />
    </section>
  );
};

export default HeroSection;
