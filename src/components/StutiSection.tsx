import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

const stutiNames = [
  "ॐ ॐकाराय नमः ।",
  "ॐ चिन्मयानन्द  शिष्याय नमः ।",
  "ॐ अंतसाक्षिणे नमः ।",
  "ॐ आनन्द स्वरूपाय नमः ।",
  "ॐअंधकार विनाशाय नमः ।",
  "ॐ अनुष्ठान प्रियाय नमः ।",
  "ॐ अभय स्वरूपाय नमः ।",
  "ॐ अपराजिताय नमः ।",
  "अद्वितीयाय नमः ।",
  "ॐ उदारहृदयाय नमः ।",
  "ॐ उत्साह वर्धकाय नमः ।",
  "ॐ एकान्त प्रियाय नमः ।",
  "ॐ कालातीताय नमः ।",
  "ॐ करुणा सागराय नमः ।",
  "ॐ कर्म प्रियाय नमः ।",
  "ॐ काव्य प्रियाय नमः ।",
  "क्रिडा प्रियाय  नमः ।",
  "ॐ कृषि प्रियाय नमः ।",
  "ॐ कृतात्मने नमः ।",
  "ॐ कृतकृत्याय नमः ।",
  "ॐ गंभीराय नमः ।",
  "ॐ गंगा प्रियाय नमः ।",
  "ॐ गुणातीताय नमः ।",
  "ॐ गौ प्रियाय नमः ।",
  "ॐ तपस्विने नमः ।",
  "ॐ तापनाशनाय नमः ।",
  "ॐ तत्त्वान्वेषणाय नमः ।",
  "ॐ तीर्थ स्वरूपाय नमः ।",
  "ॐ दानवीराय नमः ।",
  "ॐ योगिने नमः ।",
  "ॐ दृढ विश्वसाय नमः ।",
  "ॐ द्वन्द्वातीताय नमः ।",
  "ॐ‌ धीमते नमः ।",
  "ॐ धैर्य प्रदाय नमः ।",
  "ॐ निरपेक्षाय नमः ।",
  "ॐ प्रयागराज प्रियाय नमः ।",
  "ॐ प्रसन्न चित्ताय नमः ।",
  "ॐ पुरुषोत्तमाय नमः ।",
  "ॐ प्रकृति प्रियाय नमः ।",
  "ॐ बहुभक्ताय नमः ।",
  "ॐ ब्रह्मनिष्ठाय नमः ।",
  "ॐ भाष्यकार प्रियाय नमः ।",
  "ॐ भक्त वत्सलाय नमः ।",
  "ॐभक्ति प्रियाय नमः ।",
  "ॐ भयनाशनाय नमः ।",
  "ॐ मधुर स्वभावाय नमः ।",
  "ॐ मृदु स्वर प्रियाय नमः ।",
  "ॐ मातृभूमि प्रियाय नमः ।",
  "ॐ मितभाषिणे नमः ।",
  "ॐ राष्ट्रगौरवाय नमः ।",
  "ॐ राष्ट्र भाषा विदुत्तमाय नमः ।",
  "ॐ विशालाय नमः ।",
  "ॐ विशाल हृदयाय नमः ।",
  "ॐ विनोद प्रियाय नमः ।",
  "ॐ विवेकिने नमः ।",
  "ॐ वाग्मिने नमः ।",
  "ॐ शिवभक्ताय नमः ।",
  "ॐ शिवस्वरुपाय नमः ।",
  "ॐ शान्ति प्रदाय नमः ।",
  "ॐ शास्त्र तत्त्वज्ञाय नमः ।",
  "ॐ शब्दपतये नमः ।",
  "ॐ शिष्य प्रियाय नमः ।",
  "ॐ शिष्य हित चिन्तकाय नमः ।",
  "ॐ शास्त्रार्थ प्रियाय नमः ।",
  "ॐ शिव प्रियाय नमः ।",
  "ॐ संगीत प्रियाय नमः ।",
  "ॐ सुशीलाय नमः ।",
  "ॐ सुबोधाय नमः ।",
  "ॐ संन्यासीने नमः ।",
  "ॐ समाधिशीलाय नमः ।",
  "ॐ स्वयं तेजस्विने नमः ।",
  "ॐ स्मित भाषिणे नमः ।",
  "ॐ संतुष्टाय नमः ।",
  "ॐ सर्वहित चिन्तकाय नमः ।",
  "ॐ सुदृढाय  नमः ।",
  "ॐ सरल स्वभावाय नमः ।",
  "ॐ संस्कृत भाषा विदुत्तमाय नमः ।",
  "साधवे नमः ।",
  "ॐ स्थितप्रज्ञाय नमः ।",
  "ॐ संत प्रियाय नमः ।",
  "ॐ सहनशीलाय नमः ।",
  "ॐ सद्गुरु प्रियाय नमः ।",
  "ॐ सर्वगुण संपन्नाय नमः ।",
  "ॐ श्रोत्रियाय नमः ।",
  "ॐ क्षमाशीलाय नमः ।",
  "ॐ ज्ञानमूर्तये नमः ।",
  "ॐ ध्यान  प्रियाय नमः ।",
  "ॐ धर्मप्रियाय नमः ।",
  "ॐ वेदान्त वेद्याय नमः ।",
  "ॐ छिन्न संशयाय नमः ।",
  "ॐ जितेन्द्रियाय नमः ।",
  "ॐ जीवन मुक्ताय नमः ।",
  "ॐ जीत क्रोधाय नमः ।",
  "ॐ जनप्रियाय नमः ।",
  "ॐ समबुद्धये नमः ।",
  "ॐ महर्षये नमः ।",
  "ॐ गुण ग्राहिणे नमः ।",
  "ॐ पवित्राय नमः ।",
  "ॐ उर्जिताय नमः ।",
  "ॐ स्वयं ज्योतिषे नमः ।",
  "ॐ गुण सागराय नमः ।",
  "ॐ राजनीति शास्त्र प्रियाय नमः ।",
  "ॐ मोक्ष प्रदाय नमः ।",
  "ॐ सच्चिदानन्द स्वरूपाय नमः ।",
  "ॐ निरंजनाय नमः ।",
  "ॐ नित्य शुद्ध बुद्ध मुक्त स्वरूपाय नमः ।",
  "ॐ श्री सद् गुरवे नमः ।",
  "ॐ शिवाय नमः",
];

const StutiCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleNames = isExpanded ? stutiNames : stutiNames.slice(0, 12);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-xl bg-background border border-gold/20 max-w-3xl mx-auto"
    >
      <h3 className="font-display text-2xl font-bold text-primary text-center mb-6">
        अष्टोत्तरशतनामावली
      </h3>

      <div className="grid grid-cols-1 gap-2">
        {visibleNames.map((name, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
            className="flex items-start gap-3 py-2 border-b border-gold/10 last:border-0"
          >
            <span className="font-body text-muted-foreground text-sm min-w-[3rem]">
              {String(index + 1).padStart(3, '0')}=
            </span>
            <span className="font-body text-foreground text-base leading-relaxed">
              {name}
            </span>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6 mx-auto flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 transition-colors px-4 py-2 rounded-lg border border-gold/20 hover:border-gold/40"
      >
        {isExpanded ? (
          <>
            <span>Show less</span>
            <ChevronUp size={16} />
          </>
        ) : (
          <>
            <span>Read more ({stutiNames.length - 12} more names)</span>
            <ChevronDown size={16} />
          </>
        )}
      </button>
    </motion.div>
  );
};

const StutiSection = () => {
  return (
    <section id="stuti" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Stuti"
          subtitle="108 divine names in reverence to Pujya Swamiji"
        />
        <StutiCard />
      </div>
    </section>
  );
};

export default StutiSection;
