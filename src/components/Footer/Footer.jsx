import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VD Serrurerie</h3>
            <p>Artisan passionné de ferronnerie d'art et de métallerie depuis 2019.</p>
          </div>

          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/galerie">Galerie</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>
              <Phone size={16} className="footer-icon" /> À venir
            </p>
            <p>
              <Mail size={16} className="footer-icon" /> À venir
            </p>
            <p>
              <MapPin size={16} className="footer-icon" /> Jouy-sur-Morin
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 VD Serrurerie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;