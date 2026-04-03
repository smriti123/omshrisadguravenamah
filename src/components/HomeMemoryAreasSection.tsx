import { motion } from "framer-motion";

import pic1 from "@/assets/gallery/photo-1.jpg";
import pic2 from "@/assets/gallery/photo-5.jpg";
import pic3 from "@/assets/gallery/photo-10.jpg";
import pic4 from "@/assets/gallery/v7.jpeg";
import pic5 from "@/assets/gallery/Gurudev4.jpg";
import pic6 from "@/assets/gallery/Last.jpeg";

type MemoryArea = {
  title: string;
  subtitle: string;
  image: string;
};

const memoryAreas: MemoryArea[] = [
  { title: "Samadhi Seva", subtitle: "Sacred daily rituals", image: pic1 },
  { title: "Tapasya", subtitle: "Stillness and sadhana", image: pic2 },
  { title: "Parampujya Darshan", subtitle: "Blessed moments", image: pic3 },
  { title: "Mahasamadhi", subtitle: "Reverence and remembrance", image: pic4 },
  { title: "Guru Bhakti", subtitle: "Grace in action", image: pic5 },
  { title: "Antim Smriti", subtitle: "Last available photographs", image: pic6 },
];

const HomeMemoryAreasSection = () => {
  return (
    <section className="py-16" style={{ background: "linear-gradient(180deg, hsl(35 58% 88%) 0%, hsl(35 54% 84%) 100%)" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.22em] uppercase mb-3" style={{ color: "rgba(160,90,16,0.7)" }}>
            Glimpses · स्मरण क्षेत्र
          </p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#7a3a00", fontFamily: "serif" }}>
            6 Memory Areas on Home Page
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {memoryAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-xl overflow-hidden border shadow-sm"
              style={{ borderColor: "rgba(180,100,20,0.25)", background: "rgba(255,245,230,0.8)" }}
            >
              <div className="bg-[rgba(255,245,228,0.7)]">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full aspect-[16/10] object-contain object-center p-2"
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-base font-semibold" style={{ color: "#7a3a00" }}>{area.title}</h3>
                <p className="text-sm" style={{ color: "rgba(110,55,16,0.85)" }}>{area.subtitle}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMemoryAreasSection;
