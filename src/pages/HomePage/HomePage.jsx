import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import carouselData from '../../data/carouselData.json';
import { Helmet } from 'react-helmet-async';
import './HomePage.css';

function HomePage() {
  const services = [
    {
      title: "Portails sur mesure",
      description: "Création de portails battants, coulissants, en fer forgé adaptés à vos besoins et votre style."
    },
    {
      title: "Ouverture de porte",
      description: "Service rapide et professionnel d'ouverture de porte en cas d'urgence."
    },
    {
      title: "Garde-corps & Rampes",
      description: "Réalisation de garde-corps, balustrades et rampes d'escalier sécurisés et esthétiques."
    },
    {
      title: "Grilles & Clôtures",
      description: "Fabrication de grilles de protection, clôtures et barrières pour sécuriser vos espaces."
    },
    {
      title: "Structures métalliques",
      description: "Pergolas, marquises et toutes structures métalliques sur mesure."
    },
    {
      title: "Restauration",
      description: "Restauration et rénovation de ferronnerie ancienne avec respect du patrimoine."
    }
  ];

  return (
    <>
      <Helmet>
         {/* Titres et descriptions */}
        <title>VD Serrurerie - Serrurerie Métallerie Ferronnerie d'Art | Jouy-sur-Morin Seine-et-Marne</title>
        <meta name="description" content="VD Serrurerie : artisan serrurier depuis 2019 en Seine-et-Marne. Création de portails en fer forgé, ouverture de porte, garde-corps sur mesure. Intervention 100km autour. Devis gratuit. ☎️ Jouy-sur-Morin 77320" />
        <meta name="keywords" content="serrurerie, serrurier, ferronnerie, portail fer forgé, Jouy-sur-Morin, Seine-et-Marne, ouverture porte, garde-corps, métallerie, 77, artisan serrurier, ferronnerie art" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://vdserrurerie.com/" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="VD Serrurerie - Ferronnerie d'Art en Seine-et-Marne" />
        <meta property="og:description" content="Artisan serrurier depuis 2019. Création de portails en fer forgé sur mesure. Intervention rapide en Seine-et-Marne." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vdserrurerie.com/" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="VD Serrurerie" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VD Serrurerie - Ferronnerie d'Art Seine-et-Marne" />
        <meta name="twitter:description" content="Artisan serrurier depuis 2019. Création de portails en fer forgé sur mesure." />
        {/* Schema.org - LocalBusiness (SIMPLIFIÉ pour meilleur SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "VD Serrurerie",
            "description": "Serrurerie, métallerie et ferronnerie d'art depuis 2019",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jouy-sur-Morin",
              "addressRegion": "Seine-et-Marne",
              "postalCode": "77320",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.7968",
              "longitude": "3.2537"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "48.7968",
                "longitude": "3.2537"
              },
              "geoRadius": "100000"
            },
            "priceRange": "€€"
          })}
        </script>
        {/* Schema.org - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Accueil",
              "item": "https://vdserrurerie.com/"
            }]
          })}
        </script>
      </Helmet>

      <section className="hero">
        <div className="container">
          <h1>Serrurerie, Métallerie et Ferronnerie d'Art</h1>
          <p className="hero-subtitle">Ouverture de porte - Créations sur mesure en fer forgé</p>
          <p className="hero-description">
            Artisan depuis 2019, situé à Jouy-sur-Morin, je réalise sur mesure tout type de projets :
            portails, marquises, garde-corps, appuis de fenêtre...
          </p>
          <Link to="/contact" className="cta-button">
            Demander un devis
          </Link>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="section carousel-section">
        <div className="container">
          <h2 className="section-title">Mes Plus Belles Réalisations</h2>
          <Carousel images={carouselData.carouselImages} autoPlay={true} interval={5000} />
          <div style={{textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/galerie" className="cta-button">
              Voir mes réalisations
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Nos Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/contact" className="cta-button">
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;