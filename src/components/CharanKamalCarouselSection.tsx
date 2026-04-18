import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import charanKamalImage from "@/assets/IMG-20210508-WA0006.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    image: charanKamalImage,
    caption: "चरण कमल तेरे धोय धोय पीवां मेरे सतगुरु दीन दयाला",
  },
];

const CharanKamalCarouselSection = () => {
  return (
    <section id="charan-kamal" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="चरण कमल"
          subtitle="भावपूर्ण स्मरण"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.caption}>
                  <div className="overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-gold">
                    <img
                      src={slide.image}
                      alt={slide.caption}
                      className="h-[520px] w-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="bg-background/95 px-6 py-4 text-center">
                      <p className="font-display text-lg text-foreground">{slide.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 bg-background/90" />
            <CarouselNext className="right-3 bg-background/90" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default CharanKamalCarouselSection;
