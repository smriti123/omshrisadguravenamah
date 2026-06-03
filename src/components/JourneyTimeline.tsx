import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";


import imgDeeksha from "@/assets/gallery/photo-3.jpg";
import imgAcharya from "@/assets/gallery/photo-6.jpg";
import imgSanyasa from "@/assets/gallery/v3.jpg";
import v2 from "@/assets/gallery/v2.jpg";
import v4 from "@/assets/gallery/v4.jpg";
import v6 from "@/assets/gallery/v6.jpg";
import imgPresident from "@/assets/pic5.jpg";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
  image?: string;
}

const events: TimelineEvent[] = [
  {
    date: "19 April 1981",
    title: "Arrival at Sidhbari",
    description:
      "Swami ji reached Sidhbari for joining the 1st Vedanta Course at Sandeepany Himalaya. He was the first student to arrive — even before Gurudev and Guru ji.",
    highlight: true,
  },
  {
    date: "24–25 April 1981",
    title: "Inauguration of Sandeepany Himalaya",
    description:
      "The inauguration ceremony of Sandeepany Himalaya took place. Guru ji inaugurated the Vedanta course by lighting the lamp.",
  },
  {
    date: "29 April 1981",
    title: "First Teaching Class",
    description:
      "The very first teaching class of the Vedanta course was conducted by Guru ji",
    image: v4,
  },
  {
    date: "11 September 1983",
    title: "Brahmachari Deeksha",
    description:
      "Swami ji and other students received Brahmachari Deeksha. Omkar was given the name Br. Vishal ",
    highlight: true,
    image: imgDeeksha,
  },
  {
    date: "30 September 1983",
    title: "Last Class of the Batch",
    description:
      "The final class of this batch was held, with the teaching on चतु: सूत्री (Chatuh Sutri)",
    image: v2,
  },
  {
    date: "30 October 1983",
    title: "Departure from Sidhbari",
    description:
      "All students left Sidhbari. They traveled to Delhi to attend Gurudev's Yagna, then to Uttarkashi for 20 days, and finally to Mumbai for the 1st International Yagna.",
  },
  {
    date: "14 September 1988",
    title: "Return to Sidhbari",
    description:
      "Gurudev was conducting a marathon Vivekachoodamani camp (11 Sept – 15 Oct 1988) and urgently called Swami ji to come to Sidhbari immediately. At that time, Swami ji was at Mandhana. He reached Sidhbari and took Ramcharit Manas classes in Hindi, which were highly appreciated.",
    highlight: true,
  },
  {
    date: "19 September 1988",
    title: "Appointed Trustee & Acharya",
    description:
      "Br. Vishal Chaitanya was appointed as Trustee of CTT (Chinmaya Tapovan Trust) and Acharya of Sandeepany Himalaya .",
    highlight: true,
    image: imgAcharya,
  },
  {
    date: "19 March 1989",
    title: "4th Vedanta Course Inaugurated",
    description:
      "The 4th Vedanta course was inaugurated by Gurudev, with Br. Vishal ji serving as the Acharya of this batch. Sw. Adwaitananda ji is a student of this batch.",
  },
  {
    date: "24 February 1990",
    title: "Sanyasa Deeksha",
    description:
      "Br. Vishal ji was given Sanyasa by Gurudev at Sarveswar Temple, Tamrapakkam, Chennai.",
    highlight: true,
    image: imgSanyasa,
  },
  {
    date: "30 October 1991",
    title: "Regional Head, North India",
    description:
      "Gurudev appointed him as Regional Head of North India, Chinmaya Mission.",
  },
  {
    date: "21 June 1994",
    title: "President of CTT",
    description:
      "Appointed as President of Chinmaya Tapovan Trust (CTT).",
    highlight: true,
    image: imgPresident,
  },
  {
    date: "27 September 2020",
    title: "End of an Era",
    description: "Mahasamadhi",
    highlight: true,
  },
];

const JourneyTimeline = () => {
  return (
    <section
      id="leela"
      className="py-20"
      style={{
        background:
          "linear-gradient(155deg,#fffdf6 0%,#fdf2d6 52%,#f6d5aa 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Sidhbari Leela"
          subtitle="Key milestones in Pujya Swamiji's journey at Sidhbari"
        />

        {/* Intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 px-2 md:px-4"
        >
          <div className="space-y-6 text-[1.075rem] md:text-[1.2rem] leading-relaxed md:leading-loose font-body text-muted-foreground text-left md:text-center">
            <p>
              Param Pujya Swamiji’s association with Sidhbari, from 19 April 1981 to 27 September 2020, spans almost four decades.
              Even after excluding the period of his absence from 31 October 1983 to 13 September 1988, he spent approximately 34½ years in Sidhbari.
            </p>

            <p className="italic">
              As a revered Swamiji once expressed so beautifully, “He lives in every leaf and flower of Sidhbari.”
            </p>

            <p>
              Yet no timeline can ever contain the fullness of the life and grace of our Hriday Samarth.
              This is only a humble and approximate effort to trace the outer journey of one whose inner presence continues to guide countless hearts.
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative px-2 sm:px-4">
          {/* Vertical diya rail */}
          <div
            className="absolute left-3 sm:left-5 md:left-8 top-0 bottom-0"
            style={{
              width: "3px",
              borderRadius: "3px",
              background:
                "linear-gradient(180deg,#edbd79 0%,#bd8b42 50%,#684229 100%)",
              boxShadow: "0 0 8px rgba(189,139,66,.35)",
            }}
          />

          <div className="space-y-10">
            {events.map((event, index) => (
              <motion.div
                key={index}
                tabIndex={0}
                className="timeline-item relative pl-10 sm:pl-14 md:pl-20 outline-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Diya dot */}
                <div
                  className="timeline-dot absolute left-[0.4rem] sm:left-[0.85rem] md:left-[1.55rem] top-2 w-3.5 h-3.5 rounded-full"
                  style={{
                    background: event.highlight
                      ? "radial-gradient(circle at 35% 35%,#fff3c4 0%,#edbd79 45%,#bd8b42 100%)"
                      : "#fffaf0",
                    boxShadow: event.highlight
                      ? "0 0 0 3px #fffaf0, 0 0 0 4px #bd8b42, 0 0 10px rgba(189,139,66,.55)"
                      : "0 0 0 3px #fffaf0, 0 0 0 4px rgba(189,139,66,.55)",
                  }}
                />

                {/* Content */}
                <div
                  className="timeline-card rounded-xl p-3 sm:p-4 md:p-5"
                  style={{
                    background: "rgba(255,250,240,.93)",
                    border: "1px solid rgba(189,139,66,.24)",
                    borderLeft: `4px solid ${
                      event.highlight ? "#bd8b42" : "rgba(189,139,66,.45)"
                    }`,
                    boxShadow: "0 6px 16px rgba(104,66,41,.10)",
                  }}
                >
                  <time
                    className="text-[0.68rem] sm:text-xs uppercase tracking-widest font-medium font-body"
                    style={{ color: "#bd8b42" }}
                  >
                    {event.date}
                  </time>
                  <h3
                    className="mt-1 text-lg sm:text-xl md:text-2xl font-semibold font-display"
                    style={{ color: event.highlight ? "#3d2817" : "#684229" }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="mt-2 leading-relaxed text-[0.88rem] sm:text-[0.95rem] font-body"
                    style={{ color: "rgba(104,66,41,.78)" }}
                  >
                    {event.description}
                  </p>

                  {/* Photo for select milestones */}
                  {event.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="mt-4 rounded-lg overflow-hidden border w-full"
                      style={{
                        borderColor: "rgba(189,139,66,.35)",
                        background: "#fdf6e6",
                        padding: "4px",
                        boxShadow: "0 8px 20px rgba(104,66,41,.15)",
                        maxWidth: "min(100%, 320px)",
                      }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-auto rounded-md"
                        style={{ filter: "sepia(35%) contrast(1.02) brightness(0.97)" }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
