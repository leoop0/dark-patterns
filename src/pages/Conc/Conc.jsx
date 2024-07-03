import React from "react";
import "./Conc.scss";

import Footer from "../../components/Footer/Footer";

function Conc() {
  return (
    <div className="wrapper">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Conclusion</h1>
        </div>
        <div className="content">
          <div className="section">
            <p>
              L'atténuation de l'utilisation des dark patterns repose sur plusieurs stratégies clés,
              dont la sensibilisation des entreprises. En théorie, des formations et des campagnes
              de sensibilisation sur les impacts négatifs des dark patterns sur les utilisateurs
              devraient conduire à une prise de conscience des entreprises.
            </p>
          </div>
        </div>
      </div>
      <Footer
        prevLabel="Définition et identification"
        prevLink="definition-identification"
        nextLabel="Étude de cas et exemples"
        nextLink="etude-cas-exemples"
      />
    </div>
  );
}

export default Conc;
