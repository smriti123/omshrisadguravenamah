import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  "All",
  "Ramayana",
  "Bhagwat Geeta",
  "Bhagwatam",
] as const;

type Category = (typeof categories)[number];

interface Talk {
  title: string;
  location?: string;
  year?: string;
  youtubeUrl: string;
  category: Exclude<Category, "All">;
}

const talks: Talk[] = [
  // === RAMAYANA ===
  {
    title: "उत्तरकाण्ड - भाग १/७",
    location: "Mumbai",
    year: "2007",
    youtubeUrl: "https://www.youtube.com/watch?v=jb0z6R7vxEg&list=PLgy41qSqQO41NwRNNHCJbDMqIRBGpMgBQ",
    category: "Ramayana",
  },
  {
    title: "Shri Ram Valmiki Samvad Part 1/12",
    youtubeUrl: "https://www.youtube.com/watch?v=zi_csceNZeg&list=PLgy41qSqQO43Mex01P8WtiFgnfYzVcAMC",
    category: "Ramayana",
  },
  {
    title: "Vibhishan Geeta Part 1/10",
    location: "Ahmedabad",
    youtubeUrl: "https://www.youtube.com/watch?v=scsX00Yt4wY&list=PLgy41qSqQO430PAHWi_i3uHeCQ6Peuk92",
    category: "Ramayana",
  },
  {
    title: "Hanuman ji's Sharanagati Part 1/14",
    youtubeUrl: "https://www.youtube.com/watch?v=yMoYODacGjU&list=PLgy41qSqQO404f9nZtPXNyMaKK9RKbSCs",
    category: "Ramayana",
  },
  {
    title: "Laxman Geeta Part 1A/7B",
    youtubeUrl: "https://www.youtube.com/watch?v=U0QWKMJVFvI&list=PLgy41qSqQO40yzcgx7cAhEBS5XKMuuc5E",
    category: "Ramayana",
  },
  {
    title: "Kakbhusandi Prasang (Guru Mahima 1/5)",
    location: "Sidhbari",
    year: "2018",
    youtubeUrl: "https://www.youtube.com/watch?v=bSjbYHhGuLc&list=PLgy41qSqQO42ZQ9Rl7MeR0UCqZ_zt23SG",
    category: "Ramayana",
  },
  {
    title: "RamcharitManas Part 1/48",
    year: "2006",
    youtubeUrl: "https://www.youtube.com/watch?v=6xSvObvf_ec&list=PLgy41qSqQO43uqJeXSsf7FQK92xz9IUhT",
    category: "Ramayana",
  },
  {
    title: "Ramcharitmanas Part 1a/e38",
    location: "Rourkela",
    year: "2011",
    youtubeUrl: "https://www.youtube.com/watch?v=OXwEN3t8Hds&list=PLgy41qSqQO40fF9SemEIKAjD74NrcmQW2",
    category: "Ramayana",
  },
  {
    title: "SriRamCharitManas Part 1/22",
    location: "Sidhbari",
    year: "2018",
    youtubeUrl: "https://www.youtube.com/watch?v=n0cN_hYy6nY&list=PLgy41qSqQO42eF9cF-f0ZfJqAqD8lRnmJ",
    category: "Ramayana",
  },
  {
    title: "Kakbhusandi Prasang 1/7",
    location: "Bhavnagar",
    year: "2016",
    youtubeUrl: "https://www.youtube.com/watch?v=azpBT22zcOE&list=PLgy41qSqQO40kR1ytqwauPbiRyGHRjH4U",
    category: "Ramayana",
  },
  {
    title: "Navadha Bhakti Part 1/10 (Ramcharit Manas)",
    location: "Ahmedabad",
    youtubeUrl: "https://www.youtube.com/watch?v=PnmyrW8qyfE&list=PLgy41qSqQO42QrbABEWQQu7zYaOmPVyn2",
    category: "Ramayana",
  },
  {
    title: "Beej Ramayan Part 1/4",
    youtubeUrl: "https://www.youtube.com/watch?v=3PdTjJdqWqI&list=PLgy41qSqQO433o9rgNhg91BjSLdc-xvdj",
    category: "Ramayana",
  },
  {
    title: "Kakbhusundi Garuda Prasang 1/7",
    location: "Noida",
    year: "2018",
    youtubeUrl: "https://www.youtube.com/watch?v=ME8NlNfeFk4&list=PLgy41qSqQO41UICzC1e2yD6Fd_9HgOyJS",
    category: "Ramayana",
  },
  {
    title: "Shri Rama Charitra",
    youtubeUrl: "https://www.youtube.com/watch?v=jcOeZ5xjjgU&list=PLgy41qSqQO42BEErA7w8q-BBHGgkK_gAO",
    category: "Ramayana",
  },
  {
    title: "राम कथा - १ | RAAM-KATHA - 1",
    youtubeUrl: "https://www.youtube.com/watch?v=wSRjl4IXYwg&list=PLgy41qSqQO43KX_lElPJcMQtmCDcK-oG5",
    category: "Ramayana",
  },
  {
    title: "Sampoorna Ramayan",
    location: "Dehradun",
    year: "2017",
    youtubeUrl: "https://www.youtube.com/watch?v=XsW425kRN4c&list=PLgy41qSqQO435GRVslcs0WjJlDQCYsefZ",
    category: "Ramayana",
  },
  {
    title: "Ramcharitmanas Part 3/18",
    location: "Kanpur",
    year: "2005",
    youtubeUrl: "https://www.youtube.com/watch?v=FY8WMmqKYXE&list=PLgy41qSqQO42ZzUnw21XBCbCLIDT6LETH",
    category: "Ramayana",
  },

  // === BHAGWAT GEETA ===
  {
    title: "Geeta Adhyay 12 - Sidhbari Brahmchari Course",
    year: "2005",
    location: "Sidhbari",
    youtubeUrl: "https://www.youtube.com/watch?v=j-5yzwiCzgA&list=PLgy41qSqQO40Xjd0xOHGduyFKETdWBjAp",
    category: "Bhagwat Geeta",
  },

  // === BHAGWATAM ===
  {
    title: "Bhagvat Katha Day 1",
    location: "Jaipur",
    year: "2018",
    youtubeUrl: "https://www.youtube.com/watch?v=4VgesOYmm54&t=8263s",
    category: "Bhagwatam",
  },
  {
    title: "Srimad Bhagvad Katha 1/27",
    location: "Sidhbari",
    year: "2016",
    youtubeUrl: "https://www.youtube.com/watch?v=3eAHoMOtwvo&list=PLgy41qSqQO436FbgmzAN7HYIvafQoYTUB",
    category: "Bhagwatam",
  },
  {
    title: "Bhagvat Katha 1/19",
    location: "Sidhbari",
    year: "2014",
    youtubeUrl: "https://www.youtube.com/watch?v=AOv_SI4V7EA&list=PLgy41qSqQO40ozLJL8MFBeaeTduyi4kn3",
    category: "Bhagwatam",
  },
  {
    title: "Bhagvad Katha Day 1 Morning Part 1",
    location: "Vrindavan",
    year: "2013",
    youtubeUrl: "https://www.youtube.com/watch?v=2TAVT-cJkDw&list=PLgy41qSqQO40-xuRU25TL8rdMgIr7kSH8",
    category: "Bhagwatam",
  },
  {
    title: "Bhagvad Katha Part 1/69",
    location: "Dehradun",
    year: "2013",
    youtubeUrl: "https://www.youtube.com/watch?v=Ih-QBziDQqQ&list=PLgy41qSqQO403Q-MgMioR17R_Pt-MtMvR",
    category: "Bhagwatam",
  },
  {
    title: "Bhagvat Day 7",
    location: "Prayagraj",
    year: "2011",
    youtubeUrl: "https://www.youtube.com/watch?v=MQr7Q0LmKlM&list=PLgy41qSqQO40yT7XdSFaEIjXHRBKcF7we",
    category: "Bhagwatam",
  },
  {
    title: "Srimad Bhagvat Katha Part 1-A/D",
    location: "Vrindavan",
    year: "2010",
    youtubeUrl: "https://www.youtube.com/watch?v=s8UaGZ41M64&list=PLgy41qSqQO41xAArFPou6L4iC2dkbpdbH",
    category: "Bhagwatam",
  },
  {
    title: "Bhagvad Katha Part 1/76",
    location: "Mumbai",
    year: "2007",
    youtubeUrl: "https://www.youtube.com/watch?v=dn3J3uHPl_8&list=PLgy41qSqQO42IlnZ-t6ZspR2X1C5aKjtZ",
    category: "Bhagwatam",
  },
  {
    title: "Bhagvad Katha 1/13",
    location: "Nagpur",
    youtubeUrl: "https://www.youtube.com/watch?v=kXoxeZs8Y0Q&list=PLgy41qSqQO401lob0oig1QknFcu2OWST_",
    category: "Bhagwatam",
  },
  {
    title: "Bhagvat Katha Part 1/14",
    location: "Rishikesh",
    year: "2005",
    youtubeUrl: "https://www.youtube.com/watch?v=BQ8fZ9g8RQM&list=PLgy41qSqQO40PxYGrSncCPfU3zueq8Q1F",
    category: "Bhagwatam",
  },
  {
    title: "Gopi Geet Part 1",
    youtubeUrl: "https://www.youtube.com/watch?v=30lAE6gv-zU&list=PLgy41qSqQO43b7Xpy2_d52fPn4B0XAyn-",
    category: "Bhagwatam",
  },
  {
    title: "Chatushloki Bhagvat 1/8",
    youtubeUrl: "https://www.youtube.com/watch?v=yuGspLlfVwk&list=PLgy41qSqQO401vfu2xr-Eivj2-R5F8Fw0",
    category: "Bhagwatam",
  },
];

const YouTubeTalksSection = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? talks : talks.filter((t) => t.category === active);

  return (
    <section id="talks" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Talks & Discourses"
          subtitle="An indexed collection of Gurudev's YouTube talks for easy reference"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all border ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-gold"
                  : "bg-card text-muted-foreground border-gold/20 hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({talks.filter((t) => t.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {filtered.length === 0 ? (
                <p className="text-center text-muted-foreground font-body py-12 italic">
                  No talks in this category yet. More coming soon!
                </p>
              ) : (
                filtered.map((talk, i) => (
                  <motion.a
                    key={talk.title + talk.youtubeUrl}
                    href={talk.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-gold/20 hover:shadow-gold hover:border-gold/40 transition-all group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Play size={18} className="text-secondary-foreground group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {talk.title}
                      </h3>
                      <p className="font-body text-xs text-muted-foreground">
                        {[talk.location, talk.year].filter(Boolean).join(" · ") || talk.category}
                      </p>
                    </div>
                    <span className="hidden sm:inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-body whitespace-nowrap">
                      {talk.category}
                    </span>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary flex-shrink-0" />
                  </motion.a>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default YouTubeTalksSection;
