import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './ContactPage.css';

function ContactPage({ formData, handleFormChange, handleSubmit }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Demander un Devis</h2>
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h3>Formulaire de contact</h3>
            <div className="contact-form">
              <div className="form-group">
                <label>Nom *</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleFormChange}
                />
              </div>

              <div className="form-group">
                <label>Prénom *</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleFormChange}
                />
              </div>

              <div className="form-group">
                <label>Téléphone *</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleFormChange}
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>

              <div className="form-group">
                <label>Type de projet *</label>
                <select
                  name="typeProjet"
                  value={formData.typeProjet}
                  onChange={handleFormChange}
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="portail">Portail</option>
                  <option value="ouverture">Ouverture de porte</option>
                  <option value="cloture">Clôture</option>
                  <option value="garde-corps">Garde-corps</option>
                  <option value="grille">Grille de protection</option>
                  <option value="rampe">Rampe d'escalier</option>
                  <option value="pergola">Pergola/Structure</option>
                  <option value="automatisation">Automatisation</option>
                  <option value="reparation">Réparation</option>
                  <option value="restauration">Restauration</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label>Description du projet *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label>Zone géographique *</label>
                <input
                  type="text"
                  name="zone"
                  value={formData.zone}
                  onChange={handleFormChange}
                  placeholder="Ville ou code postal"
                />
              </div>

              <div className="form-group">
                <label>Budget approximatif (optionnel)</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleFormChange}
                  placeholder="Votre budget estimé"
                />
              </div>

              <button onClick={handleSubmit} className="cta-button submit-button">
                Envoyer ma demande
              </button>
            </div>
          </div>

          <div className="contact-info">
            <h3>Mes Coordonnées</h3>

            <div className="info-item">
              <Phone size={24} />
              <div>
                <strong>Téléphone</strong>
                <p>À venir</p>
              </div>
            </div>

            <div className="info-item">
              <Mail size={24} />
              <div>
                <strong>Email</strong>
                <p>À venir</p>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={24} />
              <div>
                <strong>Adresse</strong>
                <p>Jouy-sur-Morin<br />Seine-et-Marne</p>
              </div>
            </div>

            <div className="info-item">
              <Clock size={24} />
              <div>
                <strong>Horaires</strong>
                <p>À définir</p>
              </div>
            </div>

            <div className="certifications">
              <h4>Certifications</h4>
              <p>✓ Formation professionnelle serrurerie 2022</p>
              <p>✓ Assurance professionnelle</p>
              <p>✓ Garanties sur les travaux</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;