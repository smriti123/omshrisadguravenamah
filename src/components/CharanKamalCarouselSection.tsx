import swamijiImage from "@/assets/swamiji-photo.jpg";

const shlokaLines = [
  "हे शंकर-रूप! हे वेदांत-मूर्ति!",
  "हे ब्रह्मसूत्र, उपनिषद, भगवद्गीता, रामायण व भागवत के मूर्तिमान स्वरूप!",
  "हमारे चित्त के परमाश्रय!",
  "आध्यात्मिक जगत के किसी भी प्रश्न का उत्तर आपके हस्ताक्षर के बिना अपूर्ण रहेगा...",
  "ॐ पूर्णमदः पूर्णमिदं...",
];

const CharanKamalCarouselSection = () => {
  return (
    <section id="charan-vandan" className="bg-gradient-spiritual">
      <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
        <div className="h-[50vh] md:h-screen">
          <img
            src={swamijiImage}
            alt="Pujya Swamiji"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex h-auto items-center justify-center bg-background/95 px-6 py-12 text-center md:h-screen md:px-12 lg:px-16">
          <p className="font-display text-3xl leading-relaxed text-foreground md:text-4xl lg:text-5xl">
            {shlokaLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharanKamalCarouselSection;
