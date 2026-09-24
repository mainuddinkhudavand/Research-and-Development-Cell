import React, { useState } from 'react';
import { LOGO_EMBLEM } from '../assets/images';
import { useAdmin } from '../context/AdminContext';
import { Edit2, Plus, Trash2, X, Lock } from 'lucide-react';

export const ContactFooter = () => {
  const {
    isAdminLoggedIn,
    studentCoordinators,
    saveStudentCoordinators,
    setShowLoginModal
  } = useAdmin();

  const [showEditModal, setShowEditModal] = useState(false);
  const [editedList, setEditedList] = useState([]);

  const handleOpenEdit = () => {
    if (!isAdminLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setEditedList([...(studentCoordinators || [])]);
    setShowEditModal(true);
  };

  const handleSave = () => {
    const cleanList = editedList.map((n) => n.trim()).filter(Boolean);
    saveStudentCoordinators(cleanList);
    setShowEditModal(false);
  };

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

                <dt style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <span>R & D Student Coordinators</span>
                  {isAdminLoggedIn ? (
                    <button
                      onClick={handleOpenEdit}
                      style={{
                        background: 'rgba(200, 137, 47, 0.15)',
                        border: '1px solid var(--gold)',
                        color: 'var(--navy)',
                        borderRadius: '4px',
                        padding: '2px 8px',
                        fontSize: '12px',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer'
                      }}
                      title="Edit Student Coordinators"
                    >
                      <Edit2 size={12} /> Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowLoginModal(true)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--muted)',
                        fontSize: '11px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer'
                      }}
                      title="Admin Login to Edit"
                    >
                      <Lock size={11} /> Admin Edit
                    </button>
                  )}
                </dt>
                <dd style={{ lineHeight: '1.6' }}>
                  {(studentCoordinators || []).map((name, idx) => (
                    <React.Fragment key={idx}>
                      {name}
                      {idx < studentCoordinators.length - 1 && <br />}
                    </React.Fragment>
                  ))}
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
      {showEditModal && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', width: '92%' }}>
            <div className="modal-header">
              <h3 style={{ color: 'var(--navy)', margin: 0, fontSize: '18px' }}>Edit Student Coordinators</h3>
              <button className="close-btn" onClick={() => setShowEditModal(false)}>
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '16px 0' }}>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: 0, marginBottom: '14px' }}>
                Manage the names of R&D Student Coordinators displayed in the contact section.
              </p>

              {editedList.map((name, index) => (
                <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '10px', alignItems: 'center' }}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      const newList = [...editedList];
                      newList[index] = e.target.value;
                      setEditedList(newList);
                    }}
                    placeholder={`Coordinator Name #${index + 1}`}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--line)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newList = editedList.filter((_, i) => i !== index);
                      setEditedList(newList);
                    }}
                    style={{
                      background: '#fee2e2',
                      border: '1px solid #fca5a5',
                      color: '#dc2626',
                      padding: '8px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'grid',
                      placeItems: 'center'
                    }}
                    title="Remove Coordinator"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => setEditedList([...editedList, ''])}
                style={{
                  background: 'var(--cream)',
                  border: '1px dashed var(--gold)',
                  color: 'var(--navy)',
                  width: '100%',
                  padding: '9px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  marginTop: '10px',
                  cursor: 'pointer'
                }}
              >
                <Plus size={16} /> Add Coordinator Name
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '8px', borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                style={{
                  background: '#f1f5f9',
                  color: '#475569',
                  border: '1px solid #cbd5e1',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                style={{
                  background: 'var(--navy)',
                  color: 'var(--gold2)',
                  border: '1px solid var(--navy)',
                  padding: '8px 18px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
