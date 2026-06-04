import { useEffect, useState } from "react";
import {
  BookOpenText,
  CirclePlay,
  Flower2,
  Footprints,
  HeartHandshake,
  Home,
  Images,
  Menu,
  MessageCircleHeart,
  Music2,
  PenLine,
  Sparkles,
  X,
} from "lucide-react";
import swamijiPhoto from "@/assets/swamiji-new-portrait.jpg";
import charanPhoto from "@/assets/charan-vandan-feet.jpg";
import collage1 from "@/assets/home-new-collage/c1.jpg";
import collage2 from "@/assets/home-new-collage/c2.jpg";
import collage3 from "@/assets/home-new-collage/c3.png";
import collage4 from "@/assets/home-new-collage/c4.webp";
import collage5 from "@/assets/home-new-collage/c5.webp";
import collage6 from "@/assets/home-new-collage/c6.jpg";
import { getPublicHommages, HommageMessage } from "@/lib/hommageApi";
import "./HomeNew.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Photo Gallery", href: "#photos" },
  { label: "Charan-Vandan", href: "/#charan-vandan" },
  { label: "Stuti / Shlokas", href: "/#stuti" },
  { label: "Bhajan / Audio", href: "/#bhajans" },
  { label: "Video / Pravachan", href: "/#talks" },
  { label: "Hommage / समर्पण", href: "#hommage-preview" },
  { label: "About", href: "#about" },
];

const featureCards = [
  { href: "/#charan-vandan", icon: Footprints, title: "Charan-Vandan", description: "Devotional remembrance at Guru Charan" },
  { href: "/#leela", icon: Sparkles, title: "Sidhbari Leela", description: "Divine leelas at Sidhbari" },
  { href: "/#photo-gallery2", icon: Images, title: "Charitra-Jhalak", description: "Glimpses from Pujya Swamiji's life" },
  { href: "/#stuti", icon: BookOpenText, title: "Stuti", description: "Guru Stuti and Sanskrit shlokas" },
  { href: "/#shraddanjali", icon: Flower2, title: "Virah-Stuti", description: "Verses of longing and shraddhanjali" },
  { href: "/#talks", icon: CirclePlay, title: "Satsangs", description: "Pravachan and satsang videos" },
  { href: "/#bhajans", icon: Music2, title: "Bhajan", description: "Devotional bhajans and audio" },
  { href: "/#quotes", icon: PenLine, title: "Quotes", description: "Words of wisdom from Pujya Swamiji" },
  { href: "/#hommage", icon: MessageCircleHeart, title: "Hommage", description: "Offer a short devotional message" },
];

const bottomNav = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Photos", href: "#photos", icon: Images },
  { label: "Stuti", href: "/#stuti", icon: BookOpenText },
  { label: "Bhajan", href: "/#bhajans", icon: Music2 },
  { label: "Hommage", href: "#hommage-preview", icon: HeartHandshake },
];

const HomeNew = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hommages, setHommages] = useState<HommageMessage[]>([]);

  useEffect(() => {
    getPublicHommages()
      .then((data) => setHommages(data.messages.slice(0, 3)))
      .catch(() => setHommages([]));
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const enterPage = () => document.querySelector("#welcome")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="home-new" id="home">
      <header className="home-new__header">
        <a className="home-new__brand" href="#home" aria-label="Home — ॐ श्री सद्गुरवे नमः">
          <span className="home-new__brand-om">ॐ</span>
          <strong>श्री सद्गुरवे नमः</strong>
        </a>
        <button
          className="home-new__menu-button"
          type="button"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="home-new-menu"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className={`home-new__menu ${menuOpen ? "home-new__menu--open" : ""}`} id="home-new-menu" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="home-new__hero" aria-label="Param Pujya Swami Subodhananda ji Maharaj">
          <div className="home-new__portrait-frame">
            <img src={swamijiPhoto} alt="Pujya Swamiji" className="home-new__portrait" />
          </div>
          <p className="home-new__hero-subtitle">Param Pujya Swami Subodhananda ji Maharaj</p>

          <div className="home-new__guru-lines" aria-label="Guru kripa verses">
            <span>गुरुकृपा ही केवलम्॥</span>
            <span>ऐसे गुरुदेव को बलि-बलि जाऊँ॥</span>
            <span>नमामि सन्त दुर्लभम्॥</span>
          </div>

          <div className="home-new__charan-area">
            <span className="home-new__charan-arrow" aria-hidden="true">
              <svg viewBox="0 0 80 40" fill="none">
                <path d="M4 20 H62" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M50 8 L64 20 L50 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </span>
            <div className="home-new__charan-orbit" aria-hidden="true">
              <svg viewBox="0 0 320 320">
                <defs>
                  <path id="home-new-orbit-path" d="M 160,160 m -134,0 a 134,134 0 1,1 268,0 a 134,134 0 1,1 -268,0" />
                </defs>
                <text><textPath href="#home-new-orbit-path">ॐ श्री सद्गुरवे नमः · ॐ श्री सद्गुरुचरणकमलेभ्यो नमः · </textPath></text>
              </svg>
            </div>
            <button className="home-new__charan-button" type="button" onClick={enterPage} aria-label="चरण स्पर्श करें — enter the page">
              <img src={charanPhoto} alt="Pujya Swamiji's charan — touch to enter" />
            </button>
          </div>
        </section>

        <section className="home-new__welcome" id="welcome" aria-label="Welcome">
          <Flower2 aria-hidden="true" />
          <p>भक्ति, स्मरण और कृतज्ञता का एक पावन स्थान।</p>
        </section>

        <section className="home-new__section home-new__section--photos" id="photos" aria-labelledby="photos-title">
          <div className="home-new__section-heading home-new__section-heading--photos">
            <h2 id="photos-title" className="home-new__photo-heading">
              ध्यानमूलं गुरोर्मूर्तिः<br />
              पूजामूलं गुरोः पदम्।
            </h2>
            <p className="home-new__photo-subtitle">
              अज्ञानतिमिरान्धस्य<br />
              ज्ञानाञ्जनशलाकया।<br />
              चक्षुरुन्मीलितं येन<br />
              तस्मै श्रीगुरवे नमः॥
            </p>
          </div>
          <div className="home-new__mobile-slideshow" aria-label="पावन स्मृतियाँ slideshow">
            <img src={collage6} alt="Pujya Gurudev remembrance 1" />
            <img src={collage1} alt="Pujya Gurudev remembrance 2" />
            <img src={collage3} alt="Pujya Gurudev remembrance 3" />
            <img src={collage2} alt="Pujya Gurudev remembrance 4" />
            <img src={collage4} alt="Pujya Gurudev remembrance 5" />
            <img src={collage5} alt="Pujya Gurudev remembrance 6" />
          </div>
          <div className="home-new__collage" aria-label="पावन स्मृतियाँ photo grid">
            <img src={collage6} alt="Pujya Gurudev remembrance 1" />
            <img src={collage1} alt="Pujya Gurudev remembrance 2" />
            <img src={collage3} alt="Pujya Gurudev remembrance 3" />
            <img src={collage2} alt="Pujya Gurudev remembrance 4" />
            <img src={collage4} alt="Pujya Gurudev remembrance 5" />
            <img src={collage5} alt="Pujya Gurudev remembrance 6" />
          </div>
          <a className="home-new__button" href="/#photo-gallery2"><Images aria-hidden="true" /> सभी फोटो देखें</a>
        </section>

        <section className="home-new__section home-new__section--cards" id="explore" aria-labelledby="explore-title">
          <div className="home-new__section-heading">
            <h2 id="explore-title" className="home-new__shloka-heading">
              यस्य स्मरणमात्रेण नयनेऽश्रुपूरिते भवेताम्।<br />
              यस्य नामस्मरणेन हृदयं आनन्दपूर्णं भवेत्।
            </h2>
            <span>कृपया card click करें</span>
          </div>
          <div className="home-new__card-grid">
            {featureCards.map(({ href, icon: Icon, title, description }) => (
              <a className="home-new__card" href={href} key={title}>
                <span className="home-new__card-icon"><Icon aria-hidden="true" /></span>
                <span className="home-new__card-body">
                  <strong>{title}</strong>
                  <small>{description}</small>
                  <em>देखें →</em>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="home-new__section home-new__section--hommage" id="hommage-preview" aria-labelledby="hommage-title">
          <div className="home-new__section-heading">
            <p>Hommage</p>
            <h2 id="hommage-title">समर्पण</h2>
            <span>Recent offerings from devotees</span>
          </div>
          <div className="home-new__hommages">
            {hommages.length ? hommages.map((hommage) => (
              <article className="home-new__hommage" key={hommage.id}>
                <Flower2 aria-hidden="true" />
                <p>{hommage.message}</p>
                <footer><span>{hommage.name}</span><time dateTime={hommage.created_at}>{new Date(hommage.created_at).toLocaleDateString()}</time></footer>
              </article>
            )) : (
              <article className="home-new__hommage home-new__hommage--empty">
                <Flower2 aria-hidden="true" />
                <p>Offer a few words at Pujya Gurudev’s lotus feet.</p>
                <small>Messages are kept brief and shared after approval.</small>
              </article>
            )}
          </div>
          <a className="home-new__button" href="/#hommage"><PenLine aria-hidden="true" /> समर्पण लिखें</a>
          <p className="home-new__hommage-note">Up to 300 characters · displayed for 7 days after approval</p>
        </section>

        <section className="home-new__about" id="about" aria-labelledby="about-title">
          <Flower2 aria-hidden="true" />
          <h2 id="about-title">ॐ श्री सद्गुरवे नमः</h2>
          <p>A peaceful digital space created for darshan, remembrance and gratitude at the lotus feet of Pujya Swamiji.</p>
          <span>श्री गुरु चरणारविन्दाभ्यां नमः</span>
        </section>
      </main>

      <nav className="home-new__bottom-nav" aria-label="Mobile navigation">
        {bottomNav.map(({ label, href, icon: Icon }) => <a href={href} key={label}><Icon aria-hidden="true" /><span>{label}</span></a>)}
      </nav>
    </div>
  );
};

export default HomeNew;
