import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { RepositoryModal } from './RepositoryModal';
import { ChevronRight, FolderCheck } from 'lucide-react';

export const ResearchSection = () => {
  const [activeTab, setActiveTab] = useState('areas');
  const [activeRepo, setActiveRepo] = useState(null);
  const { tabData } = useAdmin();

  const getCount = (key) => (tabData[key] || []).length;

  return (
    <section id="research">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">02 — RESEARCH</span>
            <h2>Research ecosystem</h2>
          </div>
          <p className="kicker">
            A structured home for researchers, research groups, publications and scholarly support. Click on any card to open its repository and manage attached PDFs, Excel spreadsheets, and images.
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
            <div
              className="card interactive-card"
              onClick={() => setActiveRepo({ key: 'researchers', subKey: 'researchers_faculty', title: 'Faculty Researchers Directory Repository', desc: 'Searchable faculty profiles, expertise, publications, patents and collaboration interests.' })}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag">Directory</span>
                <span className="count-badge">{getCount('researchers')} Files</span>
              </div>
              <h3>Faculty Researchers</h3>
              <p>Searchable faculty profiles, expertise, publications, patents and collaboration interests.</p>
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
                <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
              </div>
            </div>

            <div
              className="card interactive-card"
              onClick={() => setActiveRepo({ key: 'researchers', subKey: 'researchers_student', title: 'Student Researchers & Projects Repository', desc: 'Final-year projects, research internships, innovation teams and project-to-patent initiatives.' })}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag">Students</span>
                <span className="count-badge">{getCount('researchers')} Files</span>
              </div>
              <h3>Student Researchers</h3>
              <p>Final-year projects, research internships, innovation teams and project-to-patent initiatives.</p>
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
                <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
              </div>
            </div>

            <div
              className="card interactive-card"
              onClick={() => setActiveRepo({ key: 'researchers', subKey: 'researchers_scholars', title: 'Research Scholars Directory Repository', desc: 'Research topics, supervisors and institutional support information.' })}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag">Scholars</span>
                <span className="count-badge">{getCount('researchers')} Files</span>
              </div>
              <h3>Research Scholars</h3>
              <p>Research topics, supervisors and institutional support information.</p>
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
                <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
              </div>
            </div>
          </div>
        )}

        {/* Panel 3: Publications */}
        {activeTab === 'publications' && (
          <div className="cards">
            <div
              className="card interactive-card"
              onClick={() => setActiveRepo({ key: 'publications', subKey: 'pub_journal', title: 'Journal Publications Repository', desc: 'Scopus, Web of Science and peer-reviewed journal research outputs.' })}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag">Journals</span>
                <span className="count-badge">{getCount('publications')} Files</span>
              </div>
              <h3>Journal Publications</h3>
              <p>Scopus, Web of Science and other peer-reviewed research outputs.</p>
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
                <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
              </div>
            </div>

            <div
              className="card interactive-card"
              onClick={() => setActiveRepo({ key: 'conference', subKey: 'pub_conf_paper', title: 'Conference Papers Repository', desc: 'International and national conference publications and proceedings.' })}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag">Conferences</span>
                <span className="count-badge">{getCount('conference')} Files</span>
              </div>
              <h3>Conference Papers</h3>
              <p>International and national conference publications and proceedings.</p>
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
                <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
              </div>
            </div>

            <div
              className="card interactive-card"
              onClick={() => setActiveRepo({ key: 'publications', subKey: 'pub_books', title: 'Books & Chapters Repository', desc: 'ISBN books, edited volumes and scholarly book chapters.' })}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag">Books</span>
                <span className="count-badge">{getCount('publications')} Files</span>
              </div>
              <h3>Books & Chapters</h3>
              <p>ISBN books, edited volumes and scholarly book chapters.</p>
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
                <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
              </div>
            </div>
          </div>
        )}

        {/* Panel 4: Research Support */}
        {activeTab === 'support' && (
          <div className="cards">
            <div
              className="card interactive-card"
              onClick={() => setActiveRepo({ key: 'research_support', subKey: 'supp_methodology', title: 'Research Methodology Support Repository', desc: 'Support for research design, literature review, methodology and academic writing.' })}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag">Methodology</span>
                <span className="count-badge">{getCount('research_support')} Files</span>
              </div>
              <h3>Research Methodology</h3>
              <p>Support for research design, literature review, methodology and academic writing.</p>
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
                <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
              </div>
            </div>

            <div
              className="card interactive-card"
              onClick={() => setActiveRepo({ key: 'research_support', subKey: 'supp_analytics', title: 'Data Analysis & HPC Repository', desc: 'Statistical and computational analysis workflows and high-performance computing allocations.' })}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag">Analytics</span>
                <span className="count-badge">{getCount('research_support')} Files</span>
              </div>
              <h3>Data Analysis</h3>
              <p>Statistical and computational analysis workflows for research projects.</p>
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
                <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
              </div>
            </div>

            <div
              className="card interactive-card"
              onClick={() => setActiveRepo({ key: 'research_support', subKey: 'supp_guidance', title: 'Publication Guidance Repository', desc: 'Manuscript preparation, journal selection and research dissemination support.' })}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="tag">Publication</span>
                <span className="count-badge">{getCount('research_support')} Files</span>
              </div>
              <h3>Publication Guidance</h3>
              <p>Manuscript preparation, journal selection and research dissemination support.</p>
              <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
                <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Universal Repository Modal for Research Section */}
      {activeRepo && (
        <RepositoryModal
          isOpen={!!activeRepo}
          onClose={() => setActiveRepo(null)}
          tabKey={activeRepo.key}
          subKey={activeRepo.subKey}
          title={activeRepo.title}
          desc={activeRepo.desc}
        />
      )}
    </section>
  );
};
