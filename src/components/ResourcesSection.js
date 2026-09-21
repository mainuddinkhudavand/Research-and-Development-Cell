import React from 'react';

export const ResourcesSection = () => {
  return (
    <section id="resources">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">08 — RESOURCES</span>
            <h2>Policies, forms & research support.</h2>
          </div>
          <p className="kicker">
            Keep important documents easy to find for faculty, students and collaborators.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <span className="tag">Policy</span>
            <h3>Research Policy</h3>
            <p>Upload the approved institutional research policy PDF here.</p>
          </div>
          <div className="card">
            <span className="tag">IPR</span>
            <h3>IPR Policy & Guidelines</h3>
            <p>Upload IPR guidelines, patent process and disclosure forms here.</p>
          </div>
          <div className="card">
            <span className="tag">Funding</span>
            <h3>Seed Grant / Project Guidelines</h3>
            <p>Upload funding calls, internal seed grant rules and proposal templates.</p>
          </div>
          <div className="card">
            <span className="tag">Forms</span>
            <h3>Research Forms</h3>
            <p>Proposal submission, patent disclosure, consultancy and collaboration forms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
