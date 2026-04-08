import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Journey", href: "#journey" },
  { label: "Gallery", href: "#gallery" },
  { label: "Radiant Smile", href: "#radiant-smile" },
  { label: "Virah Stuti", href: "#shraddanjali" },
  
  { label: "Stuti", href: "#stuti" }, 
  { label: "Talks", href: "#talks" },
  { label: "Bhajans", href: "#bhajans" },
  { label: "Quotes", href: "#quotes" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(200,150,60,0.92)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(160,100,20,0.3)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="font-display text-2xl font-bold" style={{ color: "hsl(40 80% 94%)" }}>
          {"\n"}
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm transition-colors"
                style={{ color: "hsl(40 70% 92%)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(45 90% 98%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(40 70% 92%)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "hsl(40 70% 92%)" }}
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
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(200,150,60,0.96)",
              borderBottom: "1px solid rgba(160,100,20,0.3)",
            }}
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
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
