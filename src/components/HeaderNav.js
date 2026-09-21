import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_EMBLEM } from '../assets/images';

export const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site">
      <div className={`nav wrap ${menuOpen ? 'open' : ''}`}>
        <a href="#hero" className="brand" onClick={closeMenu}>
          <div className="brand-mark">
            <img src={LOGO_EMBLEM} alt="Tontadarya College of Engineering logo" />
          </div>
          <div>
            <b>Research & Development Cell</b>
            <span>Tontadarya College of Engineering · Gadag</span>
          </div>
        </a>

        <button className="menu" onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav id="links">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#public-tabs" onClick={closeMenu} style={{ fontWeight: 'bold', color: 'var(--gold)' }}>R&D Repository</a>
          <a href="#ipr" onClick={closeMenu}>IPR & Patents</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#innovation" onClick={closeMenu}>Innovation</a>
          <a href="#collab" onClick={closeMenu}>Collaboration</a>
          <a href="#events" onClick={closeMenu}>Events</a>
          <a href="#resources" onClick={closeMenu}>Resources</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
};
