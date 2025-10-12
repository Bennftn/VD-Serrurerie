import React from 'react';
import { Helmet } from 'react-helmet-async';
import './AboutPage.css';

function AboutPage() {
  return (
    <section className="section">
      <Helmet>
        <title>À Propos - Artisan Serrurier depuis 2019 | VD Serrurerie Jouy-sur-Morin</title>
        <meta name="description" content="Découvrez VD Serrurerie : artisan serrurier autodidacte et passionné d'art depuis 2019. Formation professionnelle 2022. Fer forgé à chaud, soudure, tournage, fraisage, rénovation. Basé à Jouy-sur-Morin en Seine-et-Marne." />
        <meta name="keywords" content="artisan serrurier, ferronnerie art, fer forgé, Jouy-sur-Morin, Seine-et-Marne, formation serrurerie, artisan local, serrurier qualifié, ferronnerie traditionnelle, métallerie 77" />
        <link rel="canonical" href="https://votre-site.com/a-propos" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:title" content="À Propos de VD Serrurerie - Artisan Passionné depuis 2019" />
        <meta property="og:description" content="Artisan serrurier autodidacte et passionné. 15 ans d'expérience. Formation professionnelle 2022." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://votre-site.com/a-propos" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="À Propos de VD Serrurerie" />
        <meta name="twitter:description" content="Artisan serrurier depuis 2019 en Seine-et-Marne" />
        {/* Schema.org - About Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "À Propos de VD Serrurerie",
            "description": "Histoire et expertise de VD Serrurerie",
            "url": "https://votre-site.com/a-propos",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "VD Serrurerie",
              "foundingDate": "2019",
              "description": "Artisan serrurier spécialisé en ferronnerie d'art et métallerie",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jouy-sur-Morin",
                "addressRegion": "Seine-et-Marne",
                "postalCode": "77320",
                "addressCountry": "FR"
              }
            }
          })}
        </script>
        {/* Schema.org - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://votre-site.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "À Propos",
                "item": "https://votre-site.com/a-propos"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="container">
        <h2 className="section-title">À propos de VD Serrurerie</h2>
        <div className="about-content">
          <div className="about-section">
            <h3>Mon Histoire</h3>
            <p>
              Autodidacte et passionné d'art, après un parcours professionnel en entreprise depuis
              15 ans en tant que serrurier et après plusieurs jolies réalisations, j'ai décidé de
              voler de mes propres ailes en créant mon entreprise en 2019.
            </p>
          </div>

          <div className="about-section">
            <h3>Expérience et Qualification</h3>
            <p>
              J'ai suivi la formation technique réservée aux professionnels de la serrurerie,
              les 28 et 29 juin 2022. Cette formation a pour objectifs la connaissance des serrures,
              le dépannage et les techniques d'ouvertures.
            </p>
          </div>

          <div className="about-section">
            <h3>Savoir-faire</h3>
            <p>Mes compétences techniques incluent :</p>
            <ul>
              <li>Fer forgé à chaud</li>
              <li>Soudure professionnelle</li>
              <li>Tournage et fraisage</li>
              <li>Rénovation d'ancien</li>
            </ul>
          </div>

          <div className="about-section">
            <h3>Mes Valeurs</h3>
            <p>Je place au cœur de mon travail :</p>
            <ul>
              <li>Un travail soigné et minutieux</li>
              <li>La satisfaction de ma clientèle</li>
              <li>La qualité artisanale</li>
              <li>La durabilité de mes réalisations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;