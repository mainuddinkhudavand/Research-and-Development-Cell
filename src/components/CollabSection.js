import React from 'react';

export const CollabSection = () => {
  return (
    <section id="collab" className="collab">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">06 — COLLABORATION</span>
            <h2>Build the next partnership.</h2>
          </div>
          <p className="kicker">
            Academic, industry and international partnerships can be presented here with MoUs, focus areas and outcomes.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <span className="tag">Industry</span>
            <h3>Industry Collaboration</h3>
            <p>Joint projects, consultancy, internships, sponsored research and technology development.</p>
          </div>
          <div className="card">
            <span className="tag">Academic</span>
            <h3>University Partnerships</h3>
            <p>Joint research, faculty exchange, co-authorship, conferences and academic programs.</p>
          </div>
          <div className="card">
            <span className="tag">International</span>
            <h3>Global Research</h3>
            <p>International research networks and collaborations for stronger visibility and impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
