import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import logements from '../data/logements.json';
import { Star } from 'lucide-react';

const Housing = () => {
  const { id } = useParams();
  const logement = logements.logements[0].find((l) => l.id === id);

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
              <Star
                key={i}
                fill={i < parseInt(logement.rating) ? '#FF6060' : '#E3E3E3'}
                color={i < parseInt(logement.rating) ? '#FF6060' : '#E3E3E3'}
              />
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
