import React from 'react';

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">04 — PROJECTS & FUNDING</span>
            <h2>Research that solves real problems.</h2>
          </div>
          <p className="kicker">
            Showcase sponsored research, consultancy, industry projects and completed outcomes in one transparent directory.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <span className="tag">Sponsored Research</span>
            <h3>Funded Projects</h3>
            <p>Government and agency-supported research projects, investigators, funding and outcomes.</p>
          </div>
          <div className="card">
            <span className="tag">Industry</span>
            <h3>Consultancy Projects</h3>
            <p>Industry-facing engineering studies, testing, design and technical consultancy.</p>
          </div>
          <div className="card">
            <span className="tag">Students</span>
            <h3>Major Projects</h3>
            <p>High-potential student projects selected for research, innovation and IPR development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
