import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

const About = () => {
  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0' }}>
<Banner image="https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ipEH5pECve55XCOVUcq9g0H83chmjaqX69ytxvyKS6jOxZfgG2tl8yEt-Vlp0xRhS0Jdnv9XKHJulNiQXtEAuWlCnQCUykWR5dn8nEVpH9-GKAfikBCrDio8XzVBQgb0xXRTHSqiumBuWxLzlBdnpfiKtThBtPHy~197KG7CD3b0UGooQd0AVoBQ0kmhLPU-ofwYegeKjE6IvKvSPCNeOkPloiFJkBT0rPT9k~X7Te28hvr~Zkg39ZJ9JS-sAG3S5ubj9cKculsJSXjKD1AutFPv~be8luVDtaNgOXUFtNOwzHnK2vrL9jUTLyqiKon053Llokn-3lbTKmwZapSbRA__" />

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
