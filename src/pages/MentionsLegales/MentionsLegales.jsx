import React from 'react';
import { Helmet } from 'react-helmet-async';
import './MentionsLegales.css';

function MentionsLegales() {
  return (
    <section className="section legal-page">
      <Helmet>
        <title>Mentions Légales - VD Serrurerie</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container">
        <h1 className="section-title">Mentions Légales</h1>
        <div className="legal-content">
          <div className="legal-section">
            <h2>1. Informations légales</h2>
            <p><strong>Raison sociale :</strong> VD Serrurerie</p>
            <p><strong>Forme juridique :</strong> Société à responsabilité limitée</p>
            <p><strong>SIRET :</strong> 91907570500013</p>
            <p><strong>Numéro TVA intracommunautaire :</strong> FR90919075705</p>
            <p><strong>Adresse du siège social :</strong><br />
              13 Rue des charmes<br />
              77320, Jouy-sur-Morin
            </p>
            <p><strong>Email :</strong> vdserrurerie@gmail.com</p>
          </div>

          <div className="legal-section">
            <h2>2. Responsable de publication</h2>
            <p><strong>Directeur de publication :</strong> Vincent DELONG</p>
            <p><strong>Contact :</strong> vdserrurerie@gmail.com</p>
          </div>

          <div className="legal-section">
            <h2>3. Hébergement du site</h2>
            <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
            <p><strong>Adresse :</strong><br />
              44 Montgomery Street, Suite 300<br />
              San Francisco, CA 94104<br />
              États-Unis
            </p>
            <p><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">www.netlify.com</a></p>
          </div>

          <div className="legal-section">
            <h2>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.)
              est la propriété exclusive de VD Serrurerie, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou
              partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
              sauf autorisation écrite préalable de VD Serrurerie.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. Données personnelles</h2>
            <p>
              Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé
              par VD Serrurerie pour la gestion des demandes de contact et de devis.
            </p>
            <p>
              Conformément à la loi « informatique et libertés » et au RGPD, vous pouvez exercer votre
              droit d'accès aux données vous concernant et les faire rectifier en contactant : [EMAIL]
            </p>
            <p>
              Pour plus d'informations, consultez notre{' '}
              <a href="/politique-confidentialite">Politique de confidentialité</a>.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de suivi ou de publicité. Seuls des cookies techniques
              nécessaires au bon fonctionnement du site peuvent être utilisés.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d'autres sites. VD Serrurerie n'exerce aucun contrôle
              sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Litiges</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à
              défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément
              aux règles de compétence en vigueur.
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

export default MentionsLegales;