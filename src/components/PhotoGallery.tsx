import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import p1  from "@/assets/gallery/photo-1.jpg";
import p2  from "@/assets/gallery/photo-2.jpg";
import p3  from "@/assets/gallery/photo-3.jpg";
import p4  from "@/assets/gallery/photo-4.jpg";
import p5  from "@/assets/gallery/photo-5.jpg";
import p6  from "@/assets/gallery/photo-6.jpg";
import p7  from "@/assets/gallery/photo-7.jpg";
import p8  from "@/assets/gallery/photo-8.jpg";
import p9  from "@/assets/gallery/photo-9.jpg";
import p10 from "@/assets/gallery/photo-10.jpg";
import p11 from "@/assets/gallery/photo-11.jpg";
import p12 from "@/assets/gallery/photo-12.jpg";
import p13 from "@/assets/gallery/photo-13.jpg";
import p14 from "@/assets/gallery/photo-14.jpg";
import p15 from "@/assets/gallery/photo-15.jpg";
import p16 from "@/assets/gallery/photo-16.jpg";
import p17 from "@/assets/gallery/photo-17.jpg";
import p18 from "@/assets/gallery/photo-18.jpg";
import p19 from "@/assets/gallery/photo-19.jpg";
import p20 from "@/assets/gallery/photo-20.jpg";
import p21 from "@/assets/gallery/photo-21.jpg";
import  ph1 from "@/assets/gallery/ph1.jpg";
import g3  from "@/assets/g3.jpg";
import gurudev  from "@/assets/Gurudev.jpg";
import gurudev3  from "@/assets/gallery/Gurudev3.jpg";
import gurudev4  from "@/assets/gallery/Gurudev4.jpg";
import Last  from "@/assets/gallery/Last.jpeg";
import Gaumata  from "@/assets/Gaumata.jpg";
import h1  from "@/assets/h1.jpg";
import GP  from "@/assets/gallery/GP.jpeg";
import sh1 from "@/assets/gallery/sh1.jpg";
import sh2 from "@/assets/gallery/sh2.jpg";
import sh3 from "@/assets/gallery/sh3.jpg";
import sign from "@/assets/gallery/sign.jpg";
import akh1 from "@/assets/gallery/akh1.jpg";
import akh2 from "@/assets/gallery/akh2.jpg";
import ma1 from "@/assets/gallery/ma.jpg";
import kreeda from "@/assets/gallery/kreeda.jpg";

import v1 from "@/assets/gallery/v1.jpg";
import v2 from "@/assets/gallery/v2.jpg";
import v3 from "@/assets/gallery/v3.jpg";
import v4 from "@/assets/gallery/v4.jpg";
import v6 from "@/assets/gallery/v6.jpg";
import v7 from "@/assets/gallery/v7.jpeg";
import v8 from "@/assets/gallery/v8.jpeg";
import v9 from "@/assets/gallery/v9.jpg";
import v10 from "@/assets/gallery/v10.jpeg";
import v11 from "@/assets/gallery/v11.jpg";
import v12 from "@/assets/gallery/v12.jpg";


// ─────────────────────────────────────────────────────────
// vintage: true  → sepia tint
// story: "..."   → optional. If present, shows as hover popover
//                  Leave story out (or undefined) for regular photos
// ─────────────────────────────────────────────────────────
type Photo = {
  src: string;
  label: string;
  vintage: boolean;
  story?: string; // ← Add a story to any photo for the hover popover
};

const smritiyaanPhotos: Photo[] = [
  {
    src: h1,
    label: `ॐ सद्गुरु प्रियाय नमः ।`,
    vintage: true,
    story: "." ,
  },
   {
    src: gurudev4,
    label: "",
    vintage: true,
    story: `He would be always around Gurudev, on his toes, alert, sharp, vigilant and forever thinking ahead, knowing what to do before he is told.`,
  },
  {
    src: ph1,
    label: "",
    vintage: true,
    story: `Whenever Pujya Gurudev came to Sidhbari, it was Swami Subodhanandaji who would push his wheelchair — doing so with such devotion and pride.` ,
  },
  
  {
    src: g3,
    label: "",
    vintage: true,
    story: `ब्रह्मलीन प पूज्य गुरुदेव सान्निध्य प्राप्त करके आपने गुरुदेवकी अप्रतिम सेवा की एवं गुरु निष्ठाका श्रेष्ठ उदाहरण हमें मिला।`,
  },
  
  {
    src: gurudev3,
    label: "",
    vintage: true,
    story: `Swamiji had given strict instructions that the puja asana and the bell and basket for puja must never be left over on the Samadhi sthal platform, it should be immediately removed after the Puja and kept at appropriate hidden place made for this purpose. Also Swamiji would ensure  that the flame of the lamp was just appropriate, not too intense and not to dim and . During summers, Swamiji would himself set  the direction of the  fan which Swamiji  himself got placed at the samadhi sthal, so that it sends  the breeze air in the right direction to  reached Param Pujya Gurudev.  It was required to be done everyday since the workers cleaning the floor would change the fan direction unknowingly. Swamiji would look at Gurudev's vigreh  with so much concentration as if taking orders or approvals from Him. Swamiji would guide us that while doing "Prakrima " even from outside the samadhi hall, Gurudev must always be on our right hand side. Swamiji would do "prakrima " of Gurudev both from inside the samadhi sthla and also from outside. On 23rd March 2020, as Swamiji prostrated before Gurudev, his legs fumbled , which was initially thought to be a vertigo attack but later after CT Scan turned to be a mild haemorrhage. It is so inspiring that Pujya Swamiji also visited Gurudev at the samadhi stahl on 26th Sept 2020 around 10 pm, 4 hours before his last breath at Siddhbari.`,
  },
  
  {
    src: gurudev,
    label: "",
    vintage: true,
    story: `we have physically seen when all of a sudden at 3 AM in Sidhbari HE ( Swami Subodanandji) will get up n tell us n other devotees sitting n listening to his spirituality..COME ON ..Gurudev के दर्शन कर के आते हैं..and we all seated disciples follow HIM in that pitch dark, quiet n aromatic night ..the aroma of all flowers which we used to pass through to SAMADHI OF PUJYA GURUDEV  n stand quietly with closed eyes for indefinite time behind HIM ..while HE was communicating silently with HIM ...the omnipresence  of GOD ..Pujya Gurudev to another GOD Swami Subodanandji..oh my Lord ..how fortunate we were !`,
  },
   { src: p16, label: "",       vintage: false },
  {
    src: Last,
    label: "",
    vintage: true,
    story: `Last available picture dated 3rd Aug 2020 , on 28th Mahasamadhi diwas of Pujya Gurudev`,
  },
 
     {
    src: Gaumata,
    label: "ॐ धेनु प्रियाय नमः।",
    vintage: false,
   story: `एक बार पूज्य गुरु जी ने राममन्दिर के बाहर भी विधिवत् गैया मैया की पूजा की थी ।
I fondly remember when Swamiji entered the Gaushala how all the cows started getting restless and impatient for Swamiji’s touch and love and cuddle!! Swamiji called few names of cows so lovingly... Parvati... Nandini... and a few others, and they all poured their love for Swamiji the moment he came near each one of them.....💐`,
},

  {
    src: GP,
    label: "",
    vintage: true,
    story: "at Siddhbari cottage : July 2020,'",
  },
  
  {
    src: p2,
    label: "",
    vintage: true,
    story: "Being from Andhra Pradesh and having not studied Hindi during my school days, I often struggled to understand Hindi. But when I first listened to Pujya Swamiji’s discourses on Ramcharit Manas, something magical happened, everything that Pujya Swamiji was saying was flowing like nectar into my ears!! It is the love and grace of the Gurus!! 🙏🏽 When there is thirst, they quench it immediately. When there is no thirst, the tap goes dry. This has happened multiple times  in my experience. When I was thirsty, there was an ocean of water to drink. When I was not thirsty, I was stranded in a dessert,'",
  },
   {
    src: akh1,
    label: "Akhileshwar Mahadev Mandir",
    vintage: false,
    story: `Om Namah Shivaya.. Pujya Swamiji had informed that once Param Pujya  Gurudev mentioned that there should be a Shiva Temple in the ashram at Prayagraj, Hence Swamiji took it as a samkalp and got this temple constructed as per Vedic ordinance . Indeed Swamiji searched for an architect who is very  well versed with construction of temples as per the  Vedic tradition,. Swamiji asked him to make some changes in his given plan. He told Swamiji that if those changes are to be done, then another architect can be selected, as those changes are not in accordance with the Vedas. Swamiji finalised him immediately  and told him this is exactly the type of person he wanted,who should have firm resolve to adhere 100% to Vedic tradition. Swamiji very fondly used to explain the different parts of the temple as representing the parts of the deity's body, perhaps like the "dhwaja" flag on the top representing the hair  .  Swamiji was also  very much concerned for good care of the temple in future and mentioned quite a few times, that he wants  that there should be no wear and tear in this  temple after him. Below are few pictures from the inauguration of this  temple  on Mahashivratri  2009.`,
  },  
   { src: sh3,  label: "Sabhaghar Pujya Swamiji reviewing construction of Chinmaya Shatabdi Sabhagreh at Siddhbari",     vintage: false },
   {
    src: sh1,
    label: "Sabhaghar",
    vintage: false,
    story: `सभागार के निर्माण के दौरान अक्सर मशीनों से बहुत अधिक शोर हुआ करता था। एक दोपहर जब पूज्य स्वामी जी आराम कर रहे थे, मैंने स्वामी जी से अनुरोध किया कि क्या मैं  कुछ समय के लिए मशीन स्विच करने के लिए कह सकता हूँ ताकि स्वामी जी आराम कर सकें। पूज्य स्वामी जी ने उत्तर दिया कि जब तक निर्माण कार्य चल रहा है, वह विश्राम में है। निर्माण कार्य रुक गया तो वह श्रमित हो जायेंगे I जब लिंटर का काम चल रहा होता तो स्वामीजी पैड पर चढ़ जाते थे और फिसलन के कारण निर्माण स्थल पर दो बार गिरे थे, क्योंकि उनके पैरों में संवेदना की शक्ति कम  थी।`
,
  },  
   { src: sh2,  label: "",     vintage: false },
   { src: akh2,  label: "Akhileshwar Mahadev Mandir",   vintage: true  },
  { src: p3,  label: "",   vintage: true  },
  { src: p4,  label: "", vintage: true  },
  {
    src: p5,
    label: "",
    vintage: true,
    story: "For three consecutive winters, Swamiji retreated to a remote cave near Gangotri for intense meditation. With no shelter from the biting cold, sustained only by simple food and unwavering faith, these years shaped the extraordinary stillness that devotees would later sense in his presence.",
  },
  { src: p6,  label: "",         vintage: true, story: `
The beauty of Swamijee has been that every devotee  n his associated Ashram was liked most whereas all devotees belonging to different different Ashram too felt the same.
This is the beauty of a GURU SWAMI SUBODHANANDJEE  whose love 💘 for any individual or his Ashram was NOT at the cost of others !! 
He loved all too much n all EQUALLY TOO !! 
That's why every one of us the  devotees miss him equally n she'd tears equally !!`},
    { src: kreeda, label: "ॐ क्रीडा प्रियाय नमः ।", vintage: false, story: `एकदम सार्थक है यह नाम। विद्यार्थी काल में क्रिकेट 🏏 के लिए जयंत क्लब की स्थापना। ब्रह्मचारी काल में और आचार्य काल में सिद्धबारी में 🏸 बैडमिंटन, कब्बडी। A lot of Volleyball too until early 2005 before valve replacement surgery! Later Pujya Swamiji adopted doing regular yogasanas in His cottage instead of outdoor games. He was a very good badminton player in his time. During my batch (1998), I was blessed enough that he used to play with me in a very well steady manner and also taught me the same.` },
  { src: p9,  label: "Nature walk",     vintage: false },
  { src: p7,  label: "",     vintage: false },
  {
    src: p8,
    label: "With Param Guru",
    vintage: false,
    story: "",
  },  

  { src: p10, label: "",        vintage: true  },
  { src: p11, label: "Puja ceremony",   vintage: false },
  { src: p12, label: "",  vintage: false },
  { src: p13, label: "",      vintage: false },
  { src: p14, label: "",      vintage: false },
  { src: p15, label: "",       vintage: false },
 
  { src: p17, label: "",        vintage: false },
  { src: p18, label: "",   vintage: false },
  
 
  { src: p20, label: "", vintage: false },
  { src: p21, label: "",     vintage: false },
];

const visheshPhotos: Photo[] = [
  {
    src: v1,
    label: "",
    vintage: true,
    story: "'",
  },
  { src: v2, label: "",  vintage: true },
  {
    src: v3,
    label: "",
    vintage: true,
    story: "",
  },
  { src: v4, label: "",    vintage: true },
  { src: v6, label: "", vintage: true },
  {
    src: v7,
    label: "Gurudev Mahasamadhi",
    vintage: true,
    story: "All final rites of Pujya Gurudev as I had reiterated in past ..were fone by Pujya Brahmaleen His Holiness  Swami Subodanandji immaculately with precision amidst all top Saints present there... You name it..you think it'",
  },
  {
    src: v9,
    label: "Gurudev Mahasamadhi",
    vintage: true,
    story: " जब परम पूज्य गुरुदेव के श्री विग्रह को भू समाधि दी जा रही थी तो पूज्य स्वामीजी नेत्रों में अश्रु होने से उस स्थल पर  उपस्थित नहीं हुए। उनको किसी के द्वारा उस समय वहां बुलाया गया, और फिर पूज्य स्वामीजी ने उस भू खंड में उतरकर परम पूज्य गुरुदेव के श्री विग्रह को अपने हाथों में पकड़कर भूमिष्ट किया। परम पूज्य  गुरुदेव के पंचभौतिक विग्रह को  बिलकुल उसी मुद्रा में  समाधिस्थ किया गया, जिस  मुद्रा में ठीक उसी स्थान के ऊपर उनकी पंच धातु का विग्रह सिद्धबाड़ी में स्थापित है। ॐ श्री चिन्मय सदगुरवे नमः।।'",
  },
  {
    src: v8,
    label: "Gurudev Mahasamadhi",
    vintage: true,
    story: " जब परम पूज्य गुरुदेव के श्री विग्रह को भू समाधि दी जा रही थी तो पूज्य स्वामीजी नेत्रों में अश्रु होने से उस स्थल पर  उपस्थित नहीं हुए। उनको किसी के द्वारा उस समय वहां बुलाया गया, और फिर पूज्य स्वामीजी ने उस भू खंड में उतरकर परम पूज्य गुरुदेव के श्री विग्रह को अपने हाथों में पकड़कर भूमिष्ट किया। परम पूज्य  गुरुदेव के पंचभौतिक विग्रह को  बिलकुल उसी मुद्रा में  समाधिस्थ किया गया, जिस  मुद्रा में ठीक उसी स्थान के ऊपर उनकी पंच धातु का विग्रह सिद्धबाड़ी में स्थापित है। ॐ श्री चिन्मय सदगुरवे नमः।।'",
  },
     { src: v10, label: "",    vintage: true },
   { src: v11, label: "",    vintage: true },
   { src: v12, label: "",    vintage: true }
  
];

const INITIAL  = 12;
const PER_LOAD = 12;

// ── Lightbox ──────────────────────────────────────────────
const Lightbox = ({
  photos, startIndex, onClose,
}: { photos: Photo[]; startIndex: number; onClose: () => void }) => {
  const [idx, setIdx] = useState(startIndex);
  const prev = useCallback(() => setIdx((i) => (i - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % photos.length), [photos.length]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [prev, next, onClose]);

  const photo = photos[idx];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "radial-gradient(circle at top, rgba(80,35,10,0.94) 0%, rgba(35,16,6,0.96) 45%, rgba(24,10,4,0.98) 100%)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 left-6 rounded-full px-4 py-2 text-sm tracking-wide transition-all"
        style={{
          border: "1px solid rgba(200,140,40,0.35)",
          color: "rgba(255,220,150,0.9)",
          background: "rgba(200,120,20,0.12)",
        }}
        onClick={onClose}
      >
        ← Back to Gallery
      </button>

      <button
        className="absolute top-5 right-6 text-4xl leading-none"
        style={{ color: "rgba(255,210,120,0.6)" }}
        onClick={onClose}
      >×</button>

      <div className="relative w-full max-w-5xl px-4" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
            style={{ maxHeight: "78vh", border: "1px solid rgba(200,140,40,0.3)" }}
          >
            <img
              src={photo.src} alt={photo.label}
              className="w-full max-h-[78vh] object-contain object-center"
              style={photo.vintage ? { filter: "sepia(60%) contrast(1.05) brightness(0.94)" } : {}}
            />
          </motion.div>
        </AnimatePresence>

        <div className="mt-3 text-center">
          <p className="text-sm tracking-widest" style={{ color: "rgba(255,220,150,0.85)" }}>
            {photo.label}
            {photo.vintage && <span className="ml-2 text-xs" style={{ color: "rgba(200,150,60,0.6)" }}>· vintage</span>}
          </p>
          {/* Story in lightbox if present */}
          {photo.story && (
            <div
              className="mt-4 rounded-lg p-4 text-left"
              style={{
                border: "1px solid rgba(200,140,40,0.3)",
                background: "rgba(255,220,170,0.08)",
              }}
            >
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "rgba(255,220,170,0.9)", fontFamily: "serif", lineHeight: "1.8" }}
              >
                {photo.story}
              </p>
            </div>
          )}
          <p className="text-xs mt-2" style={{ color: "rgba(200,150,60,0.35)" }}>{idx + 1} / {photos.length}</p>
        </div>

        <div className="flex justify-between mt-4">
          {[{ fn: prev, label: "← Prev" }, { fn: next, label: "Next →" }].map(({ fn, label }) => (
            <button key={label} onClick={fn}
              className="px-6 py-2 rounded-full text-sm tracking-wide transition-all"
              style={{ border: "1px solid rgba(200,140,40,0.3)", color: "rgba(255,210,120,0.7)", background: "rgba(200,120,20,0.08)" }}
            >{label}</button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ── Photo Card with story always visible ──────────────────
const PhotoCard = ({
  photo, globalIndex, onOpen,
}: { photo: Photo; globalIndex: number; onOpen: (i: number) => void }) => {
  const hasStory = Boolean(photo.story?.trim());
  const isFirstPhoto = globalIndex === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`cursor-pointer rounded-xl overflow-hidden border border-amber-900/20 bg-amber-50/35 shadow-[0_8px_24px_rgba(92,42,8,0.08)] transition-all duration-200 hover:shadow-[0_12px_30px_rgba(92,42,8,0.16)] ${
        hasStory ? "md:col-span-2" : "md:col-span-1"
      }`}
      onClick={() => onOpen(globalIndex)}
    >
      <div className={hasStory ? "grid grid-cols-1 md:grid-cols-[minmax(220px,34%)_1fr]" : "relative"}>
        <div className="bg-[#f4dfc2] relative">
          <img
            src={photo.src}
            alt={photo.label}
            className={`w-full h-full object-cover object-top ${hasStory ? "min-h-[250px] max-h-[380px]" : "min-h-[240px] max-h-[340px]"}`}
            style={photo.vintage ? { filter: "sepia(55%) contrast(1.05) brightness(0.93)" } : {}}
          />

          {!hasStory && photo.label && (
            <div
              className="absolute left-3 bottom-3 px-3 py-1.5 rounded-md text-xs md:text-sm font-semibold tracking-wide max-w-[85%] truncate"
              style={{ background: "rgba(35,16,5,0.62)", color: "rgba(255,235,190,0.96)" }}
            >
              {photo.label}
            </div>
          )}
        </div>

        {hasStory && (
          <div className={`p-4 md:p-5 flex flex-col ${isFirstPhoto ? "items-center justify-center text-center" : ""}`}>
            {photo.label && (
              <p
                className={isFirstPhoto ? "text-2xl md:text-4xl font-bold tracking-wide" : "text-sm font-semibold tracking-wide mb-2"}
                style={{ color: "#7a3a00", fontFamily: "serif" }}
              >
                {photo.label}
              </p>
            )}

            {!isFirstPhoto && (
              <>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(95,45,10,0.9)",
                    fontFamily: "serif",
                    lineHeight: "1.75",
                    display: "-webkit-box",
                    WebkitLineClamp: 8,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {photo.story}
                </p>
                <p className="text-[11px] tracking-[0.14em] uppercase mt-4" style={{ color: "rgba(130,70,20,0.55)" }}>
                  Tap card to open full screen
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ── Section heading ───────────────────────────────────────
const SectionHeading = ({
  hindi,
  english,
  sub,
  description,
}: {
  hindi: string;
  english: string;
  sub: string;
  description?: string;
}) => (
  <div className="text-center mb-8">
    <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "rgba(160,90,16,0.6)" }}>{sub}</p>
    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#7a3a00", fontFamily: "serif" }}>{english}</h3>
    <p className="text-sm mb-4" style={{ color: "rgba(140,70,10,0.65)", fontFamily: "serif" }}>{hindi}</p>
    {description && (
      <p className="text-sm md:text-base max-w-3xl mx-auto mb-4" style={{ color: "rgba(120,65,14,0.75)", fontFamily: "serif" }}>
        {description}
      </p>
    )}
    <div className="flex items-center justify-center gap-3">
      <div className="w-12 h-px" style={{ background: "rgba(180,100,20,0.35)" }} />
      <span style={{ color: "rgba(180,100,20,0.6)" }}>✦</span>
      <div className="w-12 h-px" style={{ background: "rgba(180,100,20,0.35)" }} />
    </div>
  </div>
);

// ── Photo Grid with Load More ─────────────────────────────
const PhotoGrid = ({
  photos, globalOffset, onOpen,
}: { photos: Photo[]; globalOffset: number; onOpen: (i: number) => void }) => {
  const [visible, setVisible] = useState(INITIAL);
  const shown     = photos.slice(0, visible);
  const remaining = photos.length - visible;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {shown.map((photo, i) => (
          <PhotoCard
            key={i}
            photo={photo}
            globalIndex={globalOffset + i}
            onOpen={onOpen}
          />
        ))}
      </div>

      {remaining > 0 && (
        <div className="flex flex-col items-center mt-8 gap-2">
          <p className="text-xs tracking-wider" style={{ color: "rgba(160,90,16,0.5)" }}>
            Showing {visible} of {photos.length} photos
          </p>
          <button
            onClick={() => setVisible((v) => Math.min(v + PER_LOAD, photos.length))}
            className="px-8 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200"
            style={{ border: "1px solid rgba(180,100,20,0.35)", color: "#7a3a00", background: "rgba(180,100,20,0.07)" }}
          >
            Load more · {remaining} remaining ↓
          </button>
        </div>
      )}

      {remaining <= 0 && photos.length > INITIAL && (
        <p className="text-center text-xs mt-6 tracking-wider" style={{ color: "rgba(160,90,16,0.35)" }}>
          All {photos.length} photos ✦
        </p>
      )}
    </div>
  );
};

// ── Main Section ──────────────────────────────────────────
const GallerySection = () => {
  const [lbOpen, setLbOpen]   = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const allPhotos = [...smritiyaanPhotos, ...visheshPhotos];
  const openLb = (i: number) => { setLbIndex(i); setLbOpen(true); };

  return (
    <section
      id="gallery"
      className="py-20"
      style={{ background: "linear-gradient(180deg, hsl(34 50% 78%) 0%, hsl(32 55% 68%) 40%, hsl(34 50% 75%) 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4">

        <SectionHeading
          sub="Photo gallery"
          english="Divine Glimpses"
          hindi="दिव्य दर्शन"
          description="Along with fond memories and heartfelt recollections shared by devotees from time to time."
        />

        {/* Section 1 */}
        <div className="mb-20">
          <PhotoGrid photos={smritiyaanPhotos} globalOffset={0} onOpen={openLb} />
        </div>

        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px" style={{ background: "rgba(180,100,20,0.2)" }} />
          <span className="text-xs px-4 py-1 rounded-full"
            style={{ border: "1px solid rgba(180,100,20,0.25)", color: "rgba(160,90,16,0.7)", background: "rgba(180,100,20,0.05)" }}>✦</span>
          <div className="flex-1 h-px" style={{ background: "rgba(180,100,20,0.2)" }} />
        </div>

        {/* Section 2 */}
        <div>
          <PhotoGrid photos={visheshPhotos} globalOffset={smritiyaanPhotos.length} onOpen={openLb} />
        </div>

        <p className="text-center text-xs mt-12 tracking-wider" style={{ color: "rgba(160,90,16,0.4)" }}>
          Every card shows photo + story snippet · Click any card to read full story
        </p>
      </div>

      <AnimatePresence>
        {lbOpen && (
          <Lightbox photos={allPhotos} startIndex={lbIndex} onClose={() => setLbOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
