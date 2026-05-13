import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gallery2Categories, type Gallery2Photo } from "@/data/photoGallery2";

const PhotoGallery2 = () => {
  const [activeCategory, setActiveCategory] = useState(gallery2Categories[0].id);
  const [lightboxPhoto, setLightboxPhoto] = useState<Gallery2Photo | null>(null);
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
            A simple tabbed gallery for organizing photos by occasion. The existing Charitra-Jhalak gallery below remains unchanged.
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="overflow-x-auto pb-2">
            <TabsList className="h-auto min-w-max rounded-full border border-amber-900/15 bg-white/55 p-1 shadow-sm">
              {gallery2Categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-4 py-2 text-amber-950/70 data-[state=active]:bg-amber-800 data-[state=active]:text-amber-50"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {gallery2Categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              {category.photos.length > 0 ? (
                <motion.div
                  key={category.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: category.id === "with-gurudev" ? 0.14 : 0.06 } },
                  }}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
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
                      className="group overflow-hidden rounded-2xl border border-amber-900/15 bg-white text-left shadow-[0_10px_28px_rgba(120,63,4,0.12)] transition hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(120,63,4,0.2)] focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
                    >
                      <div className="flex h-72 items-center justify-center overflow-hidden bg-amber-100/80 sm:h-80">
                        <img
                          src={photo.thumbnailSrc}
                          alt={photo.alt}
                          loading="lazy"
                          className={`h-full w-full ${photo.objectFit === "cover" ? "object-cover" : "object-contain"} object-center transition duration-500`}
                        />
                      </div>
                      <p className="px-4 py-2 text-sm leading-5 text-amber-950/75">{photo.caption}</p>
                    </motion.button>
                  ))}
                </motion.div>
              ) : (
                <div className="rounded-2xl border border-dashed border-amber-800/25 bg-white/35 p-8 text-center text-amber-950/65">
                  Photos for this tab can be added in <code className="rounded bg-amber-100 px-1">src/data/photoGallery2.ts</code>.
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
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
