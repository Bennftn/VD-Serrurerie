import React from 'react';
import './ZonePage.css';

function ZonePage() {
  return (
    <section className="section">
      <Helmet>
        <title>Zone d'Intervention Serrurerie - 100km Seine-et-Marne | VD Serrurerie</title>
        <meta name="description" content="VD Serrurerie intervient dans un rayon de 100km autour de Jouy-sur-Morin en Seine-et-Marne : Meaux, Coulommiers, Provins, Melun, La Ferté-Gaucher. Frais de déplacement sur devis." />
        <meta name="keywords" content="zone intervention serrurerie, serrurier Seine-et-Marne, Meaux, Coulommiers, Provins, Melun, 77, déplacement serrurier, intervention serrurerie Île-de-France" />
        <link rel="canonical" href="https://votre-site.com/zone" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zone d'Intervention - VD Serrurerie" />
        <meta property="og:description" content="Intervention dans un rayon de 100km en Seine-et-Marne et Île-de-France" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://votre-site.com/zone" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Services de serrurerie et ferronnerie",
            "provider": {
              "@type": "LocalBusiness",
              "name": "VD Serrurerie",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jouy-sur-Morin",
                "addressRegion": "Seine-et-Marne",
                "postalCode": "77320",
                "addressCountry": "FR"
              }
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "48.7968",
                "longitude": "3.2537"
              },
              "geoRadius": "100000"
            }
          })}
        </script>
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
                "name": "Zone d'Intervention",
                "item": "https://votre-site.com/zone"
              }
            ]
          })}
        </script>
      </Helmet>
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