import React from "react";
import { SERVICES } from "../data";
import Reveal from "./Reveal";
import "./Services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head center">
          <Reveal as="span" className="eyebrow">Services</Reveal>
          <Reveal as="h2" className="section-title" delay={1}>
            Comment je crée de la <em>valeur</em>
          </Reveal>
          <Reveal as="p" className="section-sub" delay={2}>
            Des prestations pensées pour les marques qui veulent du contenu qui performe,
            une audience engagée et une croissance mesurable.
          </Reveal>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} className="service-card glass" delay={(i % 3) + 1}>
              <div className="service-top">
                <div className="service-icon"><i className={s.icon} /></div>
                <span className="service-num">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="service-link">
                Demander <i className="fa-solid fa-arrow-right" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
