import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

function Header({ currentPage, navigateTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">VD Serrurerie</div>
          
          <nav className="nav-desktop">
            <ul>
              <li>
                <a 
                  href="#" 
                  className={currentPage === 'accueil' ? 'active' : ''} 
                  onClick={() => handleNavigation('accueil')}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={currentPage === 'apropos' ? 'active' : ''} 
                  onClick={() => handleNavigation('apropos')}
                >
                  À propos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={currentPage === 'services' ? 'active' : ''} 
                  onClick={() => handleNavigation('services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={currentPage === 'galerie' ? 'active' : ''} 
                  onClick={() => handleNavigation('galerie')}
                >
                  Galerie
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={currentPage === 'zone' ? 'active' : ''} 
                  onClick={() => handleNavigation('zone')}
                >
                  Zone
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className={currentPage === 'contact' ? 'active' : ''} 
                  onClick={() => handleNavigation('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-menu">
            <ul>
              <li><a href="#" onClick={() => handleNavigation('accueil')}>Accueil</a></li>
              <li><a href="#" onClick={() => handleNavigation('apropos')}>À propos</a></li>
              <li><a href="#" onClick={() => handleNavigation('services')}>Services</a></li>
              <li><a href="#" onClick={() => handleNavigation('galerie')}>Galerie</a></li>
              <li><a href="#" onClick={() => handleNavigation('zone')}>Zone</a></li>
              <li><a href="#" onClick={() => handleNavigation('contact')}>Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;