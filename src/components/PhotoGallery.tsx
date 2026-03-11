import { motion } from "framer-motion";
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

const galleryPhotos = [
  { id: 1, src: photo1, caption: "Gurudev with devotees" },
  { id: 2, src: photo2, caption: "Gurudev delivering discourse" },
  { id: 3, src: photo3, caption: "Gurudev - a divine portrait" },
  { id: 4, src: photo4, caption: "Gurudev in the Himalayas" },
  { id: 5, src: photo5, caption: "Gurudev smiling" },
  { id: 6, src: photo6, caption: "Gurudev in contemplation" },
  { id: 7, src: photo7, caption: "Gurudev radiating joy" },
  { id: 8, src: photo8, caption: "Gurudev with garland" },
  { id: 9, src: photo9, caption: "Gurudev in meditation" },
  { id: 10, src: photo10, caption: "Gurudev in the mountains" },
  { id: 11, src: photo11, caption: "Gurudev at sunset" },
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Photo Gallery"
          subtitle="Cherished moments captured in the divine presence of Gurudev"
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-card border border-gold/20 shadow-gold cursor-pointer break-inside-avoid"
            >
              <img src={photo.src} alt={photo.caption} className="w-full h-auto block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-warm-brown/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
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
