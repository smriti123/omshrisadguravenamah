import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import scannedLetter from "@/assets/Screenshot 2026-03-17 184231.jpg";

const tributes = [
  {
    name: "Swami Adhyatmananda",
    message: "",
    isScannedLetter: true,
  },
  {
    name: "Devotee",
    message:
      `विवेकबुद्धियुक्त्या हि ज्ञातमात्मानमद्वयम् । ब्रह्मातिरिक्तं बाधेन विमुक्तश्च विमुच्यते ।। "यतो वाचो निवर्तन्ते । अप्राप्य मनसा सह।" It is difficult to describe Pujya Swamiji, his greatness, his love for scriptures and above all his depth to analyze any topic whether it was Vedanta, Dharma Shashtra, Politics or Social issues. Swamiji could open any word and speak for long without any diversion. Swamiji's Mahasamadhi is a great loss for many sadhakas and serious students of Vedanta. Always indebted to him for all his teachings and love that he showered on me. I learnt a lot from Pujya Swamiji in particular Shankara Bhasya study/ teaching and also Ramayana interpretations etc. Many many Pranams to Pujya Swamiji.`,
  },
  {
    name: "Devotee",
    message:
      `अनगणित आँखों में मैंने स्वामी जी के प्रति अथाह भक्ति देखी है। और स्वामी जी! आपकी आँखों का गाम्भीर्य भी देखा है; आपकी परखनहारी खोजी दृष्टि को निरखा है। सिद्धबाड़ी की तपोभूमि में - गुरुदेव और गुरुदेव के अनन्य शिष्य रूप प्रखर सूर्य बन उभरे हैं आप। आपकी द्रिक दृष्टि रूप किरणों में, हम गुरुकुलवासी शिष्यों-साधकों की मलिनता रूपी दोष धुल-धुल जाते रहे; हमें पवित्रता, ऊर्ध्वमुखता की ओर उन्मुख करते हुए। आपका स्नेह स्निग्ध वात्सल्य अद्भुत विस्मय कर देने वाली गम्भीर गुंजायमान वाणी का कर्षण हम शिष्यों को ही नहीं वरन शिविर में आये साधकों को; ज्ञान यज्ञ में उपस्थित श्रोताओं को मंत्र मुग्ध करता रहा। केवल इतना ही नहीं - आपका विद्युत-चुम्बकीय वाक-बल उस ज्ञान का ; उस सत्य का सदैव दिग्दर्शक बन उभरा- जिसकी शिष्यों को, निरंतर अभिलाषा अभीप्सा रहती है। हिमाचल की मनमोहक भूमि को गुरुदेव ने चिन्हित किया; वीर हनुमान की रक्षा में सुपुर्द कर दिया; राम-राज्य रूप वातावरण को सम्पुष्ट किया। और सुबोधानन्द स्वामी जी आपने उसे तीर्थ बना दिया। स्वामी जी! आपके वहां रहने से केवल सिद्धबाड़ी ही तीर्थ नहीं बना; बल्कि हम साधकों के हृदय जिसमें आप विराजमान हैं वह भी तीर्थरूप हो गया है। नम हृदय से इस बाल बुद्धि से आपको स्वामी जी भावभीनी श्रद्धांजलि हमारा नमन! हरि ओम`,
  },
  {
    name: "Devotee",
    message:
      `मेरे आचार्यजी ऐकधारा में ज्ञानी थे भक्त थे योगी थे महान साधु थे।वेदांत के सही जानकार थे।उपनिषद् हो रामायण हो या भागवत हो सब शास्त्रों के मर्म को सही समझाने वाले थे।शिव जी के परम भक्त थे।आदि गुरु शंकराचार्य जी, गोस्वामी तुलसीदास जी गुरुदेव, गुरूजी के प्रति असीम प्रेम और श्रद्धा थी।हामारा कोर्स के समय एक बार मैडिटेशन क्लास लिऐ थे एक क्लास काफी था।जिसमे सब आध्यात्मिक शक्ति जाग्रत हो सकता है स्वरूपवास्थान हो सकता है।बोलते थे साधु बनो कुछ बनो या ना।किसि का बात किसीको नहि बताते थे। बहुत सारे प्रतिभा के धनी थे। उनके अचानत चले जाने से बहुत कष्ट हुआ किन्तु वह और ब्यापक हो गए ।हमारे अंदर आगए । मेरे बाबा , माँ , गुरु है . उनका मागदर्शन अंदर से मिलता रहे। यही भगवान से पार्थना है।`,
  },
  {
    name: "Devotee",
    message:
      `Today, one of the most prominent torch bearers of Pujya Gurudev Swami Chinmayananda ji has merged back into that self-effulgent flame! My mind is afresh with memories of Swamiji's numerous visits to our house over years; until I last met him in 2019 in Mumbai during his Bhiksha at my aunt's home. Swamiji's nectarine words are still ringing in my ears, and my eyes are still searching for that ever-smiling face with a glowing forehead that shone brilliantly through the three long strokes of Bhasma! Pujya Swami Subodhanandaji was not just yet another sadhu... He was a walking talking smiling embodiment of God, wrapped with unique nuances that enchanted countless devotees to throng around him like bees to a Lotus flower! In His passing, the spiritual world has definitely lost an anchor; and personally our family has lost a Mahatma from whom we've drawn endless love, affection, blessings and guidance over the past 30+ years... From our childhood days when we would run helter-skelter in Sidhbari ashram during Pujya Gurudev's camps, we grew up seeing Swami Subodhananda ji as the loving guardian who paid minutest attention to the caretaking of Gurudev's beloved ashram. Those days when Ramayan was a superhit TV series, we would sit glued to the TV while pressing Swamiji's Feet and watching the episodes while Pujya Gurudev retired to His room. Swamiji would go into unfathomable depths of these glorious characters from our scriptures, and we would listen to him with rapt attention and awe! During the day, He would be always around Gurudev, on his toes, alert, sharp, vigilant and forever thinking ahead, knowing what to do before he is told. Years passed and as we grew up, we learned so much more about Swamiji's unflinching love for India, for her glory, and for her well-being. Swamiji's discussions on politics were never gossip like us, rather he would always try to understand and analyze the political situation in light of some spiritual principle or fundamental from the Shastras! Every discussion with Him would leave us enriched and blessed, and yearning for more! In His flawless, rich and soul-stirring Hindi, switching from the highest standpoint of Advaita Vedanta to the subtlest emotion & bhaav in Bhakti shastras like Ramcharitmaanas or Bhagavatam; Swamiji would carry the audience to such Himalayan heights, that after his lectures concluded people would prefer to remain silent & contemplate within for quite some time. Now that silence will stay forever.... The passing away of a Mahatma or Sannyasi is never mourned... rather it is celebrated; for it marks the end of their prarabdha with the physical body's limitations; and liberates them completely to unite with that Supreme One in whom they continuously reveled until they lived! As the eyes remained moist throughout the day, overwhelmed with shock and sadness, I have consoled myself to accept that when the spark merges back in the flame, it only shines brighter... Offering our heartfelt pranams & shraddhanjali at the Lotus Feet of Pujya Swami Subodhanandaji! Om Shantih!`,
  },
  {
    name: "Devotee",
    message:
      `Prostrations at the lotus feet of our most revered Brahmaleen His Holiness Swami Subodanandji...he is not with us physically but he remains in our hearts ever n paves us the way ..how to lead spiritual..divine life amidst all people. We are among most fortunate devotees who have had opportunity to listen to him personally. We feel his presence always every moment. His ever smiling face, measured tone, extremely soft spoken, never ever hurting ..a wonderful tolerant of We devotees ..he lived the life very much..what he had been preaching throughout his life. An ocean of knowledge ..humanity personified ...we were one among thousands who had learnt many things under his tutelage with a thrust to remain grounded always !! An orator par excellence..he had wonderful ears for Hindustani classical music n so for Carnatic Music too !! His Oratory in Hindi n English with pauses had tremendous depth. I can say with my limited experience such Saints are born once in life time..n he was given to us by GOD as a special Gift. His loss for all devotees of Chinmaya Mission is immeasurable!! Those who have had opportunity to listen to him personally can only comprehend what they lost personally!! Our sashtang Prostrations to our most loving n adored inimitable Guru of Gurus who churned out innumerable Brahmacharees n Swamijees of Chinmaya Mission. With utmost respect I can hasten to add Swami Subodanandji was favourite of H.H. Brahmaleen SWAMI CHINMAYANANDJEE.. I am one among those fortunate living devotees who had seen Swami Subodanandji doing exemplarily the final rituals of Pujya Gurudev when HIS mortal was brought n made to rest in Sidhbari, Himachal Pradesh from San Diego, USA after HE left us on 3rd August 1993 amidst presence of all stalwart Swamijees ..you name it of Chinmaya Mission in absolutely an immaculate send off to Pujya Gurudev!! Honestly, for me n many other devotees ..Sidhbari cannot be thought off without H.H. Swami Subodanandji. Our prostrations to HIM`,
  },
  {
    name: "Devotee",
    message:
      `In Pain or in Joy...let the smile never leave you is what you would say... Met you as a 14 year old and you became my guiding light, who introduced me to our rich heritage, encouraging to question and know, loved unconditionally, cared for, taught, guided, protected, disciplined, showed how to lead, be independent and fearless while valuing interdependence....how to get up everytime you fall..and how to strive to becoming without forgetting your being.... Forever grateful for your unconditional love, grace and guidance 🙏.. Losing you has been hardest thing to face in years and getting through the sense of loss would not be easy either...!! I know I would be now watched over....as they say the Farther I go the Nearer I shall be ..... Forever Yours .. Forever at your feet 🙏 Om!!`,
  },
  {
    name: "Devotee",
    message:
      `So a nice Sunday morning became a day of gloom. Before I could step out for a walk came this phone call - a bolt from the blue. The news was so shocking that it took a while to absorb. Pujya swamiji most revered Guruji was for us and our family a mentor, a guide, a philosophic companion and most of all his ashirwad and blessings on the youngsters can never be forgotten. We are in bereavement and will be unable to forget his ever smiling face and small one liners to keep us riveted. Each moment since then I reminisce about the countless hours he has spent at our home and his private conversations and pravachans full of profound wisdom and knowledge. He blessed us to inaugurate our the then new Unit in 2008 which has immensely prospered due to his divine blessings. We at Kanpur where he spent his formative years and one of the cities he was particularly fond off will find it difficult to plan a year without his two annual Pravachans and Gyan Yagyas. A ritual which took a break only due to the Covid pandemic. There was one planned just after the 22 March Lockdown and our scheduled "bhikhsha" on the 25th was never to be. Pujya Swamiji will forever live in our hearts and will continue to bless us from his heavenly abode. A great loss to all of us. Om shanti Om shanti Om shanti 🙏🙏🙏🙏`,
  },
  {
    name: "Devotee",
    message:
      `Heartfelt tribute to pujaya Guruji Swami Subodhanandaji. He was an admirable orator. His clarity and deep understanding of Ramayana and Vedanta really inspired me to study Vedanta at Sidhwadi. His teachings have helped me a lot to go deeper in Sadhna. I am very thankful to him. He will always be alive in our hearts in the form of his teachings. My sashtang pranams at his lotus feet.`,
  },
  {
    name: "Devotee",
    message:
      `I was one of the lucky ones who was blessed by Swamiji's presence since I was 3 years old. I would go with my parents to attend Swamiji's lectures. Although at that age I did not understand much but I was mesmerized by his speech and his charismatic personality. Swamiji would always greet me with a huge smile on his face. He was always full of life and being in his presence felt like being around the purest form of positivity. As an adult when I started listening to his lectures, I felt truly guided. Any time I was looking for answers, I would listen to one of his lectures and it would feel like somehow magically he had read my mind and provided me with the answers that I was seeking. Swamiji, you will be dearly missed. Many pranams at your lotus feet and may you continue to guide us and shower us with your grace from beyond. Hari om`,
  },
  {
    name: "Devotee",
    message:
       `I attended the session by Swamiji, on Kathopnishad at Jaipur. First day out of curiosity, as I always found the subject difficult to comprehend. Next day onwards I decided to attend all the sessions instead of going to the university. Needless to say, how absorbing it was. I also joined the Bhiksha organised in his honour, to get more blessings and hear more from him. Initiated discussions on economy, defence and various facets of life. He was erudite and had clear understanding on every aspect, just amazing. Now I think, it was preordained that I had the divine blessings and privilege to have known him, it was God sent opportunity. University I keep going, but nothing could have compensated the amount of his blessed love, I gained. Feel fortunate. God and pujya gudev bless his soul.`,
  },
  {
    name: "Devotee",
    message:
      `Pujya Swamiji was a very staunch devotee of Pujya Gurudev. Whenever Pujya Gurudev comes to Siddhabari, it is Swami Subodhanandaji who will push the wheel chair. Swamiji was doing that with so much of devotion and pride. His teachings are extremely impactful and authentic. Swamiji loved Upanishads and Bhashya. We will miss Swamiji a lot. At the same time we are to do lot of Sadhana to achieve a bit of what Was so natural to Swami Subodhanandaji. Pujya Swamiji has inspired so many young people to take Brahmachari and Sannyasa Deeksha. Mammoth contribution to the Rishi culture. We pray for His blessings.`,
  },
  {
    name: "Devotee",
    message:
      `Hari Om. Swamiji was a great disciple and devotee of Param Pujya Gurudev. Whenever there's camp at Sidhabari he would enquire with the campers, how comfortable they're and any help required. His sanyasa deeksha was from Tamaraipakkam temple and he had great love for Chennai. Whenever we go to Sidhabari we used to take our Lord Sarweswara prasadam to him. He kept the Sidhabari ashram well maintained and Gurudev's Mahasamadhi stal very sacred. He has reached Gurudev's paadam. Our Pranams and Prostrations to him. 🙏🙏`,
  },
  {
    name: "Devotee",
    message:
      `Poojya Swamiji was an ocean of knowledge and his deep knowledge of the scriptures was unparalleled. Many seekers and Swamis and Brahmacharins were trained and guided by Swamiji. His shastra-charcha will be missed a lot. Sidhbari will not be the same again. We will miss Swamiji whenever we go there. He was very loving and always enquired about our well-being and sadhana whenever we met him at Sidhbari. Its a deep loss to Chinmaya Mission and to Sanatana Dharma. Pranam to Poojya Swamiji.`,
  },
  {
    name: "Devotee",
    message:
      `Thousand Salutations at the lotus Feet of our Beloved Swamiji🙏🙏. We have known Swamiji since 1993 and visited number of His camps in Sidhbari and hosted Him number of times at our humble abode in Vadodara. It was always a pleasure and delight to listen to Swamiji and be in His Divine presence. Our mind is flooded with so many memories that we have of Him. It is going to be very difficult for us to not have Him in our lives physically, The void will be there as long as we are alive. His voice was like a soothing balm and His discourses had so much depth of knowledge and He was so full of devotion. He was satchitananda swarup Shivoham. 🙏 Ashrupoorna Shradhanjali and Naman🙏 Rama Kamlesh and Family🙏`,
  },
  {
    name: "Devotee",
    message:
      `Param Pujya Shri Swami Ji Maharaj ke Shricharno mein koti koti Pranam karta hoo. I have no words to say how deeply saddened I am after hearing the news of Pujya Swami Ji... He was the crown of Chinmaya Mission.... Main apne Mahaan Swami Ji ko punah punah Pranam karta hoon.....saath hi mera samast parivar koti koti koti Pranam karta hai His teachings and his Aashirwad always remain with us forever.. Jai Gurudev Hari Om`,
  },
  {
    name: "Devotee",
    message:
      `Poojya Swami ji was Divinity, Wisdom, Philosophy and Bliss personified. His every word and action was a teaching towards perfection. His dedication and commitment for the subject was unparalleled and worth inspiring. He revealed and lived Advait Darshan/Philosophy. His Himaliyan dedication for Pujya Gurudev, for scriptures, for Motherland, for Hindi and Sanskrit language, Right pronunciation of words and verses, His in-depth knowledge of each word and its etymology, His knowledge of grammar, His Communication skills, His oratory, His unique smile, His facial expressions, gestures and physical movements while delivering discourses, His interaction with seekers, His inspiring style of reflections on Vedantic principles, His tolerance for imperfections and weaknesses of others, His oceanic knowledge of almost all subjects, His in depth analysis of various political, economic, agricultural, defense, sports and other issues, His Hospitality, His Cleanliness, His Self Confidence, His open challenges on Vedantic Declarations were worth INSPIRING. He was a pilgrimage in himself and his visits to various centers were festivals and blessings for seekers. One very unique characteristic of His personality was giving attention and Love to everybody who came to him in a style that everyone realized he/she is paid extra care by Poojy Swami Ji. You made Sidhbari a home for many seekers. You transformed thousands of lives and families and your recorded teachings will still transform millions in time to come but your physical presence will be missed painfully. You were like a Pillar of Light in oceanic waves of ups and downs of lives for us. You were MOST-EXTRA-ORDINARY. You were BRAHMAN in physical form.`,
  },
  {
    name: "Devotee",
    message:
      `Hari OM! I feel so blessed that I had the privilege to know you, learn from you, serve you and love you. Your teachings, love and memories will always be with me. You will always have a special place in my heart. Please accept my pranaam and Hari OM. With lots of love and regards,`,
  },
  {
    name: "Devotee",
    message:
      `Pujaya Swami ji spent 39 years at the lotus feet of Gurudev at SIDHBARI and being one of his most loved disciple, seems was in a hurry to join Gurudev after completing his assignment extremely well here among all of us. An epitome of spiritual knowledge, Swami ji drilled the vedantic teachings in very simple Methods. He is still with us with his available discourses. It is a joy to take feed from him everyday & live through the peaceful journey of life. Our Shat Shat Naman 🙏🙏🙏🙏`,
  },
  {
    name: "Devotee",
    message:
      `Hari 🕉 ब्रह्मलीन प पूज्य गुरुदेव सान्निध्य प्राप्त करके आपने गुरुदेवकी अप्रतिम सेवा की एवं गुरु निष्ठाका श्रेष्ठ उदाहरण हमें मिला। गुरुदेव के प्रेमपात्र प्रिय शिष्य बने।हम सबको प्रेम देनेवाले, हमारे परम प्रिय विनम्र स्वामीजी आप भले हमें छोड़कर चले गए पर हमारे हृदयसेआपको कोई नहीं निकाल सकता।आत्मज्योतिरूप आप परमात्मारूप ज्योतिसे एकाकार हो गये।मेरा आपको कृतज्ञतापूर्वक सादर सप्रेम शत-शत नमन।एवं प्रार्थना-मेरे मनमें श्रद्धादीपको प्रज्वलित रखना, मनमंदिरमें अंधकार न रहें, ज्ञानप्रकाश देते रहना,ऐसा कृपा-आशीर्वाद मुझ पर बरसाते रहना ।.... वंदन बारंबार नमस्कारम् ।ॐ॥`,
  },
  {
    name: "Devotee",
    message:
      `Swamiji's mahasamadhi brings to an end an era resplendent with Vishudh Vedant Vichar Vimarsh. His abiding interest and knowledge of Vedant was iconic. He virtually and visibly reveled in Vedant. Although a Vedantic scholar, he was equally and easily erudite on a wide array of subjects including history and political science. He always loved and encouraged spiritual discussions and like a true teacher always answered all questions both meaningful as well as the mundane. His soft, gentle voice was mesmerizing even though the purity of his language was not always easy to grasp. But he would patiently and skillfully ensure that we all eventually understood. His keen intellect and photographic memory was a joy to behold. He encouraged us to retain our learning in the mind rather than on paper or phone. Before Swamiji, Manas and Bhagwat to us all were stories or Katha. His insightful and subtle exposition revealed the Vedantic principles embedded in these Grantham. The vast yawning void left by him is unlikely to be filled and we will always miss his physical presence. Swamiji you only taught us that this world is timeless and life will go on. True Swamiji but it will not be the same without you. My shat shat pranam to this Vedantic Vibhooti whose divine presence itself was a benevolent blessing. May we continue to be blessed and guided by him. Om shanti, shanti, shanti.`,
  },
  {
    name: "Devotee",
    message:
      `Hari Om! my respectful shradhanjlis to Swamiji! Subodhanandji's talks on Bhagwat, Geeta & Ramayana are excellence! The real essence of Ramayana, I understood when I heard his Ramayana Gnyana Yagna Saptah in Dahisar Mumbai about 15 years or so back! The meaning of words Rama, Sita, Hanumanji etc from vedantic definitions! Otherwise I knew Ramayana as an Epic Story like majority of people & was scarcely attending these Yagnas! Swamiji's sonorous voice was taking us on the flight of spirituality! We miss his physical presence! He was always cheerful & receptive to the devotees & their queries till late in the night! He never showed his sufferings due to health problem he had! Pray Parmeshwara to bestow Chir Shanti to his Aatma! Om Shanti Shant Shantihi!`,
  },
  {
    name: "Devotee",
    message:
      `भौतिक शरीर से विलीन हुये ऋषिवर, पर ह्रदय के पास हो हो हमारे मध्य ही आत्म रूप से, गर कहीं भी पास हो।। पथ जो आपने किया चयन, हम भी पथिक है यही आस है हर कर्म की प्रेरणा हैं आप, हर विचार के विश्वास हो।। 🙏🙏🙏🌹🌹🌹🙏🙏🙏 हे गुरु भ्रात अलविदा कह रहे हैं सजल नयन प्रणाम! नमन! वन्दन! सब तुम्हे है अर्पण🙏🙏🙏🙏🌹🌹🌹`,
  },
  {
    name: "Devotee",
    message:
      `अद्वितीय वक्ता, अत्यंत श्रेष्ठ एवम मीठा व्यक्तित्व, उच्च कोटि के विद्वान। यह रिक्तता भरना बहुत मुश्किल है। जीवन कितना क्षणभंगुर है। माँ गीता ने अपने लाडले को अपने पास बुला लिया।उन्हें उनकी हमसे ज्यादा जरूरत होगी। एक विद्यार्थी की भावभीनी भावांजलि। हे कृष्ण!`,
  },
  {
    name: "Devotee",
    message:
      `अनगणित आँखों में मैंने स्वामी जी के प्रति अथाह भक्ति देखी है। और स्वामी जी! आपकी आँखों का गाम्भीर्य भी देखा है; आपकी परखनहारी खोजी दृष्टि को निरखा है। सिद्धबाड़ी की तपोभूमि में - गुरुदेव और गुरुदेव के अनन्य शिष्य रूप प्रखर सूर्य बन उभरे हैं आप। आपकी द्रिक दृष्टि रूप किरणों में, हम गुरुकुलवासी शिष्यों-साधकों की मलिनता रूपी दोष धुल-धुल जाते रहे; हमें पवित्रता, ऊर्ध्वमुखता की ओर उन्मुख करते हुए। आपका स्नेह स्निग्ध वात्सल्य अद्भुत विस्मय कर देने वाली गम्भीर गुंजायमान वाणी का कर्षण हम शिष्यों को ही नहीं वरन शिविर में आये साधकों को; ज्ञान यज्ञ में उपस्थित श्रोताओं को मंत्र मुग्ध करता रहा। केवल इतना ही नहीं - आपका विद्युत-चुम्बकीय वाक-बल उस ज्ञान का ; उस सत्य का सदैव दिग्दर्शक बन उभरा- जिसकी शिष्यों को, निरंतर अभिलाषा अभीप्सा रहती है। हिमाचल की मनमोहक भूमि को गुरुदेव ने चिन्हित किया; वीर हनुमान की रक्षा में सुपुर्द कर दिया; राम-राज्य रूप वातावरण को सम्पुष्ट किया। और सुबोधानन्द स्वामी जी आपने उसे तीर्थ बना दिया। स्वामी जी! आपके वहां रहने से केवल सिद्धबाड़ी ही तीर्थ नहीं बना; बल्कि हम साधकों के हृदय जिसमें आप विराजमान हैं वह भी तीर्थरूप हो गया है। नम हृदय से इस बाल बुद्धि से आपको स्वामी जी भावभीनी श्रद्धांजलि हमारा नमन! हरि ओम`,
  },
];

const ITEMS_PER_PAGE = 1;
const MAX_LENGTH = 400;
const CARD_CONTAINER_CLASSES =
  "p-5 sm:p-6 rounded-xl bg-background border border-gold/20 max-w-2xl mx-auto h-[520px] flex flex-col";

const TributeCard = ({ tribute, index }: { tribute: { name: string; message: string; isScannedLetter?: boolean }; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = tribute.message.length > MAX_LENGTH;
  const displayText = isExpanded || !shouldTruncate ? tribute.message : tribute.message.slice(0, MAX_LENGTH) + "...";

  if (tribute.isScannedLetter) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className={CARD_CONTAINER_CLASSES}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-lg">
            🙏
          </div>
          <span className="font-display text-lg text-foreground font-semibold">
            {tribute.name}
          </span>
        </div>
        <div className="flex-1 overflow-hidden rounded-lg bg-muted/20 p-2 sm:p-3">
          <img
            src={scannedLetter}
            alt="Letter from Swami Adhyatmananda"
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={CARD_CONTAINER_CLASSES}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-lg">
          🙏
        </div>
        <span className="font-display text-lg text-foreground font-semibold">
          {tribute.name}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <p className="font-body text-muted-foreground leading-relaxed italic whitespace-pre-line">
          "{displayText}"
        </p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 flex items-center gap-1 text-sm font-body text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Show less</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>Read more</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

const ShraddanjaliSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(tributes.length / ITEMS_PER_PAGE);
  const current = tributes.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section id="shraddanjali" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Shraddanjali"
          subtitle="Heartfelt tributes from devotees whose lives were touched by Gurudev's grace"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            {current.map((t, i) => (
              <TributeCard key={i} tribute={t} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 rounded-full border border-gold/20 text-muted-foreground hover:text-foreground hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-8 h-8 rounded-full text-sm font-body font-medium transition-all ${
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
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-full border border-gold/20 text-muted-foreground hover:text-foreground hover:border-gold/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShraddanjaliSection;
