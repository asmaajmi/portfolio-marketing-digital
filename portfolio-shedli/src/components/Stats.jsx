import React from "react";
import { STATS } from "../data";
import { useReveal, useCounter } from "../hooks";
import "./Stats.css";

function StatCard({ stat, start, index }) {
  const val = useCounter(stat.value, { start, duration: 1700 });
  const display = stat.decimals
    ? val.toFixed(stat.decimals)
    : Math.round(val).toLocaleString("fr-FR");

  return (
    <div className="stat-card glass" style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="stat-icon"><i className={stat.icon} /></div>
      <div className="stat-num">
        {display}
        <span>{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-note">{stat.note}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, shown] = useReveal({ threshold: 0.3 });

  return (
    <section className="stats" id="stats">
      <div className="container">
        <div ref={ref} className={`stats-grid ${shown ? "in" : ""}`}>
          {STATS.map((s, i) => (
            <StatCard key={s.id} stat={s} start={shown} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
