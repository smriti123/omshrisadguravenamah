import { type SVGProps, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, X } from "lucide-react";

import { gallery2Categories, type Gallery2Photo } from "@/data/photoGallery2";


type DevotionalIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
};

type DevotionalIcon = (props: DevotionalIconProps) => JSX.Element;

const devotionalIconDefaults = {
  size: 24,
  strokeWidth: 1.55,
};

const iconStrokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const LotusIcon: DevotionalIcon = ({ size = devotionalIconDefaults.size, strokeWidth = devotionalIconDefaults.strokeWidth, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M12 18.5c-2.7-2.2-4-4.7-4-7.2 0-2.1 1.5-4.1 4-6.3 2.5 2.2 4 4.2 4 6.3 0 2.5-1.3 5-4 7.2Z" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M8.5 17.2c-2.8-.5-5-2.2-6.2-5.1 2.4-.7 4.4-.5 6 .7" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M15.5 17.2c2.8-.5 5-2.2 6.2-5.1-2.4-.7-4.4-.5-6 .7" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M5.8 20h12.4" />
  </svg>
);

const OmIcon: DevotionalIcon = ({ size = devotionalIconDefaults.size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <text x="12" y="17" textAnchor="middle" fontSize="15" fontFamily="serif" fontWeight="400" fill="currentColor">ॐ</text>
  </svg>
);

const FluteIcon: DevotionalIcon = ({ size = devotionalIconDefaults.size, strokeWidth = devotionalIconDefaults.strokeWidth, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M4.5 17.5 17.8 4.2" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="m16.5 3.4 2.1 2.1" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M8.2 13.8h.01" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M11.2 10.8h.01" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M14.2 7.8h.01" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M7 19.2c3.2.8 6.2-.2 8.8-3" />
  </svg>
);

const ScriptureIcon: DevotionalIcon = ({ size = devotionalIconDefaults.size, strokeWidth = devotionalIconDefaults.strokeWidth, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M4.5 5.8c2.7-.9 5.2-.5 7.5 1.2v13c-2.3-1.7-4.8-2.1-7.5-1.2V5.8Z" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M12 7c2.3-1.7 4.8-2.1 7.5-1.2v13c-2.7-.9-5.2-.5-7.5 1.2" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M7.1 9.3h2.4M7.1 12.2h2.1M14.5 9.3h2.4M14.5 12.2h2.1" />
  </svg>
);

const HeartDiyaIcon: DevotionalIcon = ({ size = devotionalIconDefaults.size, strokeWidth = devotionalIconDefaults.strokeWidth, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M12 19.2S5.2 15.1 5.2 9.6c0-1.9 1.4-3.4 3.2-3.4 1.1 0 2.2.6 2.8 1.6.6-1 1.7-1.6 2.8-1.6 1.8 0 3.2 1.5 3.2 3.4 0 1.7-.7 3.3-1.7 4.7" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M9 15.7c1.9 1.2 4.1 1.2 6 0-.5 1.8-1.6 2.9-3 2.9s-2.5-1.1-3-2.9Z" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M12 14.8c-.8-.9-.8-1.8 0-2.8.8 1 .8 1.9 0 2.8Z" />
  </svg>
);

const TrishulIcon: DevotionalIcon = ({ size = devotionalIconDefaults.size, strokeWidth = devotionalIconDefaults.strokeWidth, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M12 3v18" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M8.2 4.8v4.4c0 2 1.5 3.4 3.8 3.4s3.8-1.4 3.8-3.4V4.8" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M5.8 7.6c.6 1.8 1.7 2.8 3.2 3M18.2 7.6c-.6 1.8-1.7 2.8-3.2 3" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M9 21h6" />
  </svg>
);

const DiyaIcon: DevotionalIcon = ({ size = devotionalIconDefaults.size, strokeWidth = devotionalIconDefaults.strokeWidth, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M5 14.5c2.4 1.6 5 2.4 7 2.4s4.6-.8 7-2.4c-.6 3.3-3.1 5.1-7 5.1s-6.4-1.8-7-5.1Z" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M12 13.5c-1.4-1.5-1.4-3.2 0-5 1.4 1.8 1.4 3.5 0 5Z" />
    <path {...iconStrokeProps} strokeWidth={strokeWidth} d="M17.8 8.2 19.4 7M4.6 7l1.6 1.2M12 3.4v2" />
  </svg>
);

const galleryCategoryIcons: Record<string, DevotionalIcon> = {
  "charan-vandan": LotusIcon,
  "with-gurudev": OmIcon,
  "namami-chittchorkam": FluteIcon,
  "vedant-moorti": ScriptureIcon,
  "key-events": HeartDiyaIcon,
  batches: TrishulIcon,
  others: DiyaIcon,
};

const getGalleryCategoryIcon = (categoryId: string) => galleryCategoryIcons[categoryId] ?? DiyaIcon;

const PhotoGallery2 = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
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
          <h2 className="font-serif text-3xl font-bold text-amber-950 md:text-4xl">Charitra-Jhalak</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-amber-950/70 md:text-base">
            Along with fond memories and heartfelt recollections shared by devotees from time to time.
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
              const CategoryIcon = getGalleryCategoryIcon(category.id);

              return (
                <article
                  key={category.id}
                  ref={(el) => {
                    panelRefs.current[category.id] = el;
                  }}
                  className={`overflow-hidden rounded-[1.35rem] border bg-[#fffaf0]/95 shadow-[0_10px_26px_rgba(120,63,4,0.10)] transition-all duration-300 ${
                    isOpen ? "border-amber-700/45 shadow-[0_16px_34px_rgba(120,63,4,0.15)]" : "border-amber-600/25 hover:border-amber-600/35 hover:shadow-[0_14px_30px_rgba(120,63,4,0.13)]"
                  }`}
                >
                  <h3 id={headerId}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => handleCategoryToggle(category.id, isOpen)}
                      className={`flex min-h-[5.5rem] w-full items-center gap-4 px-4 py-4 text-left text-lg font-bold leading-7 transition focus:outline-none focus:ring-2 focus:ring-amber-800 focus:ring-inset md:min-h-[4.5rem] md:gap-5 md:px-6 md:text-xl ${
                        isOpen
                          ? "bg-[#fff4dc] text-[#5f3419]"
                          : "bg-[#fffaf0] text-[#6f421f] hover:bg-[#fff4dc]"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border shadow-sm md:h-12 md:w-12 ${
                          isOpen ? "border-amber-700/25 bg-[#fff8e8] text-[#8f5a20]" : "border-amber-600/20 bg-[#f6d79f]/45 text-[#9a6426]"
                        }`}
                        aria-hidden="true"
                      >
                        <CategoryIcon size={25} strokeWidth={1.55} />
                      </span>
                      <span className={isOpen ? "flex-1 text-[#5f3419]" : "flex-1 text-[#6f421f]"}>{category.name}</span>
                      <span
                        className={`ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                          isOpen ? "bg-amber-100/80 text-[#8f5a20]" : "bg-amber-100/70 text-[#a66a24]"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? <ChevronDown size={18} strokeWidth={1.8} /> : <ChevronRight size={18} strokeWidth={1.8} />}
                      </span>
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
                              {category.photos.map((photo) => {
                                const shouldContainImage = photo.objectFit === "contain";

                                return (
                                  <motion.button
                                    type="button"
                                    key={photo.id}
                                    variants={{
                                      hidden: { opacity: 0, y: 22, scale: 0.98 },
                                      show: { opacity: 1, y: 0, scale: 1 },
                                    }}
                                    transition={{ duration: 0.42, ease: "easeOut" }}
                                    onClick={() => setLightboxPhoto(photo)}
                                    className={`group overflow-hidden rounded-[1.35rem] border border-amber-600/25 bg-amber-50/70 text-left shadow-[0_10px_24px_rgba(120,63,4,0.11)] transition hover:-translate-y-1 hover:border-amber-600/35 hover:shadow-[0_16px_34px_rgba(120,63,4,0.17)] focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 ${photo.centerWide ? "sm:col-span-2 lg:col-span-2 lg:col-start-2" : photo.wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
                                  >
                                    <div
                                      className={`flex h-72 items-center justify-center overflow-hidden rounded-[1.2rem] border border-amber-500/20 shadow-inner sm:h-80 ${
                                        shouldContainImage ? "bg-amber-50/80 p-1" : "bg-amber-50/40 p-0"
                                      }`}
                                    >
                                      <img
                                        src={photo.thumbnailSrc}
                                        alt={photo.alt}
                                        loading="lazy"
                                        className={`h-full w-full rounded-[1rem] ${shouldContainImage ? "object-contain" : "object-cover"} object-center transition duration-500 group-hover:scale-[1.015]`}
                                      />
                                    </div>
                                    <p className="whitespace-pre-line px-4 py-3 text-base leading-6 text-amber-950/80 sm:text-sm">{photo.caption}</p>
                                  </motion.button>
                                );
                              })}
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
              <p className="whitespace-pre-line px-5 py-4 text-center text-sm leading-6 text-amber-950/80 md:text-base">{lightboxPhoto.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery2;
