import React from "react";
import "./Remer.scss";

import Footer from "../../components/Footer/Footer";

function Remer() {
  return (
    <div className="wrapper remerciements">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Remerciements</h1>
        </div>
        <div className="content">
          <div className="section">
            <p>
              Je n'ai jamais été spécialement doué pour les remerciements, mais comme il faut bien
              commencer quelque part, je remercie Damien Paris, qui m'accompagne depuis maintenant 4
              ans à travers ses cours d'UI et de Direction Artistique. Toujours de bon conseil, il
              m'a permis de progresser dans divers sujets et surtout m'a aidé (comme beaucoup
              d'autres, je pense) à prendre confiance en moi et mettre de côté le syndrome de
              l'imposteur.
            </p>
            <p>
              Plus généralement, je remercierais l'ESD, qui m'a permis de découvrir et approfondir
              des sujets qui me passionnent. J'ai passé 5 années excellentes, des moments plus ou
              moins compliqués, de doute ou de remise en question, mais toujours en avançant dans la
              bonne direction.
            </p>
            <p>
              Je sais maintenant que je pourrai travailler dans un domaine qui me passionne et j'en
              suis ravi. J'ai hâte de voir ce que l'avenir me réserve, que ce soit en CDI ou en
              freelance.
            </p>
            <p>Salut :)</p>
          </div>
        </div>
      </div>
      <Footer
        prevLabel="Conclusion"
        prevLink="conclusion"
        nextLabel="Étude de cas et exemples"
        nextLink="etude-cas-exemples"
      />
    </div>
  );
}

export default Remer;
