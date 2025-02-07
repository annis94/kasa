import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

const About = () => {
  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0' }}>
      <Banner image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9" />

      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <Collapse title="Fiabilité" variant="about">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>

        <Collapse title="Respect" variant="about">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Service" variant="about">
          <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </p>
        </Collapse>

        <Collapse title="Sécurité" variant="about">
          <p>            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  );
};

export default About;
