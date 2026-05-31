import { useEffect, useState } from "react";
import {
  BookOpenText,
  ChevronDown,
  CirclePlay,
  Flower2,
  HeartHandshake,
  Home,
  Images,
  Info,
  Menu,
  Music2,
  PenLine,
  Sparkles,
  X,
} from "lucide-react";
import swamijiPhoto from "@/assets/swamiji-new-portrait.jpg";
import charanPhoto from "@/assets/charan-vandan-feet.jpg";
import galleryPhotoOne from "@/assets/gallery/up-smile-portrait.jpg";
import galleryPhotoTwo from "@/assets/gallery/up-garland-meditation.jpg";
import galleryPhotoThree from "@/assets/gallery/up-shawl-smile.jpg";
import { getPublicHommages, HommageMessage } from "@/lib/hommageApi";
import "./HomeNew.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Photos", href: "/#photo-gallery2" },
  { label: "Stuti / Shlokas", href: "/#stuti" },
  { label: "Bhajan / Audio", href: "/#bhajans" },
  { label: "Video / Pravachan", href: "/#talks" },
  { label: "Hommage / समर्पण", href: "/#hommage" },
  { label: "About", href: "/#leela" },
];

const featureCards = [
  { href: "/#photo-gallery2", icon: Images, title: "Photo Gallery", description: "Darshan photos and sacred memories" },
  { href: "/#stuti", icon: BookOpenText, title: "Stuti / Shlokas", description: "Guru Stuti, Sanskrit texts and meanings" },
  { href: "/#bhajans", icon: Music2, title: "Bhajan / Audio", description: "Bhajans and devotional recordings" },
  { href: "/#talks", icon: CirclePlay, title: "Video / Pravachan", description: "Satsang and pravachan videos" },
  { href: "/#hommage", icon: HeartHandshake, title: "Hommage / समर्पण", description: "Devotees can write a short message" },
  { href: "/#leela", icon: Info, title: "About", description: "Purpose of this sacred space" },
];

const bottomNav = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Photos", href: "/#photo-gallery2", icon: Images },
  { label: "Stuti", href: "/#stuti", icon: BookOpenText },
  { label: "Bhajan", href: "/#bhajans", icon: Music2 },
  { label: "Hommage", href: "/#hommage", icon: HeartHandshake },
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
        <a className="home-new__brand" href="#home" aria-label="ॐ श्री सद्गुरवे नमः home">
          <span className="home-new__brand-om">ॐ</span>
          <span>श्री सद्गुरवे नमः</span>
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
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="home-new__hero" aria-labelledby="home-new-title">
          <p className="home-new__eyebrow"><Sparkles aria-hidden="true" /> A sacred space for remembrance</p>
          <h1 id="home-new-title">ॐ श्री सद्गुरवे नमः</h1>
          <p className="home-new__hero-subtitle">In the grace of Pujya Swamiji</p>
          <div className="home-new__portrait-frame">
            <img src={swamijiPhoto} alt="Pujya Swamiji" className="home-new__portrait" />
          </div>

          <div className="home-new__charan-area">
            <div className="home-new__charan-orbit" aria-hidden="true">
              <svg viewBox="0 0 300 300">
                <defs>
                  <path id="home-new-orbit-path" d="M 150,150 m -116,0 a 116,116 0 1,1 232,0 a 116,116 0 1,1 -232,0" />
                </defs>
                <text>
                  <textPath href="#home-new-orbit-path">ॐ श्री सद्गुरवे नमः · श्री सद्गुरु चरणारविन्दाभ्यां नमः · </textPath>
                </text>
              </svg>
            </div>
            <button className="home-new__charan-button" type="button" onClick={enterPage} aria-label="चरण स्पर्श करें — enter the page">
              <img src={charanPhoto} alt="Pujya Swamiji's charan — touch to enter" />
            </button>
          </div>
          <button className="home-new__enter" type="button" onClick={enterPage}>
            <span>चरण स्पर्श करें</span>
            <ChevronDown aria-hidden="true" />
          </button>
        </section>

        <section className="home-new__welcome" id="welcome" aria-labelledby="welcome-title">
          <Flower2 aria-hidden="true" />
          <h2 id="welcome-title">यस्य स्मरणमात्रेण ।</h2>
          <p>A sacred space for remembrance, devotion and gratitude.</p>
        </section>

        <section className="home-new__section" id="photos" aria-labelledby="photos-title">
          <div className="home-new__section-heading">
            <p>Darshan</p>
            <h2 id="photos-title">पावन स्मृतियाँ</h2>
            <span>Three gentle glimpses from the gallery</span>
          </div>
          <div className="home-new__photo-grid">
            <img src={galleryPhotoOne} alt="Pujya Swamiji smiling in a garden" />
            <img src={galleryPhotoTwo} alt="Sacred mandir aarti" />
            <img src={galleryPhotoThree} alt="Pujya Swamiji with an elder saint" />
          </div>
          <a className="home-new__button" href="/#gallery">सभी फोटो देखें <Images aria-hidden="true" /></a>
        </section>

        <section className="home-new__section home-new__section--soft" aria-labelledby="explore-title">
          <div className="home-new__section-heading">
            <p>Explore</p>
            <h2 id="explore-title">श्रद्धा के साथ आगे बढ़ें</h2>
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

        <section className="home-new__section" id="hommage-preview" aria-labelledby="hommage-title">
          <div className="home-new__section-heading">
            <p>With gratitude</p>
            <h2 id="hommage-title">समर्पण</h2>
            <span>Approved messages are shared here for 7 days.</span>
          </div>
          <div className="home-new__hommages">
            {hommages.length > 0 ? hommages.map((item) => (
              <article className="home-new__hommage" key={item.id}>
                <HeartHandshake aria-hidden="true" />
                <p>“{item.message}”</p>
                <footer><strong>{item.name}</strong><time dateTime={item.created_at}>{new Date(`${item.created_at}Z`).toLocaleDateString()}</time></footer>
              </article>
            )) : (
              <article className="home-new__hommage home-new__hommage--empty">
                <Flower2 aria-hidden="true" />
                <p>Approved devotional messages will appear here.</p>
                <small>Messages may be up to 300 characters and are reviewed before they are shared.</small>
              </article>
            )}
          </div>
          <a className="home-new__button" href="/#hommage">समर्पण लिखें <PenLine aria-hidden="true" /></a>
        </section>

        <section className="home-new__about" id="about" aria-labelledby="about-title">
          <Flower2 aria-hidden="true" />
          <h2 id="about-title">About this sacred space</h2>
          <p>A quiet digital mandir to remember, reflect and remain connected with the grace and teachings of Pujya Swamiji.</p>
          <span>ॐ शान्तिः शान्तिः शान्तिः</span>
        </section>
      </main>

      <nav className="home-new__bottom-nav" aria-label="Mobile navigation">
        {bottomNav.map(({ label, href, icon: Icon }) => (
          <a href={href} key={href}><Icon aria-hidden="true" /><span>{label}</span></a>
        ))}
      </nav>
    </div>
  );
};

export default HomeNew;
