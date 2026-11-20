import React from "react";
import { PROFILE, SOCIALS } from "../data";
import "./Footer.css";

const NAV = [
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Parcours" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#media", label: "Media Kit" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-cta glass">
        <div>
          <h2>Une marque à faire <em>rayonner</em> ?</h2>
          <p>Collaborons sur du contenu qui marque les esprits et génère des résultats.</p>
        </div>
        <a href="#contact" className="btn btn-primary">
          <i className="fa-solid fa-handshake-angle" /> Démarrer un projet
        </a>
      </div>

      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">{PROFILE.initials}</span>
          <div>
            <strong>{PROFILE.name}</strong>
            <span>{PROFILE.role}</span>
          </div>
        </div>

        <nav className="footer-nav">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>

        <div className="footer-socials">
          {SOCIALS.filter((s) => s.url && s.id !== "email").map((s) => (
            <a key={s.id} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {PROFILE.name}. Tous droits réservés.</span>
        <span>Conçu avec <i className="fa-solid fa-heart" /> à {PROFILE.location}</span>
      </div>
    </footer>
  );
}
