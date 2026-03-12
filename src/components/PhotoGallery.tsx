import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";
import photo7 from "@/assets/gallery/photo-7.jpg";
import photo8 from "@/assets/gallery/photo-8.jpg";
import photo9 from "@/assets/gallery/photo-9.jpg";
import photo10 from "@/assets/gallery/photo-10.jpg";
import photo11 from "@/assets/gallery/photo-11.jpg";
import photo12 from "@/assets/gallery/photo-12.jpg";
import photo13 from "@/assets/gallery/photo-13.jpg";
import photo14 from "@/assets/gallery/photo-14.jpg";
import photo15 from "@/assets/gallery/photo-15.jpg";
import photo16 from "@/assets/gallery/photo-16.jpg";
import photo17 from "@/assets/gallery/photo-17.jpg";
import photo18 from "@/assets/gallery/photo-18.jpg";
import photo19 from "@/assets/gallery/photo-19.jpg";
import photo20 from "@/assets/gallery/photo-20.jpg";
import photo21 from "@/assets/gallery/photo-21.jpg";

const galleryPhotos = [
  photo1, photo2, photo3, photo4, photo5, photo6, photo7,
  photo8, photo9, photo10, photo11, photo12, photo13, photo14,
  photo15, photo16, photo17, photo18, photo19, photo20, photo21,
];

const PhotoGallery = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + galleryPhotos.length) % galleryPhotos.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 5000);
    return () => clearInterval(timer);
  }, [navigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  // Show 5 thumbnail dots around current
  const totalDots = Math.min(galleryPhotos.length, 7);
  const halfDots = Math.floor(totalDots / 2);
  const dotIndices = Array.from({ length: totalDots }, (_, i) => {
    const idx = current - halfDots + i;
    return ((idx % galleryPhotos.length) + galleryPhotos.length) % galleryPhotos.length;
  });

  return (
    <section id="gallery" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Photo Gallery"
          subtitle="Cherished moments captured in the divine presence of Gurudev"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Main image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-gold/20 shadow-gold">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={current}
                src={galleryPhotos[current]}
                alt={`Photo ${current + 1}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-contain bg-card"
              />
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground font-body text-xs border border-gold/20">
              {current + 1} / {galleryPhotos.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {galleryPhotos.map((photo, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  i === current
                    ? "border-primary shadow-gold scale-110"
                    : "border-gold/20 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={photo} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
