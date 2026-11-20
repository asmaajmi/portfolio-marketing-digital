/* ===========================================================
   Single source of truth — edit your content here.
   Sources: CV (2026) + public Instagram profile @shedli_aajmi.
   =========================================================== */

const IG = "https://www.instagram.com/shedli_aajmi/";

export const PROFILE = {
  name: "Shedli Ajmi",
  first: "Shedli",
  last: "Ajmi",
  initials: "SA",
  role: "Créateur de Contenu · Marketing Digital & Gestion Commerciale",
  tagline: "Qualité, esthétique et cohérence au cœur de chaque vidéo — du contenu qui donne envie, et qui fait vendre.",
  location: "Messadine, Sousse",
  email: "shedliajmi345@gmail.com",
  phone: "+216 29 637 007",
  whatsapp: "https://wa.me/21629637007",
  instagram: IG,
  photo: "/profile.jpg",
  cv: "/cv-shedli-ajmi.pdf",
};

export const SOCIALS = [
  { id: "instagram", label: "Instagram", handle: "@shedli_aajmi", icon: "fa-brands fa-instagram", url: IG, followers: "111K" },
  // TODO: set the real TikTok profile URL — links are hidden while empty
  { id: "tiktok", label: "TikTok", handle: "TikTok", icon: "fa-brands fa-tiktok", url: "", followers: "90K+" },
  { id: "whatsapp", label: "WhatsApp", handle: PROFILE.phone, icon: "fa-brands fa-whatsapp", url: PROFILE.whatsapp, followers: "" },
  { id: "email", label: "Email", handle: PROFILE.email, icon: "fa-solid fa-envelope", url: `mailto:${PROFILE.email}`, followers: "" },
];

/* Animated counters — only figures backed by the CV / public profile */
export const STATS = [
  { id: "reach", label: "Communauté totale", value: 200, suffix: "K+", icon: "fa-solid fa-users", note: "111K Instagram · 90K+ TikTok" },
  { id: "brands", label: "Marques accompagnées", value: 8, suffix: "", icon: "fa-solid fa-handshake", note: "Missions marketing & commerciales" },
  { id: "sectors", label: "Secteurs maîtrisés", value: 5, suffix: "", icon: "fa-solid fa-layer-group", note: "Immobilier, téléphonie, parfumerie, nutrition, food" },
  { id: "years", label: "Années d'expérience", value: 2, suffix: "+", icon: "fa-solid fa-briefcase", note: "Sur le terrain depuis 2024" },
];

export const SERVICES = [
  { icon: "fa-solid fa-clapperboard", title: "Création de Contenu", desc: "Reels, Stories et visuels soignés : qualité, esthétique et cohérence pour capter l'attention dès la première seconde." },
  { icon: "fa-solid fa-hashtag", title: "Gestion des Réseaux Sociaux", desc: "Animation des pages Instagram, Facebook et TikTok, planning de publications et suivi des interactions." },
  { icon: "fa-solid fa-handshake-angle", title: "Collaborations & Contenu Sponsorisé", desc: "Intégration naturelle de votre marque auprès d'une communauté de plus de 200K abonnés." },
  { icon: "fa-solid fa-building", title: "Mise en Valeur de Lieux", desc: "Biens immobiliers, restaurants, boutiques : un œil d'architecte d'intérieur pour sublimer chaque espace." },
  { icon: "fa-solid fa-bullhorn", title: "Promotion & Meta Ads", desc: "Contenus promotionnels et campagnes Meta Ads pour renforcer la visibilité et soutenir les ventes." },
  { icon: "fa-solid fa-cash-register", title: "Vente & Gestion Commerciale", desc: "Vente, conseil client, caisse et approvisionnement : je relie le contenu au chiffre d'affaires." },
];

export const EXPERIENCE = [
  { role: "Agent Marketing Digital", company: "Almaz Perfume Store", sector: "Parfumerie", period: "Juin 2026 — Présent", current: true, icon: "fa-solid fa-spray-can-sparkles",
    points: ["Promotion des parfums sur les réseaux sociaux et création de contenus promotionnels", "Renforcement de la visibilité de la marque et contribution à la hausse des ventes"] },
  { role: "Agent Marketing Digital", company: "Velora Immobilier", sector: "Immobilier · Agences de Hergla & Hay Riadh", period: "Janv. 2026 — Nov. 2026", icon: "fa-solid fa-house-chimney",
    points: ["Promotion des biens immobiliers et création de contenus marketing", "Gestion des publications et amélioration de la visibilité en ligne des agences"] },
  { role: "Collaborateur Marketing", company: "Crepello Sehloul", sector: "Restauration", period: "2026", icon: "fa-solid fa-utensils",
    points: ["Contribution à la communication digitale et gestion des publications sur les réseaux sociaux"] },
  { role: "Agent Commercial, Caissier & Marketing Digital", company: "IONE Store", sector: "Téléphones mobiles & accessoires", period: "Août 2025 — Avril 2026", icon: "fa-solid fa-headphones",
    points: ["Vente, conseil client et gestion de la caisse au quotidien", "Création de contenus et animation des réseaux sociaux de la boutique"] },
  { role: "Responsable Marketing & Vendeur", company: "City Phone", sector: "Téléphonie", period: "2025 — Présent", current: true, icon: "fa-solid fa-mobile-screen-button",
    points: ["Gestion et animation des pages Instagram et Facebook", "Achat et approvisionnement en produits téléphoniques", "Création de contenu promotionnel et suivi des publications"] },
  { role: "Agent Marketing Digital", company: "Protein Shop Sousse", sector: "Nutrition sportive", period: "Juin 2025 — Présent", current: true, icon: "fa-solid fa-dumbbell",
    points: ["Promotion des produits, gestion des réseaux sociaux et animation de la communauté clients"] },
  { role: "Responsable Marketing & Vendeur", company: "Phontastik Store", sector: "Téléphonie", period: "2024 — 2025", icon: "fa-solid fa-mobile-screen",
    points: ["Gestion des pages Instagram et Facebook et mise en place de stratégies de contenu", "Suivi des interactions et développement de l'engagement communautaire"] },
  { role: "Responsable Marketing Digital", company: "7ikeyet 3tr", sector: "Parfumerie", period: "2024 — 2025", icon: "fa-solid fa-spray-can-sparkles",
    points: ["Animation des réseaux sociaux et création de visuels promotionnels", "Développement de la notoriété de la marque en ligne"] },
];

export const EDUCATION = [
  { title: "BTS en Architecture d'Intérieur", level: "Brevet de Technicien Supérieur", school: "IMSET", city: "Sousse", period: "En cours", current: true, icon: "fa-solid fa-compass-drafting" },
  { title: "Licence en Informatique", level: "Licence · Bac+1", school: "ISITCOM", city: "Hammam Sousse", period: "2025 — 2026", current: true, icon: "fa-solid fa-laptop-code" },
  { title: "Baccalauréat Informatique", level: "Baccalauréat", school: "Lycée Othman Chatti", city: "Msaken", period: "2024", icon: "fa-solid fa-graduation-cap" },
];

export const BRANDS = EXPERIENCE.map(({ company, sector, icon }) => ({
  name: company,
  sector: sector.split(" · ")[0],
  icon,
}));

/* Real posts from @shedli_aajmi. Add `img: "/work/xxx.jpg"` to show a thumbnail. */
export const PORTFOLIO = [
  { title: "Lieux & Art de vivre", cat: "Lifestyle", tag: "Contenu perso", icon: "fa-solid fa-umbrella-beach", url: "https://www.instagram.com/shedli_aajmi/p/DM3JG2iNc2f/", span: "tall" },
  { title: "Architecture & Lumière", cat: "Photo", tag: "Œil d'architecte", icon: "fa-solid fa-building-columns", url: "https://www.instagram.com/shedli_aajmi/p/DOOo30YCGpB/", span: "" },
  { title: "Spot Restaurant", cat: "Food & Lieux", tag: "Mise en valeur", icon: "fa-solid fa-utensils", url: "https://www.instagram.com/shedli_aajmi/p/DQe0wE-jYPE/", span: "" },
  { title: "Collab HK Phones Store", cat: "Reel collaboratif", tag: "Téléphonie", icon: "fa-solid fa-mobile-screen-button", url: "https://www.instagram.com/hk_phones_store/reel/DWPBKN6Demp/", span: "wide" },
  { title: "Ambiance Stade", cat: "Reel", tag: "Storytelling", icon: "fa-solid fa-futbol", url: "https://www.instagram.com/shedli_aajmi/reel/DdoynAROizf/", span: "" },
  { title: "Intérieurs Élégants", cat: "Photo", tag: "Design d'intérieur", icon: "fa-solid fa-couch", url: "https://www.instagram.com/shedli_aajmi/p/Derxrw2jeuU/", span: "tall" },
];

export const PRESS = [
  { label: "Communauté", value: "200K+", desc: "111K sur Instagram · 90K+ sur TikTok" },
  { label: "Univers", value: "Lifestyle & Lieux", desc: "restaurants, hôtels, immobilier, commerce local" },
  { label: "Marché", value: "Tunisie", desc: "basé à Sousse · arabe & français" },
  { label: "Formats", value: "Reels · Stories · Posts", desc: "contenu vertical optimisé mobile" },
];

export const SKILLS = ["Réseaux sociaux", "Marketing digital", "Création de contenu", "Vente & relation client", "Gestion commerciale", "Informatique"];
export const TOOLS = ["Instagram", "Facebook", "TikTok", "Canva", "Meta Ads", "Reels", "Stories"];
export const LANGUAGES = [{ name: "Arabe", level: "Langue maternelle" }, { name: "Français", level: "Courant" }];
export const INTERESTS = ["Marketing", "E-commerce", "Tech", "Photographie", "Design d'intérieur"];

export const ABOUT_HIGHLIGHTS = [
  { icon: "fa-solid fa-camera-retro", title: "Création de Contenu", text: "Reels, Stories et visuels pensés pour l'esthétique et la cohérence de marque." },
  { icon: "fa-solid fa-chart-pie", title: "Marketing Digital", text: "Animation de communautés, stratégies de contenu et campagnes Meta Ads." },
  { icon: "fa-solid fa-handshake", title: "Sens Commercial", text: "Vente, conseil client et caisse : je sais ce qui transforme une vue en achat." },
  { icon: "fa-solid fa-compass-drafting", title: "Œil d'Architecte", text: "Étudiant en architecture d'intérieur et en informatique : composition, espace et tech." },
];
