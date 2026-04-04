import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

import imgArrival from "@/assets/gallery/v1.jpg";
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
    image: imgArrival,
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
    <section id="journey" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Journey"
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

            <p>
              Yet no timeline can ever contain the fullness of the life and grace of our Hriday Samarth.
              This is only a humble and approximate effort to trace the outer journey of one whose inner presence continues to guide countless hearts.
             
            </p>

          
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.6), hsl(var(--saffron) / 0.3), hsl(var(--gold) / 0.6))" }}
          />

          <div className="space-y-10">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="relative pl-12 md:pl-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Dot */}
                <div
                  className={`absolute left-2.5 md:left-[1.625rem] top-1.5 w-3 h-3 rounded-full border-2 ${
                    event.highlight
                      ? "bg-primary border-primary"
                      : "bg-background border-muted-foreground/40"
                  }`}
                />

                {/* Content */}
                <div>
                  <time className="text-xs uppercase tracking-widest text-primary font-medium font-body">
                    {event.date}
                  </time>
                  <h3
                    className={`mt-1 text-xl md:text-2xl font-semibold font-display ${
                      event.highlight ? "text-foreground" : "text-foreground/80"
                    }`}
                  >
                    {event.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed text-[0.95rem] font-body">
                    {event.description}
                  </p>

                  {/* Photo for select milestones */}
                  {event.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="mt-4 rounded-lg overflow-hidden shadow-md border"
                      style={{
                        borderColor: "hsl(var(--gold) / 0.3)",
                        maxWidth: "320px",
                      }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover object-top"
                        style={{ filter: "sepia(25%) contrast(1.02) brightness(0.96)" }}
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
