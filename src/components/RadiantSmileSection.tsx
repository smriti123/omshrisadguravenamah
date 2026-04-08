import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import smile1 from "@/assets/smile1.jpg";
import smile2 from "@/assets/smile2.jpg";
import smile3 from "@/assets/smile3.jpg";
import smile4 from "@/assets/smile4.jpg";

const photos = [smile1, smile2, smile3, smile4];

const RadiantSmileSection = () => {
  return (
    <section id="radiant-smile" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title="Radiant Smile" subtitle="The smile that touched millions of hearts" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-10">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="overflow-hidden rounded-2xl shadow-lg aspect-[3/4]"
            >
              <img
                src={src}
                alt={`Radiant smile ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RadiantSmileSection;
