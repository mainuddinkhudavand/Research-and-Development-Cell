import React from 'react';

export const StatsCounter = () => {
  return (
    <div className="stats">
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat">
            <strong>250+</strong>
            <span>Faculty & Student Publications</span>
          </div>
          <div className="stat">
            <strong>18+</strong>
            <span>Patents Filed & Granted</span>
          </div>
          <div className="stat">
            <strong>₹1.2 Cr+</strong>
            <span>Research & Govt Grants</span>
          </div>
          <div className="stat">
            <strong>45+</strong>
            <span>Sponsored R&D Projects</span>
          </div>
          <div className="stat">
            <strong>12+</strong>
            <span>Active MOUs & MOVs</span>
          </div>
        </div>
      </div>
    </div>
  );
};
