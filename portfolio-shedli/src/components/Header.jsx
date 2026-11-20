import React, { useEffect, useState } from "react";
import { PROFILE } from "../data";
import "./Header.css";

const LINKS = [
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Parcours" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#media", label: "Media Kit" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`} id="top">
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">{PROFILE.initials}</span>
          <span className="brand-name">
            {PROFILE.first} <em>{PROFILE.last}</em>
          </span>
        </a>

        <nav className={`nav ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-paper-plane" /> Collaborer
          </a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Changer de thème">
            <i className={theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"} />
          </button>
          <button
            className={`burger ${open ? "active" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
