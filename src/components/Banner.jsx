import React from 'react';

const Banner = ({ image, title }) => {
  return (
    <div className="banner">
      <img 
        src={image} 
        alt={title || "Image de la bannière"} 
        className="banner__image" 
      />
      <div className="banner__overlay">
        {title && <h1 className="banner__title">{title}</h1>}
      </div>
    </div>
  );
};

export default Banner;
