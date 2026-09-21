import React from 'react';
import { ArrowRight, Award, Users } from 'lucide-react';
import { HERO_ART_IMG } from '../assets/images';

export const Hero = () => {
  return (
    <section id="hero" className="hero wrap">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">
            <span>Research · Innovation · IPR · Collaboration · Impact</span>
            <i></i>
          </div>
          <h1>
            Research. <em>Innovate.</em>
            <br />
            Collaborate. Impact.
          </h1>
          <p className="lede">
            Building a culture of research and innovation at Tontadarya College of Engineering through publications, intellectual property, sponsored projects and meaningful industry–academia partnerships.
          </p>
          <div className="actions">
            <a className="btn primary" href="#public-tabs">
              Explore R&D Repository <ArrowRight size={15} />
            </a>
            <a className="btn ghost" href="#ipr">
              <Award size={15} /> View IPR & Patents
            </a>
            <a className="btn ghost" href="#mov">
              <Users size={15} /> MOUs & Collaborations
            </a>
          </div>
        </div>
        <div className="hero-art">
          <img src={HERO_ART_IMG} alt="TCE R&D Cell Showcase" />
        </div>
      </div>
    </section>
  );
};
