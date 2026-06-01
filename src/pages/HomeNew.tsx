import { useEffect, useState } from "react";
import {
  BookOpenText,
  ChevronDown,
  CirclePlay,
  Flower2,
  Footprints,
  HeartHandshake,
  Home,
  Images,
  Info,
  Menu,
  MessageCircleHeart,
  Music2,
  PenLine,
  Sparkles,
  X,
} from "lucide-react";
import swamijiPhoto from "@/assets/swamiji-new-portrait.jpg";
import charanPhoto from "@/assets/charan-vandan-feet.jpg";
import galleryPhotoOne from "@/assets/mandir.jpg";
import galleryPhotoTwo from "@/assets/h1.jpg";
import galleryPhotoThree from "@/assets/pic5.jpg";
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
  { href: "/#photo-gallery2", icon: Images, title: "Photo Gallery", description: "Darshan photos and sacred memories" },
  { href: "/#stuti", icon: BookOpenText, title: "Stuti / Shlokas", description: "Guru Stuti, Sanskrit texts and meanings" },
  { href: "/#bhajans", icon: Music2, title: "Bhajan / Audio", description: "Bhajans and devotional recordings" },
  { href: "/#talks", icon: CirclePlay, title: "Video / Pravachan", description: "Satsang and pravachan videos" },
  { href: "/#charan-vandan", icon: Footprints, title: "Charan-Vandan", description: "Devotional remembrance at Guru Charan" },
  { href: "/#hommage", icon: MessageCircleHeart, title: "Hommage / समर्पण", description: "Offer a short devotional message" },
  { href: "#about", icon: Info, title: "About", description: "The purpose of this sacred space" },
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
        <a className="home-new__brand" href="#home" aria-label="Home">
          <span className="home-new__brand-om">ॐ</span>
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
        <section className="home-new__hero" aria-labelledby="home-new-title">
          <h1 id="home-new-title" className="home-new__hero-om">ॐ श्री सद्गुरवे नमः</h1>
          <div className="home-new__portrait-frame">
            <img src={swamijiPhoto} alt="Pujya Swamiji" className="home-new__portrait" />
          </div>
          <p className="home-new__hero-subtitle">Param Pujya Swami Subodhananda ji Maharaj</p>

          <div className="home-new__shloka">
            <p>यस्य स्मरणमात्रेण नयनेऽश्रुपूरिते भवेताम्।</p>
            <p>यस्य नामस्मरणेन हृदयं आनन्दपूर्णं भवेत्।</p>
            <p className="home-new__shloka-placeholder">{"\u00A0"}</p>
            <p className="home-new__shloka-placeholder">{"\u00A0"}</p>
          </div>
          <div className="home-new__charan-area">
            <div className="home-new__charan-orbit" aria-hidden="true">
              <svg viewBox="0 0 320 320">
                <defs>
                  <path id="home-new-orbit-path" d="M 160,160 m -134,0 a 134,134 0 1,1 268,0 a 134,134 0 1,1 -268,0" />
                </defs>
                <text><textPath href="#home-new-orbit-path">ॐ श्री सद्गुरवे नमः · श्री सद्गुरु चरणारविन्दाभ्यां नमः · </textPath></text>
              </svg>
            </div>
            <button className="home-new__charan-button" type="button" onClick={enterPage} aria-label="चरण स्पर्श करें — enter the page">
              <img src={charanPhoto} alt="Pujya Swamiji's charan — touch to enter" />
            </button>
          </div>
          <button className="home-new__enter" type="button" onClick={enterPage}>
            <span>चरण स्पर्श करें</span>
            <small>Touch to enter</small>
            <ChevronDown aria-hidden="true" />
          </button>
        </section>

        <section className="home-new__welcome" id="welcome" aria-labelledby="welcome-title">
          <Flower2 aria-hidden="true" />
          <h2 id="welcome-title">यस्य स्मरणमात्रेण ।</h2>
          <p>भक्ति, स्मरण और कृतज्ञता का एक पावन स्थान।</p>
        </section>

        <section className="home-new__section home-new__section--photos" id="photos" aria-labelledby="photos-title">
          <div className="home-new__section-heading">
            <p>Darshan</p>
            <h2 id="photos-title">पावन स्मृतियाँ</h2>
            <span>A few glimpses from the photo gallery</span>
          </div>
          <div className="home-new__photo-grid">
            <img src={galleryPhotoOne} alt="Sacred mandir darshan" />
            <img src={galleryPhotoTwo} alt="Pujya Swamiji darshan" />
            <img src={galleryPhotoThree} alt="A sacred memory with Pujya Swamiji" />
          </div>
          <a className="home-new__button" href="/#photo-gallery2"><Images aria-hidden="true" /> सभी फोटो देखें</a>
        </section>

        <section className="home-new__section home-new__section--cards" aria-labelledby="explore-title">
          <div className="home-new__section-heading">
            <p>Explore</p>
            <h2 id="explore-title">भक्ति के पावन द्वार</h2>
            <span>Choose a quiet path for remembrance</span>
          </div>
          <div className="home-new__card-grid">
            {featureCards.map(({ href, icon: Icon, title, description }) => (
              <a className="home-new__card" href={href} key={title}>
                <span className="home-new__card-icon"><Icon aria-hidden="true" /></span>
                <span><strong>{title}</strong><small>{description}</small></span>
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
