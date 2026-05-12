import p1 from "@/assets/gallery/photo-1.jpg";
import p2 from "@/assets/gallery/photo-2.jpg";
import p3 from "@/assets/gallery/photo-3.jpg";
import p4 from "@/assets/gallery/photo-4.jpg";
import p5 from "@/assets/gallery/photo-5.jpg";
import p6 from "@/assets/gallery/photo-6.jpg";
import p7 from "@/assets/gallery/photo-7.jpg";
import p8 from "@/assets/gallery/photo-8.jpg";

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
        src: p1,
        thumbnailSrc: p1,
        alt: "With Gurudev photo 1",
        caption: "With Gurudev — caption can be edited here.",
      },
      {
        id: "with-gurudev-2",
        src: p2,
        thumbnailSrc: p2,
        alt: "With Gurudev photo 2",
        caption: "With Gurudev — add the memory or date here.",
      },
      {
        id: "with-gurudev-3",
        src: p3,
        thumbnailSrc: p3,
        alt: "With Gurudev photo 3",
        caption: "With Gurudev — add a short caption here.",
      },
      {
        id: "with-gurudev-4",
        src: p4,
        thumbnailSrc: p4,
        alt: "With Gurudev photo 4",
        caption: "With Gurudev — describe this moment here.",
      },
      {
        id: "with-gurudev-5",
        src: p5,
        thumbnailSrc: p5,
        alt: "With Gurudev photo 5",
        caption: "With Gurudev — add location or occasion here.",
      },
      {
        id: "with-gurudev-6",
        src: p6,
        thumbnailSrc: p6,
        alt: "With Gurudev photo 6",
        caption: "With Gurudev — write the final caption here.",
      },
      {
        id: "with-gurudev-7",
        src: p7,
        thumbnailSrc: p7,
        alt: "With Gurudev photo 7",
        caption: "With Gurudev — add the devotee memory here.",
      },
      {
        id: "with-gurudev-8",
        src: p8,
        thumbnailSrc: p8,
        alt: "With Gurudev photo 8",
        caption: "With Gurudev — add the blessing or story here.",
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
