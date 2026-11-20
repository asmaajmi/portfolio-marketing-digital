import React, { useState } from "react";
import { PROFILE, SOCIALS } from "../data";
import Reveal from "./Reveal";
import "./Contact.css";

const SERVICES_OPTIONS = [
  "Collaboration / contenu sponsorisé",
  "Création de contenu",
  "Gestion des réseaux sociaux",
  "Mise en valeur d'un lieu",
  "Promotion & Meta Ads",
  "Offre d'emploi / stage",
  "Autre",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: SERVICES_OPTIONS[0], message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Collaboration — ${form.service} (${form.name})`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal className="contact-shell glass">
          <div className="contact-info">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">
              Lançons votre <em>prochaine campagne</em>
            </h2>
            <p className="section-sub">
              Une collaboration, une mission ou un poste ? Écrivez-moi par email ou
              directement sur WhatsApp.
            </p>

            <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary contact-wa">
              <i className="fa-brands fa-whatsapp" /> Discuter sur WhatsApp
            </a>

            <ul className="contact-list">
              <li>
                <span className="ci-icon"><i className="fa-solid fa-envelope" /></span>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </li>
              <li>
                <span className="ci-icon"><i className="fa-solid fa-phone" /></span>
                <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>{PROFILE.phone}</a>
              </li>
              <li>
                <span className="ci-icon"><i className="fa-solid fa-location-dot" /></span>
                <span>{PROFILE.location}</span>
              </li>
            </ul>

            <div className="contact-socials">
              {SOCIALS.filter((s) => s.url).map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="cs-link" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            {sent && (
              <div className="form-success">
                <i className="fa-solid fa-circle-check" /> Merci ! Votre messagerie va s'ouvrir pour finaliser l'envoi.
              </div>
            )}
            <div className="field">
              <label>Nom complet</label>
              <input type="text" required placeholder="Votre nom / marque" value={form.name} onChange={update("name")} />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" required placeholder="vous@marque.com" value={form.email} onChange={update("email")} />
            </div>
            <div className="field">
              <label>Type de collaboration</label>
              <div className="select-wrap">
                <select value={form.service} onChange={update("service")}>
                  {SERVICES_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <i className="fa-solid fa-chevron-down" />
              </div>
            </div>
            <div className="field">
              <label>Votre projet</label>
              <textarea rows="4" required placeholder="Parlez-moi de votre marque et de vos objectifs..." value={form.message} onChange={update("message")} />
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              <i className="fa-solid fa-paper-plane" /> Envoyer la demande
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
