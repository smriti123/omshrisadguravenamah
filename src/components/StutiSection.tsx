import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import GyannishthaCard from "@/components/GyannisthaCard";

const stutiNames = [
  "ॐ ॐकाराय नमः ।",
  "ॐ चिन्मयानन्द शिष्याय नमः ।",
  "ॐ अन्तःसाक्षिणे नमः ।",
  "ॐ आनन्द स्वरूपाय नमः ।",
  "ॐ अन्धकार विनाशाय नमः ।",
  "ॐ अनुष्ठान प्रियाय नमः ।",
  "ॐ अभय स्वरूपाय नमः ।",
  "ॐ अपराजिताय नमः ।",
  "ॐ अद्वितीयाय नमः ।",
  "ॐ उदार हृदयाय नमः ।",
  "ॐ उत्साह वर्धकाय नमः ।",
  "ॐ एकान्त प्रियाय नमः ।",
  "ॐ कालातीताय नमः ।",
  "ॐ करुणा सागराय नमः ।",
  "ॐ कर्म प्रियाय नमः ।",
  "ॐ काव्य प्रियाय नमः ।",
  "ॐ क्रीडा प्रियाय नमः ।",
  "ॐ कृषि प्रियाय नमः ।",
  "ॐ कृतात्मने नमः ।",
  "ॐ कृतकृत्याय नमः ।",
  "ॐ गम्भीराय नमः ।",
  "ॐ गङ्गा प्रियाय नमः ।",
  "ॐ गुणातीताय नमः ।",
  "ॐ गौ प्रियाय नमः ।",
  "ॐ तपस्विने नमः ।",
  "ॐ तापनाशनाय नमः ।",
  "ॐ तत्त्वान्वेषिणे नमः ।",
  "ॐ तीर्थ स्वरूपाय नमः ।",
  "ॐ दानवीराय नमः ।",
  "ॐ योगिने नमः ।",
  "ॐ दृढ विश्वासाय नमः ।",
  "ॐ द्वन्द्वातीताय नमः ।",
  "ॐ धीमते नमः ।",
  "ॐ धैर्य प्रदाय नमः ।",
  "ॐ निरपेक्षाय नमः ।",
  "ॐ प्रयागराज प्रियाय नमः ।",
  "ॐ प्रसन्न चित्ताय नमः ।",
  "ॐ पुरुषोत्तमाय नमः ।",
  "ॐ प्रकृति प्रियाय नमः ।",
  "ॐ बहु भक्ताय नमः ।",
  "ॐ ब्रह्मनिष्ठाय नमः ।",
  "ॐ भाष्यकार प्रियाय नमः ।",
  "ॐ भक्त वत्सलाय नमः ।",
  "ॐ भक्ति प्रियाय नमः ।",
  "ॐ भयनाशनाय नमः ।",
  "ॐ मधुर स्वभावाय नमः ।",
  "ॐ मृदु स्वर प्रियाय नमः ।",
  "ॐ मातृभूमि प्रियाय नमः ।",
  "ॐ मितभाषिणे नमः ।",
  "ॐ राष्ट्रगौरवाय नमः ।",
  "ॐ राष्ट्रभाषा विदुत्तमाय नमः ।",
  "ॐ विशालाय नमः ।",
  "ॐ विशाल हृदयाय नमः ।",
  "ॐ विनोद प्रियाय नमः ।",
  "ॐ विवेकिने नमः ।",
  "ॐ वाग्मिने नमः ।",
  "ॐ शिवभक्ताय नमः ।",
  "ॐ शिवस्वरूपाय नमः ।",
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
  "ॐ संन्यासिने नमः ।",
  "ॐ समाधिशीलाय नमः ।",
  "ॐ स्वयं तेजस्विने नमः ।",
  "ॐ स्मित भाषिणे नमः ।",
  "ॐ सन्तुष्टाय नमः ।",
  "ॐ सर्वहित चिन्तकाय नमः ।",
  "ॐ सुदृढाय नमः ।",
  "ॐ सरल स्वभावाय नमः ।",
  "ॐ संस्कृत भाषा विदुत्तमाय नमः ।",
  "ॐ साधवे नमः ।",
  "ॐ स्थितप्रज्ञाय नमः ।",
  "ॐ सन्त प्रियाय नमः ।",
  "ॐ सहनशीलाय नमः ।",
  "ॐ सद्गुरु प्रियाय नमः ।",
  "ॐ सर्वगुण सम्पन्नाय नमः ।",
  "ॐ श्रोत्रियाय नमः ।",
  "ॐ क्षमाशीलाय नमः ।",
  "ॐ ज्ञानमूर्तये नमः ।",
  "ॐ ध्यान प्रियाय नमः ।",
  "ॐ धर्मप्रियाय नमः ।",
  "ॐ वेदान्त वेद्याय नमः ।",
  "ॐ छिन्न संशयाय नमः ।",
  "ॐ जितेन्द्रियाय नमः ।",
  "ॐ जीवन मुक्ताय नमः ।",
  "ॐ जित क्रोधाय नमः ।",
  "ॐ जनप्रियाय नमः ।",
  "ॐ समबुद्धये नमः ।",
  "ॐ महर्षये नमः ।",
  "ॐ गुण ग्राहिणे नमः ।",
  "ॐ पवित्राय नमः ।",
  "ॐ ऊर्जिताय नमः ।",
  "ॐ स्वयं ज्योतिषे नमः ।",
  "ॐ गुण सागराय नमः ।",
  "ॐ राजनीति शास्त्र प्रियाय नमः ।",
  "ॐ मोक्ष प्रदाय नमः ।",
  "ॐ सच्चिदानन्द स्वरूपाय नमः ।",
  "ॐ निरञ्जनाय नमः ।",
  "ॐ नित्य शुद्ध बुद्ध मुक्त स्वरूपाय नमः ।",
  "ॐ श्री सद्गुरवे नमः ।",
  "ॐ शिवाय नमः ।",
];

const aartiVerses = [
  {
    lines: [
      "आरती सदगुरु सुबोधानंदा, मंगल मूरती आनंदकंदा ।",
      "आरती सदगुरु की ।।",
    ],
  },
  {
    lines: [
      "भाल विभूति छटा शुभ निर्मल, प्रेम सुधार्णव निरुपम निष्कल,",
      "कौशेय वसन स्मित मुख चंदा, आरती सदगुरु सुबोधानंदा ।",
      "आरती सदगुरु की ।।",
    ],
  },
  {
    lines: [
      "ब्रह्म उपनिषद् गीता के ज्ञाता, सिद्धबाड़ी आश्रम मन राता,",
      "गुरुदेव आपके श्री चिन्मयानंदा, आरती सदगुरु सुबोधानंदा ।",
      "आरती सदगुरु की ।।",
    ],
  },
  {
    lines: [
      "शिव स्वरूप शंकर के सेवक, भक्त वृंद शिष्यों के खेवक,",
      "बही अजस्र ज्ञान की गंगा, आरती सदगुरु सुबोधानंदा ।",
      "आरती सदगुरु की ।।",
    ],
  },
  {
    lines: [
      "करुणा सागर साधक हितकर, शास्त्र प्रमाण ज्ञान यज्ञ रुचिकर,",
      "मूर्तिमंत मानहु श्रुति छंदा, आरती सदगुरु सुबोधानंदा ।",
      "आरती सदगुरु की ।।",
    ],
  },
  {
    lines: [
      "देखि हिमालय गंग तट रीझे, कृपा दृष्टि अब गुरुवर कीजे,",
      "शरणागत हूँ ज्ञान अखंडा, आरती सदगुरु सुबोधानंदा ।",
      "आरती सदगुरु की ।।",
    ],
  },
];

const shraddhanjaliIntro = `आज २७ सितंबर २०२१ को ब्रह्मलीन स्वामी श्री सुबोधानन्द सरस्वती जी के प्रथम निर्वाण दिवस पर स्वामी जी की प्रेरणा और उनके आशीर्वाद से श्री स्वामी जी के स्नेह व कृपापात्र शिष्य आचार्य राममिलन मिश्र निवासी प्रयागराज द्वारा लिखित प्रस्तुत वाङ्मयी श्रद्धांजलि सादर समर्पित है, श्री गुरूजी की कृपा हम सब शिष्यों पर सतत बनी रहे।`;

const shraddhanjaliPoem = `
"हरिॐ"
।।श्रीगुरुभ्यो नमः।।

है भक्ति भाव सम्मान भरा,
यह शीश आपके चरणों में ।
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१।।

गौरांग देह मुख पद्म सदृश,
आभान्वित वलय चमकता है ।
गाम्भीर्य ज्ञान का प्रतिपल ही,
दर्शन सौंदर्य झलकता है ।।
हे सुन्दरतम् हे दिव्य पुरुष
त्रैलोक्य आपके चरणों में ।
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।२।।

कौशेयाम्बर भूषित सुदेह,
निर्मल तन मन अरु वाणी है ।
जिनके अनुसार सदा रहतीं,
वो उमा रमा ब्रह्माणी हैं ।।
जिह्वा में वाणी का निवास
सब सिद्धि आपके चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।३।।

है देह मृदुल अरु मृदु स्वभाव,
मधुरा वाणी आत्मीय भाव।
तुम सहज सरल अति सरस शांत,
गुरुतत्व मूर्ति अविचल स्वभाव ।।
करुणापूरित हृदयांगण है,
है शान्ति आपके चरणों में।
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।४।।

अध्यात्म जगत के सूर्य देव,
कमनीय और वरणीय एव।
हे यतिवरेण्य हे नर विशेष,
पूजित तुमसे देवाधिदेव।।
जो ध्यानतत्व जो पूज्य तत्व
गुरुदेव आपके चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।५।।

तुम शास्त्र पंथ वेदान्त पथिक,
गीता पुराण के ज्ञाता हो ।
मानस रस के तुम रसिक भ्रमर,
ऋषि परम्परा संधाता हो।।
मुनियों जैसे तत्वान्वेषण
का ज्ञान आपके चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।६।।

तुम लक्ष कोटि में दुर्लभ मणि,
सद्रत्न विधाता सृष्टी के।
हो ब्रह्मज्ञान की सुगम सरणि,
अरु विषय आन्तरिक दृष्टी के।।
अध्यात्म मार्ग जाना यदि हो
बैठो श्री गुरु के चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।७।।

भारतके गौरव पुत्र तथा ।
भारती तुम्हारी माता हैं।
संस्कृत संस्कृति संस्कार प्रेम
की वह ही भाग्य विधाता हैं।।
शाश्वत चैतन्यज्ञान भी है
हो ध्यान आपके चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।८।।

शिवशंकर महादेव स्वामी
गौरा वल्लभ भव अखिलेश्वर।
हैं इष्ट आपके सर्वश्रेष्ठ
जो परंपिता हैं जगदीश्वर।।
शिवभक्ति चाहता यदि कोई,
है प्राप्त आपके चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।९।।

उस ऋषि प्रणीत सिद्धान्तों का,
अक्षरशः तत्व समझते हो ।
दैवीय भावना से भावित,
सब मन की बात समझते हो।।
अन्तर्यामी अन्तर्वासी
सब शक्ति आपके चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१०।।

चिन्मय सच्चिदानन्द घन के
चिद्रूप रूप के रूपक हो ।
वन्दित वेदों के दिव्य ज्ञान
के आत्मरूप के द्योतक हो।।
निजरूप जानने हेतु सुनो
रुक जाओ श्री गुरु चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१०।।

सुंदर स्वरूप तव ध्यान रूप,
शिव रूप मनोहर लगता है ।
माथे पर चंदन का त्रिपुंड,
शिव सदृश सुहाना लगता है।।
शिव रूप अपार भरी करुणा
गुरुदेव आपके चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।११।।

अर्धोन्मीलित नेत्रों की भी
ध्यायित छवि शंकर सदृश दिखे।
गुरुकुल की परंपरा से भी,
वह ब्रह्म ज्ञान पल्लवित दिखे ।।
उस ब्रह्म ज्ञान के साधन हित,
चिन्तन रख श्रीगुरु चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१२।।

अभिनन्दन है अरु वन्दन है,
आनन्द रूपगुरु प्रतिमा का ।
जो सत् स्वरूप जो चित् स्वरूप
उस गुरुस्वरूप की कृति मा का।।
हे निर्विकार हे गुणातीत,
साष्टांग दंडवत चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१३।।

अज्ञान नष्ट करने वाले,
भर हृदय ज्ञान की धारा से ।
सब कलुष विनष्ट करो क्षण में,
अब मुक्त करो आंधियारा से ।।
हम भी अनन्य हम भी सेवक,
हो गये शरण इन चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१४।।

सद्बोध कराने वाले हो,
अज्ञान मिटाने वाले हो।
सब पाप ताप संताप सहित,
अभिमान हटाने वाले हो।।
आनन्दोदधि करुणासागर
सब निहित आपके चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१५।।

यतिराज सुबोधानन्द नाम,
उस दिव्य धाम का वाचक है।
जहं परं शान्ति विचरण करती,
कैवल्य जहां भी याचक है।
उस परंशान्ति को यदि चाहो,
गिर जाओ श्री गुरु चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१६।।

है भक्ति ज्ञान वैराग्य निलय
सद्गुरु का कमल हृदय सुंदर।
परमेश्वर का भी है आश्रय,
सद्गुरु का कमल हृदय सुंदर।।
देवों तीर्थों का अधिष्ठान
मिलता श्री गुरु के चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१७।।

चिन्मयानंद के स्नेह शिष्य,
परमात्मा के संवाहक हैं।
अपने शिष्यों के अभिभावक
जगतीतल ज्ञान प्रसारक हैं।।
हे महापुरुष हे जगदीपक
संसार आपके चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१८।।

नवक्रांति उपनिषद में करके,
उस ज्ञानतत्व को जगा दिए।
जो किया नहीं अब तक कोई,
जग में वह दीपक जला दिए।।
उस तमान्धता की निगरक लव
गुरुदेव आपके चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।१९।।

उस सिद्ध हिमाचल बाड़ी में,
रहकर सिद्धियां सहेज गये।
निज गुरु की शिक्षा को भी तुम
जन जन शिष्यों तक भेज गये।।
शिक्षा का सार समझने को,
वन्दन करना गुरु चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।२०।।

सब दुखी आपके जाने से
विह्वल व्याकुल गुरुजापी हैं।
पर पता नहीं हमको इतना
गुरु निकट सदा सब व्यापी हैं।।
हम ध्यान लगाकरके देखें
सब भक्ति भाव से चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।२१।।

निर्वाण दिवस का यह निशीथ,
सहसा उर को झकझोर दिया।
उस अनहोनी ने सबके ही
मन दुखसागर में बोर दिया।।
तब व्यथित 'राम' ने की अपनी
काव्यांजलि अर्पित चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।२२।।

यद्यपि प्रत्यक्ष नहीं गुरु अब
पर सूक्ष्मरूपधर रहते हैं।
अपने भक्तों का ध्यान सदा
वे तद्वत् ही तो रखते हैं।
आश्रय हम सबके गुरू परं
श्रद्धांजलि उनके चरणों में,
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।२३।।

हैं पुण्यवान हम सब गुरुवर,
जो सद्गुरु का संश्रयण मिला।
है अहोभाग्य अपनी सबको,
जो सद्गुरु का संवरण मिला।।
है वरदहस्त गुरु का हमपर
हम विनत रहें गुरु चरणों में
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।२४।।

संसार अपार कृपा गुरु की
जो सहज भाव से चलते हैं।
संकट अनेक इस जीवन में,
सब गुरू कृपा से कटते हैं।।
आत्मिक संलग्नाभाव रहे,
मम श्रद्धांजलि श्रीचरणों में।
श्रद्धा के सुमन समर्पित हैं,
गुरुदेव आपके चरणों में।।२५।।

(यह रामकृत सुबोधश्रद्धांजलि काव्यांश श्री गुरु जी को समर्पित हो।)
।।श्रीगुरुभ्यो नमः।।
"हरिॐ"
`;

const shraddhanjaliStanzas = shraddhanjaliPoem
  .trim()
  .split("\n\n")
  .filter(Boolean);

// ── Card 1 : Ashtottara Shatanamavali ────────────────────────────────────────
const StutiCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleNames = isExpanded ? stutiNames : stutiNames.slice(0, 12);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-xl bg-background border border-gold/20 h-full"
    >
      <h3 className="font-display text-xl font-bold text-primary text-center mb-6">
        अष्टोत्तरशतनामावली
      </h3>

      <div className="grid grid-cols-1 gap-1">
        {visibleNames.map((name, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.01 }}
            className="flex items-start gap-3 py-1.5 border-b border-gold/10 last:border-0"
          >
            <span className="font-body text-muted-foreground text-xs min-w-[2.5rem]">
              {String(index + 1).padStart(3, "0")}.
            </span>
            <span className="font-body text-foreground text-sm leading-relaxed">
              {name}
            </span>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-5 mx-auto flex items-center gap-2 text-xs font-body text-primary hover:text-primary/80 transition-colors px-4 py-2 rounded-lg border border-gold/20 hover:border-gold/40"
      >
        {isExpanded ? (
          <>
            <span>Show less</span>
            <ChevronUp size={14} />
          </>
        ) : (
          <>
            <span>Read more ({stutiNames.length - 12} more names)</span>
            <ChevronDown size={14} />
          </>
        )}
      </button>
    </motion.div>
  );
};

// ── Card 2 : Aarti ────────────────────────────────────────────────────────────
const AartiCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.1 }}
    className="p-6 rounded-xl bg-background border border-gold/20 h-full"
  >
    <h3 className="font-display text-xl font-bold text-primary text-center mb-2">
      आरती
    </h3>
    <p className="text-center text-xs text-muted-foreground mb-6">
      ।। ॐ श्री सदगुरुवे नमः ।।
    </p>

    <div className="space-y-5">
      {aartiVerses.map((verse, vi) => (
        <div key={vi} className="border-b border-gold/10 last:border-0 pb-4 last:pb-0">
          {verse.lines.map((line, li) => (
            <p
              key={li}
              className={`font-body text-sm leading-relaxed text-center ${
                line.startsWith("आरती सदगुरु की")
                  ? "text-primary font-medium mt-1"
                  : "text-foreground"
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>

    <p className="text-right text-xs text-muted-foreground mt-6 italic">
      ~ डॉ॰ सीमा मिश्रा, कानपुर
    </p>
  </motion.div>
);

// ── Card 3 : Shraddhanjali Kavya ──────────────────────────────────────────────
const ShraddhanjaliCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleStanzas = isExpanded ? shraddhanjaliStanzas : shraddhanjaliStanzas.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="p-6 rounded-xl bg-background border border-gold/20 h-full"
    >
      <h3 className="font-display text-xl font-bold text-primary text-center mb-3">
        श्रद्धांजलि काव्य
      </h3>

      <p className="text-xs text-muted-foreground text-center leading-relaxed mb-6">
        {shraddhanjaliIntro}
      </p>

      <div className="space-y-4">
        {visibleStanzas.map((stanza, index) => (
          <div
            key={index}
            className="border-b border-gold/10 last:border-0 pb-4 last:pb-0"
          >
            <p className="font-body text-sm leading-7 text-center whitespace-pre-line text-foreground">
              {stanza}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-5 mx-auto flex items-center gap-2 text-xs font-body text-primary hover:text-primary/80 transition-colors px-4 py-2 rounded-lg border border-gold/20 hover:border-gold/40"
      >
        {isExpanded ? (
          <>
            <span>Show less</span>
            <ChevronUp size={14} />
          </>
        ) : (
          <>
            <span>Read more ({shraddhanjaliStanzas.length - 6} more sections)</span>
            <ChevronDown size={14} />
          </>
        )}
      </button>
    </motion.div>
  );
};

// ── Card 4 : Placeholder ──────────────────────────────────────────────────────
const PlaceholderCard = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.15 }}
    className="p-6 rounded-xl bg-background border border-gold/20 border-dashed h-full flex flex-col items-center justify-center min-h-[200px]"
  >
    <h3 className="font-display text-xl font-bold text-primary text-center mb-3">
      {title}
    </h3>
    <p className="text-xs text-muted-foreground text-center italic">
      Content coming soon…
    </p>
  </motion.div>
);

// ── Pages: [[Card1, Card2], [Card3, Card4]] ───────────────────────────────────
const pages = [
  [<StutiCard key="stuti" />, <AartiCard key="aarti" />],
  [
    <ShraddhanjaliCard key="shraddhanjali" />,
    <PlaceholderCard key="c4" title="भजन" />,
  ],
];

// ── Main section ──────────────────────────────────────────────────────────────
const StutiSection = () => {
  const [page, setPage] = useState(0);

  return (
    <section id="stuti" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Stuti"
          subtitle="108 divine names, Aarti and devotional compositions in reverence to Pujya Swamiji"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {pages[page].map((card) => card)}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setPage(0)}
            disabled={page === 0}
            className="p-2 rounded-full border border-gold/20 text-muted-foreground hover:text-foreground hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                page === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-gold/20 text-muted-foreground hover:text-foreground"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage(1)}
            disabled={page === 1}
            className="p-2 rounded-full border border-gold/20 text-muted-foreground hover:text-foreground hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-2">
          Page {page + 1} of {pages.length}
        </p>
      </div>
    </section>
  );
};

export default StutiSection;
