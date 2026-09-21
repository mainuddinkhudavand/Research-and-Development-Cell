import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Lock, LogOut, ChevronRight, FolderCheck } from 'lucide-react';
import { LOGO_EMBLEM } from '../assets/images';
import { useAdmin } from '../context/AdminContext';

export const HeaderNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAdminLoggedIn, logoutAdmin, setShowLoginModal } = useAdmin();

  // Prevent body scrolling when mobile sidebar drawer is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

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
          <a href="#contact">Contact</a>

          {isAdminLoggedIn ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginLeft: '10px' }}>
              <span className="admin-badge">
                <ShieldCheck size={12} /> Admin
              </span>
              <button className="admin-login-btn" onClick={logoutAdmin} title="Logout Admin" style={{ color: 'var(--navy)', borderColor: 'var(--line)' }}>
                <LogOut size={12} /> Logout
              </button>
            </div>
          ) : (
            <button
              className="admin-login-btn"
              onClick={() => setShowLoginModal(true)}
              style={{ background: 'var(--navy)', color: '#fff', borderColor: 'var(--navy)', marginLeft: '10px', padding: '5px 12px' }}
            >
              <Lock size={12} /> Admin Login
            </button>
          )}
        </nav>

        {/* Mobile Hamburger Toggle & Admin Icon */}
        <div className="mobile-actions">
          {isAdminLoggedIn ? (
            <span className="admin-badge" style={{ fontSize: '10px', padding: '3px 8px' }}>
              <ShieldCheck size={11} /> Admin
            </span>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              style={{
                background: 'var(--navy)',
                color: '#fff',
                border: 0,
                borderRadius: '4px',
                padding: '6px 10px',
                fontSize: '11px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Lock size={12} /> Login
            </button>
          )}
          <button className="menu mobile-menu-btn" onClick={toggleSidebar} aria-label="Toggle Navigation Menu">
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay & Slide Drawer */}
      {sidebarOpen && <div className="sidebar-backdrop" onClick={closeSidebar} />}
      <aside className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="brand-mark" style={{ width: '36px', height: '36px' }}>
              <img src={LOGO_EMBLEM} alt="TCE Logo" />
            </div>
            <div>
              <b style={{ fontSize: '15px', color: 'var(--navy)', fontFamily: 'Playfair Display, serif', display: 'block', lineHeight: '1.2' }}>
                R&D Cell Portal
              </b>
              <small style={{ color: 'var(--muted)', fontSize: '11px' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FolderCheck size={18} color="var(--gold)" />
              <span>R&D Public Repository</span>
            </div>
            <ChevronRight size={16} />
          </a>
          <a href="#about" onClick={closeSidebar} className="sidebar-item">
            <span>About R&D Cell</span>
            <ChevronRight size={14} color="var(--muted)" />
          </a>
          <a href="#research" onClick={closeSidebar} className="sidebar-item">
            <span>Research Thrust Areas</span>
            <ChevronRight size={14} color="var(--muted)" />
          </a>
          <a href="#ipr" onClick={closeSidebar} className="sidebar-item">
            <span>IPR & Patent Details</span>
            <ChevronRight size={14} color="var(--muted)" />
          </a>
          <a href="#projects" onClick={closeSidebar} className="sidebar-item">
            <span>Sponsored Projects</span>
            <ChevronRight size={14} color="var(--muted)" />
          </a>
          <a href="#innovation" onClick={closeSidebar} className="sidebar-item">
            <span>Innovation Ecosystem</span>
            <ChevronRight size={14} color="var(--muted)" />
          </a>
          <a href="#collab" onClick={closeSidebar} className="sidebar-item">
            <span>Collaborations & MOUs</span>
            <ChevronRight size={14} color="var(--muted)" />
          </a>
          <a href="#resources" onClick={closeSidebar} className="sidebar-item">
            <span>R&D Resources</span>
            <ChevronRight size={14} color="var(--muted)" />
          </a>
          <a href="#contact" onClick={closeSidebar} className="sidebar-item">
            <span>Contact R&D Cell</span>
            <ChevronRight size={14} color="var(--muted)" />
          </a>
        </nav>

        <div className="sidebar-footer">
          {isAdminLoggedIn ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="admin-badge" style={{ justifyContent: 'center', width: '100%', padding: '8px' }}>
                <ShieldCheck size={14} /> Admin Mode Active
              </div>
              <button
                className="btn ghost"
                onClick={() => {
                  logoutAdmin();
                  closeSidebar();
                }}
                style={{ width: '100%', justifyContent: 'center', fontSize: '13px', background: '#fff' }}
              >
                <LogOut size={14} /> Logout Admin
              </button>
            </div>
          ) : (
            <button
              className="btn primary"
              onClick={() => {
                setShowLoginModal(true);
                closeSidebar();
              }}
              style={{ width: '100%', justifyContent: 'center', fontSize: '13.5px', background: 'var(--navy)' }}
            >
              <Lock size={15} /> Admin Login & Upload Files
            </button>
          )}
        </div>
      </aside>
    </header>
  );
};
