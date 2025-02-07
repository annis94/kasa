import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (images.length === 0) return null;

  return (
    <div className="slideshow">
      <img 
        src={images[currentIndex]} 
        alt="" 
        className="slideshow__image"
      />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={goToPrevious}
            className="slideshow__arrow slideshow__arrow--prev"
            aria-label="Retourner à l’image précédente"
          >
            <ChevronLeft size={40} />
          </button>
          
          <button 
            onClick={goToNext}
            className="slideshow__arrow slideshow__arrow--next"
            aria-label="Aller à l’image suivante"
          >
            <ChevronRight size={40} />
          </button>
          
          <div className="slideshow__counter">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
