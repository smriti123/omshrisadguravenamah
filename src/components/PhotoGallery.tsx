import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────
// SECTION 1 — Regular photos (photo-1.jpg, photo-2.jpg ...)
// ─────────────────────────────────────────────────────────
import p1  from "@/assets/gallery/photo-1.jpg";
import p2  from "@/assets/gallery/photo-2.jpg";
import p3  from "@/assets/gallery/photo-3.jpg";
import p4  from "@/assets/gallery/photo-4.jpg";
import p5  from "@/assets/gallery/photo-5.jpg";
import p6  from "@/assets/gallery/photo-6.jpg";
import p7  from "@/assets/gallery/photo-7.jpg";
import p8  from "@/assets/gallery/photo-8.jpg";
import p9  from "@/assets/gallery/photo-9.jpg";
import p10 from "@/assets/gallery/photo-10.jpg";
import p11 from "@/assets/gallery/photo-11.jpg";
import p12 from "@/assets/gallery/photo-12.jpg";
import p13 from "@/assets/gallery/photo-13.jpg";
import p14 from "@/assets/gallery/photo-14.jpg";
import p15 from "@/assets/gallery/photo-15.jpg";
import p16 from "@/assets/gallery/photo-16.jpg";
import p17 from "@/assets/gallery/photo-17.jpg";
import p18 from "@/assets/gallery/photo-18.jpg";
import p19 from "@/assets/gallery/photo-19.jpg";
import p20 from "@/assets/gallery/photo-20.jpg";
import p21 from "@/assets/gallery/photo-21.jpg";
// Add more: import p22 from "@/assets/gallery/photo-22.jpg";

// ─────────────────────────────────────────────────────────
// SECTION 2 — Special / Saints photos (v1.jpg, v2.jpg ...)
// ─────────────────────────────────────────────────────────
import v1 from "@/assets/gallery/v1.jpg";
import v2 from "@/assets/gallery/v2.jpg";
import v3 from "@/assets/gallery/v3.jpg";
import v4 from "@/assets/gallery/v4.jpg";
import v6 from "@/assets/gallery/v6.jpg";
// Add more: import v7 from "@/assets/gallery/v7.jpg";

// ─────────────────────────────────────────────────────────
// vintage: true  → sepia tint applied (old/B&W photos)
// vintage: false → natural color
// label          → shown in lightbox caption
// ─────────────────────────────────────────────────────────
type Photo = { src: string; label: string; vintage: boolean };

const smritiyaanPhotos: Photo[] = [
  { src: p1,  label: "Early days",       vintage: true  },
  { src: p2,  label: "Discourse",        vintage: true  },
  { src: p3,  label: "Young Swamiji",    vintage: true  },
  { src: p4,  label: "Himalayan years",  vintage: true  },
  { src: p5,  label: "Meditation",       vintage: true  },
  { src: p6,  label: "Satsang",          vintage: false },
  { src: p7,  label: "Ashram life",      vintage: false },
  { src: p8,  label: "With Guru",        vintage: false },
  { src: p9,  label: "Nature walk",      vintage: false },
  { src: p10, label: "Himalaya",         vintage: true  },
  { src: p11, label: "Puja ceremony",    vintage: false },
  { src: p12, label: "With disciples",   vintage: false },
  { src: p13, label: "Shiva puja",       vintage: false },
  { src: p14, label: "Lotus feet",       vintage: false },
  { src: p15, label: "Blessings",        vintage: false },
  { src: p16, label: "Pravachan",        vintage: false },
  { src: p17, label: "Devotees",         vintage: false },
  { src: p18, label: "Sacred moment",    vintage: false },
  { src: p19, label: "Gurudev",          vintage: false },
  { src: p20, label: "Divine presence",  vintage: false },
  { src: p21, label: "Jai Gurudev",      vintage: false },
  // ── Add more below as you upload ──
  // { src: p22, label: "Your caption", vintage: false },
];

const visheshPhotos: Photo[] = [
  { src: v1, label: "With saints",        vintage: true },
  { src: v2, label: "Sacred gathering",   vintage: true },
  { src: v3, label: "Blessed moment",     vintage: true },
  { src: v4, label: "Divine company",     vintage: true },
  { src: v6, label: "Spiritual journey",  vintage: true },
  // ── Add more below as you upload ──
  // { src: v7, label: "Your caption", vintage: true },
];

// How many photos to show initially and per "Load more" click
const INITIAL = 12;
const PER_LOAD = 12;

// ── Lightbox ──────────────────────────────────────────────
const Lightbox = ({
  photos,
  startIndex,
  onClose,
}: {
  photos: Photo[];
  startIndex: number;
  onClose: () => void;
}) => {
  const [idx, setIdx] = useState(startIndex);
  const prev = useCallback(() => setIdx((i) => (i - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % photos.length), [photos.length]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [prev, next, onClose]);

  const photo = photos[idx];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "rgba(20,8,0,0.96)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-6 text-4xl leading-none transition-colors"
        style={{ color: "rgba(255,210,120,0.6)" }}
        onClick={onClose}
      >×</button>

      <div className="relative w-full max-w-2xl px-4" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{ maxHeight: "62vh", border: "1px solid rgba(200,140,40,0.3)" }}
          >
            <img
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-contain"
              style={photo.vintage ? { filter: "sepia(60%) contrast(1.05) brightness(0.94)" } : {}}
            />
          </motion.div>
        </AnimatePresence>

        <div className="mt-3 text-center">
          <p style={{ color: "rgba(255,220,150,0.8)" }} className="text-sm tracking-widest">
            {photo.label}
            {photo.vintage && <span style={{ color: "rgba(200,150,60,0.6)" }} className="ml-2 text-xs">· vintage</span>}
          </p>
          <p style={{ color: "rgba(200,150,60,0.4)" }} className="text-xs mt-1">{idx + 1} / {photos.length}</p>
        </div>

        <div className="flex justify-between mt-4">
          {[{ fn: prev, label: "← Prev" }, { fn: next, label: "Next →" }].map(({ fn, label }) => (
            <button
              key={label}
              onClick={fn}
              className="px-6 py-2 rounded-full text-sm tracking-wide transition-all"
              style={{ border: "1px solid rgba(200,140,40,0.3)", color: "rgba(255,210,120,0.7)", background: "rgba(200,120,20,0.08)" }}
            >{label}</button>
          ))}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-5 px-4 overflow-x-auto max-w-2xl w-full pb-1" onClick={(e) => e.stopPropagation()}>
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="flex-shrink-0 w-10 h-10 rounded overflow-hidden transition-all duration-200"
            style={{
              border: i === idx ? "2px solid rgba(255,200,80,0.9)" : "1px solid rgba(200,140,40,0.2)",
              opacity: i === idx ? 1 : 0.45,
              transform: i === idx ? "scale(1.1)" : "scale(1)",
            }}
          >
            <img src={p.src} alt={p.label} className="w-full h-full object-cover object-top"
              style={p.vintage ? { filter: "sepia(60%)" } : {}} />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

// ── Section heading ───────────────────────────────────────
const SectionHeading = ({ hindi, english, sub }: { hindi: string; english: string; sub: string }) => (
  <div className="text-center mb-8">
    <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "rgba(160,90,16,0.6)" }}>{sub}</p>
    <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#7a3a00", fontFamily: "serif" }}>{english}</h3>
    <p className="text-sm mb-4" style={{ color: "rgba(140,70,10,0.65)", fontFamily: "serif" }}>{hindi}</p>
    <div className="flex items-center justify-center gap-3">
      <div className="w-12 h-px" style={{ background: "rgba(180,100,20,0.35)" }} />
      <span style={{ color: "rgba(180,100,20,0.6)" }}>✦</span>
      <div className="w-12 h-px" style={{ background: "rgba(180,100,20,0.35)" }} />
    </div>
  </div>
);

// ── Photo Grid with Load More ─────────────────────────────
const PhotoGrid = ({
  photos,
  allPhotos,
  globalOffset,
  onOpen,
  accentColor,
}: {
  photos: Photo[];
  allPhotos: Photo[];
  globalOffset: number;
  onOpen: (globalIndex: number) => void;
  accentColor: string;
}) => {
  const [visible, setVisible] = useState(INITIAL);
  const shown     = photos.slice(0, visible);
  const remaining = photos.length - visible;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
        {shown.map((photo, localIdx) => (
          <motion.div
            key={localIdx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (localIdx % 4) * 0.04 }}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group shadow-sm"
            onClick={() => onOpen(globalOffset + localIdx)}
          >
            <img
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              style={photo.vintage ? { filter: "sepia(55%) contrast(1.05) brightness(0.93)" } : {}}
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-end justify-center transition-all duration-300"
              style={{ background: "rgba(120,50,0,0)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(120,50,0,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(120,50,0,0)")}
            >
              <span className="text-xs pb-2 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "rgba(255,230,160,0.95)" }}>
                {photo.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      {remaining > 0 && (
        <div className="flex flex-col items-center mt-8 gap-2">
          <p className="text-xs tracking-wider" style={{ color: "rgba(160,90,16,0.5)" }}>
            Showing {visible} of {photos.length} photos
          </p>
          <button
            onClick={() => setVisible((v) => Math.min(v + PER_LOAD, photos.length))}
            className="px-8 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200"
            style={{
              border: `1px solid ${accentColor}`,
              color: "#7a3a00",
              background: "rgba(180,100,20,0.07)",
            }}
          >
            Load more · {remaining} remaining ↓
          </button>
        </div>
      )}

      {remaining <= 0 && photos.length > INITIAL && (
        <p className="text-center text-xs mt-6 tracking-wider" style={{ color: "rgba(160,90,16,0.35)" }}>
          All {photos.length} photos ✦
        </p>
      )}
    </div>
  );
};

// ── Main Section ──────────────────────────────────────────
const GallerySection = () => {
  const [lbOpen, setLbOpen]   = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  // Combine both sections for the lightbox (so arrows work across all)
  const allPhotos = [...smritiyaanPhotos, ...visheshPhotos];

  const openLb = (index: number) => { setLbIndex(index); setLbOpen(true); };

  return (
    <section
      id="gallery"
      className="py-20"
      style={{ background: "linear-gradient(180deg,#fdf3e3 0%,#f5e0c0 40%,#efe0c8 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.28em] uppercase mb-3" style={{ color: "rgba(160,90,16,0.6)" }}>
            Divya Darshan · दिव्य दर्शन
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#7a3a00", fontFamily: "serif" }}>
            Photo Gallery
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-px" style={{ background: "rgba(180,100,20,0.4)" }} />
            <span style={{ color: "rgba(180,100,20,0.7)" }}>✦</span>
            <div className="w-16 h-px" style={{ background: "rgba(180,100,20,0.4)" }} />
          </div>
        </motion.div>

        {/* ── Section 1: Smritiyaan ── */}
        <div className="mb-20">
          <SectionHeading
            sub="Photo collection"
            english="Smritiyaan"
            hindi="स्मृतियाँ — Cherished Memories"
          />
          <PhotoGrid
            photos={smritiyaanPhotos}
            allPhotos={allPhotos}
            globalOffset={0}
            onOpen={openLb}
            accentColor="rgba(180,100,20,0.35)"
          />
        </div>

        {/* Divider between sections */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px" style={{ background: "rgba(180,100,20,0.2)" }} />
          <span className="text-xs tracking-[0.2em] uppercase px-4 py-1 rounded-full"
            style={{ border: "1px solid rgba(180,100,20,0.25)", color: "rgba(160,90,16,0.7)", background: "rgba(180,100,20,0.05)" }}>
            ✦
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(180,100,20,0.2)" }} />
        </div>

        {/* ── Section 2: Vishesh ── */}
        <div>
          <SectionHeading
            sub="Special collection"
            english="Vishesh Darshan"
            hindi="विशेष दर्शन — With Saints & Sacred Moments"
          />
          <PhotoGrid
            photos={visheshPhotos}
            allPhotos={allPhotos}
            globalOffset={smritiyaanPhotos.length}
            onOpen={openLb}
            accentColor="rgba(160,80,10,0.35)"
          />
        </div>

        <p className="text-center text-xs mt-12 tracking-wider" style={{ color: "rgba(160,90,16,0.4)" }}>
          Click any photo to view · Arrow keys to navigate
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lbOpen && (
          <Lightbox
            photos={allPhotos}
            startIndex={lbIndex}
            onClose={() => setLbOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
