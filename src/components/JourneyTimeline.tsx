import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";



interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
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
      "The very first teaching class of the Vedanta course was conducted by Guru ji, marking the beginning of a transformative spiritual education.",
  },
  {
    date: "11 September 1983",
    title: "Brahmachari Deeksha",
    description:
      "Swami ji and other students received Brahmachari Deeksha. Omkar was given the name Br. Vishal — a milestone in his spiritual journey.",
    highlight: true,
  },
  {
    date: "30 September 1983",
    title: "Last Class of the Batch",
    description:
      "The final class of this batch was held, with the teaching on चतु: सूत्री (Chatuh Sutri), bringing the first course to a meaningful conclusion.",
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
      "Br. Vishal Chaitanya was appointed as Trustee of CTT (Chinmaya Tapovan Trust) and Acharya of Sandeepany Himalaya — a recognition of his deep knowledge and dedication.",
    highlight: true,
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
      "Br. Vishal ji was given Sanyasa by Gurudev at Sarveswar Temple, Tamrapakkam, Chennai — a sacred moment of complete renunciation and dedication to the spiritual path.",
    highlight: true,
  },
  {
    date: "30 October 1991",
    title: "Regional Head, North India",
    description:
      "Gurudev appointed him as Regional Head of North India, Chinmaya Mission, expanding his responsibilities and service across the region.",
  },
  {
    date: "21 June 1994",
    title: "President of CTT",
    description:
      "Appointed as President of Chinmaya Tapovan Trust (CTT), the pinnacle of organizational responsibility within the mission.",
    highlight: true,
  },
  {
    date: "27 September 2020",
    title: "End of an Era",
    description:
      "Mahasamadhi",
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

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
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
