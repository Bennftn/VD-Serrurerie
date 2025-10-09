import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

function Footer({ navigateTo }) {
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
              <li><a href="#" onClick={() => navigateTo('accueil')}>Accueil</a></li>
              <li><a href="#" onClick={() => navigateTo('services')}>Services</a></li>
              <li><a href="#" onClick={() => navigateTo('galerie')}>Galerie</a></li>
              <li><a href="#" onClick={() => navigateTo('contact')}>Contact</a></li>
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