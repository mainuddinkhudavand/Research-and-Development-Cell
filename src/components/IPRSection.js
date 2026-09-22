import React from 'react';
import { ArrowRight } from 'lucide-react';

export const IPRSection = () => {
  const steps = [
    'Idea',
    'Novelty Check',
    'Drafting',
    'Filing',
    'Publication',
    'Grant / Protection'
  ];

  return (
    <section id="ipr">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">03 — IPR & PATENTS</span>
            <h2>Protecting innovation.</h2>
          </div>
          <p className="kicker">
            A visible pathway from an original idea to a documented and protected intellectual asset.
          </p>
        </div>

        {/* 6-step flow with Arrow Show Marks */}
        <div
          className="flow"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '14px',
            marginTop: '20px'
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                padding: '14px 16px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--navy)',
                boxShadow: '0 2px 8px rgba(21, 34, 56, 0.04)',
                transition: 'transform 0.2s, border-color 0.2s'
              }}
            >
              <span
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'rgba(200, 137, 47, 0.15)',
                  color: 'var(--gold)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <ArrowRight size={14} />
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <div style={{ height: '25px' }}></div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>IPR Category</th>
                <th>What the R&D Center can showcase</th>
                <th>Status / Evidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--navy)' }}>Patents</td>
                <td>Published and granted patent portfolio</td>
                <td>Update with patent number & year</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--navy)' }}>Designs</td>
                <td>Registered industrial/design innovations</td>
                <td>Update with registration details</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--navy)' }}>Copyright</td>
                <td>Software, literary and creative research outputs</td>
                <td>Update with registration details</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--navy)' }}>Student Projects</td>
                <td>Project-to-IP conversion initiatives</td>
                <td>Ongoing / completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
