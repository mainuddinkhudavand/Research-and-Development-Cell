import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { BookOpen, Award, FileText, Calendar, Building2 } from 'lucide-react';

export const StatsCounter = () => {
  const { tabData } = useAdmin();

  const movCount = (tabData?.mov || []).length;
  const conferenceCount = (tabData?.conference || []).length;
  const iprCount = (tabData?.ipr || []).length;
  const publicationsCount =
    (tabData?.pub_faculty || []).length +
    (tabData?.pub_student || []).length +
    (tabData?.publications || []).length;
  const eventsCount = (tabData?.events || []).length;

  return (
    <div className="stats">
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
              <FileText size={22} color="var(--gold)" />
              <strong>{publicationsCount}</strong>
            </div>
            <span>Faculty & Student Publications</span>
          </div>

          <div className="stat">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
              <Award size={22} color="var(--gold)" />
              <strong>{iprCount}</strong>
            </div>
            <span>Patents Filed & Granted</span>
          </div>

          <div className="stat">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
              <BookOpen size={22} color="var(--gold)" />
              <strong>{conferenceCount}</strong>
            </div>
            <span>Conferences & Proceedings</span>
          </div>

          <div className="stat">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
              <Calendar size={22} color="var(--gold)" />
              <strong>{eventsCount}</strong>
            </div>
            <span>Research Events & FDPs</span>
          </div>

          <div className="stat">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
              <Building2 size={22} color="var(--gold)" />
              <strong>{movCount}</strong>
            </div>
            <span>Active MOus</span>
          </div>
        </div>
      </div>
    </div>
  );
};
