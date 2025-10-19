import React from 'react';
import { Helmet } from 'react-helmet-async';
import './PolitiqueConfidentialite.css';

function PolitiqueConfidentialite() {
  return (
    <section className="section legal-page">
      <Helmet>
        <title>Politique de Confidentialité - VD Serrurerie</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container">
        <h1 className="section-title">Politique de Confidentialité</h1>
        <div className="legal-content">
          <div className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              VD Serrurerie accorde une grande importance à la protection de vos données personnelles.
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons
              vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Responsable du traitement</h2>
            <p><strong>Raison sociale :</strong> VD Serrurerie</p>
            <p><strong>Adresse :</strong> 13 Rue des Charmes, 77320, Jouy-sur-Morin</p>
            <p><strong>Email :</strong> vdserrurerie@gmail.com</p>
          </div>

          <div className="legal-section">
            <h2>3. Données collectées</h2>
            <p>Nous collectons les données personnelles suivantes via notre formulaire de contact :</p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Zone géographique</li>
              <li>Type de projet</li>
              <li>Description du projet</li>
              <li>Budget approximatif (optionnel)</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>4. Finalité du traitement</h2>
            <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
            <ul>
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Assurer le suivi de votre projet</li>
              <li>Vous recontacter pour établir un devis personnalisé</li>
              <li>Améliorer la qualité de nos services</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Base légale du traitement</h2>
            <p>
              Le traitement de vos données repose sur votre consentement, que vous nous donnez en
              remplissant et en soumettant le formulaire de contact.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Destinataires des données</h2>
            <p>
              Vos données personnelles sont destinées uniquement à VD Serrurerie. Nous ne vendons,
              ne louons ni ne partageons vos données avec des tiers, sauf obligation légale.
            </p>
            <p>
              Les données du formulaire de contact sont transmises via le service Web3Forms
              (prestataire de traitement de formulaires) qui agit en qualité de sous-traitant.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation
              de la finalité pour laquelle elles ont été collectées, soit :
            </p>
            <ul>
              <li>3 ans à compter de votre dernier contact avec nous</li>
              <li>Ou jusqu'à ce que vous exerciez votre droit de suppression</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>8. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
              <li><strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <strong>vdserrurerie@gmail.com</strong>
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données personnelles contre toute destruction, perte, altération, divulgation
              ou accès non autorisé.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Cookies</h2>
            <p>
              Notre site n'utilise pas de cookies de suivi ou de publicité. Seuls des cookies techniques
              strictement nécessaires au fonctionnement du site peuvent être utilisés.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Réclamation</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation
              auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <p>
              <strong>CNIL</strong><br />
              3 Place de Fontenoy - TSA 80715<br />
              75334 PARIS CEDEX 07<br />
              Téléphone : 01 53 73 22 22<br />
              Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>
          </div>

          <div className="legal-section">
            <h2>12. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
            </p>
          </div>

          <div className="legal-section legal-updated">
            <p><em>Dernière mise à jour : 19/10/2025</em></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PolitiqueConfidentialite;