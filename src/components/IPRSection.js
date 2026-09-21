import React from 'react';

export const IPRSection = () => {
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

        {/* 6-step flow */}
        <div className="flow">
          <div>
            <span>01</span>Idea
          </div>
          <div>
            <span>02</span>Novelty Check
          </div>
          <div>
            <span>03</span>Drafting
          </div>
          <div>
            <span>04</span>Filing
          </div>
          <div>
            <span>05</span>Publication
          </div>
          <div>
            <span>06</span>Grant / Protection
          </div>
        </div>

        <div style={{ height: '25px' }}></div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>IPR Category</th>
                <th>What the R&D Cell can showcase</th>
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
