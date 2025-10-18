import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ZonePage from './pages/ZonePage/ZonePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ThankYouPage from './pages/ThankYouPage/ThankYouPage';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/zone" element={<ZonePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/merci" element={<ThankYouPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;