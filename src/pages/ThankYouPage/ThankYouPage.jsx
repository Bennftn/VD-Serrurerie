import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './ThankYouPage.css';

function ThankYouPage() {
  return (
    <section className="section thank-you-section">
      <Helmet>
        <title>Demande envoyée - VD Serrurerie</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container">
        <div className="thank-you-content">
          <CheckCircle size={80} className="success-icon" />
          <h1>Demande envoyée avec succès !</h1>
          <p className="thank-you-message">
            Merci pour votre demande de devis. J'ai bien reçu votre message et
            je vous recontacterais dans les <strong>plus brefs délais</strong> pour
            étudier votre projet.
          </p>

          <div className="next-steps">
            <h3>Que se passe-t-il maintenant ?</h3>
            <div className="steps-grid">
              <div className="step">
                <span className="step-number">1</span>
                <p>J'étudie votre demande</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <p>Je vous recontacte sous 24-48h</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <p>J'établis un devis personnalisé</p>
              </div>
            </div>
          </div>

          <div className="thank-you-actions">
            <Link to="/" className="cta-button">
              Retour à l'accueil
            </Link>
            <Link to="/realisations" className="secondary-button">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYouPage;