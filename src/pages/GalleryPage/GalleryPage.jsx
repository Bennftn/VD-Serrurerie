import React from 'react';
import { Helmet } from 'react-helmet-async';
import './GalleryPage.css';

function GalleryPage() {
  const projects = [
    { title: "Portail en fer forgé", category: "Portails" },
    { title: "Garde-corps balcon", category: "Garde-corps" },
    { title: "Grille de fenêtre", category: "Grilles" },
    { title: "Rampe d'escalier", category: "Rampes" },
    { title: "Portail coulissant", category: "Portails" },
    { title: "Pergola métallique", category: "Structures" }
  ];

  return (
    <section className="section">
      <Helmet>
        <title>Galerie Photos - Réalisations Portails Fer Forgé | VD Serrurerie Seine-et-Marne</title>
        <meta name="description" content="Découvrez notre galerie de réalisations en ferronnerie d'art : portails en fer forgé, garde-corps, grilles décoratives, rampes d'escalier, pergolas. Exemples de nos créations artisanales en Seine-et-Marne. Photos de nos projets à Jouy-sur-Morin et alentours." />
        <meta name="keywords" content="galerie ferronnerie, réalisations portails, fer forgé, garde-corps photos, grilles décoratives, photos réalisations serrurerie, Seine-et-Marne, Jouy-sur-Morin, exemples portails, portfolio ferronnerie" />
        <link rel="canonical" href="https://votre-site.com/galerie" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:title" content="Galerie de Réalisations - VD Serrurerie" />
        <meta property="og:description" content="Découvrez nos créations en fer forgé : portails, garde-corps, grilles..." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://votre-site.com/#/galerie" />
        <meta property="og:image" content="https://votre-site.com/images/photo-portail-1.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galerie VD Serrurerie" />
        <meta name="twitter:description" content="Nos plus belles créations en ferronnerie d'art" />
        <meta name="twitter:image" content="https://votre-site.com/images/photo-portail-1.jpg" />
        {/* Schema.org - ImageGallery */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Galerie de réalisations VD Serrurerie",
            "description": "Galerie photos de nos réalisations en ferronnerie d'art et métallerie",
            "url": "https://votre-site.com/#/galerie",
            "about": {
              "@type": "Thing",
              "name": "Ferronnerie d'art et métallerie"
            },
            "associatedMedia": projects.map((project, index) => ({
              "@type": "ImageObject",
              "name": project.title,
              "description": project.description,
              "contentUrl": `https://votre-site.com/images/projet-${index + 1}.jpg`
            }))
          })}
        </script>
        {/* Schema.org - CreativeWork */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Portfolio VD Serrurerie",
            "description": "Collection de nos réalisations en ferronnerie",
            "creator": {
              "@type": "LocalBusiness",
              "name": "VD Serrurerie",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jouy-sur-Morin",
                "addressRegion": "Seine-et-Marne",
                "addressCountry": "FR"
              }
            },
            "genre": ["Ferronnerie d'art", "Métallerie", "Serrurerie"],
            "workExample": projects.map(project => ({
              "@type": "CreativeWork",
              "name": project.title,
              "description": project.description,
              "genre": project.category
            }))
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
                "name": "Galerie",
                "item": "https://votre-site.com/#/galerie"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="container">
        <h2 className="section-title">Mes Réalisations</h2>
        <p className="gallery-intro">
          Découvrez quelques-unes de mes créations en fer forgé
        </p>
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-placeholder">
                [Photo à venir]
              </div>
              <div className="gallery-info">
                <h3>{project.title}</h3>
                <p className="gallery-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;