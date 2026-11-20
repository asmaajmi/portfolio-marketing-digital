import React from "react";
import { PORTFOLIO, PROFILE } from "../data";
import Reveal from "./Reveal";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-head">
          <Reveal as="span" className="eyebrow">Portfolio</Reveal>
          <Reveal as="h2" className="section-title" delay={1}>
            Du contenu qui <em>performe</em>
          </Reveal>
          <Reveal as="p" className="section-sub" delay={2}>
            Lieux, lifestyle, Reels et collaborations de marque — une sélection tirée
            directement de mon Instagram.
          </Reveal>
        </div>

        <div className="gallery">
          {PORTFOLIO.map((p, i) => (
            <Reveal
              as="a"
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`gal-card ${p.span}`}
              delay={(i % 3) + 1}
            >
              <div className="gal-media">
                {p.img ? <img src={p.img} alt={p.title} loading="lazy" /> : <i className={p.icon} />}
                <div className="gal-noise" aria-hidden />
              </div>
              <div className="gal-overlay">
                <span className="gal-cat">{p.cat}</span>
                <h3>{p.title}</h3>
                <div className="gal-foot">
                  <span className="gal-tag"><i className="fa-solid fa-tag" /> {p.tag}</span>
                  <span className="gal-metric"><i className="fa-brands fa-instagram" /> Voir le post</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="gallery-cta" delay={2}>
          <a href={PROFILE.instagram} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <i className="fa-brands fa-instagram" /> Tout voir sur @shedli_aajmi
          </a>
        </Reveal>
      </div>
    </section>
  );
}
