import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

function Carousel({ images, autoPlay = true, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel" role="region" aria-label="Carrousel de réalisations" aria-roledescription="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} sur ${images.length}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"}
              width="1200"
              height="675"
            />
            <div className="carousel-caption">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-button prev"
        onClick={goToPrevious}
        aria-label="Image précédente"
      >
        <ChevronLeft size={30} aria-hidden="true" />
      </button>

      <button
        className="carousel-button next"
        onClick={goToNext}
        aria-label="Image suivante"
      >
        <ChevronRight size={30} aria-hidden="true" />
      </button>

      <div className="carousel-indicators" role="tablist" aria-label="Indicateurs de slides">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-label={`Aller à l'image ${index + 1}`}
            aria-selected={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;