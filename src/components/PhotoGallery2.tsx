import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { gallery2Categories, type Gallery2Photo } from "@/data/photoGallery2";

const PhotoGallery2 = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(gallery2Categories[0].id);
  const [lightboxPhoto, setLightboxPhoto] = useState<Gallery2Photo | null>(null);
  const panelRefs = useRef<Record<string, HTMLElement | null>>({});
  const scrollFrameRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const closePanelTimeoutRef = useRef<number | null>(null);
  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
      if (scrollTimeoutRef.current !== null) window.clearTimeout(scrollTimeoutRef.current);
      if (closePanelTimeoutRef.current !== null) window.clearTimeout(closePanelTimeoutRef.current);
    };
  }, []);

  const isMobileViewport = () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

  const scrollToPanelTop = (categoryId: string) => {
    if (!isMobileViewport()) return;

    if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
    if (scrollTimeoutRef.current !== null) window.clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = window.setTimeout(() => {
      scrollFrameRef.current = window.requestAnimationFrame(() => {
        const panel = panelRefs.current[categoryId];
        if (!panel) return;

        const stickyHeaderOffset = 96;
        const panelTop = panel.getBoundingClientRect().top + window.scrollY - stickyHeaderOffset;

        window.scrollTo({
          top: Math.max(panelTop, 0),
          behavior: "smooth",
        });
      });
    }, 0);
  };

  const openCategoryAndScroll = (categoryId: string) => {
    setActiveCategory(categoryId);
    scrollToPanelTop(categoryId);
  };

  const handleCategoryToggle = (categoryId: string, isOpen: boolean) => {
    if (closePanelTimeoutRef.current !== null) window.clearTimeout(closePanelTimeoutRef.current);

    if (isOpen) {
      setActiveCategory(null);
      return;
    }

    if (activeCategory && isMobileViewport()) {
      setActiveCategory(null);
      closePanelTimeoutRef.current = window.setTimeout(() => openCategoryAndScroll(categoryId), 330);
      return;
    }

    openCategoryAndScroll(categoryId);
  };

  useEffect(() => {
    if (!lightboxPhoto) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxPhoto(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxPhoto]);

  return (
    <section
      id="photo-gallery2"
      className="py-16 md:py-20"
      style={{ background: "linear-gradient(180deg, #fff7ea 0%, #f4dfc0 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.28em] text-amber-800/55">Photo Gallery 2</p>
          <h2 className="font-serif text-3xl font-bold text-amber-950 md:text-4xl">Photo Gallery2</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-amber-950/70 md:text-base">
            A simple accordion gallery for organizing photos by occasion. The existing Charitra-Jhalak gallery below remains unchanged.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-4 overflow-x-hidden rounded-[1.75rem] border border-amber-900/15 bg-white/45 p-3 shadow-[0_14px_36px_rgba(120,63,4,0.10)] md:p-5">
          <p className="px-2 text-center text-lg font-semibold leading-7 text-amber-950 md:text-xl">
            कृपया चित्र-श्रेणी चुनें
          </p>

          <div className="space-y-4">
            {gallery2Categories.map((category) => {
              const isOpen = activeCategory === category.id;
              const panelId = `gallery2-panel-${category.id}`;
              const headerId = `gallery2-header-${category.id}`;

              return (
                <article
                  key={category.id}
                  ref={(el) => {
                    panelRefs.current[category.id] = el;
                  }}
                  className={`overflow-hidden rounded-[1.35rem] border bg-amber-50/90 shadow-[0_12px_30px_rgba(120,63,4,0.12)] transition-all duration-300 ${
                    isOpen ? "border-amber-800/45 shadow-[0_16px_38px_rgba(120,63,4,0.18)]" : "border-amber-700/25"
                  }`}
                >
                  <h3 id={headerId}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => handleCategoryToggle(category.id, isOpen)}
                      className={`flex min-h-[4.75rem] w-full items-center gap-4 px-4 py-4 text-left text-lg font-bold leading-7 transition focus:outline-none focus:ring-2 focus:ring-amber-800 focus:ring-inset md:min-h-[4.25rem] md:px-6 md:text-xl ${
                        isOpen
                          ? "bg-amber-800 text-amber-50"
                          : "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-950 hover:bg-amber-100"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl shadow-sm ${
                          isOpen ? "border-amber-100/55 bg-amber-50/15 text-amber-50" : "border-amber-700/25 bg-white/60 text-amber-800"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? "▼" : "▶"}
                      </span>
                      <span className="flex-1">{category.name}</span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-amber-700/20 bg-gradient-to-b from-amber-50/80 to-white/30 p-4 md:p-5">
                          {category.photos.length > 0 ? (
                            <motion.div
                              key={category.id}
                              initial="hidden"
                              animate="show"
                              variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: category.id === "with-gurudev" ? 0.14 : 0.06 } },
                              }}
                              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            >
                              {category.photos.map((photo) => (
                                <motion.button
                                  type="button"
                                  key={photo.id}
                                  variants={{
                                    hidden: { opacity: 0, y: 22, scale: 0.98 },
                                    show: { opacity: 1, y: 0, scale: 1 },
                                  }}
                                  transition={{ duration: 0.42, ease: "easeOut" }}
                                  onClick={() => setLightboxPhoto(photo)}
                                  className={`group overflow-hidden rounded-3xl border border-amber-700/20 bg-amber-50/95 text-left shadow-[0_12px_30px_rgba(120,63,4,0.13)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(120,63,4,0.2)] focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 ${photo.centerWide ? "sm:col-span-2 lg:col-span-2 lg:col-start-2" : photo.wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
                                >
                                  <div className="flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100/90 to-orange-100/70 sm:h-80">
                                    <img
                                      src={photo.thumbnailSrc}
                                      alt={photo.alt}
                                      loading="lazy"
                                      className={`h-full w-full ${photo.objectFit === "cover" ? "object-cover" : "object-contain"} object-center transition duration-500`}
                                    />
                                  </div>
                                  <p className="px-4 py-3 text-base leading-6 text-amber-950/80 sm:text-sm">{photo.caption}</p>
                                </motion.button>
                              ))}
                            </motion.div>
                          ) : (
                            <div className="rounded-2xl border border-dashed border-amber-800/25 bg-white/35 p-8 text-center text-amber-950/65">
                              Photos for this panel can be added in <code className="rounded bg-amber-100 px-1">src/data/photoGallery2.ts</code>.
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
          >
            <motion.div
              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-amber-50 shadow-2xl"
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
                aria-label="Close image viewer"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                className="max-h-[76vh] w-full bg-black object-contain"
              />
              <p className="px-5 py-4 text-center text-sm leading-6 text-amber-950/80 md:text-base">{lightboxPhoto.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery2;
