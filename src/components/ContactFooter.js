import React from 'react';
import { LOGO_EMBLEM } from '../assets/images';

export const ContactFooter = () => {
  return (
    <>
      <section id="contact">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="num">09 — CONTACT</span>
              <h2>Let's collaborate.</h2>
            </div>
            <p className="kicker">
              Use the R&D Cell as the first point of contact for research, innovation, IPR, projects and partnerships.
            </p>
          </div>

          <div className="contact">
            <div className="contact-box">
              <dl>
                <dt>Research & Development Cell</dt>
                <dd>Tontadarya College of Engineering, Gadag – 582101, Karnataka</dd>

                <dt>Head — Research & Development</dt>
                <dd>Dr. Karthik S. Ajjampurshettar</dd>

                <dt>Email</dt>
                <dd>
                  <a href="mailto:startupstce@gmail.com" style={{ color: 'var(--navy)', fontWeight: 600 }}>
                    startupstce@gmail.com
                  </a>
                </dd>

                <dt>Website</dt>
                <dd>
                  <a href="https://www.tce.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navy)', fontWeight: 600 }}>
                    www.tce.ac.in
                  </a>
                </dd>
              </dl>
            </div>

            <div className="quick">
              <a href="mailto:startupstce@gmail.com">
                Submit a Research Enquiry <span>→</span>
              </a>
              <a href="mailto:startupstce@gmail.com">
                Propose Industry Collaboration <span>→</span>
              </a>
              <a href="mailto:startupstce@gmail.com">
                Discuss IPR / Patent Support <span>→</span>
              </a>
              <a href="mailto:startupstce@gmail.com">
                Explore Research Partnership <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <img src={LOGO_EMBLEM} alt="R&D Cell Logo" />
                <div className="footer-title">Research & Development Cell · TCE Gadag</div>
              </div>
              <p>
                Empowering innovative technical research, academic excellence, intellectual property creation, and industry partnerships at Tontadarya College of Engineering, Gadag.
              </p>
            </div>

            <div>
              <h4 style={{ color: 'var(--gold2)', marginTop: 0 }}>Quick Links</h4>
              <a href="#about">About R&D</a>
              <a href="#research">Research Ecosystem</a>
              <a href="#public-tabs">R&D Repository</a>
              <a href="#ipr">IPR & Patents</a>
              <a href="#projects">Projects & Funding</a>
              <a href="#innovation">Innovation & CERI</a>
              <a href="#collab">Collaboration</a>
              <a href="#resources">Resources & Policies</a>
            </div>

            <div>
              <h4 style={{ color: 'var(--gold2)', marginTop: 0 }}>Institutional Links</h4>
              <a href="https://www.tce.ac.in" target="_blank" rel="noopener noreferrer">TCE Main Website</a>
              <a href="https://vtu.ac.in/" target="_blank" rel="noopener noreferrer">VTU Belagavi</a>
              <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer">IP India Patent Office</a>
              <a href="#contact">Contact R&D Head</a>
            </div>
          </div>

          <div className="bottom">
            <span>© {new Date().getFullYear()} Research & Development Cell · Tontadarya College of Engineering, Gadag</span>
            <span>Research · Innovation · IPR · Collaboration</span>
          </div>
        </div>
      </footer>
    </>
  );
};
