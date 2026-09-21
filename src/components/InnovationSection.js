import React from 'react';

export const InnovationSection = () => {
  return (
    <section id="innovation">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">05 — INNOVATION & ENTREPRENEURSHIP</span>
            <h2>Ideas into ventures.</h2>
          </div>
          <p className="kicker">
            Connect the R&D Cell with CERI, IIC, incubation, startup support and entrepreneurship activities.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <span className="tag">CERI</span>
            <h3>Centre for Entrepreneurship Research & Innovation</h3>
            <p>Innovation, research translation, patent facilitation and entrepreneurship ecosystem support.</p>
          </div>
          <div className="card">
            <span className="tag">IIC</span>
            <h3>Institution's Innovation Council</h3>
            <p>Innovation activities, challenges, workshops, mentoring and entrepreneurship programs.</p>
          </div>
          <div className="card">
            <span className="tag">Startup</span>
            <h3>Incubation & Student Ventures</h3>
            <p>Support for ideation, validation, mentoring, intellectual property and startup readiness.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
