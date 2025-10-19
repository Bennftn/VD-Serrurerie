import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import './ContactPage.css';

function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    typeProjet: '',
    description: '',
    zone: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validation basique
    if (!formData.nom || !formData.prenom || !formData.telephone || !formData.email || !formData.typeProjet || !formData.description || !formData.zone) {
      setSubmitStatus({ type: 'error', message: 'Veuillez remplir tous les champs obligatoires.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '702b78c4-177b-434b-bccc-f733dde19f2f',
          name: `${formData.prenom} ${formData.nom}`,
          email: formData.email,
          phone: formData.telephone,
          subject: `Nouveau devis : ${formData.typeProjet}`,
          message: `
Type de projet : ${formData.typeProjet}
Zone : ${formData.zone}
Budget : ${formData.budget || 'Non spécifié'}

Description :
${formData.description}
          `
        })
      });

      const result = await response.json();

      if (result.success) {
        // Redirection vers la page de remerciement
        navigate('/merci');
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section">
      <Helmet>
        <title>Contact et Devis Gratuit Serrurerie - VD Serrurerie | Jouy-sur-Morin 77</title>
        <meta name="description" content="Contactez VD Serrurerie pour un devis gratuit et sans engagement. Formulaire en ligne, téléphone, email. Intervention rapide en Seine-et-Marne et 100km. ☎️ Réponse sous 24h" />
        <meta name="keywords" content="contact serrurerie 77, devis gratuit serrurerie, formulaire contact serrurier, serrurier Jouy-sur-Morin, Seine-et-Marne, téléphone serrurier, urgence serrurerie" />
        <link rel="canonical" href="https://vdserrurerie.com/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contactez VD Serrurerie - Devis Gratuit" />
        <meta property="og:description" content="Demandez votre devis gratuit. Intervention rapide en Seine-et-Marne." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vdserrurerie.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact VD Serrurerie",
            "description": "Formulaire de contact pour demander un devis de serrurerie",
            "url": "https://vdserrurerie.com/contact"
          })}
        </script>
      </Helmet>
      <div className="container">
        <h2 className="section-title">Demander un Devis</h2>
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h3>Formulaire de contact</h3>

            {submitStatus && (
              <div className={`alert alert-${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Nom *</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Prénom *</label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Téléphone *</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Type de projet *</label>
                <select
                  name="typeProjet"
                  value={formData.typeProjet}
                  onChange={handleFormChange}
                  required
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
                  required
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
                  required
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

              <button
                type="submit"
                className="cta-button submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Mes Coordonnées</h3>

            <div className="info-item">
              <Mail size={24} />
              <div>
                <strong>Email</strong>
                <p>vdserrurerie@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={24} />
              <div>
                <strong>Adresse</strong>
                <p>Jouy-sur-Morin<br />Seine-et-Marne</p>
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