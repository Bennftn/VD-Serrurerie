import React from 'react';
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