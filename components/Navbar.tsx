"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6vw] py-5 backdrop-blur-xl bg-bg/60 border-b border-cardBorder">
      <div className="font-extrabold text-xl tracking-tight">
        Darcy<span className="gradient-text">.dev</span>
      </div>

      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-muted">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ rotate: 20 }}
          onClick={() => setLight((v) => !v)}
          aria-label="Toggle dark/light mode"
          className="w-9 h-9 rounded-full glass flex items-center justify-center"
        >
          {light ? <Sun size={16} /> : <Moon size={16} />}
        </motion.button>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 flex items-center justify-center"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden fixed top-0 right-0 h-screen w-[70vw] max-w-[300px] bg-[#131c33] border-l border-cardBorder flex flex-col justify-center gap-8 px-10 z-[99]"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
