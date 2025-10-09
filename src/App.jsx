import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ZonePage from './pages/ZonePage/ZonePage';
import ContactPage from './pages/ContactPage/ContactPage';
import './styles/variables.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    typeProjet: '',
    description: '',
    zone: '',
    budget: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.nom || !formData.prenom || !formData.telephone || !formData.email || !formData.typeProjet || !formData.description || !formData.zone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    alert('Merci pour votre demande ! Nous vous contacterons dans les plus brefs délais.');
    setFormData({
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
      typeProjet: '',
      description: '',
      zone: '',
      budget: ''
    });
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header currentPage={currentPage} navigateTo={navigateTo} />

      {currentPage === 'accueil' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'apropos' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'galerie' && <GalleryPage />}
      {currentPage === 'zone' && <ZonePage />}
      {currentPage === 'contact' && (
        <ContactPage
          formData={formData}
          handleFormChange={handleFormChange}
          handleSubmit={handleSubmit}
        />
      )}

      <Footer navigateTo={navigateTo} />
    </>
  );
}

export default App;