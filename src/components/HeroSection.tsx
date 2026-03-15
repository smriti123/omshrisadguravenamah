import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import swamijiPhoto from "@/assets/swamiji-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background image */}
      <img
        src={heroBg}
        alt="Divine light"
        className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="absolute inset-0 bg-warm-brown/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-3xl">
        
        {/* Swamiji Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-6 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gold/40 shadow-gold">
          
          <img
            src={swamijiPhoto}
            alt="Pujya Swami Subodhanandaji"
            className="w-full h-full object-cover" />
          
        </motion.div>

        <p className="font-body text-gold-light text-lg tracking-widest uppercase mb-4">

        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">ॐ श्री सद्गुरवे नमः

        </h1>
        <p className="font-body text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-8">

        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#gallery"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm hover:bg-primary/90 transition-colors shadow-gold">
            
            View Gallery
          </a>
          <a
            href="#talks"
            className="px-8 py-3 rounded-lg border border-gold/40 text-cream font-body text-sm hover:bg-cream/10 transition-colors">
            
            Watch Talks
          </a>
        </div>
      </motion.div>
    </section>);

};

export default HeroSection;