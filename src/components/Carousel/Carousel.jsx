import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

function Carousel({ images, autoPlay = true, interval = 5000 }) {
    const [currentIndex, setCurrentIndex] =  useState(0);

    // Auto-play
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
        <div className='carousel'>
            <div className='carousel-inner'>
                {images.map((image, index) => (
                    <div
                    key={index}
                    className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
                        <img src={image.src} alt={image.alt} />
                        <div className="carousel-caption">
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                        </div>
                     </div>
                ))}
            </div>

            <button className="carousel-button prev" onClick={goToPrevious}>
                <ChevronLeft size={30} />
            </button>

            <button className="carousel-button next" onClick={goToNext}>
                <ChevronRight size={30} />
            </button>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                    key={index}
                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Aller à l'image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;