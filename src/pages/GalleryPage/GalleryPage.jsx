import React from 'react';
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