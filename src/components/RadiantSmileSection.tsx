import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import smile1 from "@/assets/smile1.jpg";
import smile2 from "@/assets/smile2.jpg";
import smile3 from "@/assets/smile3.jpg";
import smile4 from "@/assets/smile4.jpg";
import best from "@/assets/gallery/best.jpg";
import diw from "@/assets/gallery/diw.jpg";
import smile7 from "@/assets/smile7.jpg";
import smile8 from "@/assets/smile8.jpeg";
import smile9 from "@/assets/smile9.jpeg";
import smile10 from "@/assets/smile10.jpg";

const photos = [
  { src: smile1, caption: "प्रसन्नाननं नीलकण्ठं दयालम्‌ । प्रिय शंकरं सर्वनाथं भजामि ॥", objectPosition: "top" },
  { src: smile2, caption: "ॐ प्रसन्न चित्ताय नमः ।", objectPosition: "top" },
  { src: smile3, caption: "🕉️श्री प्रमोदनाय नमः।(जो सदा प्रसन्न हैं वो प्रमोदन: ।)", objectPosition: "top" },
  { src: smile4, caption: "ॐ आनन्द स्वरूपाय नमः ।", objectPosition: "top" },
  { src: best, caption: "", objectPosition: "center" },
  { src: diw, caption: "", objectPosition: "center" },
  { src: smile7, caption: "", objectPosition: "top" },
  { src: smile8, caption: "श्री नन्दनाय नमः। जो अन्य को प्रसन्नचित्त करता है वो नन्दन: ऐसे हमारे प पू श्री गुरुवर्याय नमः।", objectPosition: "center", objectFit: "contain" },
  { src: smile9, caption: "", objectPosition: "center", objectFit: "contain" },
  { src: smile10, caption: "", objectPosition: "top" },
];

const RadiantSmileSection = () => {
  return (
    <section id="radiant-smile" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title="Namami-Chittchorkam" subtitle="The smile that touched millions of hearts" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-10">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={photo.src}
                  alt={`Radiant smile ${i + 1}`}
                  className="w-full h-full hover:scale-105 transition-transform duration-500 bg-primary/5"
                  style={{
                    objectPosition: photo.objectPosition,
                    objectFit: (photo.objectFit ?? "cover") as React.CSSProperties["objectFit"],
                  }}
                />
              </div>
              {photo.caption && (
                <div className="bg-primary/10 px-3 py-2 text-center">
                  <p className="text-xs md:text-sm text-primary font-medium leading-relaxed">{photo.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RadiantSmileSection;
