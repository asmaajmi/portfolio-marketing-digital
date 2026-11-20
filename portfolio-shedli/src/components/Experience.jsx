import React from "react";
import { EDUCATION, EXPERIENCE, INTERESTS, LANGUAGES, PROFILE, SKILLS, TOOLS } from "../data";
import Reveal from "./Reveal";
import "./Experience.css";

function Block({ eyebrow, title, children, aside }) {
  return (
    <div className="cv-block">
      <div className="cv-block-head">
        <div>
          <Reveal as="span" className="eyebrow">{eyebrow}</Reveal>
          <Reveal as="h3" className="cv-block-title" delay={1}>{title}</Reveal>
        </div>
        {aside}
      </div>
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="cv-wide">
        <div className="section-head center">
          <Reveal as="span" className="eyebrow">Parcours</Reveal>
          <Reveal as="h2" className="section-title" delay={1}>
            Mon <em>CV</em> en un coup d'œil
          </Reveal>
          <Reveal as="p" className="section-sub" delay={2}>
            8 marques, 5 secteurs : du contenu au comptoir, je travaille là où la
            communication rencontre la vente.
          </Reveal>
        </div>

        <Block
          eyebrow="Expériences professionnelles"
          title={<>Une expérience <em>terrain</em></>}
          aside={
            <Reveal className="cv-legend" delay={2}>
              <span className="live-dot" /> En poste actuellement
            </Reveal>
          }
        >
          <div className="xp-grid">
            {EXPERIENCE.map((x, i) => (
              <Reveal key={x.company} className={`xp-card glass ${x.current ? "is-current" : ""}`} delay={(i % 2) + 1}>
                <div className="xp-icon"><i className={x.icon} /></div>
                <div className="xp-body">
                  <div className="xp-head">
                    <h4>{x.role}</h4>
                    <span className="xp-period">
                      {x.current && <span className="live-dot" />}
                      {x.period}
                    </span>
                  </div>
                  <p className="xp-company">
                    <strong>{x.company}</strong>
                    <span>{x.sector}</span>
                  </p>
                  <ul className="xp-points">
                    {x.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Block>

        <Block eyebrow="Formation" title={<>Un double cursus <em>design & tech</em></>}>
          <div className="edu-grid">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.title} className="edu-card glass" delay={i + 1}>
                <div className="edu-top">
                  <div className="edu-icon"><i className={e.icon} /></div>
                  <span className={`edu-status ${e.current ? "now" : ""}`}>
                    {e.current ? "En cours" : "Obtenu"}
                  </span>
                </div>
                <p className="edu-level">{e.level}</p>
                <h4 className="edu-name">{e.title}</h4>
                <ul className="edu-meta">
                  <li><i className="fa-solid fa-building-columns" /> {e.school}</li>
                  <li><i className="fa-solid fa-location-dot" /> {e.city}</li>
                  <li><i className="fa-regular fa-calendar" /> {e.period}</li>
                </ul>
              </Reveal>
            ))}
          </div>
        </Block>

        <Block eyebrow="Atouts" title={<>Compétences <em>& outils</em></>}>
          <div className="skills-grid">
            <Reveal className="skill-panel glass" delay={1}>
              <h5><i className="fa-solid fa-star" /> Compétences</h5>
              <ul className="skill-list">
                {SKILLS.map((s) => <li key={s}><i className="fa-solid fa-check" /> {s}</li>)}
              </ul>
            </Reveal>
            <Reveal className="skill-panel glass" delay={2}>
              <h5><i className="fa-solid fa-toolbox" /> Outils</h5>
              <div className="chips">{TOOLS.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </Reveal>
            <Reveal className="skill-panel glass" delay={3}>
              <h5><i className="fa-solid fa-language" /> Langues</h5>
              <ul className="lang-list">
                {LANGUAGES.map((l) => (
                  <li key={l.name}><strong>{l.name}</strong><span>{l.level}</span></li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="skill-panel glass" delay={4}>
              <h5><i className="fa-solid fa-heart" /> Centres d'intérêt</h5>
              <div className="chips">{INTERESTS.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </Reveal>
          </div>

          <Reveal className="cv-cta glass" delay={2}>
            <div>
              <strong>Envie du CV complet ?</strong>
              <span>Format PDF · à jour 2026</span>
            </div>
            <a href={PROFILE.cv} download className="btn btn-primary">
              <i className="fa-solid fa-download" /> Télécharger le CV
            </a>
          </Reveal>
        </Block>
      </div>
    </section>
  );
}
