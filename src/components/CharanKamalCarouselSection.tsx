import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import swamijiImage from "@/assets/swamiji-photo.jpg";

const CharanKamalCarouselSection = () => {
  return (
    <section id="charan-vandan" className="bg-gradient-spiritual py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Charan-Vandan"
          subtitle="In endless gratitude at the lotus feet of Gurudev"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-primary/20 shadow-[0_18px_45px_rgba(110,60,15,0.25)]"
          >
            <img
              src={swamijiImage}
              alt="Pujya Swamiji"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-primary/20 bg-background/90 p-6 md:p-8 shadow-[0_15px_35px_rgba(86,46,11,0.14)]"
          >
            <p className="font-display text-2xl md:text-3xl leading-relaxed text-foreground text-center md:text-left">
              गुरुदेव आपके चरणों में नत-शिर, कृतज्ञ-हृदय और समर्पित-जीवन।
            </p>
            <p className="mt-4 font-body text-muted-foreground leading-relaxed text-base md:text-lg text-center md:text-left">
              Your grace is our refuge, your words are our path, and your lotus feet remain our eternal pilgrimage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CharanKamalCarouselSection;
