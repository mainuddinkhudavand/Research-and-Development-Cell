import React from 'react';
import { ABOUT_EMBLEM } from '../assets/images';

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="num">01 — ABOUT R&D</span>
            <h2>From ideas to measurable impact.</h2>
          </div>
          <p className="kicker">
            The R&D Center provides an institutional platform for research, intellectual property, innovation, funded projects, consultancy and collaboration at Tontadarya College of Engineering, Gadag.
          </p>
        </div>

        <div className="grid2">
          <div>
            <h3>Fostering a Culture of Inquiry</h3>
            <p>
              Tontadarya College of Engineering (TCE), Gadag is committed to promoting quality research, interdisciplinary innovation and technology translation. The R&D Center serves faculty members, student innovators and industry partners through structured support across publications, patent disclosures, grant writing and institutional MOus.
            </p>
            <ul className="mission">
              <li>
                <b>01</b>
                <span>Encouraging peer-reviewed journal publications, books and conference proceedings.</span>
              </li>
              <li>
                <b>02</b>
                <span>Facilitating patent search, drafting, filing, publication and grant assistance.</span>
              </li>
              <li>
                <b>03</b>
                <span>Connecting academic research with industry consultancy, VGST, KSCST and national grant opportunities.</span>
              </li>
              <li>
                <b>04</b>
                <span>Building research synergy between CERI, IIC, incubation and student project translation.</span>
              </li>
            </ul>

            <div className="about-photo">
              <img src={ABOUT_EMBLEM} alt="Tontadarya College of Engineering emblem" />
              <p>
                Tontadarya College of Engineering, Gadag — home to the Research & Development Center and the Centre for Entrepreneurship Research and Innovation (CERI).
              </p>
            </div>
          </div>

          <div className="quote">
            <p>
              “Research becomes meaningful when an idea moves beyond the laboratory and creates knowledge, value and impact.”
            </p>
            <small>Research & Development Center · TCE, Gadag</small>
          </div>
        </div>
      </div>
    </section>
  );
};
