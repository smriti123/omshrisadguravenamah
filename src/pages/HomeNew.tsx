import { type ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpenText,
  CirclePlay,
  Flower2,
  Footprints,
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
  { label: "Charan-Vandan", href: "/old-home#charan-vandan" },
  { label: "Charitra-Jhalak", href: "/old-home#photo-gallery2" },
  { label: "Stuti", href: "/old-home#stuti" },
  { label: "Virah Stuti", href: "/old-home#shraddanjali" },
  { label: "Satsang", href: "/old-home#talks" },
  { label: "Bhajan", href: "/old-home#bhajans" },
  { label: "Quotes", href: "/old-home#quotes" },
  { label: "Hommage", href: "/old-home#hommage" },
  { label: "About", href: "#about" },
];

const featureCards = [
  { href: "/old-home#charan-vandan", icon: Footprints, title: "Charan-Vandan", description: "Devotional remembrance at Guru Charan" },
  { href: "/old-home#leela", icon: Sparkles, title: "Sidhbari Leela", description: "Divine leelas at Sidhbari" },
  { href: "/old-home#photo-gallery2", icon: Images, title: "Charitra-Jhalak", description: "Glimpses from Pujya Swamiji's life" },
  { href: "/old-home#stuti", icon: BookOpenText, title: "Stuti", description: "Guru Stuti and Sanskrit shlokas" },
  { href: "/old-home#shraddanjali", icon: Flower2, title: "Virah-Stuti", description: "Verses of longing and shraddhanjali" },
  { href: "/old-home#talks", icon: CirclePlay, title: "Satsangs", description: "Pravachan and satsang videos" },
  { href: "/old-home#bhajans", icon: Music2, title: "Bhajan", description: "Devotional bhajans and audio" },
  { href: "/old-home#quotes", icon: PenLine, title: "Quotes", description: "Words of wisdom from Pujya Swamiji" },
  { href: "/old-home#hommage", icon: MessageCircleHeart, title: "Hommage", description: "Offer a short devotional message" },
];

type HomeNewLinkProps = {
  className?: string;
  href: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
};

const HomeNewLink = ({ className, href, children, onClick, ariaLabel }: HomeNewLinkProps) => {
  if (href.startsWith("/")) {
    return <Link className={className} to={href} onClick={onClick} aria-label={ariaLabel}>{children}</Link>;
  }

  return <a className={className} href={href} onClick={onClick} aria-label={ariaLabel}>{children}</a>;
};

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
            <HomeNewLink key={item.label} href={item.href} onClick={closeMenu}>{item.label}</HomeNewLink>
          ))}
        </nav>
      </header>

      <main>
        <section className="home-new__hero" aria-label="Param Pujya Swami Subodhananda ji Maharaj">
          <div className="home-new__portrait-frame">
            <img src={swamijiPhoto} alt="Pujya Swamiji" className="home-new__portrait" />
          </div>
          <p className="home-new__hero-subtitle swamiji-name">Param Pujya Swami Subodhananda ji Maharaj</p>

          <div className="home-new__charan-area">
            <div className="home-new__charan-orbit" aria-hidden="true">
              <svg viewBox="0 0 320 320">
                <defs>
                  <path id="home-new-orbit-path" d="M 160,160 m -134,0 a 134,134 0 1,1 268,0 a 134,134 0 1,1 -268,0" />
                </defs>
                <text><textPath href="#home-new-orbit-path">ॐ श्री सद्गुरवे नमः · ॐ श्री सद्गुरुचरणकमलेभ्यो नमः · </textPath></text>
              </svg>
            </div>
            <p className="home-new__charan-instruction">चरण स्पर्श करें</p>
            <button className="home-new__charan-button" type="button" onClick={enterPage} aria-label="चरण स्पर्श करें — enter the page">
              <img src={charanPhoto} alt="Pujya Swamiji's charan — touch to enter" />
            </button>
          </div>

          <div className="home-new__guru-lines home-new__guru-lines--charan" aria-label="Guru kripa verse">
            <span className="entry-main-line devotional-line-charan">ऐसे गुरु को बलि-बलि जाऊँ॥</span>
            <div className="devotional-line-divider" aria-hidden="true" />
          </div>
        </section>

        <section className="home-new__welcome" id="welcome" aria-label="Welcome">
          <Flower2 aria-hidden="true" />
          <p className="home-new__welcome-shloka">
            अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशलाकया।<br />
            चक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः॥
          </p>
        </section>

        <section className="home-new__section home-new__section--photos" id="photos" aria-labelledby="photos-title">
          <div className="home-new__section-heading home-new__section-heading--photos">
            <h2 id="photos-title" className="sr-only">पावन स्मृतियाँ</h2>
          </div>
          <HomeNewLink
            className="home-new__slideshow-link"
            href="/old-home#photo-gallery2"
            ariaLabel="पावन स्मृतियाँ — सभी फोटो देखें"
          >
            <div className="home-new__mobile-slideshow" aria-label="पावन स्मृतियाँ slideshow">
              <img src={collage6} alt="Pujya Gurudev remembrance 1" />
              <img src={collage1} alt="Pujya Gurudev remembrance 2" />
              <img src={collage3} alt="Pujya Gurudev remembrance 3" />
              <img src={collage2} alt="Pujya Gurudev remembrance 4" />
              <img src={collage4} alt="Pujya Gurudev remembrance 5" />
              <img src={collage5} alt="Pujya Gurudev remembrance 6" />
            </div>
          </HomeNewLink>
          <div className="home-new__guru-lines home-new__guru-lines--section home-new__guru-lines--emotional" aria-label="Guru kripa verse">
            <span className="entry-emotional-line devotional-line-emotional">गुरुकृपा ही केवलम्॥</span>
            <div className="devotional-line-divider" aria-hidden="true" />
          </div>
        </section>

        <section className="home-new__welcome home-new__welcome--secondary" aria-label="Smaran shloka">
          <Flower2 aria-hidden="true" />
          <p className="home-new__welcome-shloka">
            यस्य स्मरणमात्रेण आनन्दं भवति ध्रुवम्।<br />
            सद्गुरवे नमस्तस्मै करुणावरुणालये।।
          </p>
        </section>

        <section className="home-new__section home-new__section--cards" id="explore" aria-labelledby="explore-title">
          <div className="home-new__section-heading">
            <h2 id="explore-title" className="sr-only">Explore</h2>
            <span>कृपया card click करें</span>
          </div>
          <div className="home-new__card-grid">
            {featureCards.map(({ href, icon: Icon, title, description }) => (
              <HomeNewLink className="home-new__card" href={href} key={title}>
                <span className="home-new__card-icon"><Icon aria-hidden="true" /></span>
                <span className="home-new__card-body">
                  <strong>{title}</strong>
                  <small>{description}</small>
                  <em>देखें →</em>
                </span>
              </HomeNewLink>
            ))}
          </div>
          <div className="home-new__guru-lines home-new__guru-lines--section home-new__guru-lines--pranam" aria-label="Guru kripa verse">
            <span className="entry-pranam-line devotional-line-pranam">नमामि सन्त दुर्लभम्॥</span>
            <div className="devotional-line-divider" aria-hidden="true" />
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
          <HomeNewLink className="home-new__button" href="/old-home#hommage"><PenLine aria-hidden="true" /> समर्पण लिखें</HomeNewLink>
          <p className="home-new__hommage-note">Up to 300 characters · displayed for 7 days after approval</p>
        </section>

        <section className="home-new__about" id="about" aria-labelledby="about-title">
          <Flower2 aria-hidden="true" />
          <h2 id="about-title">ॐ श्री सद्गुरवे नमः</h2>
          <p>A peaceful digital space created for darshan, remembrance and gratitude at the lotus feet of Pujya Swamiji.</p>
          <span>श्री गुरु चरणारविन्दाभ्यां नमः</span>
        </section>
      </main>
    </div>
  );
};

export default HomeNew;
