import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import photo1 from "@/assets/gallery/photo-1.jpg";

const galleryPhotos = [
  { id: 1, src: photo1, caption: "Gurudev with devotees" },
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Photo Gallery"
          subtitle="Cherished moments captured in the divine presence of Gurudev"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-card border border-gold/20 shadow-gold cursor-pointer"
            >
              <img src={photo.src} alt={photo.caption} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-warm-brown/70 z-10" />
              <p className="absolute bottom-4 left-4 right-4 text-cream font-body text-sm z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
