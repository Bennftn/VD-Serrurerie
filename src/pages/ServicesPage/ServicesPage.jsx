import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ServicesPage.css';

function ServicesPage() {
  const services = [
    {
      title: "Portails",
      description: "Portails battants, coulissants, sur mesure. Chaque portail est conçu selon vos besoins spécifiques et le style de votre propriété."
    },
    {
      title: "Ouverture de porte",
      description: "Service d'urgence pour ouverture de porte avec intervention rapide et méthodes professionnelles non destructives."
    },
    {
      title: "Clôtures et barrières",
      description: "Fabrication sur mesure de clôtures et barrières pour délimiter et sécuriser vos espaces extérieurs."
    },
    {
      title: "Rampes d'escalier",
      description: "Création de rampes d'escalier alliant sécurité, solidité et esthétique pour vos escaliers intérieurs et extérieurs."
    },
    {
      title: "Garde-corps et balustrades",
      description: "Réalisation de garde-corps et balustrades respectant les normes de sécurité tout en apportant une touche décorative."
    },
    {
      title: "Grilles de fenêtre",
      description: "Installation de grilles de protection pour fenêtres, assurant sécurité tout en préservant l'esthétique de votre façade."
    },
    {
      title: "Portes et portillons",
      description: "Fabrication de portes métalliques et portillons sur mesure, adaptés à vos besoins en termes de sécurité et de design."
    },
    {
      title: "Pergolas et structures",
      description: "Conception et réalisation de pergolas, marquises et toutes structures métalliques pour embellir vos espaces."
    },
    {
      title: "Automatisation",
      description: "Installation de systèmes d'automatisation pour portails, garantissant confort et sécurité au quotidien."
    },
    {
      title: "Réparation et entretien",
      description: "Service de réparation et entretien de toutes installations métalliques pour prolonger leur durée de vie."
    },
    {
      title: "Restauration",
      description: "Restauration de ferronnerie ancienne avec respect des techniques traditionnelles et du patrimoine architectural."
    }
  ];

  return (
    <section className="section">
      <Helmet>
        <title>Services Serrurerie Métallerie - Portails, Garde-corps | VD Serrurerie 77</title>
        <meta name="description" content="Tous nos services de serrurerie en Seine-et-Marne : portails sur mesure, ouverture de porte urgence, garde-corps, grilles protection, restauration ferronnerie. Devis gratuit ☎️" />
        <meta name="keywords" content="services serrurerie 77, portail sur mesure, ouverture porte urgence, dépannage serrurier, garde-corps, grille protection, restauration ferronnerie, Seine-et-Marne, Jouy-sur-Morin" />
        <link rel="canonical" href="https://votre-site.com/services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Services de Serrurerie et Ferronnerie | VD Serrurerie" />
        <meta property="og:description" content="Découvrez nos services : portails, ouverture porte, garde-corps, grilles. Intervention Seine-et-Marne." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://votre-site.com/#/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Serrurerie et Ferronnerie",
            "provider": {
              "@type": "LocalBusiness",
              "name": "VD Serrurerie",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jouy-sur-Morin",
                "addressRegion": "Seine-et-Marne",
                "addressCountry": "FR"
              }
            },
            "areaServed": {
              "@type": "State",
              "name": "Seine-et-Marne"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services de serrurerie",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
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
                "name": "Services",
                "item": "https://votre-site.com/#/services"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="container">
        <h2 className="section-title">Nos Services</h2>
        <div className="services-detail-grid">
          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;