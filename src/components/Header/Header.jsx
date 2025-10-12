import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <NavLink to="/" className="logo" onClick={closeMobileMenu}>
            VD Serrurerie
          </NavLink>
          <nav className="nav-desktop">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/a-propos"
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/galerie"
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  Galerie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/zone"
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  Zone
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-menu">
            <ul>
              <li><NavLink to="/" onClick={closeMobileMenu}>Accueil</NavLink></li>
              <li><NavLink to="/a-propos" onClick={closeMobileMenu}>À propos</NavLink></li>
              <li><NavLink to="/services" onClick={closeMobileMenu}>Services</NavLink></li>
              <li><NavLink to="/galerie" onClick={closeMobileMenu}>Galerie</NavLink></li>
              <li><NavLink to="/zone" onClick={closeMobileMenu}>Zone</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;