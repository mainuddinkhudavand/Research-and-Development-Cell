import React, { useState } from 'react';

export const ResearchSection = () => {
  const [activeTab, setActiveTab] = useState('areas');

  return (
    <section id="research">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">02 — RESEARCH</span>
            <h2>Research ecosystem</h2>
          </div>
          <p className="kicker">
            A structured home for researchers, research groups, publications and scholarly support.
          </p>
        </div>

        <div className="filters">
          <button
            className={`filter ${activeTab === 'areas' ? 'active' : ''}`}
            onClick={() => setActiveTab('areas')}
          >
            Research Areas
          </button>
          <button
            className={`filter ${activeTab === 'researchers' ? 'active' : ''}`}
            onClick={() => setActiveTab('researchers')}
          >
            Researchers
          </button>
          <button
            className={`filter ${activeTab === 'publications' ? 'active' : ''}`}
            onClick={() => setActiveTab('publications')}
          >
            Publications
          </button>
          <button
            className={`filter ${activeTab === 'support' ? 'active' : ''}`}
            onClick={() => setActiveTab('support')}
          >
            Research Support
          </button>
        </div>

        {/* Panel 1: Research Areas */}
        {activeTab === 'areas' && (
          <div className="cards">
            <div className="card">
              <span className="tag">Engineering</span>
              <h3>Advanced Manufacturing</h3>
              <p>Manufacturing systems, materials, design, automation and emerging engineering technologies.</p>
            </div>
            <div className="card">
              <span className="tag">Sustainability</span>
              <h3>Renewable Energy</h3>
              <p>Clean energy systems, energy efficiency and sustainable engineering solutions.</p>
            </div>
            <div className="card">
              <span className="tag">Digital</span>
              <h3>AI & Intelligent Systems</h3>
              <p>Artificial intelligence, data-driven engineering, automation and smart applications.</p>
            </div>
            <div className="card">
              <span className="tag">Innovation</span>
              <h3>Entrepreneurship</h3>
              <p>Student innovation, startup development, incubation and technology translation.</p>
            </div>
            <div className="card">
              <span className="tag">Applied Research</span>
              <h3>Interdisciplinary Research</h3>
              <p>Collaborative research connecting engineering with societal and industrial problems.</p>
            </div>
            <div className="card">
              <span className="tag">IPR</span>
              <h3>Intellectual Property</h3>
              <p>Identification, documentation and protection of novel research and innovation.</p>
            </div>
          </div>
        )}

        {/* Panel 2: Researchers */}
        {activeTab === 'researchers' && (
          <div className="cards">
            <div className="card">
              <span className="tag">Directory</span>
              <h3>Faculty Researchers</h3>
              <p>Searchable faculty profiles, expertise, publications, patents and collaboration interests.</p>
            </div>
            <div className="card">
              <span className="tag">Students</span>
              <h3>Student Researchers</h3>
              <p>Final-year projects, research internships, innovation teams and project-to-patent initiatives.</p>
            </div>
            <div className="card">
              <span className="tag">Scholars</span>
              <h3>Research Scholars</h3>
              <p>Research topics, supervisors and institutional support information.</p>
            </div>
          </div>
        )}

        {/* Panel 3: Publications */}
        {activeTab === 'publications' && (
          <div className="cards">
            <div className="card">
              <span className="tag">Journals</span>
              <h3>Journal Publications</h3>
              <p>Scopus, Web of Science and other peer-reviewed research outputs.</p>
            </div>
            <div className="card">
              <span className="tag">Conferences</span>
              <h3>Conference Papers</h3>
              <p>International and national conference publications and proceedings.</p>
            </div>
            <div className="card">
              <span className="tag">Books</span>
              <h3>Books & Chapters</h3>
              <p>ISBN books, edited volumes and scholarly book chapters.</p>
            </div>
          </div>
        )}

        {/* Panel 4: Research Support */}
        {activeTab === 'support' && (
          <div className="cards">
            <div className="card">
              <span className="tag">Methodology</span>
              <h3>Research Methodology</h3>
              <p>Support for research design, literature review, methodology and academic writing.</p>
            </div>
            <div className="card">
              <span className="tag">Analytics</span>
              <h3>Data Analysis</h3>
              <p>Statistical and computational analysis workflows for research projects.</p>
            </div>
            <div className="card">
              <span className="tag">Publication</span>
              <h3>Publication Guidance</h3>
              <p>Manuscript preparation, journal selection and research dissemination support.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
