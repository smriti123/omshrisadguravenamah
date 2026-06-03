import { useState } from "react";
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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkBase = "#684229";
  const linkHover = "#bd8b42";
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(255,250,240,0.92)",
        backdropFilter: "blur(14px)",
        borderColor: "rgba(189,139,66,0.28)",
        boxShadow: "0 3px 18px rgba(104,66,41,.05)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="font-display text-lg sm:text-2xl font-bold" style={{ color: "#684229" }}>
          ॐ श्री सद्गुरवे नमः
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex flex-wrap items-center justify-end gap-3 xl:gap-5">
          {navLinks.map((l) => (
            <li key={l.href}>
              {l.href.startsWith("/") && !l.href.includes("#") ? (
                <Link
                  to={l.href}
                  className="font-body whitespace-nowrap text-xs xl:text-sm transition-colors"
                  style={{ color: linkBase }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = linkHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = linkBase)}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                className="font-body whitespace-nowrap text-xs xl:text-sm transition-colors"
                style={{ color: linkBase }}
                onMouseEnter={(e) => (e.currentTarget.style.color = linkHover)}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkBase)}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>


        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          style={{ color: "#684229" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "rgba(255,250,240,0.97)",
              borderBottom: "1px solid rgba(189,139,66,0.28)",
            }}
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  {l.href.startsWith("/") && !l.href.includes("#") ? (
                    <Link
                      to={l.href}
                      className="font-body transition-colors"
                      style={{ color: "#684229" }}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="font-body transition-colors"
                      style={{ color: "#684229" }}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  )}
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
