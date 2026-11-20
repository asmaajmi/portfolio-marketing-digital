import React, { useState } from "react";
import { PROFILE, SOCIALS } from "../data";
import "./Hero.css";

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" aria-hidden />
      <div className="container hero-inner">
        {/* Left — copy */}
        <div className="hero-copy">
          <div className="hero-badge reveal in">
            <span className="dot" /> Ouvert aux collaborations · {PROFILE.location}
          </div>

          <h1 className="hero-title reveal in d1">
            Créateur de contenu <br />
            <em>& marketeur</em> digital
          </h1>

          <p className="hero-lead reveal in d2">{PROFILE.tagline}</p>

          <div className="hero-cta reveal in d3">
            <a href="#contact" className="btn btn-primary">
              <i className="fa-solid fa-handshake-angle" /> Travaillons ensemble
            </a>
            <a href={PROFILE.cv} download className="btn btn-ghost">
              <i className="fa-solid fa-download" /> Télécharger le CV
            </a>
          </div>

          <div className="hero-socials reveal in d4">
            {SOCIALS.filter((s) => s.id !== "email").map((s) => {
              const content = (
                <>
                  <i className={s.icon} />
                  {s.followers && <span>{s.followers}</span>}
                </>
              );
              return s.url ? (
                <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="hero-social" aria-label={s.label}>
                  {content}
                </a>
              ) : (
                <span key={s.id} className="hero-social" aria-label={s.label}>{content}</span>
              );
            })}
          </div>
        </div>

        {/* Right — portrait */}
        <div className="hero-visual reveal in d2">
          <div className="portrait-ring">
            <div className="portrait-orbit" aria-hidden>
              <span className="orbit-chip c1"><i className="fa-brands fa-instagram" /></span>
              <span className="orbit-chip c2"><i className="fa-brands fa-tiktok" /></span>
              <span className="orbit-chip c3"><i className="fa-solid fa-bolt" /></span>
            </div>
            <div className="portrait">
              {imgOk ? (
                <img src={PROFILE.photo} alt={PROFILE.name} onError={() => setImgOk(false)} />
              ) : (
                <div className="portrait-fallback">
                  <span>{PROFILE.initials}</span>
                  <small>Déposez votre photo dans /public/profile.jpg</small>
                </div>
              )}
              <div className="portrait-glow" aria-hidden />
            </div>
          </div>

          {/* Floating proof cards */}
          <div className="float-card fc-top">
            <i className="fa-brands fa-instagram" />
            <div>
              <strong>111K</strong>
              <span>sur Instagram</span>
            </div>
          </div>
          <div className="float-card fc-bottom">
            <div className="verified"><i className="fa-solid fa-check" /></div>
            <div>
              <strong>200K+</strong>
              <span>communauté</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#stats" className="scroll-cue" aria-label="Défiler">
        <span /> <i className="fa-solid fa-chevron-down" />
      </a>
    </section>
  );
}
