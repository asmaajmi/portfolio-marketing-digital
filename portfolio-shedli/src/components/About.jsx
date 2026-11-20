import React from "react";
import { ABOUT_HIGHLIGHTS, PROFILE, TOOLS } from "../data";
import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-left">
          <Reveal as="span" className="eyebrow">À propos</Reveal>
          <Reveal as="h2" className="section-title" delay={1}>
            Créateur, marketeur <em>& homme de terrain</em>
          </Reveal>
          <Reveal delay={2}>
            <p className="about-text">
              Je m'appelle <strong>Shedli Ajmi</strong>, créateur de contenu basé à{" "}
              {PROFILE.location}, suivi par plus de <strong>200 000 personnes</strong> sur
              Instagram et TikTok. Ma ligne : la qualité, l'esthétique et la cohérence
              au cœur de chaque vidéo.
            </p>
            <p className="about-text">
              Étudiant en <strong>architecture d'intérieur</strong> et en{" "}
              <strong>informatique</strong>, j'accompagne depuis 2024 des marques de
              l'immobilier, de la téléphonie, de la parfumerie, de la nutrition sportive
              et de la restauration : création de contenu, animation des réseaux sociaux,
              vente et relation client.
            </p>
          </Reveal>

          <Reveal className="about-tags" delay={3}>
            {TOOLS.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </Reveal>

          <Reveal className="about-actions" delay={4}>
            <a href={PROFILE.cv} download className="btn btn-primary">
              <i className="fa-solid fa-download" /> Télécharger le CV
            </a>
            <a href="#experience" className="btn btn-ghost">
              <i className="fa-solid fa-briefcase" /> Voir mon parcours
            </a>
          </Reveal>
        </div>

        <div className="about-right">
          {ABOUT_HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} className="hl-card glass" delay={(i % 4) + 1}>
              <div className="hl-icon"><i className={h.icon} /></div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
