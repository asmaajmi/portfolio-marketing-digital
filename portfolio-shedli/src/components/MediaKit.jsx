import React from "react";
import { PRESS, PROFILE, SOCIALS } from "../data";
import Reveal from "./Reveal";
import "./MediaKit.css";

export default function MediaKit() {
  return (
    <section className="media" id="media">
      <div className="container media-inner">
        <div className="media-left">
          <Reveal as="span" className="eyebrow">Media Kit & Presse</Reveal>
          <Reveal as="h2" className="section-title" delay={1}>
            Tout ce qu'une marque <em>doit savoir</em>
          </Reveal>
          <Reveal as="p" className="section-sub" delay={2}>
            Chiffres clés, niche, audience et formats. Téléchargez le CV complet ou
            demandez le media kit détaillé pour votre prochaine campagne.
          </Reveal>

          <Reveal className="media-actions" delay={3}>
            <a href={PROFILE.cv} download className="btn btn-primary">
              <i className="fa-solid fa-file-arrow-down" /> Télécharger le CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              <i className="fa-solid fa-envelope-open-text" /> Demander le media kit
            </a>
          </Reveal>

          <Reveal className="media-socialrow" delay={4}>
            {SOCIALS.filter((s) => s.url && s.id !== "email").map((s) => (
              <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="media-soc" aria-label={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </Reveal>
        </div>

        <div className="media-right">
          {PRESS.map((p, i) => (
            <Reveal key={p.label} className="press-card glass" delay={(i % 4) + 1}>
              <span className="press-label">{p.label}</span>
              <strong className="press-value">{p.value}</strong>
              <span className="press-desc">{p.desc}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
