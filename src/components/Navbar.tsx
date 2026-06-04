import { useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "New Homepage", href: "/home-new" },
  { label: "Charan-Vandan", href: "/#charan-vandan" },
  { label: "Sidhbari Leela", href: "/#leela" },
  { label: "Charitra-Jhalak", href: "/#photo-gallery2" },
  { label: "Stuti", href: "/#stuti" },
  { label: "Virah-Stuti", href: "/#shraddanjali" },
  { label: "Satsangs", href: "/#talks" },
  { label: "Bhajan", href: "/#bhajans" },
  { label: "Quotes", href: "/#quotes" },
  { label: "Hommage", href: "/#hommage" },
  { label: "Temporary", href: "/#gallery" },
];

const mantra = "ॐ श्री सद्गुरवे नमः";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkBase = "#684229";
  const linkHover = "#9f6f2f";
  const dividerColor = "rgba(166, 116, 48, 0.32)";

  const renderNavLink = (link: (typeof navLinks)[number], className: string, onClick?: () => void) => {
    const commonProps = {
      className,
      style: { color: linkBase },
      onMouseEnter: (event: MouseEvent<HTMLAnchorElement>) => {
        event.currentTarget.style.color = linkHover;
      },
      onMouseLeave: (event: MouseEvent<HTMLAnchorElement>) => {
        event.currentTarget.style.color = linkBase;
      },
      onClick,
    };

    return link.href.startsWith("/") && !link.href.includes("#") ? (
      <Link to={link.href} {...commonProps}>
        {link.label}
      </Link>
    ) : (
      <a href={link.href} {...commonProps}>
        {link.label}
      </a>
    );
  };

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b"
      style={{
        background: "linear-gradient(180deg, rgba(255, 250, 240, 0.98), rgba(250, 238, 216, 0.94))",
        backdropFilter: "blur(14px)",
        borderColor: "rgba(189, 139, 66, 0.24)",
        boxShadow: "0 4px 22px rgba(104, 66, 41, 0.08)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="/#hero"
          className="font-display text-xl font-bold tracking-wide transition-colors sm:text-2xl lg:flex-shrink-0"
          style={{ color: linkBase }}
          onClick={() => setOpen(false)}
        >
          {mantra}
        </a>

        {/* Desktop */}
        <ul className="ml-8 hidden items-center justify-end lg:flex">
          {navLinks.map((link, index) => (
            <li key={link.href} className="flex items-center">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="mx-3 h-4 w-px xl:mx-4"
                  style={{ backgroundColor: dividerColor }}
                />
              )}
              {renderNavLink(
                link,
                "font-body whitespace-nowrap text-xs font-medium tracking-[0.015em] transition-colors xl:text-sm",
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden"
          style={{
            color: linkBase,
            backgroundColor: "rgba(255, 250, 240, 0.72)",
            borderColor: "rgba(166, 116, 48, 0.32)",
          }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
            style={{
              background: "linear-gradient(180deg, rgba(255, 250, 240, 0.99), rgba(250, 238, 216, 0.98))",
              borderTop: "1px solid rgba(189, 139, 66, 0.18)",
              borderBottom: "1px solid rgba(189, 139, 66, 0.24)",
            }}
          >
            <ul className="flex flex-col items-center gap-4 px-4 py-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {renderNavLink(link, "font-body text-sm font-medium transition-colors", () => setOpen(false))}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
