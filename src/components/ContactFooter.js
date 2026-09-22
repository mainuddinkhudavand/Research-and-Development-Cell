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
              Use the R&D Center as the first point of contact for research, innovation, IPR, projects and partnerships.
            </p>
          </div>

          <div className="contact" style={{ alignItems: 'start' }}>
            <div className="contact-box">
              <dl>
                <dt>Research & Development Center</dt>
                <dd>Tontadarya College of Engineering, Gadag – 582101, Karnataka</dd>

                <dt>Head - Research & Development</dt>
                <dd>Dr. Karthik S. Ajjampurshettar</dd>

                <dt>Head - Centre for Entrepreneurship Research and Innovation</dt>
                <dd>Dr. Deepa Katagi</dd>

                <dt>President - Institute’s Innovation Council</dt>
                <dd>Prof. Rekha Patil</dd>

                <dt>Vice President - Institute’s Innovation Council</dt>
                <dd>Prof. Ashok Patil</dd>

                <dt>R & D Students</dt>
                <dd style={{ lineHeight: '1.6' }}>
                  Sneha Belgumkar<br />
                  Arfa Ahmed<br />
                  Mohammed Khalid Kaladagi<br />
                  Shravankumar Doddamani<br />
                  Khushi Khatawate
                </dd>

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

            <div className="quick" style={{ alignSelf: 'start' }}>
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
                <img src={LOGO_EMBLEM} alt="R&D Center Logo" />
                <div className="footer-title">Research & Development Center · TCE Gadag</div>
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

          <div className="bottom" style={{ flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
              <span>© {new Date().getFullYear()} Research & Development Center · Tontadarya College of Engineering, Gadag</span>
              <span>Research · Innovation · IPR · Collaboration</span>
            </div>
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '8px', textAlign: 'center', color: '#b0b8c6', fontSize: '12px' }}>
              Designed and Developed by{' '}
              <a
                href="https://mainuddin-portfolio.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--gold2)', textDecoration: 'underline', fontWeight: 600 }}
              >
                Mainuddin Khudavand
              </a>
              , Pavan Goudar and Sneha Belgumkar
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
