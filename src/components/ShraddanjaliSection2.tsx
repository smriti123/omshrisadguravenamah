import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Languages, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import scannedLetter from "@/assets/Swamiji.jpg.jpg";

type Tribute = {
  name: string;
  message: string;
  translation?: string;
  isScannedLetter?: boolean;
};

const tributes: Tribute[] = [
  {
    name: "Brahamleen Swami Adhyatmanandaji",
    message: "",
    isScannedLetter: true,
  },
  {
    name: "Swami Bodhatmananda Saraswati , Rishikesh-Uttarkashi",
    message: `विवेकबुद्धियुक्त्या हि ज्ञातमात्मानमद्वयम् । ब्रह्मातिरिक्तं बाधेन विमुक्तश्च विमुच्यते ।। "यतो वाचो निवर्तन्ते । अप्राप्य मनसा सह।" It is difficult to describe Pujya Swamiji, his greatness, his love for scriptures and above all his depth to analyze any topic whether it was Vedanta, Dharma Shashtra, Politics or Social issues. Swamiji could open any word and speak for long without any diversion. Swamiji’s Mahasamadhi is a great loss for many sadhakas and serious students of Vedanta. Always indebted to him for all his teachings and love that he showered on me. I learnt a lot from Pujya Swamiji in particular Shankara Bhasya study/ teaching and also Ramayana interpretations etc. Many many Pranams to Pujya Swamiji.`,
    translation: `"पूज्य स्वामीजी का वर्णन करना अत्यंत कठिन है — उनकी महानता, शास्त्रों के प्रति उनका प्रेम, और किसी भी विषय — चाहे वेदांत हो, धर्मशास्त्र हो, राजनीति हो या सामाजिक मुद्दे — उनका विश्लेषण करने की गहराई अतुलनीय थी। स्वामीजी किसी भी शब्द को खोलकर बिना विषयांतर हुए घंटों बोल सकते थे। उनकी महासमाधि अनेक साधकों और वेदांत के गंभीर विद्यार्थियों के लिए अपूरणीय क्षति है। उनकी शिक्षाओं और मुझ पर बरसाए गए उनके स्नेह के लिए मैं सदा ऋणी रहूँगा। पूज्य स्वामीजी से मैंने विशेष रूप से शंकर भाष्य का अध्ययन-अध्यापन और रामायण की व्याख्याएँ सीखीं। पूज्य स्वामीजी को कोटि-कोटि प्रणाम।.`,
  },
   {
    name: "Pandjitji Rammilan Mishraji ",
    message: `चिन्मय मिशन उत्तर भारत के मुख्य आचार्य तपोमूर्ति वेदान्त के अधिकारी विद्वान  शास्त्रनिष्ठ ,सतत धर्मारूढ़ परंब्रह्मण्य गो ब्राह्मण तथा वेद वेदांग वेदांत शास्त्रों तथा गीता ,श्रीमद्भागवत महापुराण   श्रीरामचरित के प्रतिष्ठित प्रवक्ता सर्वजनस्नेही मृदु तथा दयालु हृदय शिवजी के अनन्य भक्त,चिन्मयमिशन परिवार के ,भक्तों के तथा शिष्य समुदाय के परंहितैषी, प्रयागराज में श्रीअखिलेश्वर महादेव मंदिर को शास्त्रीयविधान से निर्माण तथा प्रतिष्ठा कराने वाले,सर्वदा शास्त्रालोडन में संलग्न रहने वाले , आध्यात्मिकशक्तिसम्पन्न , परिब्राजक स्वामी सुबोधानन्द सरस्वती का आकस्मिक बैकुंठवास हम सबके लिए अत्यन्त दुखदायी है ।आज उनके प्रस्थान के बाद हम सब अनाथ हो गये उनके महाप्रयाण से सनातन संस्कृति की अपूर्णीय क्षति हुई है , हम सबने एक ऐसा व्यक्तित्व गंवाया है जो कभी शताब्दियों या सहस्त्राब्दियों में भी दुर्लभ होता है ।स्वामी श्री की आत्मा को चिरशान्ति  पूर्वक  परमात्मा के चरणों में शाश्र्वत वास हो साथ ही उनके वियोग से संतप्त समस्त भक्त समुदाय को इस अपार दुख सहने की सामर्थ्य परमात्मा प्रदान करें ।
श्री स्वामी जी के चरणों में अनन्त श्रद्धाञ्जलि निवेदित है।।
ॐ द्यौ:शान्तिरन्तरिक्ष गुं शान्ति: पृथिवीशान्तिराप: शान्तिरोषधय:शान्ति:। वनस्पतय:शान्तिर्विश्वेदेवा:शान्तिर्ब्रह्मशान्ति:सर्वगुं शान्ति:शान्तिरेवशान्ति:सा मा शान्तिरेधि।।
।।हरि:ॐ शान्ति: शान्ति: शान्ति:।।
`,
    translation: `Chinmaya Mission North India’s chief acharya, an ascetic embodiment of tapas, an authoritative scholar of Vedanta, steadfast in the scriptures, ever established in dharma, supremely devoted to Parabrahman, cows, and Brahmins, and a renowned expounder of the Vedas, Vedangas, Vedanta Shastras, the Gita, the Shrimad Bhagavata Mahapurana, and Shri Ramcharit; affectionate toward all, gentle and compassionate at heart, an exclusive devotee of Lord Shiva, a supreme well-wisher of the Chinmaya Mission family, devotees, and the community of disciples; the one who caused the construction and consecration of Shri Akhileshwar Mahadev Temple in Prayagraj according to scriptural विधि; ever engaged in the study of the scriptures, spiritually endowed, the wandering monk Swami Subodhananda Saraswati’s sudden departure to Vaikuntha is extremely painful for all of us.

Today, after his departure, we all have become orphaned. By his great passing, Sanatana culture has suffered an irreparable loss. We all have lost such a personality who is rare even in centuries or millennia.

May Shri Swamiji’s soul abide eternally in everlasting peace at the feet of the Supreme Lord, and at the same time, may the Supreme grant strength to the entire community of devotees, afflicted by his separation, to bear this immense sorrow.

Infinite श्रद्धांजलि is offered at the holy feet of Shri Swamiji.

Om. May there be peace in the heavens, peace in the mid-space, peace on earth; peace in the waters, peace in the herbs; peace in the vegetation, peace among all the gods, peace in Brahman, peace in all; peace only, peace indeed—may that peace come unto me.

Hari Om. Peace, peace, peace.`,
  },
  {
    name: "Virah Stuti",
    message: `हे शंकर-रूप! हे वेदांत-मूर्ति!
हे ब्रह्मसूत्र ,उपनिषद, भगवद्गीता, रामायण व भागवत के मूर्तिमान स्वरूप!
मेरे चित्त के परमाश्रय!
आध्यात्मिक जगत के किसी भी प्रश्न का उत्तर आपके हस्ताक्षर के बिना अपूर्ण रहेगा...

ॐ पूर्णमदः पूर्णमिदं...`,
  },

  {
    name: " ",
    message: `What a disciple..unparallel ..unimaginable..incredible..
Encyclopedia of Spirituality..who churned out Disciples after Disciples from Sidhbari for what Chinmaya Mission is today..
He was the most knowledgeable,  humility personified n unmatchable Guru Bhakti..most soft spoken , ever smiling , who enjoyed participation of every devotee's experiences n feelings..extremely very good listener..
It is none else than our Guru Swami Subodanandji but for whom whatever little we grasped according to our transformer's capacities we feel indebted n are grateful to Swami Subodanandji. 
He has made an indelible mark in our lives..no matter he is not physically with us ..so what ?
He is with us in our heart of hearts .
The very reference , the very nectar n inimitable honey soaked voice heard of HIM from any past discourses..oh my Guru..I shed tears silently which wets my clothes out of reverence.
The nostalgia of wonderful n gifted time spent in Gyan Yagna Halls n also the precious nights spent listening to his experiences of HIS Gurudev ..our Gurudev serves as enormous strength to combat any situation of life.
HIS teachings rings through our ears n gives us enormous bliss.
HE was extremely soothing..HE was a tranquilizer for every devotee.
HE was an embodiment of Behavioural Science. 
It is HE who quietly taught how to inculcate in ourselves the nectar of spirituality in day to day behaviour !!
We are one of the most fortunate human beings who have seen Swami Subodanandji as our God in blood n flesh..
Now imagine ..when we feel so ecstatic of our Guru Swami Subodanandji then listening to HIS Guru's ( Swami Chinmayanandjee) incessant praise, his devotion, his Guru Bhakti . Which we have physically seen when all of a sudden at 3 AM in Sidhbari HE ( Swami Subodanandji) will get up n tell us n other devotees sitting n listening to his spirituality..COME ON ..Gurudev के दर्शन कर के आते हैं..and we all seated disciples follow HIM in that pitch dark, quiet n aromatic night ..the aroma of all flowers which we used to pass through to SAMADHI OF PUJYA GURUDEV  n stand quietly with closed eyes for indefinite time behind HIM ..while HE was communicating silently with HIM ...the omnipresence  of GOD ..Pujya Gurudev to another GOD Swami Subodanandji..oh my Lord ..how fortunate we were !
Our Sashtang prostrations to my Guru..to your Guru..no no..OUR GURU SWAMI SUBODANANDJI..you are a torch which will enliven our hearts ever !!
`,
    translation: `Chinmaya Mission North India’s chief acharya, an ascetic embodiment of tapas, an authoritative scholar of Vedanta, steadfast in the scriptures, ever established in dharma, supremely devoted to Parabrahman, cows, and Brahmins, and a renowned expounder of the Vedas, Vedangas, Vedanta Shastras, the Gita, the Shrimad Bhagavata Mahapurana, and Shri Ramcharit; affectionate toward all, gentle and compassionate at heart, an exclusive devotee of Lord Shiva, a supreme well-wisher of the Chinmaya Mission family, devotees, and the community of disciples; the one who caused the construction and consecration of Shri Akhileshwar Mahadev Temple in Prayagraj according to scriptural विधि; ever engaged in the study of the scriptures, spiritually endowed, the wandering monk Swami Subodhananda Saraswati’s sudden departure to Vaikuntha is extremely painful for all of us.

Today, after his departure, we all have become orphaned. By his great passing, Sanatana culture has suffered an irreparable loss. We all have lost such a personality who is rare even in centuries or millennia.

May Shri Swamiji’s soul abide eternally in everlasting peace at the feet of the Supreme Lord, and at the same time, may the Supreme grant strength to the entire community of devotees, afflicted by his separation, to bear this immense sorrow.

Infinite श्रद्धांजलि is offered at the holy feet of Shri Swamiji.

Om. May there be peace in the heavens, peace in the mid-space, peace on earth; peace in the waters, peace in the herbs; peace in the vegetation, peace among all the gods, peace in Brahman, peace in all; peace only, peace indeed—may that peace come unto me.

Hari Om. Peace, peace, peace.`,
    
  },
  
  {
    name: "Mrs. Vijay Khanna, Jaipur",
    message: `अनगणित आँखों में मैंने स्वामीजी के प्रति अथाह भक्ति देखी है। और स्वामीजी! आपकी आँखों का गाम्भीर्य भी देखा है; आपकी परखनहारी, खोजी दृष्टि को निरखा है। सिद्धबाड़ी की तपोभूमि में — गुरुदेव के अनन्य शिष्य रूप में प्रखर सूर्य बनकर उभरे हैं आप। आपकी ज्ञानदृष्टि की किरणों में हम गुरुकुलवासी शिष्यों-साधकों की मलिनता धुलती रही; हमें पवित्रता और ऊर्ध्वमुखता की ओर उन्मुख करते हुए। आपका स्नेहसिक्त वात्सल्य और गम्भीर, गुंजायमान वाणी का आकर्षण — हम शिष्यों को ही नहीं, शिविर में आए साधकों को और ज्ञानयज्ञ में उपस्थित श्रोताओं को भी मंत्रमुग्ध करता रहा। आपका विद्युत-चुम्बकीय वाक्-बल उस ज्ञान का, उस सत्य का सदैव दिग्दर्शक बना — जिसकी शिष्यों को निरंतर अभीप्सा रहती है। हिमाचल की मनमोहक भूमि को गुरुदेव ने चिन्हित किया; वीर हनुमान की रक्षा में सौंपा; राम-राज्य जैसा वातावरण सम्पुष्ट किया। और स्वामी सुबोधानंदजी, आपने उसे तीर्थ बना दिया! आपके वहाँ रहने से केवल सिद्धबाड़ी ही नहीं, बल्कि हम साधकों के हृदय भी — जिनमें आप विराजमान हैं — तीर्थरूप हो गए हैं। नत हृदय से आपको भावभीनी श्रद्धांजलि और नमन! हरि ॐ`,
    translation: `In countless eyes I have seen immeasurable devotion towards Swamiji. And Swamiji — I have also witnessed the depth of your gaze, your perceptive and searching eyes. In the sacred land of Sidhbari, you have risen as a brilliant sun — the incomparable disciple of Gurudev. In the rays of your enlightened vision, the impurities of us Gurukulvasi disciples and seekers kept washing away, turning us towards purity and spiritual upliftment. Your tender, loving affection and the pull of your deep, resonant voice enchanted not just us disciples, but also the seekers who attended the camps and the listeners gathered at the Jnana Yagnas. Your electro-magnetic power of speech was always the guiding light of that knowledge, that truth — for which disciples always yearn. Gurudev identified the enchanting land of Himachal, entrusted it to the protection of brave Hanuman, and nurtured a Ram-Rajya-like atmosphere. And Swami Subodhanandaji, you made it a place of pilgrimage! Through your presence there, not only Sidhbari but also the hearts of us seekers — in which you reside — have become sacred pilgrimage sites. With a bowed heart, our heartfelt tribute and salutation! Hari Om`,
  },
  {
    name: "स्वामिनी विष्णुप्रियानंदा , सम्बलपुर, ओडिशा",
    message: `मेरे आचार्यजी ऐकधारा में ज्ञानी थे भक्त थे योगी थे महान साधु थे।वेदांत के सही जानकार थे।उपनिषद् हो रामायण हो या भागवत हो सब शास्त्रों के मर्म को सही समझाने वाले थे।शिव जी के परम भक्त थे।आदि गुरु शंकराचार्य जी, गोस्वामी तुलसीदास जी गुरुदेव, गुरूजी के प्रति असीम प्रेम और श्रद्धा थी।हामारा कोर्स के समय एक बार मैडिटेशन क्लास लिऐ थे एक क्लास काफी था।जिसमे सब आध्यात्मिक शक्ति जाग्रत हो सकता है स्वरूपवास्थान हो सकता है।बोलते थे साधु बनो कुछ बनो या ना।किसि का बात किसीको नहि बताते थे। बहुत सारे प्रतिभा के धनी थे। उनके अचानत चले जाने से बहुत कष्ट हुआ किन्तु वह और ब्यापक हो गए ।हमारे अंदर आगए । मेरे बाबा , माँ , गुरु है . उनका मागदर्शन अंदर से मिलता रहे। यही भगवान से पार्थना है।।`,
    translation: `My Acharyaji was simultaneously a Jnani, a Bhakta, a Yogi and a great Sadhu. He had true knowledge of Vedanta. Whether Upanishads, Ramayana or Bhagavat — he was adept at explaining the essence of all scriptures correctly. He was a supreme devotee of Lord Shiva. He had immense love and reverence for Adi Guru Shankaracharya, Goswami Tulsidas and Gurudev. During our course he once conducted a meditation class — just that one class was sufficient for all spiritual energy to awaken and for one to be established in one's true nature. He would say — become a Sadhu, become something or become nothing. He never revealed anyone's secrets. He was endowed with countless talents. His sudden departure caused great grief, yet he has become more pervasive — he has entered within us. He is my grandfather, my mother, my Guru. May his guidance continue to come from within — this is my prayer to God.`,
  },
  {
    name: "Shiv Kumar Iyer",
    message: `Today, one of the most prominent torch bearers of Pujya Gurudev Swami Chinmayananda ji has merged back into that self-effulgent flame! My mind is afresh with memories of Swamiji's numerous visits to our house over years; until I last met him in 2019 in Mumbai during his Bhiksha at my aunt's home. Swamiji's nectarine words are still ringing in my ears, and my eyes are still searching for that ever-smiling face with a glowing forehead that shone brilliantly through the three long strokes of Bhasma! 
  Pujya Swami Subodhanandaji was not just yet another sadhu... He was a walking talking smiling embodiment of God, wrapped with unique nuances that enchanted countless devotees to throng around him like bees to a Lotus flower! In His passing, the spiritual world has definitely lost an anchor; and personally our family has lost a Mahatma from whom we've drawn endless love, affection, blessings and guidance over the past 30+ years... From our childhood days when we would run helter-skelter in Sidhbari ashram during Pujya Gurudev's camps, we grew up seeing Swami Subodhananda ji as the loving guardian who paid minutest attention to the caretaking of Gurudev's beloved ashram. Those days when Ramayan was a superhit TV series, we would sit glued to the TV while pressing Swamiji's Feet and watching the episodes while Pujya Gurudev retired to His room. Swamiji would go into unfathomable depths of these glorious characters from our scriptures, and we would listen to him with rapt attention and awe! During the day, He would be always around Gurudev, on his toes, alert, sharp, vigilant and forever thinking ahead, knowing what to do before he is told. Years passed and as we grew up, we learned so much more about Swamiji's unflinching love for India, for her glory, and for her well-being. Swamiji's discussions on politics were never gossip like us, rather he would always try to understand and analyze the political situation in light of some spiritual principle or fundamental from the Shastras! Every discussion with Him would leave us enriched and blessed, and yearning for more! In His flawless, rich and soul-stirring Hindi, switching from the highest standpoint of Advaita Vedanta to the subtlest emotion & bhaav in Bhakti shastras like Ramcharitmaanas or Bhagavatam; Swamiji would carry the audience to such Himalayan heights, that after his lectures concluded people would prefer to remain silent & contemplate within for quite some time. Now that silence will stay forever....   
 The passing away of a Mahatma or Sannyasi is never mourned... rather it is celebrated; for it marks the end of their prarabdha with the physical body's limitations; and liberates them completely to unite with that Supreme One in whom they continuously reveled until they lived! As the eyes remained moist throughout the day, overwhelmed with shock and sadness, I have consoled myself to accept that when the spark merges back in the flame, it only shines brighter... Offering our heartfelt pranams & shraddhanjali at the Lotus Feet of Pujya Swami Subodhanandaji! Om Shantih!`   
,
  translation: `आज पूज्य गुरुदेव स्वामी चिन्मयानन्द जी के अत्यंत प्रमुख ज्योतिर्धरों में से एक पुनः उसी स्वयंप्रकाशित ज्योति में विलीन हो गए! मेरा मन आज भी स्वामीजी के वर्षों से हमारे घर पर हुए अनेक आगमन की स्मृतियों से ताज़ा हो उठा है; और अंततः 2019 में मुंबई में, जब मैं अपनी मौसी के घर उनके भिक्षा-प्रसंग में उनसे मिला था, वह अंतिम भेंट आज भी स्मरण में है। स्वामीजी के अमृतमय वचन आज भी मेरे कानों में गूंज रहे हैं, और मेरी आँखें अब भी उस सदैव मुस्कुराते मुखमण्डल को खोज रही हैं, जिसके तेजस्वी ललाट पर भस्म की तीन लंबी रेखाएँ अद्भुत आभा बिखेरती थीं।

पूज्य स्वामी सुबोधानन्दजी केवल एक और साधु मात्र नहीं थे... वे ईश्वर के चलते-फिरते, बोलते, मुस्कुराते साक्षात् स्वरूप थे, जिनकी अद्वितीय विशेषताएँ असंख्य भक्तों को ऐसे अपनी ओर आकर्षित करती थीं जैसे कमल के पुष्प पर मधुमक्खियाँ उमड़ आती हैं। उनके प्रस्थान से निश्चय ही आध्यात्मिक जगत ने एक दृढ़ आधारस्तम्भ खो दिया है; और व्यक्तिगत रूप से, हमारे परिवार ने ऐसे महात्मा को खो दिया है, जिनसे हमने पिछले 30 से अधिक वर्षों में अनंत प्रेम, स्नेह, आशीर्वाद और मार्गदर्शन पाया।

अपने बचपन के उन दिनों से, जब हम पूज्य गुरुदेव के शिविरों के दौरान सिद्धबाड़ी आश्रम में इधर-उधर दौड़ा करते थे, हम स्वामी सुबोधानन्द जी को उस स्नेहमय संरक्षक के रूप में देखते हुए बड़े हुए, जो गुरुदेव के प्रिय आश्रम की देखभाल के प्रत्येक सूक्ष्म पक्ष पर अत्यंत सावधानी से ध्यान देते थे। वे दिन, जब रामायण एक अत्यंत लोकप्रिय टीवी धारावाहिक था, हम सब टीवी से चिपककर बैठते, स्वामीजी के चरण दबाते हुए वे प्रसंग देखते, जबकि पूज्य गुरुदेव अपने कक्ष में विश्राम के लिए चले जाते। तब स्वामीजी हमारे शास्त्रों के उन गौरवपूर्ण चरित्रों की अगाध गहराइयों में उतर जाते, और हम उन्हें मंत्रमुग्ध होकर, अत्यंत श्रद्धा और विस्मय से सुनते रहते।

दिनभर वे गुरुदेव के आसपास ही रहते—सदैव तत्पर, सजग, तीक्ष्ण, सतर्क, और हर समय एक कदम आगे सोचते हुए; बिना कहे ही समझ जाते कि क्या करना है। समय बीतता गया और जैसे-जैसे हम बड़े हुए, हमने स्वामीजी के भारत के प्रति, उसकी महिमा के प्रति, और उसके कल्याण के प्रति उनके अटूट प्रेम को और गहराई से जाना। राजनीति पर स्वामीजी की चर्चाएँ हमारी तरह केवल गपशप नहीं होती थीं; वे सदैव किसी आध्यात्मिक सिद्धांत या शास्त्रों के किसी मौलिक तत्त्व के आलोक में राजनीतिक परिस्थितियों को समझने और विश्लेषित करने का प्रयास करते थे। उनके साथ होने वाली प्रत्येक चर्चा हमें समृद्ध, धन्य और और अधिक पाने की आकांक्षा से भर देती थी।

अपने निष्कलंक, समृद्ध और आत्मा को स्पर्श करने वाले हिंदी भाषणों में, वे अद्वैत वेदान्त की सर्वोच्च दृष्टि से लेकर भक्ति शास्त्रों जैसे रामचरितमानस और भागवतम् के सूक्ष्मतम भावों और रस तक, श्रोताओं को ऐसी हिमालय-समान ऊँचाइयों तक ले जाते थे कि उनके प्रवचन समाप्त होने के बाद लोग कुछ समय तक मौन रहकर भीतर ही भीतर चिंतन करना अधिक पसंद करते थे। अब वह मौन सदा के लिए रह जाएगा...

किसी महात्मा या संन्यासी के महाप्रस्थान पर शोक नहीं मनाया जाता... अपितु उसका उत्सव मनाया जाता है; क्योंकि वह उनके प्रारब्ध और देह की सीमाओं के अंत का सूचक होता है, और उन्हें पूर्णतया उस परम सत्ता में एकाकार कर देता है, जिसमें वे जीवनभर सतत रमे रहे। आज दिनभर मेरी आँखें आर्द्र रहीं, मन आघात और विषाद से भरा रहा; पर मैंने अपने को यह स्वीकार कर सांत्वना दी है कि जब चिन्गारी पुनः अग्नि में मिल जाती है, तब वह और भी अधिक प्रकाशमान हो उठती है...

पूज्य स्वामी सुबोधानन्दजी के श्रीचरणों में हमारी हृदयपूर्ण प्रणामांजलि एवं श्रद्धांजलि समर्पित है।
ॐ शान्तिः!`,
  },
  {
    name: " ",
    message: `nparallel Guru..Most loving Guru...Most soft spoken Guru...Most ...highly read Guru...Epitome of Simplicity..Guru...Never hurting Guru...inimitable Smiling Guru .....Laughing freely Guru ..who enjoyed every body's jokes ..Guru who was ...
Encyclopedia of Vedanta...
He was Guru's Guru !!
He was pet of H H Brahmaleen Gurudev !!
Guru who loved immaculate working n infallible presentation....Hecwas a Guru who had Hawk's eye !! 
Guru ..who always corrected sweetly....never ever hurting Guru.... A Guru..who .Never ever lost temper ....A Guru in whose mild scolding there was hidden love ....An insatiable hunger to learn ...Even at night 3 am he would ask रामचरितमानस or Geeta n tell particular shloka  n explain meaning n correct us without an iota of annoyance or arrogance ...a true Guru...A God in blood n Flesh  with whom we had umpteen opportunities to learn on the record n off the record...it was a real treat n privilege to serve him ...he would respect every human being beyond the person's comprehension.
A wonderful connoisseur of  food n spirituality ....Today's all Swamijees in different centres are flashes of HH Brahmaleen Swami Subodhanandjee!!
Par excellence in Hindi , English n many languages...27th September 2021...HH Swamijee's Holy Soul left n merged with HIS Favourite Lord of Lords who else other than MAHADEV !! One year passed but we neither think nor realise that HE is not with us ...HIS Pious soul is always with us !!
But honestly, let me tell you , we cry within ourselves ..HE left us much earlier than thought off !! Agreed God needed HIM..Gurudev needed HIM.....very honestly, Gurudev's Samadhi is missing him at 2 AM ....चलो मालिक से मिलने ।
हमारे प्रिय स्वामीजी , आप हमे, बिना बोले ,  चुपचाप , अकेले, बिलखते हुए  छोड़ गये और हां ये जरूर ध्यान है मुझे , जब जाते जाते कह गये, अब मै नही आ रहा ( इन्दौर)...तुम लोगो को सिध्दबाडी आना होगा ।
सही कहा स्वामीजी आपने ।।। हम आयेंगे। 
आपके चरणकमल मे शीश हमारा सदैव ।.हरीओम
`,
  },
  {
    name: "Dr. Manoj Khurana, Jaipur",
    message: `Poojya Swami ji was Divinity, Wisdom, Philosophy and Bliss personified. His every word and action was a teaching towards perfection. His dedication and commitment for the subject was unparalleled and worth inspiring. He revealed and lived Advait Darshan/Philosophy. His Himaliyan dedication for Pujya Gurudev, for scriptures, for Motherland, for Hindi and Sanskrit language, Right pronunciation of words and verses, His in-depth knowledge of each word and its etymology, His knowledge of grammar, His Communication skills, His oratory, His unique smile, His facial expressions, gestures and physical movements while delivering discourses, His interaction with seekers, His inspiring style of reflections on Vedantic principles, His tolerance for imperfections and weaknesses of others, His oceanic knowledge of almost all subjects, His in depth analysis of various political, economic, agricultural, defense, sports and other issues, His Hospitality, His Cleanliness, His Self Confidence, His open challenges on Vedantic Declarations were worth INSPIRING. He was a pilgrimage in himself and his visits to various centers were festivals and blessings for seekers. One very unique characteristic of His personality was giving attention and Love to everybody who came to him in a style that everyone realized he/she is paid extra care by Poojy Swami Ji. You made Sidhbari a home for many seekers. You transformed thousands of lives and families and your recorded teachings will still transform millions in time to come but your physical presence will be missed painfully. You were like a Pillar of Light in oceanic waves of ups and downs of lives for us. You were MOST-EXTRA-ORDINARY. You were BRAHMAN in physical form.`,
    translation: `पूज्य स्वामीजी दिव्यता, प्रज्ञा, दर्शन और आनंद की साक्षात मूर्ति थे। उनका हर वचन और हर कृत्य पूर्णता की ओर एक शिक्षा था। विषय के प्रति उनकी निष्ठा और समर्पण अतुलनीय और प्रेरणादायक था। उन्होंने अद्वैत दर्शन को जीया और प्रकट किया। पूज्य गुरुदेव के प्रति, शास्त्रों के प्रति, मातृभूमि के प्रति, हिंदी और संस्कृत भाषाओं के प्रति उनकी हिमालयी निष्ठा; प्रत्येक शब्द और उसकी व्युत्पत्ति का गहन ज्ञान; व्याकरण; संचार कौशल; वक्तृत्व; उनकी अनूठी मुस्कान; प्रवचन के दौरान भाव-भंगिमाएँ; साधकों के साथ संवाद; वेदांतिक सिद्धांतों पर उनके मनन; दूसरों की कमज़ोरियों के प्रति सहिष्णुता; लगभग सभी विषयों का सागर-गहन ज्ञान; आतिथ्य; स्वच्छता; आत्मविश्वास — सब कुछ अत्यंत प्रेरणादायक था। वे स्वयं एक तीर्थस्थान थे और विभिन्न केंद्रों पर उनकी यात्राएँ सभी साधकों के लिए उत्सव और आशीर्वाद का अवसर थीं। आप सबसे असाधारण थे। आप ब्रह्म के भौतिक स्वरूप थे।`,
  },
  {
    name: "Devotee",
    message: `Prostrations at the lotus feet of our most revered Brahmaleen His Holiness Swami Subodhanandaji. He is not with us physically, but he remains in our hearts forever and shows us the way — how to lead a spiritual and divine life amidst all people. We are among the most fortunate devotees who had the opportunity to listen to him personally. We feel his presence every moment. His ever-smiling face, measured tone, extremely soft-spoken manner, never hurting anyone — a wonderful, tolerant guide for all of us devotees. He lived exactly what he preached throughout his life. An ocean of knowledge, humanity personified — we were among thousands who learnt so much under his guidance, always striving to remain grounded. An orator par excellence — he had a wonderful ear for Hindustani classical music as well as Carnatic music. His loss for all devotees of Chinmaya Mission is immeasurable. Our Sashtang Prostrations to Him.`,
    translation: `ब्रह्मलीन परम पूज्य स्वामी सुबोधानंदजी के चरण-कमलों में साष्टांग प्रणाम। वे शारीरिक रूप से हमारे बीच नहीं हैं, किन्तु वे हमारे हृदयों में सदा विराजमान हैं और हमें मार्ग दिखाते हैं — लोगों के बीच रहते हुए आध्यात्मिक और दिव्य जीवन कैसे जिएँ। हम उन सौभाग्यशाली भक्तों में हैं जिन्हें उन्हें व्यक्तिगत रूप से सुनने का अवसर मिला। हम हर पल उनकी उपस्थिति अनुभव करते हैं। उनका सदा मुस्कुराता चेहरा, मापा हुआ स्वर, अत्यंत मृदुभाषी स्वभाव, कभी किसी को न कष्ट देना — हम भक्तों के लिए एक अद्भुत, सहिष्णु मार्गदर्शक। उन्होंने जीवनभर जो उपदेश दिया, वही जिया। ज्ञान के सागर, मानवता की मूर्ति — हम उन हज़ारों में थे जिन्होंने उनके मार्गदर्शन में बहुत कुछ सीखा। उत्कृष्ट वक्ता — हिंदुस्तानी शास्त्रीय संगीत और कर्नाटक संगीत दोनों में उनकी अभिरुचि अद्भुत थी। चिन्मय मिशन के सभी भक्तों के लिए उनकी क्षति अपूरणीय है। उन्हें साष्टांग प्रणाम।`,
  },
  {
    name: "Devotee",
    message: `In pain or in joy — "let the smile never leave you" is what you would always say. Met you as a 14-year-old and you became my guiding light — introducing me to our rich heritage, encouraging me to question and to know, loving unconditionally, caring, teaching, guiding, protecting, disciplining, showing how to lead, be independent and fearless while valuing interdependence — how to get up every time you fall, and how to strive towards becoming without forgetting your being. Forever grateful for your unconditional love, grace and guidance. Losing you has been the hardest thing to face in years, and getting through this sense of loss will not be easy. I know I will be watched over now. As they say — the farther I go, the nearer I shall be. Forever yours. Forever at your feet. Om!!`,
    translation: `दर्द में हो या खुशी में — "मुस्कान कभी न जाने देना" — यही आप सदा कहते थे। 14 साल की उम्र में आपसे मिली और आप मेरे पथ-प्रदर्शक बन गए — जिन्होंने हमारी समृद्ध विरासत से परिचित कराया, प्रश्न करने और जानने के लिए प्रेरित किया, बिना शर्त प्रेम किया, देखभाल की, सिखाया, मार्गदर्शन किया, रक्षा की, अनुशासित किया, नेतृत्व करना सिखाया — परस्परावलम्बन को महत्त्व देते हुए स्वतंत्र और निर्भीक रहना सिखाया — हर बार गिरने के बाद उठना सिखाया, और यह सिखाया कि अपने 'होने' को न भूलते हुए 'बनने' की ओर अग्रसर कैसे हों। आपके निःस्वार्थ प्रेम, कृपा और मार्गदर्शन के लिए सदा आभारी हूँ। आपका जाना इन वर्षों में सबसे कठिन सत्य है, और इस वियोग से उबरना आसान नहीं होगा। मुझे विश्वास है कि अब आप मुझ पर दृष्टि रखेंगे। जैसा कहते हैं — जितनी दूर जाऊँगी, उतनी ही निकट आऊँगी। सदा आपकी। सदा आपके चरणों में। ॐ!!`,
  },
  {
    name: "Devotee",
    message: `A pleasant Sunday morning suddenly became a day of deep gloom. Before I could step out for a walk, the phone rang — a bolt from the blue. The news was so shocking that it took a while to absorb. Pujya Swamiji was for us and our family a mentor, a guide, a philosophic companion — and most of all, his blessings on the younger generation can never be forgotten. We are in bereavement and will never forget his ever-smiling face and his memorable one-liners that kept us riveted. Every moment since, I reminisce about the countless hours he spent at our home, his private conversations and discourses full of profound wisdom and knowledge. He blessed us when we inaugurated our then-new Chinmaya centre in 2008, which has since prospered immensely through his divine blessings. At Kanpur, where he spent his formative years and which was a city he was particularly fond of, it will be difficult to plan a year without his two annual discourses and Jnana Yagnas — a tradition that paused only due to the Covid pandemic. Pujya Swamiji will forever live in our hearts. Om Shanti Om Shanti Om Shanti. 🙏`,
    translation: `एक सुहाना रविवार का प्रभात अचानक गहरे शोक का दिन बन गया। टहलने निकलने से पहले ही फ़ोन आया — एक अप्रत्याशित आघात। यह समाचार इतना स्तब्ध करने वाला था कि उसे स्वीकार करने में समय लगा। पूज्य स्वामीजी हमारे और हमारे परिवार के लिए एक मार्गदर्शक, एक दार्शनिक साथी थे — और सबसे बढ़कर, युवा पीढ़ी पर उनका आशीर्वाद अविस्मरणीय है। हम शोकाकुल हैं और उनका सदा मुस्कुराता चेहरा और उनकी प्रेरणादायी सूक्तियाँ कभी नहीं भूल सकते। उन्होंने 2008 में हमारे नए केंद्र के उद्घाटन पर आशीर्वाद दिया था, जो उनके दिव्य आशीर्वाद से अत्यंत समृद्ध हुआ है। कानपुर में — जो उनकी प्रिय नगरी थी — उनके वार्षिक प्रवचनों और ज्ञान यज्ञों के बिना वर्ष की कल्पना कठिन होगी। पूज्य स्वामीजी सदा हमारे हृदय में जीवित रहेंगे। ॐ शांति ॐ शांति ॐ शांति। 🙏`,
  },
  {
    name: "Devotee",
    message: `Heartfelt tribute to Pujya Guruji Swami Subodhanandaji. He was an admirable orator. His clarity and deep understanding of the Ramayana and Vedanta truly inspired me to study Vedanta at Sidhbari. His teachings have helped me immensely in going deeper into Sadhana. I am very grateful to him. He will always be alive in our hearts through his teachings. My Sashtang Pranams at his lotus feet.`,
    translation: `पूज्य गुरुजी स्वामी सुबोधानंदजी को भावभीनी श्रद्धांजलि। वे एक अद्भुत वक्ता थे। रामायण और वेदांत की उनकी स्पष्टता और गहरी समझ ने मुझे सिद्धबाड़ी में वेदांत का अध्ययन करने के लिए प्रेरित किया। उनकी शिक्षाओं ने मुझे साधना में और गहरे जाने में बहुत सहायता की है। मैं उनका अत्यंत आभारी हूँ। वे सदा उनकी शिक्षाओं के रूप में हमारे हृदयों में जीवित रहेंगे। उनके चरण-कमलों में साष्टांग प्रणाम।`,
  },
  {
    name: "Devotee",
    message: `I was among the fortunate ones blessed by Swamiji's presence since I was 3 years old. I would go with my parents to attend his lectures. Although at that young age I did not understand much, I was mesmerised by his speech and his charismatic personality. Swamiji would always greet me with a warm smile. He was always full of life, and being in his presence felt like being near the purest form of positivity. As an adult, when I began listening to his lectures more deeply, I felt truly guided. Whenever I was looking for answers, I would listen to one of his discourses — and it would feel as though, magically, he had read my mind and provided exactly the answers I was seeking. Swamiji, you will be dearly missed. Many pranams at your lotus feet. May you continue to guide us and shower us with your grace. Hari Om.`,
    translation: `मैं उन सौभाग्यशाली लोगों में से एक था जिन पर स्वामीजी की उपस्थिति का आशीर्वाद 3 वर्ष की आयु से रहा। मैं अपने माता-पिता के साथ उनके प्रवचनों में जाता था। हालाँकि उस छोटी उम्र में मैं अधिक नहीं समझ पाता था, उनके भाषण और उनके आकर्षक व्यक्तित्व ने मुझे मंत्रमुग्ध कर दिया था। स्वामीजी सदा मुझे गर्मजोशी से मुस्कुराकर स्वागत करते थे। वे सदा जीवन से भरपूर थे और उनके सान्निध्य में रहना सकारात्मकता के शुद्धतम रूप के पास होने जैसा था। जब मैं बड़ा हुआ और उनके प्रवचनों को गहराई से सुनने लगा, तो मुझे सच्चा मार्गदर्शन मिला। जब भी मैं उत्तरों की तलाश में होता, उनका कोई प्रवचन सुनता — और ऐसा लगता जैसे उन्होंने जादू से मेरे मन को पढ़ लिया हो और ठीक वही उत्तर दे दिया जो मैं खोज रहा था। स्वामीजी, आपकी बहुत कमी खलेगी। आपके चरण-कमलों में अनेक प्रणाम। आप हमें मार्गदर्शन देते रहें और कृपा बरसाते रहें। हरि ॐ।`,
  },
  {
    name: "Devotee",
    message: `I attended Swamiji's sessions on the Kathopanishad at Jaipur — the first day out of curiosity, as I had always found the subject difficult to comprehend. From the very next day I decided to attend all the sessions instead of going to university. Needless to say, the experience was deeply absorbing. I also joined the Bhiksha organised in his honour, to receive more blessings and hear more from him. He initiated discussions on economics, defence and various facets of life. He was erudite and had clear understanding on every aspect — truly amazing. Looking back, I feel it was preordained that I had the divine privilege to have known him — a God-sent opportunity. The university I kept visiting, but nothing could have compensated for the measure of his blessed love that I received. I feel most fortunate. May God and Pujya Gurudev bless his soul.`,
    translation: `मैंने जयपुर में स्वामीजी के कठोपनिषद् पर सत्र में भाग लिया — पहले दिन जिज्ञासावश, क्योंकि मुझे यह विषय सदा कठिन लगता था। अगले दिन से ही मैंने विश्वविद्यालय जाने के बजाय सभी सत्रों में भाग लेने का निर्णय कर लिया। कहना न होगा, अनुभव अत्यंत गहन और रोमांचक था। उनके सम्मान में आयोजित भिक्षा में भी सम्मिलित हुआ — अधिक आशीर्वाद पाने और उनसे और सुनने के लिए। उन्होंने अर्थव्यवस्था, रक्षा और जीवन के अनेक पहलुओं पर चर्चा आरम्भ की। वे विद्वान थे और हर विषय पर स्पष्ट समझ रखते थे — सच में अद्भुत। पीछे मुड़कर देखता हूँ तो लगता है, यह पूर्वनिर्धारित था कि मुझे उन्हें जानने का दिव्य सौभाग्य मिला — ईश्वर की भेजी हुई एक अनुपम भेंट। विश्वविद्यालय तो जाता रहा, किन्तु उनके आशीर्वाद-युक्त प्रेम की जो प्राप्ति हुई, उसकी भरपाई किसी से न होती। मैं अपने आप को अत्यंत भाग्यशाली मानता हूँ। ईश्वर और पूज्य गुरुदेव उनकी आत्मा को आशीर्वाद दें।`,
  },
  {
    name: "Devotee",
    message: `Pujya Swamiji was a most devoted disciple of Pujya Gurudev. Whenever Pujya Gurudev came to Sidhbari, it was Swami Subodhanandaji who would push his wheelchair — doing so with such devotion and pride. His teachings were extremely impactful and authentic. Swamiji loved the Upanishads and Bhashyas deeply. We will miss him greatly. At the same time, we must do much Sadhana to imbibe even a fraction of what came so naturally to Swami Subodhanandaji. Pujya Swamiji inspired countless young people to take Brahmachari and Sannyas Deeksha — a mammoth contribution to Rishi culture. We pray for his continued blessings.`,
    translation: `पूज्य स्वामीजी, पूज्य गुरुदेव के परम समर्पित शिष्य थे। जब भी पूज्य गुरुदेव सिद्धबाड़ी आते, स्वामी सुबोधानंदजी ही उनकी व्हीलचेयर धकेलते — और यह कार्य वे अत्यंत भक्ति और गर्व से करते थे। उनकी शिक्षाएँ अत्यंत प्रभावशाली और प्रामाणिक थीं। स्वामीजी उपनिषदों और भाष्यों से गहरा प्रेम रखते थे। उनकी बहुत कमी रहेगी। साथ ही हमें बहुत साधना करनी होगी कि स्वामी सुबोधानंदजी के लिए जो स्वाभाविक था, उसका एक अंश भी हम आत्मसात कर सकें। पूज्य स्वामीजी ने अनगिनत युवाओं को ब्रह्मचारी और संन्यास दीक्षा लेने के लिए प्रेरित किया — ऋषि संस्कृति में यह एक विशाल योगदान है। हम उनके निरंतर आशीर्वाद की प्रार्थना करते हैं।`,
  },
  {
    name: "Devotee",
    message: `Hari Om. Swamiji was a great disciple and devotee of Param Pujya Gurudev. Whenever there was a camp at Sidhbari, he would always enquire after the campers — whether they were comfortable, whether any help was needed. His Sannyas Deeksha was from Tamaraipakkam temple and he had great love for Chennai. Whenever we went to Sidhbari, we used to bring Prasad of our Lord Sarveswara for him. He kept the Sidhbari Ashram beautifully maintained and Gurudev's Mahasamadhi Sthal most sacred. He has now reached Gurudev's feet. Our Pranams and Prostrations to him. 🙏🙏`,
    translation: `हरि ॐ। स्वामीजी परम पूज्य गुरुदेव के महान शिष्य और भक्त थे। सिद्धबाड़ी में जब भी शिविर होता, वे शिविरार्थियों का हाल-चाल पूछते — कि वे आरामदायक हैं या नहीं, कोई सहायता चाहिए। उनकी संन्यास दीक्षा तमिलनाडु के तमराईपक्कम मंदिर से हुई थी और चेन्नई के प्रति उनका गहरा प्रेम था। जब भी हम सिद्धबाड़ी जाते, हमारे आराध्य सर्वेश्वर का प्रसाद उनके लिए ले जाते। उन्होंने सिद्धबाड़ी आश्रम को सुंदर रूप से संभाला और गुरुदेव के महासमाधि स्थल को अत्यंत पवित्र बनाए रखा। वे अब गुरुदेव के चरणों में पहुँच गए हैं। उन्हें हमारा प्रणाम और साष्टांग नमस्कार। 🙏🙏`,
  },
  {
    name: "Devotee",
    message: `Pujya Swamiji was an ocean of knowledge, and his deep understanding of the scriptures was unparalleled. Many seekers, Swamis and Brahmacharins were trained and guided by him. His Shastra-charcha will be greatly missed. Sidhbari will never be the same again. He was most loving and always enquired about our well-being and Sadhana whenever we met him there. It is a deep loss for Chinmaya Mission and for Sanatana Dharma. Pranam to Pujya Swamiji.`,
    translation: `पूज्य स्वामीजी ज्ञान के सागर थे और शास्त्रों की उनकी गहरी समझ अतुलनीय थी। अनेक साधकों, स्वामियों और ब्रह्मचारियों को उनके मार्गदर्शन में प्रशिक्षित किया गया। उनकी शास्त्र-चर्चा की बहुत कमी खलेगी। सिद्धबाड़ी अब पहले जैसी नहीं रहेगी। वे अत्यंत स्नेहशील थे और जब भी हम वहाँ मिलते, वे हमारे स्वास्थ्य और साधना के बारे में पूछते। यह चिन्मय मिशन और सनातन धर्म दोनों के लिए गहरी क्षति है। पूज्य स्वामीजी को प्रणाम।`,
  },
  {
    name: "Devotee",
    message: `A thousand salutations at the lotus feet of our Beloved Swamiji 🙏🙏. We have known Swamiji since 1993, visited many of his camps at Sidhbari, and had the honour of hosting him at our humble home in Vadodara on several occasions. It was always a pleasure and a delight to listen to Swamiji and to be in his divine presence. Our mind is flooded with so many cherished memories of him. It will be very difficult to live without him physically — the void will remain as long as we are alive. His voice was like a soothing balm, and his discourses had immense depth of knowledge; he was so full of devotion. He was Satchitananda Swarup — Shivoham. 🙏 Ashrupoorna Shraddhanjali and Naman 🙏 — Rama, Kamlesh and Family.`,
    translation: `हमारे प्रिय स्वामीजी के चरण-कमलों में सहस्र वंदन 🙏🙏। हम 1993 से स्वामीजी को जानते हैं, सिद्धबाड़ी में उनके अनेक शिविरों में भाग लिया है, और वडोदरा में हमारे साधारण घर पर कई बार उनकी अगवानी करने का सौभाग्य मिला। स्वामीजी को सुनना और उनके दिव्य सान्निध्य में रहना सदा आनंददायक अनुभव था। उनकी अनेक प्रिय स्मृतियाँ मन में उमड़ रही हैं। उनके बिना शारीरिक जीवन जीना अत्यंत कठिन होगा — यह रिक्तता जीवन भर रहेगी। उनकी वाणी एक शीतल मरहम की तरह थी और उनके प्रवचनों में ज्ञान की अगाध गहराई थी; वे भक्ति से परिपूर्ण थे। वे सच्चिदानंद स्वरूप थे — शिवोऽहम्। 🙏 अश्रुपूर्ण श्रद्धांजलि और नमन 🙏 — राम, कमलेश एवं परिवार।`,
  },
  {
    name: "Devotee",
    message: `Param Pujya Swami Ji Maharaj ke Shri-Charno mein koti-koti Pranam. I have no words to express how deeply saddened I am after hearing the news of Pujya Swamiji's Mahasamadhi. He was the crown jewel of Chinmaya Mission. Main apne Mahaan Swamiji ko punah punah Pranam karta hoon — saath hi mera samast parivar bhi koti-koti Pranam karta hai. His teachings and his Aashirwad will always remain with us. Jai Gurudev. Hari Om.`,
    translation: `परम पूज्य स्वामीजी महाराज के श्रीचरणों में कोटि-कोटि प्रणाम। पूज्य स्वामीजी की महासमाधि का समाचार सुनकर मैं कितना दुखी हूँ, यह शब्दों में कहना संभव नहीं। वे चिन्मय मिशन के मुकुटमणि थे। मैं अपने महान स्वामीजी को बार-बार प्रणाम करता हूँ — साथ ही मेरा समस्त परिवार भी कोटि-कोटि प्रणाम करता है। उनकी शिक्षाएँ और उनका आशीर्वाद सदा हमारे साथ रहेंगे। जय गुरुदेव। हरि ॐ।`,
  },
  
  {
    name: "Devotee",
    message: `Hari Om! I feel so blessed to have had the privilege of knowing you, learning from you, serving you and loving you. Your teachings, your love and your memories will always be with me. You will forever have a special place in my heart. Please accept my Pranam. Hari Om. With lots of love and regards.`,
    translation: `हरि ॐ! मैं अपने आप को धन्य समझता हूँ कि आपको जानने, आपसे सीखने, आपकी सेवा करने और आपसे प्रेम करने का सौभाग्य मिला। आपकी शिक्षाएँ, आपका प्रेम और आपकी स्मृतियाँ सदा मेरे साथ रहेंगी। आप मेरे हृदय में सदा एक विशेष स्थान रखते हैं। कृपया मेरा प्रणाम स्वीकार करें। हरि ॐ। बहुत सारे प्रेम और सादर।`,
  },
  {
    name: "Devotee",
    message: `Pujya Swamiji spent 39 years at the lotus feet of Gurudev at Sidhbari and, being one of his most beloved disciples, he seemed to be in a hurry to rejoin Gurudev, having completed his mission here so wonderfully well. An epitome of spiritual knowledge, Swamiji transmitted the Vedantic teachings through the simplest of methods. He is still with us through his available discourses. It is a joy to draw sustenance from him every day and to walk through life's journey in peace. Our Shat Shat Naman. 🙏🙏🙏🙏`,
    translation: `पूज्य स्वामीजी ने सिद्धबाड़ी में गुरुदेव के चरणों में 39 वर्ष बिताए और, उनके सबसे प्रिय शिष्यों में से एक होने के नाते, वे यहाँ अपना कार्य भली-भाँति पूर्ण करके गुरुदेव के पास लौटने की जल्दी में थे। आध्यात्मिक ज्ञान के एक आदर्श रूप, स्वामीजी ने वेदांतिक शिक्षाओं को अत्यंत सरल विधियों से प्रदान किया। वे अभी भी अपने उपलब्ध प्रवचनों के माध्यम से हमारे साथ हैं। प्रतिदिन उनसे पोषण ग्रहण करना और जीवन की यात्रा शांति से तय करना एक आनंद है। हमारा शत-शत नमन। 🙏🙏🙏🙏`,
  },
  {
    name: "Swati Jagdeep Shah, Ahmedabad",
    message: `हरि ॐ। ब्रह्मलीन पूज्य स्वामीजी, गुरुदेव का सान्निध्य प्राप्त करके आपने उनकी अप्रतिम सेवा की और गुरु-निष्ठा का श्रेष्ठ उदाहरण हमारे सामने रखा। गुरुदेव के प्रेमपात्र प्रिय शिष्य बने। हम सभी को प्रेम देने वाले, हमारे परम प्रिय विनम्र स्वामीजी — आप भले हमें छोड़कर गए, किन्तु हमारे हृदय से आपको कोई नहीं निकाल सकता। आत्मज्योति-स्वरूप आप, परमात्म-ज्योति में एकाकार हो गए। आपको कृतज्ञतापूर्वक सादर सप्रेम शत-शत नमन। और प्रार्थना — मेरे मन में श्रद्धा-दीप प्रज्वलित रखना, मन-मंदिर में अंधकार न रहे, ज्ञान का प्रकाश देते रहना — ऐसी कृपा और आशीर्वाद बरसाते रहना। वंदन बारम्बार, नमस्कारम्। ॐ॥`,
    translation: `Hari Om. Brahmaleen Pujya Swamiji — in the shelter of Gurudev's presence, you served him incomparably and set before us the finest example of Guru-nishtha (devotion to the Guru). You became Gurudev's most beloved disciple. You, who showered love on all of us — our most dear and humble Swamiji — though you have left us, no one can remove you from our hearts. You, who are the very light of the Self, have merged into the Supreme Light of the Paramatman. With gratitude, respect and love, our hundredfold salutations to you. And our prayer — keep the lamp of reverence burning in my mind; may no darkness remain in the temple of my heart; may you continue to shed the light of knowledge — bless us with such grace always. Salutations again and again, Namaskarams. Om.`,
  },
  {
    name: "SUNIL AGARWAL, JAIPUR",
    message: `Swamiji's mahasamadhi brings to an end an era resplendent with Vishudh Vedant Vichar Vimarsh. His abiding interest and knowledge of Vedant was iconic. He virtually and visibly reveled in Vedant. Although a Vedantic scholar, he was equally and easily erudite on a wide array of subjects including history and political science. He always loved and encouraged spiritual discussions and like a true teacher always answered all questions both meaningful as well as the mundane. His soft, gentle voice was mesmerizing even though the purity of his language was not always easy to grasp. But he would patiently and skillfully ensure that we all eventually understood. His keen intellect and photographic memory was a joy to behold. He encouraged us to retain our learning in the mind rather than on paper or phone. Before Swamiji, Manas and Bhagwat to us all were stories or Katha. His insightful and subtle exposition revealed the Vedantic principles embedded in these Grantham. The vast yawning void left by him is unlikely to be filled and we will always miss his physical presence. Swamiji you only taught us that this world is timeless and life will go on. True Swamiji but it will not be the same without you. My shat shat pranam to this Vedantic Vibhooti whose divine presence itself was a benevolent blessing. May we continue to be blessed and guided by him. Om shanti, shanti, shanti..`,
    translation: `स्वामीजी की महासमाधि शुद्ध वेदांत-विचार-विमर्श से जगमगाते एक युग के अंत का प्रतीक है। वेदांत के प्रति उनकी गहरी रुचि और ज्ञान अद्वितीय था। वे वेदांत में प्रत्यक्ष और दृश्यमान रूप से आनंदमग्न रहते थे। यद्यपि वे वेदांत के विद्वान थे, किन्तु इतिहास और राजनीति विज्ञान सहित अनेक विषयों पर वे समान रूप से और सहजता से पारंगत थे। वे सदा आध्यात्मिक चर्चाओं को प्रोत्साहित करते और एक सच्चे गुरु की भाँति हर प्रश्न का उत्तर देते — चाहे वह गहन हो या साधारण। उनकी कोमल, मृदु वाणी मनमोहक थी। उनकी भाषा की शुद्धता को पकड़ पाना सदा सरल न होता, किन्तु वे धैर्यपूर्वक यह सुनिश्चित करते कि हम सब अंततः समझ सकें। उनकी तीक्ष्ण बुद्धि और फोटोग्राफिक स्मृति देखकर आनंद आता था। वे हमें नोट्स की बजाय मन में ज्ञान संजोने के लिए प्रेरित करते। स्वामीजी से पहले मानस और भागवत हम अधिकांश लोगों के लिए केवल कथाएँ थीं। उनकी सूक्ष्म और अंतर्दृष्टिपूर्ण व्याख्या ने इन महान ग्रंथों में निहित वेदांतिक सिद्धांतों को प्रकट किया। इस वेदांत-विभूति को मेरा शत-शत प्रणाम। ॐ शांति, शांति, शांति।`,
  },
  {
    name: "Devotee",
    message: `Hari Om! my respectful shradhanjlis to Swamiji! Subodhanandji's talks on Bhagwat, Geeta & Ramayana are excellence! The real essence of Ramayana, I understood when I heard his Ramayana Gnyana Yagna Saptah in Dahisar Mumbai about15years or so bqck! The meaning of words Rama,Sita, Hanumanji etc from vedantic definitions! Otherwise I knew Ramayana as an Epic Story like majority of people & was was scarcely attending these Yagnas! Swamiji's sonorous voice was taking us on the flight of spitituality!We miss his physical presence! he was always cheerful & receptive to the devotees & their queries till late in the night!He never showed his sufferings due to health problem he had! Pray Parmeshwara to bestow Chir Shanti to his Aatma! Om Shanti Shant Shantihi!`,
    translation: `हरि ॐ! स्वामीजी को मेरी श्रद्धापूर्ण श्रद्धांजलि। स्वामी सुबोधानंदजी के भागवत, गीता और रामायण पर प्रवचन सच्चे अर्थों में उत्कृष्ट थे। रामायण का वास्तविक सार — मैंने पहली बार लगभग 15 वर्ष पूर्व दहीसर, मुंबई में उनके रामायण ज्ञान यज्ञ सप्ताह में सुना। राम, सीता और हनुमानजी जैसे नामों का वेदांतिक दृष्टिकोण से अर्थ — यह मुझे पहले कहीं नहीं मिला था। उससे पहले, अधिकांश लोगों की तरह, मैं रामायण को केवल एक महाकाव्य-कथा के रूप में जानता था और ऐसे यज्ञों में शायद ही जाता था। स्वामीजी की गूँजती वाणी हमें अध्यात्म की उड़ान पर ले जाती थी। उनकी शारीरिक उपस्थिति की बहुत कमी खलती है। वे सदा प्रसन्न रहते और भक्तों तथा उनके प्रश्नों के प्रति देर रात तक ग्रहणशील रहते। उन्होंने कभी अपनी स्वास्थ्य समस्याओं को प्रकट नहीं होने दिया। परमेश्वर उनकी आत्मा को चिर शांति प्रदान करें। ॐ शांति शांति शांतिः!`,
  },
  {
    name: "Devotee",
    message: `भौतिक शरीर से विलीन हुए ऋषिवर,
पर हृदय के पास हो — हमारे मध्य ही आत्म-रूप से,
गर कहीं भी हो पास।।

पथ जो आपने किया चयन,
हम भी पथिक हैं — यही आस है।
हर कर्म की प्रेरणा हैं आप,
हर विचार के विश्वास हो।।

🙏🌹🙏

हे गुरु-भ्रात, अलविदा कह रहे हैं सजल नयन —
प्रणाम! नमन! वंदन! सब तुम्हें है अर्पण। 🙏🌹`,
    translation: `O Sage, you have departed from the physical form,
Yet you are near the heart — present among us as the Self,
Wherever you may be.

The path that you have chosen,
We too are wayfarers — this is our hope.
You are the inspiration behind every action,
The faith behind every thought.

🙏🌹🙏

O Guru-brother, with tear-filled eyes we bid farewell —
Pranam! Naman! Vandan! All is offered unto you. 🙏🌹`,
  },
  {
    name: "Devotee",
    message: `अद्वितीय वक्ता, अत्यंत श्रेष्ठ एवं मधुर व्यक्तित्व, उच्च कोटि के विद्वान — यह रिक्तता भर पाना बहुत कठिन है। जीवन कितना क्षणभंगुर है! माँ गीता ने अपने लाडले को अपने पास बुला लिया — उन्हें हमसे अधिक आवश्यकता होगी। एक विद्यार्थी की भावभीनी भावांजलि। हे कृष्ण!`,
    translation: `An unparalleled orator, an extremely noble and gentle personality, a scholar of the highest order — filling this void will be very difficult. How fleeting life is! Mother Gita has called her beloved to herself — she must have needed him more than we did. A heartfelt tribute from a student. O Krishna!`,
  },
   {
    name: "Swati Jagdeep Shah, Ahmedabad",
    message: `Hari 🕉 ब्रह्मलीन प पूज्य गुरुदेव सान्निध्य प्राप्त करके आपने गुरुदेवकी अप्रतिम सेवा की एवं गुरु निष्ठाका श्रेष्ठ उदाहरण हमें मिला। गुरुदेव के प्रेमपात्र प्रिय शिष्य बने।हम सबको प्रेम देनेवाले, हमारे परम प्रिय विनम्र स्वामीजी आप भले हमें छोड़कर चले गए पर हमारे हृदयसेआपको कोई नहीं निकाल सकता।आत्मज्योतिरूप आप परमात्मारूप ज्योतिसे एकाकार हो गये।मेरा आपको कृतज्ञतापूर्वक सादर सप्रेम शत-शत नमन।एवं प्रार्थना-मेरे मनमें श्रद्धादीपको प्रज्वलित रखना, मनमंदिरमें अंधकार न रहें, ज्ञानप्रकाश देते रहना,ऐसा कृपा-आशीर्वाद मुझ पर बरसाते रहना ।.... वंदन बारंबार नमस्कारम् ।ॐ॥ `,
    translation: `Hari Om 🕉

Having attained the blessed proximity of the revered, Brahmaleen Gurudev, you rendered incomparable service to Gurudev and gave us a noble example of steadfast devotion to the Guru. You became Gurudev’s beloved and cherished disciple.

O our most beloved and humble Swamiji, who gave love to all of us, though you have physically left us, no one can remove you from our hearts. In the form of the inner light of the soul, you have now become one with the divine light of the Supreme.

With deep gratitude, reverence, and love, I bow to you again and again, hundreds of times.

And this is my prayer: please keep the lamp of श्रद्धा, of faith and devotion, ever lit within my heart. Let there be no darkness in the temple of my mind. Keep bestowing the light of knowledge upon me, and continue showering your grace and blessings on me.

Repeated salutations and reverential pranam.!`,
  },
];

const CHARS_PER_LINE = 80;
const LINE_LIMIT = 12;
const CHAR_LIMIT = CHARS_PER_LINE * LINE_LIMIT;

const TributeCard = ({ tribute }: { tribute: Tribute }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const needsTruncation = tribute.message.length > CHAR_LIMIT;
  const displayText = isExpanded || !needsTruncation
    ? tribute.message
    : tribute.message.slice(0, CHAR_LIMIT) + "…";

  const isHindi = (tribute.message.match(/[\u0900-\u097F]/g) || []).length > tribute.message.length * 0.2;
  const translateLabel = isHindi ? "Translate to English" : "हिंदी में अनुवाद";
  const translationHeader = isHindi ? "English translation" : "हिंदी अनुवाद";

  if (tribute.isScannedLetter) {
    return (
      <div className="max-w-2xl mx-auto rounded-2xl bg-background border border-gold/25 overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gold/15">
          <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary text-base flex-shrink-0">🙏</div>
          <span className="font-display text-base font-semibold text-foreground">{tribute.name}</span>
        </div>
        <div className="p-6">
          <div className="rounded-xl overflow-hidden border border-gold/15">
            <img src={scannedLetter} alt="Letter from Swami Adhyatmananda" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-2xl bg-background border border-gold/25 overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-amber-700/60 via-amber-400/80 to-amber-700/60" />
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary text-base flex-shrink-0">🙏</div>
            <span className="font-display text-base font-semibold text-foreground">{tribute.name}</span>
          </div>
          {tribute.translation && (
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all flex-shrink-0 ml-3 ${
                showTranslation
                  ? "bg-primary/10 border-primary/40 text-primary"
                  : "border-gold/30 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              <Languages size={12} />
              <span>{showTranslation ? "Hide" : translateLabel}</span>
              <span className="opacity-50">· AI</span>
            </button>
          )}
        </div>
        <div className="mx-6 border-t border-gold/10 mb-5" />
        <div className="px-6 pb-6">
          <p className="font-body text-[15px] text-foreground/80 leading-8 whitespace-pre-line">
            "{displayText}"
          </p>
          {needsTruncation && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
            >
              {isExpanded
                ? <><span>Show less</span><ChevronUp size={13} /></>
                : <><span>Read more</span><ChevronDown size={13} /></>}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showTranslation && tribute.translation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden">
              <div className="h-0.5 w-full bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
              <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <Languages size={12} />
                  <span>{translationHeader}</span>
                  <span className="text-[10px] opacity-55 border border-primary/25 rounded px-1.5 py-0.5">AI · may contain errors</span>
                </div>
                <button onClick={() => setShowTranslation(false)} className="text-muted-foreground hover:text-foreground transition-colors ml-2 flex-shrink-0">
                  <X size={14} />
                </button>
              </div>
              <div className="px-6 pb-6 pt-3 border-t border-primary/10 mt-2">
                <p className="font-body text-[15px] text-foreground/75 leading-8 whitespace-pre-line">
                  "{tribute.translation}"
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ShraddanjaliSection = () => {
  const [page, setPage] = useState(0);
  const total = tributes.length;

  return (
    <section id="shraddanjali" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Virah Stuti"
          subtitle="Heartfelt tributes from devotees whose lives were touched by Pujya Swamiji's grace"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <TributeCard tribute={tributes[page]} />
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 rounded-full border border-gold/20 text-muted-foreground hover:text-foreground hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-1.5 flex-wrap justify-center">
            {Array.from({ length: total }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-7 h-7 rounded-full text-xs font-medium transition-all ${
                  page === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-gold/20 text-muted-foreground hover:text-foreground"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
            disabled={page === total - 1}
            className="p-2 rounded-full border border-gold/20 text-muted-foreground hover:text-foreground hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-3">
          {page + 1} of {total} tributes
        </p>
      </div>
    </section>
  );
};

export default ShraddanjaliSection;
