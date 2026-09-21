import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Lock, ExternalLink } from 'lucide-react';
import { LOGO_EMBLEM } from '../assets/images';
import { useAdmin } from '../context/AdminContext';

export const HeaderNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAdminLoggedIn, logoutAdmin, setShowLoginModal } = useAdmin();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header className="site">
      <div className="nav wrap">
        <a href="#hero" className="brand" onClick={closeSidebar}>
          <div className="brand-mark">
            <img src={LOGO_EMBLEM} alt="Tontadarya College of Engineering logo" />
          </div>
          <div>
            <b>Research & Development Cell</b>
            <span>Tontadarya College of Engineering · Gadag</span>
          </div>
        </a>

        {/* Desktop Navbar */}
        <nav id="links" className="desktop-links">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#public-tabs" style={{ fontWeight: 'bold', color: 'var(--gold)' }}>
            R&D Repository
          </a>
          <a href="#ipr">IPR & Patents</a>
          <a href="#projects">Projects</a>
          <a href="#innovation">Innovation</a>
          <a href="#collab">Collaboration</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button className="menu mobile-menu-btn" onClick={toggleSidebar} aria-label="Toggle Navigation Menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay & Drawer */}
      {sidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar} />}
      <aside className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="brand-mark" style={{ width: '38px', height: '38px' }}>
              <img src={LOGO_EMBLEM} alt="TCE Logo" />
            </div>
            <div>
              <b style={{ fontSize: '15px', color: 'var(--navy)', fontFamily: 'Playfair Display, serif' }}>
                R&D Cell Portal
              </b>
              <small style={{ color: 'var(--muted)', display: 'block', fontSize: '11px' }}>
                TCE Gadag
              </small>
            </div>
          </div>
          <button className="close-btn" onClick={closeSidebar} aria-label="Close Sidebar">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <a href="#public-tabs" onClick={closeSidebar} className="sidebar-item featured">
            <span>R&D Public Repository</span>
          </a>
          <a href="#about" onClick={closeSidebar} className="sidebar-item">About R&D Cell</a>
          <a href="#research" onClick={closeSidebar} className="sidebar-item">Research Thrust Areas</a>
          <a href="#ipr" onClick={closeSidebar} className="sidebar-item">IPR & Patent Details</a>
          <a href="#projects" onClick={closeSidebar} className="sidebar-item">Sponsored Projects</a>
          <a href="#innovation" onClick={closeSidebar} className="sidebar-item">Innovation & Ecosystem</a>
          <a href="#collab" onClick={closeSidebar} className="sidebar-item">Collaborations & MOUs</a>
          <a href="#resources" onClick={closeSidebar} className="sidebar-item">R&D Resources</a>
          <a href="#contact" onClick={closeSidebar} className="sidebar-item">Contact R&D Cell</a>
        </nav>

        <div className="sidebar-footer">
          {isAdminLoggedIn ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="admin-badge" style={{ justifyContent: 'center', width: '100%', padding: '6px' }}>
                <ShieldCheck size={14} /> Admin Mode Active
              </span>
              <button
                className="btn ghost"
                onClick={() => {
                  logoutAdmin();
                  closeSidebar();
                }}
                style={{ width: '100%', justifyContent: 'center', fontSize: '12px' }}
              >
                Logout Admin
              </button>
            </div>
          ) : (
            <button
              className="btn primary"
              onClick={() => {
                setShowLoginModal(true);
                closeSidebar();
              }}
              style={{ width: '100%', justifyContent: 'center', fontSize: '13px' }}
            >
              <Lock size={14} /> Admin Login
            </button>
          )}
        </div>
      </aside>
    </header>
  );
};
