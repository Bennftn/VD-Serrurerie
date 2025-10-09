import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import carouselData from '../../data/carouselData.json';
import './HomePage.css';

function HomePage({ navigateTo }) {
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
      <section className="hero">
        <div className="container">
          <h1>Serrurerie, Métallerie et Ferronnerie d'Art</h1>
          <p className="hero-subtitle">Ouverture de porte - Créations sur mesure en fer forgé</p>
          <p className="hero-description">
            Artisan depuis 2019, situé à Jouy-sur-Morin, je réalise sur mesure tout type de projets :
            portails, marquises, garde-corps, appuis de fenêtre...
          </p>
          <button className="cta-button" onClick={() => navigateTo('contact')}>
            Demander un devis
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="section carousel-section">
        <div className="container">
          <h2 className="section-title">Mes Plus Belles Réalisations</h2>
          <Carousel images={carouselData.carouselImages} autoPlay={true} interval={5000} />
          <div style={{textAlign: 'center', marginTop: '3rem' }}>
            <button className="cta-button" onClick={() => navigateTo('galerie')}>Voir mes réalisations</button>
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
      </section>
    </>
  );
}

export default HomePage;