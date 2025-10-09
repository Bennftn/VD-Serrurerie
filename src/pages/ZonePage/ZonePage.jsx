import React from 'react';
import './ZonePage.css';

function ZonePage() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Zone d'Intervention</h2>
        <div className="zone-content">
          <p className="zone-main-text">
            VD Serrurerie intervient dans un rayon de <strong>100 km autour de la Seine-et-Marne</strong>
          </p>

          <div className="zone-details">
            <div className="zone-card">
              <h3>Déplacements</h3>
              <p>Oui, je me déplace sur toute la zone d'intervention</p>
            </div>

            <div className="zone-card">
              <h3>Frais de déplacement</h3>
              <p>Les frais de déplacement sont établis sur devis en fonction de la distance</p>
            </div>
          </div>

          <div className="zone-cta">
            <h3>Demandez votre devis gratuit</h3>
            <p>Contactez-moi pour connaître les modalités d'intervention dans votre secteur</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZonePage;