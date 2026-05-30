import h1 from "@/assets/h1.jpg";
import gurudev4 from "@/assets/gallery/Gurudev4.jpg";
import ph1 from "@/assets/gallery/ph1.jpg";
import g3 from "@/assets/g3.jpg";
import g2Replace4 from "@/assets/gallery/g2-replace-4.jpg";
import gurudev3 from "@/assets/gallery/Gurudev3.jpg";
import gurudev from "@/assets/Gurudev.jpg";
import p16 from "@/assets/gallery/photo-16.jpg";
import lastPhoto from "@/assets/gallery/Last.jpeg";
import mahasamadhi1 from "@/assets/gallery/v7.jpeg";
import mahasamadhi2 from "@/assets/gallery/v9.jpg";
import mahasamadhi3 from "@/assets/gallery/v8.jpeg";
import batch1 from "@/assets/gallery/batch-1.jpg";
import batch2 from "@/assets/gallery/batch-2.jpg";
import batch3 from "@/assets/gallery/batch-3.jpg";
import batch4 from "@/assets/gallery/batch-4.jpg";
import batch5 from "@/assets/gallery/batch-5.jpg";

// Charan-Vandan slides (mirrors CharanKamalCarouselSection)
import charanKamalImage from "@/assets/01044.jpg";
import charanKamalImageTwo from "@/assets/IMG-20210324-WA0000.jpg";
import charanVandanThree from "@/assets/charan-vandan-3.jpg";
import charanVandanFour from "@/assets/charan-vandan-4.jpg";
import charanVandanFeet from "@/assets/charan-vandan-feet.jpg";

// Namami-Chittchorkam (mirrors RadiantSmileSection captioned photos)
import smile1 from "@/assets/smile1.jpg";
import smile2 from "@/assets/smile2.jpg";
import smile3 from "@/assets/smile3.jpg";
import smile4 from "@/assets/smile4.jpg";
import best from "@/assets/gallery/best.jpg";
import diw from "@/assets/gallery/diw.jpg";
import smile7 from "@/assets/smile7.jpg";
import smile9 from "@/assets/smile9.jpeg";
import smile10 from "@/assets/smile10.jpg";
import smile11 from "@/assets/smile11.jpg";
import smile12 from "@/assets/smile12.jpg";
import smile8 from "@/assets/smile8.jpeg";
import smileMadhurCombinedV2 from "@/assets/smile-madhur-combined-v2.jpg";

// Vedant Moorti tab images
import vedant1 from "@/assets/gallery/vedant-1.png";
import vedant2 from "@/assets/gallery/vedant-2.png";
import vedant3 from "@/assets/gallery/vedant-3.jpg";
import vedant4 from "@/assets/gallery/vedant-4.jpg";
import vedant5 from "@/assets/gallery/vedant-5.jpg";
import vedant6 from "@/assets/gallery/vedant-6.png";
import vedant7 from "@/assets/gallery/vedant-7.jpg";
import vedant8 from "@/assets/gallery/vedant-8.jpg";
import vedant9 from "@/assets/gallery/vedant-9.jpg";
import vedant10 from "@/assets/gallery/vedant-10.jpg";

// Key Events photos from Charitra-Jhalak 1
import akh1 from "@/assets/gallery/akh1.jpg";
import akh2 from "@/assets/gallery/akh2.jpg";
import akhProcession from "@/assets/gallery/akh-mandir-procession.jpg";
import akhBhagFav2 from "@/assets/gallery/AkhBhagFav2.png";
import sh1 from "@/assets/gallery/sh1.jpg";
import sh3 from "@/assets/gallery/sh3.jpg";

// Others tab — Twameva pairs
import pairMata from "@/assets/gallery/pair-mata.jpg";
import pairPita from "@/assets/gallery/pair-pita.jpg";
import pairBandhu from "@/assets/gallery/pair-bandhu.jpg";
import pairSakha from "@/assets/gallery/pair-sakha.jpg";
import othersGarland from "@/assets/gallery/others-garland.jpg";
import othersToddler from "@/assets/gallery/others-toddler.jpg";

// Charan-Vandan additional photo
import charanVandanKrupasindhu from "@/assets/gallery/charan-vandan-krupasindhu.jpg";

// Namami-Chittchorkam additional photos
import namamiNew1 from "@/assets/gallery/namami-new-1.jpg";
import namamiNew2 from "@/assets/gallery/namami-new-2.jpg";
import namamiNew3 from "@/assets/gallery/namami-new-3.jpg";
import namamiNew4 from "@/assets/gallery/namami-new-4.jpg";
import namamiNew5 from "@/assets/gallery/namami-new-5.jpg";
import namamiNew6 from "@/assets/gallery/namami-new-6.jpg";

// New additions
import newVedantPink from "@/assets/gallery/new-vedant-pink.jpg";
import newCharanSofa from "@/assets/gallery/new-charan-sofa.jpg";
import newCharanRose from "@/assets/gallery/new-charan-rose.jpg";
import newVedantMeditation from "@/assets/gallery/new-vedant-meditation.jpg";
import newShivpuja from "@/assets/gallery/new-shivpuja.jpg";
import newKayakalpHawan from "@/assets/gallery/new-kayakalp-hawan.jpg";
import newKayakalpProcession from "@/assets/gallery/new-kayakalp-procession.jpg";
import newNamamiTurban from "@/assets/gallery/new-namami-turban.jpg";
import newVedantMeditateOrange from "@/assets/gallery/new-vedant-meditate-orange.jpg";

export type Gallery2Photo = {
  id: string;
  src: string;
  thumbnailSrc: string;
  alt: string;
  caption: string;
  objectFit?: "cover" | "contain";
  wide?: boolean;
  centerWide?: boolean;
};

export type Gallery2Category = {
  id: string;
  name: string;
  description: string;
  photos: Gallery2Photo[];
};

export const gallery2Categories: Gallery2Category[] = [
  {
    id: "charan-vandan",
    name: "Charan-Vandan / चरण वंदन",
    description: "Charan-Vandan photographs with their captions.",
    photos: [
      {
        id: "charan-vandan-1",
        src: charanVandanFeet,
        thumbnailSrc: charanVandanFeet,
        alt: "Charan Vandan photo 1",
        caption: "श्री गुरु चरण कमलेभ्यो नमः",
      },
      {
        id: "charan-vandan-2",
        src: charanKamalImage,
        thumbnailSrc: charanKamalImage,
        alt: "Charan Vandan photo 2",
        caption: "बंदऊँ गुरु पद पदुम परागा।",
      },
      {
        id: "charan-vandan-3",
        src: charanKamalImageTwo,
        thumbnailSrc: charanKamalImageTwo,
        alt: "Charan Vandan photo 3",
        caption: "चरण कमल तेरे धोय धोय पीवां मेरे सतगुरु दीन दयाला",
      },
      {
        id: "charan-vandan-4",
        src: charanVandanThree,
        thumbnailSrc: charanVandanThree,
        alt: "Charan Vandan photo 4",
        caption: "हे गुरुदेव प्रणाम आपके चरणों में",
      },
      {
        id: "charan-vandan-5",
        src: charanVandanFour,
        thumbnailSrc: charanVandanFour,
        alt: "Charan Vandan photo 5",
        caption: "श्री गुरु चरण कमलेभ्यो नमः",
      },
      {
        id: "charan-vandan-6",
        src: charanVandanKrupasindhu,
        thumbnailSrc: charanVandanKrupasindhu,
        alt: "Charan Vandan photo 6 — Krupasindhu",
        caption: "नमामि पद्मलोचनम्।",
      },
      {
        id: "charan-vandan-7",
        src: newCharanSofa,
        thumbnailSrc: newCharanSofa,
        alt: "Charan Vandan photo 7",
        caption: "",
      },
      {
        id: "charan-vandan-8",
        src: newCharanRose,
        thumbnailSrc: newCharanRose,
        alt: "Charan Vandan photo 8",
        caption: "",
      },
    ],
  },
  {
    id: "with-gurudev",
    name: "Sadguru Priyaye / सद्गुरु प्रियाय",
    description:
      "The first eight photos from the current gallery are grouped here for easy browsing with captions.",
    photos: [
      {
        id: "with-gurudev-1",
        src: h1,
        thumbnailSrc: h1,
        alt: "With Gurudev photo 1",
        caption: "ॐ सद्गुरु प्रियाय नमः ।",
      },
      {
        id: "with-gurudev-2",
        src: gurudev4,
        thumbnailSrc: gurudev4,
        alt: "With Gurudev photo 2",
        caption:
          "He would be always around Gurudev, on his toes, alert, sharp, vigilant and forever thinking ahead, knowing what to do before he is told.",
      },
      {
        id: "with-gurudev-3",
        src: ph1,
        thumbnailSrc: ph1,
        alt: "With Gurudev photo 3",
        caption:
          "Whenever Pujya Gurudev came to Sidhbari, it was Swami Subodhanandaji who would push his wheelchair — doing so with such devotion and pride.",
        objectFit: "cover",
      },
      {
        id: "with-gurudev-4",
        src: g2Replace4,
        thumbnailSrc: g2Replace4,
        alt: "With Gurudev photo 4",
        caption:
          "ब्रह्मलीन प पूज्य गुरुदेव सान्निध्य प्राप्त करके आपने गुरुदेवकी अप्रतिम सेवा की एवं गुरु निष्ठाका श्रेष्ठ उदाहरण हमें मिला।",
      },
      {
        id: "with-gurudev-5",
        src: gurudev3,
        thumbnailSrc: gurudev3,
        alt: "With Gurudev photo 5",
        caption:
          "Swamiji had given strict instructions for every detail of Gurudev's Samadhi Sthal puja care, always serving with total alertness and devotion.",
      },
      {
        id: "with-gurudev-6",
        src: gurudev,
        thumbnailSrc: gurudev,
        alt: "With Gurudev photo 6",
        caption:
          "At 3 AM in Sidhbari, Swamiji would suddenly invite devotees for Gurudev darshan, and all would follow Him quietly to the Samadhi in the fragrant night.",
      },
      {
        id: "with-gurudev-7",
        src: p16,
        thumbnailSrc: p16,
        alt: "With Gurudev photo 7",
        caption:
          "One inspiring quality: whenever Swamiji was doing Pooja, He would never pose for the camera; His attention was totally on Puja.",
      },
      {
        id: "with-gurudev-8",
        src: lastPhoto,
        thumbnailSrc: lastPhoto,
        alt: "With Gurudev photo 8",
        caption:
          "Last available picture dated 3rd Aug 2020, on 28th Mahasamadhi diwas of Pujya Gurudev.",
      },
      {
        id: "with-gurudev-mahasamadhi-1",
        src: mahasamadhi1,
        thumbnailSrc: mahasamadhi1,
        alt: "Gurudev Mahasamadhi photo 1",
        caption:
          "All final rites of Pujya Gurudev were done by Pujya Brahmaleen His Holiness Swami Subodhanandaji immaculately with precision amidst all top Saints present there.",
      },
      {
        id: "with-gurudev-mahasamadhi-2",
        src: mahasamadhi2,
        thumbnailSrc: mahasamadhi2,
        alt: "Gurudev Mahasamadhi photo 2",
        caption:
          "जब परम पूज्य गुरुदेव के श्री विग्रह को भू समाधि दी जा रही थी तो पूज्य स्वामीजी नेत्रों में अश्रु होने से उस स्थल पर उपस्थित नहीं हुए। उनको किसी के द्वारा उस समय वहां बुलाया गया, और फिर पूज्य स्वामीजी ने उस भू खंड में उतरकर परम पूज्य गुरुदेव के श्री विग्रह को अपने हाथों में पकड़कर भूमिष्ट किया। ॐ श्री चिन्मय सदगुरवे नमः ।।",
      },
      {
        id: "with-gurudev-mahasamadhi-3",
        src: mahasamadhi3,
        thumbnailSrc: mahasamadhi3,
        alt: "Gurudev Mahasamadhi photo 3",
        caption:
          "परम पूज्य गुरुदेव के पंचभौतिक विग्रह को बिलकुल उसी मुद्रा में समाधिस्थ किया गया, जिस मुद्रा में ठीक उसी स्थान के ऊपर उनकी पंच धातु का विग्रह सिद्धबाड़ी में स्थापित है। ॐ श्री चिन्मय सदगुरवे नमः ।।",
      },
    ],
  },
  {
    id: "namami-chittchorkam",
    name: "Namami chittchorkam / नमामि चित्तचोरकम्",
    description:
      "Photos from the Namami-Chittchorkam section with their captions.",
    photos: [
      {
        id: "namami-1",
        src: smileMadhurCombinedV2,
        thumbnailSrc: smileMadhurCombinedV2,
        alt: "Namami Chittchorkam madhur photo",
        caption:
          "अधरं मधुरं वदनं मधुरं, नयनं मधुरं हसितं मधुरं ।\nहृदयं मधुरं गमनं मधुरं, मधुराधिपते रखिलं मधुरं ॥",
        wide: true,
      },
      {
        id: "namami-2",
        src: smile1,
        thumbnailSrc: smile1,
        alt: "Namami Chittchorkam photo 1",
        caption: "प्रसन्नाननं नीलकण्ठं दयालम्‌ । प्रिय शंकरं सर्वनाथं भजामि ॥",
      },
      {
        id: "namami-3",
        src: smile2,
        thumbnailSrc: smile2,
        alt: "Namami Chittchorkam photo 2",
        caption: "ॐ प्रसन्न चित्ताय नमः ।",
      },
      {
        id: "namami-4",
        src: smile3,
        thumbnailSrc: smile3,
        alt: "Namami Chittchorkam photo 3",
        caption: "🕉️श्री प्रमोदनाय नमः। (जो सदा प्रसन्न हैं वो प्रमोदन: ।)",
      },
      {
        id: "namami-5",
        src: smile4,
        thumbnailSrc: smile4,
        alt: "Namami Chittchorkam photo 4",
        caption: "ॐ आनन्द स्वरूपाय नमः ।",
      },
      {
        id: "namami-6",
        src: smile8,
        thumbnailSrc: smile8,
        alt: "Namami Chittchorkam photo 5",
        caption:
          "श्री नन्दनाय नमः। जो अन्य को प्रसन्नचित्त करता है वो नन्दन: ऐसे हमारे प पू श्री गुरुवर्याय नमः।",
      },
      {
        id: "namami-7",
        src: best,
        thumbnailSrc: best,
        alt: "Namami Chittchorkam photo 6",
        caption: "",
      },
      {
        id: "namami-8",
        src: diw,
        thumbnailSrc: diw,
        alt: "Namami Chittchorkam photo 7",
        caption: "",
      },
      {
        id: "namami-9",
        src: smile7,
        thumbnailSrc: smile7,
        alt: "Namami Chittchorkam photo 8",
        caption: "ॐ स्मित ईक्षणाय नमः।",
      },
      {
        id: "namami-10",
        src: smile9,
        thumbnailSrc: smile9,
        alt: "Namami Chittchorkam photo 9",
        caption: "ॐ बहुभक्ताय नमः।",
      },
      {
        id: "namami-11",
        src: smile10,
        thumbnailSrc: smile10,
        alt: "Namami Chittchorkam photo 10",
        caption: "ॐ मृदु स्वभावाय नमः।",
      },
      {
        id: "namami-new-1",
        src: namamiNew1,
        thumbnailSrc: namamiNew1,
        alt: "Namami Chittchorkam new photo 1",
        caption: "He loves out of joy, not for the joy...",
      },
      {
        id: "namami-new-2",
        src: namamiNew2,
        thumbnailSrc: namamiNew2,
        alt: "Namami Chittchorkam new photo 2",
        caption: "",
      },
      {
        id: "namami-new-3",
        src: namamiNew3,
        thumbnailSrc: namamiNew3,
        alt: "Namami Chittchorkam new photo 3",
        caption: "",
      },
      {
        id: "namami-new-4",
        src: namamiNew4,
        thumbnailSrc: namamiNew4,
        alt: "Namami Chittchorkam new photo 4",
        caption: "",
      },
      {
        id: "namami-new-5",
        src: namamiNew5,
        thumbnailSrc: namamiNew5,
        alt: "Namami Chittchorkam new photo 5",
        caption: "",
      },
      {
        id: "namami-new-6",
        src: namamiNew6,
        thumbnailSrc: namamiNew6,
        alt: "Namami Chittchorkam new photo 6",
        caption: "",
      },
      {
        id: "namami-new-7",
        src: newNamamiTurban,
        thumbnailSrc: newNamamiTurban,
        alt: "Namami Chittchorkam new photo 7",
        caption: "",
      },
    ],
  },
  {
    id: "vedant-moorti",
    name: "Vedant Moorti / वेदांत मूर्ति",
    description:
      "Add Vedant Moorti photos and captions to this category when ready.",
    photos: [
      {
        id: "vedant-1",
        src: vedant1,
        thumbnailSrc: vedant1,
        alt: "Vedant Moorti featured photo",
        caption: "हे शंकर-रूप! हे वेदांत-मूर्ति!",
        objectFit: "contain",
        centerWide: true,
      },
      {
        id: "vedant-2",
        src: vedant2,
        thumbnailSrc: vedant2,
        alt: "Vedant Moorti photo 2",
        caption: "ॐ शिव प्रियाय नमः।",
      },
      {
        id: "vedant-3",
        src: vedant3,
        thumbnailSrc: vedant3,
        alt: "Vedant Moorti photo 3",
        caption: "ॐ राष्ट्रगौरवाय नमः।",
      },
      {
        id: "vedant-4",
        src: vedant4,
        thumbnailSrc: vedant4,
        alt: "Vedant Moorti photo 4",
        caption: "ॐ संस्कृत भाषा विदुत्तमाय नमः।",
      },
      {
        id: "vedant-5",
        src: vedant5,
        thumbnailSrc: vedant5,
        alt: "Vedant Moorti photo 5",
        caption:
          "अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशालाकया । चक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः ॥",
      },
      {
        id: "vedant-6",
        src: vedant6,
        thumbnailSrc: vedant6,
        alt: "Vedant Moorti photo 6",
        caption: "ॐ अंतः साक्षिणे नमः",
      },
      {
        id: "vedant-7",
        src: vedant7,
        thumbnailSrc: vedant7,
        alt: "Vedant Moorti photo 7",
        caption: "ॐ शिष्य हित चिन्तकाय नमः।",
      },
      {
        id: "vedant-8",
        src: vedant8,
        thumbnailSrc: vedant8,
        alt: "Vedant Moorti photo 8",
        caption: "ॐ समाधिशीलाय नमः।",
      },
      {
        id: "vedant-9",
        src: vedant9,
        thumbnailSrc: vedant9,
        alt: "Vedant Moorti photo 9",
        caption: "ॐ भाष्यकार प्रियाय नमः।",
      },
      {
        id: "vedant-10",
        src: vedant10,
        thumbnailSrc: vedant10,
        alt: "Vedant Moorti photo 10",
        caption: "",
      },
      {
        id: "vedant-11",
        src: newVedantPink,
        thumbnailSrc: newVedantPink,
        alt: "Vedant Moorti photo 11",
        caption: "",
      },
      {
        id: "vedant-12",
        src: newVedantMeditation,
        thumbnailSrc: newVedantMeditation,
        alt: "Vedant Moorti photo 12",
        caption: "",
      },
      {
        id: "vedant-13",
        src: newVedantMeditateOrange,
        thumbnailSrc: newVedantMeditateOrange,
        alt: "Vedant Moorti photo 13",
        caption: "",
      },
    ],
  },
  {
    id: "key-events",
    name: "ॐ दृढ़प्रतिज्ञे नमः",
    description: "Photos and captions for Akhileshwar Mahadev Mandir.",
    photos: [
      {
        id: "key-events-akhileshwar-mahadev-mandir-1",
        src: akh1,
        thumbnailSrc: akh1,
        alt: "Akhileshwar Mahadev Mandir",
        caption: `Akhileshwar Mahadev Mandir — Om Namah Shivaya.. Pujya Swamiji had informed that once Param Pujya Gurudev mentioned that there should be a Shiva Temple in the ashram at Prayagraj, Hence Swamiji took it as a samkalp and got this temple constructed as per Vedic ordinance. Indeed Swamiji searched for an architect who is very well versed with construction of temples as per the Vedic tradition. Swamiji asked him to make some changes in his given plan. He told Swamiji that if those changes are to be done, then another architect can be selected, as those changes are not in accordance with the Vedas. Swamiji finalised him immediately and told him this is exactly the type of person he wanted, who should have firm resolve to adhere 100% to Vedic tradition.`,
      },
      {
        id: "key-events-akhileshwar-mahadev-mandir-2",
        src: akh2,
        thumbnailSrc: akh2,
        alt: "Akhileshwar Mahadev Mandir",
        caption: "ॐ शिवभक्ताय नमः।",
      },
      {
        id: "key-events-shivpuja",
        src: newShivpuja,
        thumbnailSrc: newShivpuja,
        alt: "Shiv puja with Swamiji",
        caption: "",
      },
      {
        id: "key-events-akhileshwar-mahadev-mandir-3",
        src: akhProcession,
        thumbnailSrc: akhProcession,
        alt: "Akhileshwar Mahadev Mandir",
        caption: `Swamiji very fondly used to explain the different parts of the temple as representing the parts of the deity's body, perhaps like the "dhwaja" flag on the top representing the hair. Swamiji was also very much concerned for good care of the temple in future and mentioned quite a few times, that he wants that there should be no wear and tear in this temple after him. Below are few pictures from the inauguration of this temple on Mahashivratri 2009.`,
      },
      {
        id: "key-events-akhileshwar-mahadev-mandir-4",
        src: akhBhagFav2,
        thumbnailSrc: akhBhagFav2,
        alt: "Akhileshwar Mahadev Mandir Shiva form",
        caption: "ॐ शिवस्वरूपाय नमः।",
      },
      {
        id: "key-events-sabhaghar-1",
        src: sh3,
        thumbnailSrc: sh3,
        alt: "Sabhaghar",
        caption: "Sabhaghar — Pujya Swamiji reviewing construction of Chinmaya Shatabdi Sabhagreh at Siddhbari",
      },
      {
        id: "key-events-sabhaghar-2",
        src: sh1,
        thumbnailSrc: sh1,
        alt: "Sabhaghar",
        caption: `Sabhaghar — सभागार के निर्माण के दौरान अक्सर मशीनों से बहुत अधिक शोर हुआ करता था। एक दोपहर जब पूज्य स्वामी जी आराम कर रहे थे, मैंने स्वामी जी से अनुरोध किया कि क्या मैं कुछ समय के लिए मशीन स्विच करने के लिए कह सकता हूँ ताकि स्वामी जी आराम कर सकें। पूज्य स्वामी जी ने उत्तर दिया कि जब तक निर्माण कार्य चल रहा है, वह विश्राम में है। निर्माण कार्य रुक गया तो वह श्रमित हो जायेंगे I जब लिंटर का काम चल रहा होता तो स्वामीजी पैड पर चढ़ जाते थे और फिसलन के कारण निर्माण स्थल पर दो बार गिरे थे, क्योंकि उनके पैरों में संवेदना की शक्ति कम थी।`,
      },
    ],
  },
  {
    id: "batches",
    name: "Shishya-Sangam / शिष्य संगम",
    description: "Group photographs from various batches and gatherings.",
    photos: [
      {
        id: "batch-1",
        src: batch1,
        thumbnailSrc: batch1,
        alt: "Batch group photo 1",
        caption: "",
      },
      {
        id: "batch-2",
        src: batch2,
        thumbnailSrc: batch2,
        alt: "Batch group photo 2",
        caption: "",
      },
      {
        id: "batch-3",
        src: batch3,
        thumbnailSrc: batch3,
        alt: "Batch group photo 3",
        caption: "",
      },
      {
        id: "batch-4",
        src: batch4,
        thumbnailSrc: batch4,
        alt: "Batch group photo 4",
        caption: "",
      },
      {
        id: "batch-5",
        src: batch5,
        thumbnailSrc: batch5,
        alt: "Shishya Sangam group photo",
        caption: "",
      },
    ],
  },
  {
    id: "others",
    name: "Others",
    description: "Use this category for photos that do not fit the other tabs.",
    photos: [
      {
        id: "others-twameva-mata",
        src: pairMata,
        thumbnailSrc: pairMata,
        alt: "Twameva Mata — pair",
        caption: "त्वमेव माता",
        objectFit: "contain",
        wide: true,
      },
      {
        id: "others-twameva-pita",
        src: pairPita,
        thumbnailSrc: pairPita,
        alt: "Twameva Pita — pair",
        caption: "च पिता त्वमेव",
        objectFit: "contain",
        wide: true,
      },
      {
        id: "others-twameva-bandhu",
        src: pairBandhu,
        thumbnailSrc: pairBandhu,
        alt: "Twameva Bandhu — pair",
        caption: "त्वमेव बन्धुश्च",
        objectFit: "contain",
        wide: true,
      },
      {
        id: "others-twameva-sakha",
        src: pairSakha,
        thumbnailSrc: pairSakha,
        alt: "Twameva Sakha — pair",
        caption: "च सखा त्वमेव।",
        objectFit: "contain",
        wide: true,
      },
      {
        id: "others-garland",
        src: othersGarland,
        thumbnailSrc: othersGarland,
        alt: "Group with garlands",
        caption: "",
      },
      {
        id: "others-toddler",
        src: othersToddler,
        thumbnailSrc: othersToddler,
        alt: "Swamiji with child",
        caption: "",
      },
    ],
  },
];
