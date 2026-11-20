import React from "react";
import { BRANDS } from "../data";
import Reveal from "./Reveal";
import "./Brands.css";

export default function Brands() {
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-head center">
          <Reveal as="span" className="eyebrow">Marques & Partenariats</Reveal>
          <Reveal as="h2" className="section-title" delay={1}>
            Ils m'ont fait <em>confiance</em>
          </Reveal>
          <Reveal as="p" className="section-sub" delay={2}>
            Immobilier, téléphonie, parfumerie, nutrition sportive et restauration —
            du contenu pensé pour vendre.
          </Reveal>
        </div>
      </div>

      <Reveal className="marquee" delay={2}>
        <div className="marquee-track">
          {loop.map((b, i) => (
            <div className="brand-chip" key={i}>
              <i className={b.icon} />
              <div>
                <strong>{b.name}</strong>
                <span>{b.sector}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="container">
        <div className="brands-grid">
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} className="brand-card glass" delay={(i % 4) + 1}>
              <div className="brand-card-icon"><i className={b.icon} /></div>
              <strong>{b.name}</strong>
              <span>{b.sector}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
