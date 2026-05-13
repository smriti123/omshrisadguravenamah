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

// Namami-Chittchorkam (mirrors RadiantSmileSection captioned photos)
import smile1 from "@/assets/smile1.jpg";
import smile2 from "@/assets/smile2.jpg";
import smile3 from "@/assets/smile3.jpg";
import smile4 from "@/assets/smile4.jpg";
import smile8 from "@/assets/smile8.jpeg";
import smileMadhurCombined from "@/assets/smile-madhur-combined.jpg";

export type Gallery2Photo = {
  id: string;
  src: string;
  thumbnailSrc: string;
  alt: string;
  caption: string;
  objectFit?: "cover" | "contain";
};

export type Gallery2Category = {
  id: string;
  name: string;
  description: string;
  photos: Gallery2Photo[];
};

export const gallery2Categories: Gallery2Category[] = [
  {
    id: "with-gurudev",
    name: "With Gurudev",
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
        caption: "Last available picture dated 3rd Aug 2020, on 28th Mahasamadhi diwas of Pujya Gurudev.",
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
    id: "akhileshwar-bhagwan-temple",
    name: "Akhileshwar Bhagwan temple",
    description: "Add Akhileshwar Bhagwan temple photos to this category when ready.",
    photos: [],
  },
  {
    id: "namami-chittchorkam",
    name: "Namami chittchorkam",
    description: "Photos from the Namami-Chittchorkam section with their captions.",
    photos: [
      {
        id: "namami-1",
        src: smile1,
        thumbnailSrc: smile1,
        alt: "Namami Chittchorkam photo 1",
        caption: "प्रसन्नाननं नीलकण्ठं दयालम्‌ । प्रिय शंकरं सर्वनाथं भजामि ॥",
      },
      {
        id: "namami-2",
        src: smile2,
        thumbnailSrc: smile2,
        alt: "Namami Chittchorkam photo 2",
        caption: "ॐ प्रसन्न चित्ताय नमः ।",
      },
      {
        id: "namami-3",
        src: smile3,
        thumbnailSrc: smile3,
        alt: "Namami Chittchorkam photo 3",
        caption: "🕉️श्री प्रमोदनाय नमः। (जो सदा प्रसन्न हैं वो प्रमोदन: ।)",
      },
      {
        id: "namami-4",
        src: smile4,
        thumbnailSrc: smile4,
        alt: "Namami Chittchorkam photo 4",
        caption: "ॐ आनन्द स्वरूपाय नमः ।",
      },
      {
        id: "namami-5",
        src: smile8,
        thumbnailSrc: smile8,
        alt: "Namami Chittchorkam photo 5",
        caption:
          "श्री नन्दनाय नमः। जो अन्य को प्रसन्नचित्त करता है वो नन्दन: ऐसे हमारे प पू श्री गुरुवर्याय नमः।",
      },
      {
        id: "namami-6",
        src: smileMadhurCombined,
        thumbnailSrc: smileMadhurCombined,
        alt: "Namami Chittchorkam photo 6",
        caption:
          "अधरं मधुरं वदनं मधुरं, नयनं मधुरं हसितं मधुरं । हृदयं मधुरं गमनं मधुरं, मधुराधिपते रखिलं मधुरं ॥",
      },
    ],
  },
  {
    id: "kayakal-paalghar-ceremony",
    name: "Kayakal Paalghar ceremony",
    description: "Add Kayakal Paalghar ceremony photos and captions to this category when ready.",
    photos: [],
  },
  {
    id: "batches",
    name: "Batches",
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
    ],
  },
  {
    id: "others",
    name: "Others",
    description: "Use this category for photos that do not fit the other tabs.",
    photos: [],
  },
];
