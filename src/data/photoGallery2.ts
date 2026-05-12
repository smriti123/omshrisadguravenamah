import h1 from "@/assets/h1.jpg";
import gurudev4 from "@/assets/gallery/Gurudev4.jpg";
import ph1 from "@/assets/gallery/ph1.jpg";
import g3 from "@/assets/g3.jpg";
import gurudev3 from "@/assets/gallery/Gurudev3.jpg";
import gurudev from "@/assets/Gurudev.jpg";
import p16 from "@/assets/gallery/photo-16.jpg";
import lastPhoto from "@/assets/gallery/Last.jpeg";

export type Gallery2Photo = {
  id: string;
  src: string;
  thumbnailSrc: string;
  alt: string;
  caption: string;
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
      },
      {
        id: "with-gurudev-4",
        src: g3,
        thumbnailSrc: g3,
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
    description: "Add Namami chittchorkam photos and captions to this category when ready.",
    photos: [],
  },
  {
    id: "kayakal-paalghar-ceremony",
    name: "Kayakal Paalghar ceremony",
    description: "Add Kayakal Paalghar ceremony photos and captions to this category when ready.",
    photos: [],
  },
  {
    id: "others",
    name: "Others",
    description: "Use this category for photos that do not fit the other tabs.",
    photos: [],
  },
];
