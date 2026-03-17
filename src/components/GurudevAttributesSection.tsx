import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const GurudevAttributesSection = () => {
  return (
    <section id="attributes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="गुरुदेव के दिव्य गुण"
          subtitle="Divine attributes that adorned our beloved Gurudev"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-48 rounded-2xl overflow-hidden border border-gold/30 shadow-gold group hover:shadow-xl transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 to-gold/10" />
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="font-display text-3xl font-bold text-center text-primary transform group-hover:scale-110 transition-transform">
                हृदय सम्राट
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-48 rounded-full overflow-hidden border border-gold/30 shadow-gold group hover:shadow-xl transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 to-saffron/10" />
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="font-display text-3xl font-bold text-center text-secondary transform group-hover:scale-110 transition-transform">
                वसंत मूर्ति
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-48 rounded-xl overflow-hidden border border-gold/30 shadow-gold group hover:shadow-xl transition-all transform rotate-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-saffron/10" />
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="font-display text-3xl font-bold text-center text-accent transform group-hover:scale-110 transition-transform">
                कृपा सिंधु
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-48 rounded-xl overflow-hidden border border-gold/30 shadow-gold group hover:shadow-xl transition-all transform -rotate-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold/10" />
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="font-display text-3xl font-bold text-center text-primary transform group-hover:scale-110 transition-transform">
                ज्ञान गंगा
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-48 rounded-3xl overflow-hidden border border-gold/30 shadow-gold group hover:shadow-xl transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-maroon/10" />
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="font-display text-3xl font-bold text-center text-secondary transform group-hover:scale-110 transition-transform">
                भक्ति सागर
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative h-48 rounded-2xl overflow-hidden border border-gold/30 shadow-gold group hover:shadow-xl transition-all transform rotate-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-gold/10" />
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="font-display text-3xl font-bold text-center text-accent transform group-hover:scale-110 transition-transform">
                प्रेम स्वरूप
              </h3>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 font-body text-muted-foreground italic"
        >
          These divine qualities continue to inspire us on the path of dharma
        </motion.p>
      </div>
    </section>
  );
};

export default GurudevAttributesSection;
