import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const quotes = [
  {
    text: "जीवभाव का अनुभव इस प्रकार होता है कि मैं कर्म का कर्ता हूं, मेरे बिना यह कर्म नहीं होता, इसलिए इसका श्रेय और फल मुझे मिलना चाहिए। उसमें कोई बाधा डालता है तो बुरा लगता है। भगवान कहते हैं कि तुम इन वृत्तियों से निकल नहीं पाते तो कोई बात नहीं। अपने को भक्त बना दो, मेरा सेवक बनकर कर्म करो। प्रभु की प्रीति के लिया सारी चेष्टाएँ होए यह प्रयास करो। यह विश्वास रखो कि प्रभु के सेवक का कभी अहित नहीं हो सकता।......",
    context: "परम पूज्य स्वामीजी",
  },
  {
    text: "आत्मदेव को छोड़कर कहीं भी अगर जीवन का समाधान दिखता है तो वह एक मिथ्या प्रत्यय है, गलत समझ है। और जब तक यह गलत समझ हमारे चित्त से निकल न जाए, तो बहिर्मुखता कैसे जाएगी? समाधान अगर प्रसिद्धि में दिखता है तो प्रसिद्ध लोगों की हालत देख लो। उस रस्ते पे चढ़ने से पहले उन्हें देख लिया जाए जो उस रस्ते पे चल रहें हैं। जगत में अपने कर्तव्य निभाते जाओ पर जगत में अपना समाधान मत खोजो।...",
    context: "केनोपनिषद २००६ प्रवचन-परम पूज्य स्वामीजी",
  },
  {
    text: "Service to others is the highest form of worship.",
    context: "On selfless service",
  },
  {
    text: "Love is not a feeling, it is your very existence.",
    context: "Bhagavad Gita commentary",
  },
];

const QuotesSection = () => {
  return (
    <section id="quotes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Gurudev's Wisdom"
          subtitle="Timeless teachings that illuminate the path of dharma"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-xl bg-card border border-gold/20 shadow-gold"
            >
              <span className="absolute top-4 left-6 text-gold/30 text-5xl font-display">"</span>
              <p className="font-body text-foreground text-lg italic leading-relaxed mb-4 relative z-10">
                {q.text}
              </p>
              <cite className="font-body text-sm text-muted-foreground not-italic">
                — {q.context}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
