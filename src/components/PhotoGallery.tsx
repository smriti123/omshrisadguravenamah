import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import p21 from "@/assets/gallery/v1.jpg";
import p21 from "@/assets/gallery/v2.jpg";
import p21 from "@/assets/gallery/v3.jpg";

// ─────────────────────────────────────────────────────────
// When you add more photos (up to 60), just add imports above
// and new entries below in the photos array.
//
// vintage: true  → sepia tint (old / B&W photos)
// vintage: false → natural color (modern photos)
// label          → caption shown in lightbox
// ─────────────────────────────────────────────────────────
type Photo = { src: string; label: string; vintage: boolean };

const photos: Photo[] = [
  { src: p1,  label: "Early days",        vintage: true  },
  { src: p2,  label: "Discourse",         vintage: true  },
  { src: p3,  label: "Young Swamiji",     vintage: true  },
  { src: p4,  label: "Himalayan years",   vintage: true  },
  { src: p5,  label: "Meditation",        vintage: true  },
  { src: p6,  label: "Satsang",           vintage: true  },
  { src: p7,  label: "Ashram life",       vintage: true  },
  { src: p8,  label: "With Guru",         vintage: true  },
  { src: p9,  label: "Nature walk",       vintage: true  },
  { src: p10, label: "Himalaya",          vintage: true  },
  { src: p11, label: "Puja ceremony",     vintage: false },
  { src: p12, label: "With disciples",    vintage: false },
  { src: p13, label: "Shiva puja",        vintage: false },
  { src: p14, label: "Lotus feet",        vintage: false },
  { src: p15, label: "Blessings",         vintage: false },
  { src: p16, label: "Pravachan",         vintage: false },
  { src: p17, label: "Devotees",          vintage: false },
  { src: p18, label: "Sacred moment",     vintage: false },
  { src: p19, label: "Gurudev",           vintage: false },
  { src: p20, label: "Divine presence",   vintage: false },
  { src: p21, label: "Jai Gurudev",       vintage: false },
  // ── Add more photos here as you upload them ──
  // { src: p22, label: "Photo name", vintage: false },
];

const vintagePhotos = photos.filter((p) => p.vintage);
const modernPhotos  = photos.filter((p) => !p.vintage);

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

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + photos.length) % photos.length),
    [photos.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  const photo = photos[idx];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "rgba(30, 10, 0, 0.95)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-6 text-amber-200/50 hover:text-amber-100 text-4xl leading-none transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-2xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-amber-800/30"
            style={{ maxHeight: "60vh" }}
          >
            <img
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-contain"
              style={
                photo.vintage
                  ? { filter: "sepia(60%) contrast(1.05) brightness(0.95)" }
                  : {}
              }
            />
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <div className="mt-3 text-center">
          <p className="text-amber-200/80 text-sm tracking-widest">
            {photo.label}
            {photo.vintage && (
              <span className="ml-2 text-amber-600/70 text-xs">· vintage</span>
            )}
          </p>
          <p className="text-amber-700/50 text-xs mt-1">
            {idx + 1} / {photos.length}
          </p>
        </div>

        {/* Arrows */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prev}
            className="px-6 py-2 rounded-lg border border-amber-800/40 text-amber-300/60 hover:text-amber-200 hover:border-amber-700/60 text-sm transition-all"
          >
            ← Prev
          </button>
          <button
            onClick={next}
            className="px-6 py-2 rounded-lg border border-amber-800/40 text-amber-300/60 hover:text-amber-200 hover:border-amber-700/60 text-sm transition-all"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div
        className="flex gap-2 mt-5 px-4 overflow-x-auto max-w-2xl w-full pb-1"
        onClick={(e) => e.stopPropagation()}
      >
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`flex-shrink-0 w-11 h-11 rounded overflow-hidden border-2 transition-all duration-200 ${
              i === idx
                ? "border-amber-400 scale-110"
                : "border-amber-900/40 opacity-40 hover:opacity-75"
            }`}
          >
            <img
              src={p.src}
              alt={p.label}
              className="w-full h-full object-cover object-top"
              style={p.vintage ? { filter: "sepia(60%)" } : {}}
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

// ── Photo Grid ────────────────────────────────────────────
const PhotoGrid = ({
  items,
  allPhotos,
  onOpen,
}: {
  items: Photo[];
  allPhotos: Photo[];
  onOpen: (index: number) => void;
}) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
    {items.map((photo) => {
      const gi = allPhotos.indexOf(photo);
      return (
        <motion.div
          key={gi}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: (gi % 5) * 0.04 }}
          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group shadow-md"
          onClick={() => onOpen(gi)}
          style={{ boxShadow: "0 2px 12px rgba(100,50,0,0.18)" }}
        >
          <img
            src={photo.src}
            alt={photo.label}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-108"
            style={
              photo.vintage
                ? { filter: "sepia(55%) contrast(1.05) brightness(0.93)" }
                : {}
            }
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/30 transition-colors duration-300 flex items-end justify-center">
            <span className="text-amber-100 text-xs pb-2 px-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide drop-shadow">
              {photo.label}
            </span>
          </div>
        </motion.div>
      );
    })}
  </div>
);

// ── Era Divider ───────────────────────────────────────────
const EraDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="flex-1 h-px bg-amber-800/30" />
    <span
      className="text-amber-800 text-xs tracking-[0.18em] uppercase px-4 border border-amber-700/40 rounded-full py-1 whitespace-nowrap"
      style={{ background: "rgba(180,100,20,0.08)" }}
    >
      {label}
    </span>
    <div className="flex-1 h-px bg-amber-800/30" />
  </div>
);

// ── Main Section ──────────────────────────────────────────
const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="gallery"
      className="py-20"
      style={{
        // Warm saffron-cream spiritual gradient — light, airy, sacred
        background: "linear-gradient(180deg, #fdf3e3 0%, #f5e0c0 40%, #efe0c8 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-amber-700/60 text-xs tracking-[0.28em] uppercase mb-3">
            Smritiyaan · स्मृतियाँ
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#7a3a00", fontFamily: "serif" }}
          >
            Photo Gallery
          </h2>
          <p className="text-amber-800/60 text-sm mb-4 tracking-wide">
            Cherished moments in the divine presence of Gurudev
          </p>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-px bg-amber-700/40" />
            <span className="text-amber-600 text-lg">✦</span>
            <div className="w-16 h-px bg-amber-700/40" />
          </div>
        </motion.div>

        {/* Vintage / Old Photos */}
        {vintagePhotos.length > 0 && (
          <div className="mb-12">
            <EraDivider label="Early Years · पुरानी यादें" />
            <PhotoGrid items={vintagePhotos} allPhotos={photos} onOpen={openLightbox} />
          </div>
        )}

        {/* Modern Photos */}
        {modernPhotos.length > 0 && (
          <div>
            <EraDivider label="Recent · आधुनिक" />
            <PhotoGrid items={modernPhotos} allPhotos={photos} onOpen={openLightbox} />
          </div>
        )}

        <p className="text-center text-amber-700/40 text-xs mt-10 tracking-wider">
          Click any photo to view · Arrow keys to navigate
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            photos={photos}
            startIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
