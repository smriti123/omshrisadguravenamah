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

// ─────────────────────────────────────────────────────────
// EASY TO CUSTOMISE:
//   vintage: true  → sepia tint (old/B&W photos)
//   vintage: false → natural color (modern photos)
//   label          → shown in lightbox caption
// ─────────────────────────────────────────────────────────
type Photo = { src: string; label: string; vintage: boolean };

const photos: Photo[] = [
  { src: p1,  label: "Photo 1",  vintage: true  },
  { src: p2,  label: "Photo 2",  vintage: true  },
  { src: p3,  label: "Photo 3",  vintage: true  },
  { src: p4,  label: "Photo 4",  vintage: true  },
  { src: p5,  label: "Photo 5",  vintage: true  },
  { src: p6,  label: "Photo 6",  vintage: true  },
  { src: p7,  label: "Photo 7",  vintage: true  },
  { src: p8,  label: "Photo 8",  vintage: true  },
  { src: p9,  label: "Photo 9",  vintage: true  },
  { src: p10, label: "Photo 10", vintage: true  },
  // ↓ Change vintage: true → false for any modern photo
  { src: p11, label: "Photo 11", vintage: false },
  { src: p12, label: "Photo 12", vintage: false },
  { src: p13, label: "Photo 13", vintage: false },
  { src: p14, label: "Photo 14", vintage: false },
  { src: p15, label: "Photo 15", vintage: false },
  { src: p16, label: "Photo 16", vintage: false },
  { src: p17, label: "Photo 17", vintage: false },
  { src: p18, label: "Photo 18", vintage: false },
  { src: p19, label: "Photo 19", vintage: false },
  { src: p20, label: "Photo 20", vintage: false },
  { src: p21, label: "Photo 21", vintage: false },
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
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  const photo = photos[idx];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/92"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-5 right-6 text-white/50 hover:text-white text-4xl leading-none transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {/* Main image */}
      <div
        className="relative w-full max-w-2xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{ maxHeight: "62vh" }}
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
          <p className="text-white/75 text-sm tracking-widest">
            {photo.label}
            {photo.vintage && (
              <span className="ml-2 text-amber-500/70 text-xs uppercase">
                · vintage
              </span>
            )}
          </p>
          <p className="text-white/30 text-xs mt-1">
            {idx + 1} / {photos.length}
          </p>
        </div>

        {/* Nav arrows */}
        <div className="flex justify-between mt-5">
          <button
            onClick={prev}
            className="px-6 py-2 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/50 text-sm transition-all"
          >
            ← Prev
          </button>
          <button
            onClick={next}
            className="px-6 py-2 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/50 text-sm transition-all"
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
                : "border-white/15 opacity-45 hover:opacity-75"
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
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
    {items.map((photo) => {
      const globalIndex = allPhotos.indexOf(photo);
      return (
        <motion.div
          key={globalIndex}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: (globalIndex % 4) * 0.05 }}
          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => onOpen(globalIndex)}
        >
          <img
            src={photo.src}
            alt={photo.label}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            style={
              photo.vintage
                ? { filter: "sepia(55%) contrast(1.05) brightness(0.93)" }
                : {}
            }
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-end justify-center">
            <span className="text-white text-xs pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider">
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
  <div className="flex items-center gap-4 mb-7">
    <div className="flex-1 h-px bg-amber-900/40" />
    <span className="text-amber-600/65 text-xs tracking-[0.18em] uppercase px-4 border border-amber-800/35 rounded-full py-1 whitespace-nowrap">
      {label}
    </span>
    <div className="flex-1 h-px bg-amber-900/40" />
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
    <section id="gallery" className="py-20 bg-[#0e0500]">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-amber-600/55 text-xs tracking-[0.28em] uppercase mb-3">
            Smritiyaan · स्मृतियाँ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-50 font-display mb-4">
            Photo Gallery
          </h2>
          <div className="mx-auto w-16 h-px bg-amber-700/50" />
        </motion.div>

        {/* Old / Vintage Photos */}
        {vintagePhotos.length > 0 && (
          <div className="mb-14">
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

        <p className="text-center text-amber-900/50 text-xs mt-10 tracking-wider">
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
