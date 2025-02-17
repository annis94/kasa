import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';

const Home = () => {
  return (
    <>
      <Banner image="https://s3-alpha-sig.figma.com/img/4706/e7dd/e270fc8fc902a1eb738458e7b29c1899?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DRLD8nwXQcIg8HrkZad-sP73TJZncgTeJOIVMuumd55AJYba3-f7Y4bXWAPDCOPXjLJaKpYokknezBi2r66itJc2-H1L0aTR41I4p9-xGe8xe8qIP51v1Sx9QrsVSDfQZPUtE7~pNJaxC3mv0-hEvxHpZeQ9OOq3vGYp4fyZ~dAsrzDbIAB01VVQgsZJIF-FkM-1rbRIFabRCHmEJaEIzQ1JH9oqGipE-ptUUSd1~9t0qWjMG1K38dQOE0jJUUviBXG~e2XS43nPKq5c~8SP3RVNvASaNUGPEchMSKb4qzeiSKUfcM-ZIo~m7zYonks6vknYA~wsICDuzY4ej~coeQ__" 
              title="Chez vous, partout et ailleurs"

      />

      
      <div className="gallery">
      {logements.logements.map((logement) => (  
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
