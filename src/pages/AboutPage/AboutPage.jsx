import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <section className="section">
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