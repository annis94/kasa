import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__overlay">
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
