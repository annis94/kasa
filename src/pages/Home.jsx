import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';

const Home = () => {
  return (
    <>
      <Banner 
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        title="Chez vous, partout et ailleurs"
      />
      
      <div className="gallery">
      {logements.logements[0].map((logement) => (  
  <Card
    key={logement.id}
    id={logement.id}
    title={logement.title}
    cover={logement.cover}
  />
))}

      </div>
    </>
  );
};

export default Home;
