import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { RepositoryModal } from './RepositoryModal';
import { ChevronRight, FolderCheck } from 'lucide-react';

export const ResourcesSection = () => {
  const [activeRepo, setActiveRepo] = useState(null);
  const { tabData } = useAdmin();

  const getCount = (key) => (tabData[key] || []).length;

  return (
    <section id="resources">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">08 — RESOURCES</span>
            <h2>Policies, forms & research support.</h2>
          </div>
          <p className="kicker">
            Keep important documents, PDFs, Excel sheets, and policies easy to find for faculty, students, and collaborators. Click any card to open its repository.
          </p>
        </div>

        <div className="cards">
          <div
            className="card interactive-card"
            onClick={() =>
              setActiveRepo({
                key: 'resources',
                title: 'Institutional Research Policy Repository',
                desc: 'Official institutional research policies, rules, and governance manuals.'
              })
            }
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tag">Policy</span>
              <span className="count-badge">{getCount('resources')} Files</span>
            </div>
            <h3>Research Policy</h3>
            <p>Access and upload approved institutional research policy PDFs, rules, and manuals.</p>
            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
              <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
            </div>
          </div>

          <div
            className="card interactive-card"
            onClick={() =>
              setActiveRepo({
                key: 'resources',
                title: 'IPR Policy & Guidelines Repository',
                desc: 'IPR guidelines, patent filing procedure, and commercialization forms.'
              })
            }
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tag">IPR</span>
              <span className="count-badge">{getCount('resources')} Files</span>
            </div>
            <h3>IPR Policy & Guidelines</h3>
            <p>Upload and view IPR guidelines, patent application processes, and disclosure forms.</p>
            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
              <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
            </div>
          </div>

          <div
            className="card interactive-card"
            onClick={() =>
              setActiveRepo({
                key: 'resources',
                title: 'Seed Grant & Project Guidelines Repository',
                desc: 'Internal seed grant calls, budget templates, and project guidelines.'
              })
            }
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tag">Funding</span>
              <span className="count-badge">{getCount('resources')} Files</span>
            </div>
            <h3>Seed Grant / Project Guidelines</h3>
            <p>Upload funding calls, internal seed grant rules, budget templates, and guidelines.</p>
            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>
              <FolderCheck size={16} /> Open Repository <ChevronRight size={14} />
            </div>
          </div>

          <div
            className="card interactive-card"
            onClick={() =>
              setActiveRepo({
                key: 'resources',
                title: 'Research Forms & Templates Repository',
                desc: 'Proposal submission, patent disclosure, consultancy and collaboration forms.'
              })
            }
            style={{ cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tag">Forms</span>
              <span className="count-badge">{getCount('resources')} Files</span>
            </div>
            <h3>Research Forms</h3>
            <p>Proposal submission, patent disclosure, consultancy, and collaboration forms.</p>
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
          title={activeRepo.title}
          desc={activeRepo.desc}
        />
      )}
    </section>
  );
};
