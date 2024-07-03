import React from "react";
import "./Soluce.scss";

import Footer from "../../components/Footer/Footer";

function Soluce() {
  return (
    <div className="wrapper">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Pistes de solutions</h1>
          <p>
            Face à la prolifération des dark patterns et leurs impacts négatifs sur les
            utilisateurs, plusieurs pistes de solutions émergent pour lutter contre ces pratiques
            manipulatrices. Ces solutions s'articulent autour de trois axes principaux :
            l'atténuation de leur utilisation, la promotion de la conception éthique, et la mise en
            place de sanctions.
          </p>
        </div>
        <div className="content">
          <div className="section">
            <h2>Atténuer leur utilisation</h2>
            <h3>Sensibilisation des entreprises</h3>
            <p>
              L'atténuation de l'utilisation des dark patterns repose sur plusieurs stratégies clés,
              dont la sensibilisation des entreprises. En théorie, des formations et des campagnes
              de sensibilisation sur les impacts négatifs des dark patterns sur les utilisateurs
              devraient conduire à une prise de conscience des entreprises.
            </p>
            <p>
              Cependant, il serait naïf de croire que cette seule sensibilisation suffira à résoudre
              le problème. Bien que certaines entreprises puissent effectivement modifier leurs
              pratiques, une majorité pourrait continuer à privilégier les gains à court terme au
              détriment de l'expérience utilisateur éthique.
            </p>
            <p>
              Cette situation souligne la nécessité d'une approche multidimensionnelle, combinant
              sensibilisation, réglementation et sanctions économiques, pour véritablement atténuer
              l'utilisation des Dark Patterns.
            </p>
            <h3>Conception éthique</h3>
            <h3>Sanctions économiques</h3>
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

export default Soluce;
