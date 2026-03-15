import { motion } from "framer-motion";
import { Music, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Bhajan {
  title: string;
  youtubeUrl: string;
}

const bhajans: Bhajan[] = [
  { title: "Om Namoh Bhagwate & Rudrashtkam chanting by Pujya Swami Subodhanandaji", youtubeUrl: "https://www.youtube.com/watch?v=hQ-B0TN6q-k&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=1" },
  { title: "Prabhuji more avgun chit na dharo", youtubeUrl: "https://www.youtube.com/watch?v=_hNQ3kavRU4&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=2" },
  { title: "Ramcharit Manas path by Pujya Swami Subodhanandaji", youtubeUrl: "https://www.youtube.com/watch?v=7iB5OSBq4p8&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=3" },
  { title: "Shukar kara!", youtubeUrl: "https://www.youtube.com/watch?v=AoDsVbLaVfA&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=4" },
  { title: "Keertan Jai Jai Govind by Pujya Swamiji", youtubeUrl: "https://www.youtube.com/watch?v=0UrM5SNdq0M&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=5" },
  { title: "श्री राम जय राम जय जय राम", youtubeUrl: "https://www.youtube.com/watch?v=ynGfVeTSEjE&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=6" },
  { title: "Gurudev Jayanti Paduka Puja 2020", youtubeUrl: "https://www.youtube.com/watch?v=4fFSCteyQEI&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=7" },
  { title: "श्रावण मास में रुद्राष्टकम", youtubeUrl: "https://www.youtube.com/watch?v=GiORQ04AAjQ&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=8" },
  { title: "Bhaye Pragat Kripala - Sing with Param Poojya Swamiji", youtubeUrl: "https://www.youtube.com/watch?v=xiVZWfNq3l8&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=9" },
  { title: "मैं हरि पतित पवन सुने!", youtubeUrl: "https://www.youtube.com/watch?v=GRA8vbUaxgY&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=10" },
  { title: "Bhagvad Geeta Aarti", youtubeUrl: "https://www.youtube.com/watch?v=6EB7u5YTxuM&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=11" },
  { title: "Ramchandra Raghuveera Ramchandra Randheera", youtubeUrl: "https://www.youtube.com/watch?v=Oc3A2OqtoT8&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=12" },
  { title: "Vibhishan Gita Chanting from Ramcharitmanas", youtubeUrl: "https://www.youtube.com/watch?v=kBvMji91jLk&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=13" },
  { title: "Ramcharitra Manas chanting Ayodhya Kand, 87th doha", youtubeUrl: "https://www.youtube.com/watch?v=E5F-qetcLlk&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=14" },
  { title: "Om Namo Bhagavate Vasudevaya chanting", youtubeUrl: "https://www.youtube.com/watch?v=I31pQ2-Wy1g&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=15" },
  { title: "श्री कृष्ण गोविन्द हरे मुरारे", youtubeUrl: "https://www.youtube.com/watch?v=JCFpv5ueKPE&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=16" },
  { title: "श्रीकृष्णाय शरणं ममः कीर्तन", youtubeUrl: "https://www.youtube.com/watch?v=U09ENM2YUwA&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=17" },
  { title: "श्रीकृष्ण भक्ति भजन – परम पूज्य स्वामीजी", youtubeUrl: "https://www.youtube.com/watch?v=xEfCS7vDB_8&list=PLgy41qSqQO40hg3OZCoQwbh23rEy1beIy&index=18" },
  { title: "श्री कृष्ण गोविन्द हरे मुरारे (Bhajan)", youtubeUrl: "https://youtu.be/ER6DadadT-c" },
];

const BhajansSection = () => {
  return (
    <section id="bhajans" className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Bhajans & Samkeertan"
          subtitle="Soul-stirring devotional songs sung in Gurudev's satsangs"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {bhajans.map((bhajan, i) => (
            <motion.a
              key={bhajan.title + i}
              href={bhajan.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-background border border-gold/20 hover:shadow-gold hover:border-gold/40 transition-all group"
            >
              <Music size={18} className="text-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors flex-1">
                {bhajan.title}
              </span>
              <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BhajansSection;
