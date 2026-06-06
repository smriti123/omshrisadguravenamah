import { type ReactNode, useState } from "react";
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
import "./HomeNew.css";

const featureCards = [
  {
    href: "/old-home#charan-vandan",
    icon: Footprints,
    title: "Charan-Vandan",
    description: "Devotional remembrance at Guru Charan",
  },
  {
    href: "/old-home#leela",
    icon: Sparkles,
    title: "Sidhbari Leela",
    description: "Divine leelas at Sidhbari",
  },
  {
    href: "/old-home#photo-gallery2",
    icon: Images,
    title: "Charitra-Jhalak",
    description: "Glimpses from Pujya Swamiji's life",
  },
  {
    href: "/old-home#stuti",
    icon: BookOpenText,
    title: "Stuti",
    description: "Guru Stuti and Sanskrit shlokas",
  },
  {
    href: "/old-home#shraddanjali",
    icon: Flower2,
    title: "Virah-Stuti",
    description: "Verses of longing and shraddhanjali",
  },
  {
    href: "/old-home#talks",
    icon: CirclePlay,
    title: "Satsangs",
    description: "Pravachan and satsang videos",
  },
  {
    href: "/old-home#bhajans",
    icon: Music2,
    title: "Bhajan",
    description: "Devotional bhajans and audio",
  },
  {
    href: "/old-home#quotes",
    icon: PenLine,
    title: "Quotes",
    description: "Words of wisdom from Pujya Swamiji",
  },
  {
    href: "/old-home#hommage",
    icon: MessageCircleHeart,
    title: "Hommage",
    description: "Offer a short devotional message",
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  ...featureCards.map(({ href, title }) => ({ label: title, href })),
];

type HomeNewLinkProps = {
  className?: string;
  href: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
};

const HomeNewLink = ({
  className,
  href,
  children,
  onClick,
  ariaLabel,
}: HomeNewLinkProps) => {
  if (href.startsWith("/")) {
    return (
      <Link
        className={className}
        to={href}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      className={className}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

const NamamiLine = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`home-new__guru-lines ${className}`}
    aria-label={
      typeof children === "string" ? children : "Namami devotional line"
    }
  >
    <span className="namami-line">{children}</span>
    <div className="devotional-line-divider" aria-hidden="true" />
  </div>
);

const HomeNew = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const enterPage = () =>
    document.querySelector("#welcome")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="home-new" id="home">
      <header className="home-new__header">
        <a
          className="home-new__brand"
          href="#home"
          aria-label="Home — ॐ श्री सद्गुरवे नमः"
        >
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
        <nav
          className={`home-new__menu ${menuOpen ? "home-new__menu--open" : ""}`}
          id="home-new-menu"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <HomeNewLink key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </HomeNewLink>
          ))}
        </nav>
      </header>

      <main>
        <section
          className="home-new__hero"
          aria-label="Param Pujya Swami Subodhananda ji Maharaj"
        >
          <div className="home-new__portrait-frame">
            <img
              src={swamijiPhoto}
              alt="Pujya Swamiji"
              className="home-new__portrait"
            />
          </div>
          <p className="home-new__hero-subtitle swamiji-name">
            Param Pujya Swami Subodhananda ji Maharaj
          </p>

          <NamamiLine className="home-new__guru-lines--namami">
            नमामि चित्तचोरकम्॥
          </NamamiLine>

          <div className="home-new__charan-area">
            <div className="home-new__charan-orbit" aria-hidden="true">
              <svg viewBox="0 0 320 320">
                <defs>
                  <path
                    id="home-new-orbit-path"
                    d="M 160,160 m -134,0 a 134,134 0 1,1 268,0 a 134,134 0 1,1 -268,0"
                  />
                </defs>
                <text>
                  <textPath href="#home-new-orbit-path">
                    ॐ श्री सद्गुरवे नमः · ॐ श्री सद्गुरुचरणकमलेभ्यो नमः ·{" "}
                  </textPath>
                </text>
              </svg>
            </div>
            <p className="home-new__charan-instruction">चरण स्पर्श करें</p>
            <button
              className="home-new__charan-button"
              type="button"
              onClick={enterPage}
              aria-label="चरण स्पर्श करें — enter the page"
            >
              <img
                src={charanPhoto}
                alt="Pujya Swamiji's charan — touch to enter"
              />
            </button>
          </div>
        </section>

        <section
          className="home-new__welcome"
          id="welcome"
          aria-label="Welcome"
        >
          <Flower2 aria-hidden="true" />
          <p className="home-new__welcome-shloka">
            अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशलाकया।
            <br />
            चक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः॥
          </p>
        </section>

        <section
          className="home-new__section home-new__section--photos"
          id="photos"
          aria-labelledby="photos-title"
        >
          <div className="home-new__section-heading home-new__section-heading--photos">
            <h2 id="photos-title" className="sr-only">
              पावन स्मृतियाँ
            </h2>
          </div>
          <HomeNewLink
            className="home-new__slideshow-link"
            href="/old-home#photo-gallery2"
            ariaLabel="पावन स्मृतियाँ — सभी फोटो देखें"
          >
            <div
              className="home-new__mobile-slideshow"
              aria-label="पावन स्मृतियाँ slideshow"
            >
              <img src={collage6} alt="Pujya Gurudev remembrance 1" />
              <img src={collage1} alt="Pujya Gurudev remembrance 2" />
              <img src={collage3} alt="Pujya Gurudev remembrance 3" />
              <img src={collage2} alt="Pujya Gurudev remembrance 4" />
              <img src={collage4} alt="Pujya Gurudev remembrance 5" />
              <img src={collage5} alt="Pujya Gurudev remembrance 6" />
            </div>
          </HomeNewLink>
          <NamamiLine className="home-new__guru-lines--photos">
            नमामि ज्ञानमूर्तिम्॥
          </NamamiLine>
        </section>

        <section
          className="home-new__welcome home-new__welcome--secondary"
          aria-label="Smaran shloka"
        >
          <Flower2 aria-hidden="true" />
          <p className="home-new__welcome-shloka">
            यस्य स्मरणमात्रेण आनन्दं भवति ध्रुवम्।
            <br />
            सद्गुरवे नमस्तस्मै करुणावरुणालये।।
          </p>
        </section>

        <section
          className="home-new__section home-new__section--cards"
          id="explore"
          aria-labelledby="explore-title"
        >
          <div className="home-new__section-heading">
            <h2 id="explore-title" className="sr-only">
              Explore
            </h2>
            <span>कृपया एक पावन अनुभाग चुनें</span>
          </div>
          <div className="home-new__card-grid">
            {featureCards.map(({ href, icon: Icon, title, description }) => (
              <HomeNewLink className="home-new__card" href={href} key={title}>
                <span className="home-new__card-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="home-new__card-body">
                  <strong>{title}</strong>
                  <small>{description}</small>
                  <em>देखें →</em>
                </span>
              </HomeNewLink>
            ))}
          </div>
          <NamamiLine className="home-new__guru-lines--cards">
            नमामि सर्वहितचिन्तकम्॥
          </NamamiLine>
        </section>

        <section
          className="home-new__about"
          id="about"
          aria-labelledby="about-title"
        >
          <Flower2 aria-hidden="true" />
          <h2 id="about-title">ॐ श्री सद्गुरवे नमः</h2>
          <p>
            A peaceful digital space created for darshan, remembrance and
            gratitude at the lotus feet of Pujya Swamiji.
          </p>
          <NamamiLine className="home-new__guru-lines--closing">
            नमामि सन्त दुर्लभम्॥
          </NamamiLine>
          <span className="devotional-om-small" aria-hidden="true">
            ॐ
          </span>
        </section>
      </main>
    </div>
  );
};

export default HomeNew;
