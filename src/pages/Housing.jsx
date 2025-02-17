import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import logements from '../data/logements.json';


const Star = ({ filled }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? "#FF6060" : "#E3E3E3"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke={filled ? "#FF6060" : "#E3E3E3"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const Housing = () => {
    // Récupère l'ID du logement depuis l'URL
  const { id } = useParams();

    // Recherche du logement correspondant dans les données
  const logement = logements.logements.find((l) => l.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="housing">
      <Slideshow images={logement.pictures} />

      <div className="housing__header">
        <div className="housing__info">
          <h1 style={{ color: '#FF6060', marginBottom: '0.5rem' }}>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing__host">
          <div className="host__info">
          <p>
  {logement.host.name.split(" ")[0]} <br />
  {logement.host.name.split(" ")[1]}
</p>

            <img
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="stars">
  {[...Array(5)].map((_, i) => (
    <Star key={i} filled={i < parseInt(logement.rating)} />
  ))}
</div>

        </div>
      </div>

      <div className="housing__details">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul style={{ listStyle: 'none' }}>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Housing;
