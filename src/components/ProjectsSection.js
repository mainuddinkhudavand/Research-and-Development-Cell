import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { RepositoryModal } from './RepositoryModal';
import { ChevronRight, FolderCheck } from 'lucide-react';

export const ProjectsSection = () => {
  const [activeRepo, setActiveRepo] = useState(null);
  const { tabData } = useAdmin();

  const getCount = (key) => (tabData[key] || []).length;

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">04 — PROJECTS & FUNDING</span>
            <h2>Research that solves real problems.</h2>
          </div>
          <p className="kicker">
            Showcase sponsored research, consultancy, industry projects and completed outcomes in one transparent directory. Click any card to open its repository and manage attached documents, Excel sheets, and images.
          </p>
        </div>

        <div className="cards">
          <div
            className="card interactive-card"
            onClick={() =>
              setActiveRepo({
                key: 'real_problems',
                subKey: 'proj_funded',
                title: 'Sponsored Funded Projects Repository',
                desc: 'Government and agency-supported research projects, investigators, funding details, and reports.'
              })
            }
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tag">Sponsored Research</span>
              <span className="count-badge">{getCount('real_problems')} Files</span>
            </div>
            <h3>Funded Projects</h3>
            <p>Government and agency-supported research projects, investigators, funding, and outcomes.</p>
            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
              <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
            </div>
          </div>

          <div
            className="card interactive-card"
            onClick={() =>
              setActiveRepo({
                key: 'real_problems',
                subKey: 'proj_consultancy',
                title: 'Industry Consultancy Projects Repository',
                desc: 'Industry-facing engineering studies, testing reports, design, and technical consultancy records.'
              })
            }
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tag">Industry</span>
              <span className="count-badge">{getCount('real_problems')} Files</span>
            </div>
            <h3>Consultancy Projects</h3>
            <p>Industry-facing engineering studies, testing, design, and technical consultancy.</p>
            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
              <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
            </div>
          </div>

          <div
            className="card interactive-card"
            onClick={() =>
              setActiveRepo({
                key: 'real_problems',
                subKey: 'proj_major',
                title: 'Student Major Projects Repository',
                desc: 'High-potential student projects selected for research, innovation, and IPR development.'
              })
            }
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tag">Students</span>
              <span className="count-badge">{getCount('real_problems')} Files</span>
            </div>
            <h3>Major Projects</h3>
            <p>High-potential student projects selected for research, innovation, and IPR development.</p>
            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
              <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
            </div>
          </div>
        </div>
      </div>

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
