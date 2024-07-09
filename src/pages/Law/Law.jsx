import React from "react";
import "./Law.scss";

import Footer from "../../components/Footer/Footer";

import Cnil from "../../assets/img/cnil.png";

function Law() {
  return (
    <div className="wrapper">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Défis éthiques</h1>
          <p>
            Dans le paysage numérique en constante évolution, les défis éthiques liés à
            l'utilisation des dark patterns sont devenus un sujet de préoccupation majeur.
          </p>
        </div>
        <div className="content">
          <div className="section">
            <h2>Consentement des utilisateurs</h2>

            <p>
              “Cliquez ici pour accepter nos termes d’utilisation”, “Cochez cette case pour accepter
              notre newsletter”, “Acceptez-vous les cookies sur notre site ?” Des phrases que nous
              avons tous lues et relues sans cesse sur internet au cours des dernières années. Ces
              messages sont devenus omniprésents, dans le simple but d’obtenir le consentement des
              utilisateurs pour diverses actions, de l'acceptation des cookies à l'abonnement à des
              services.
            </p>
            <p>
              Le consentement des utilisateurs est un enjeu éthique majeur car il doit être éclairé,
              volontaire et explicite. Cependant, les dark patterns compromettent souvent ces
              critères. Par exemple, les informations importantes sont souvent masquées ou écrites
              dans un langage juridique complexe, rendant difficile la compréhension par les
              utilisateurs de ce à quoi ils consentent vraiment. Des pratiques comme l’utilisation
              de longues conditions générales remplies de jargon sont courantes, empêchant une
              compréhension claire et complète.
            </p>
            <p>
              Si ces pratiques semblent de prime abord être de bonnes initiatives pour les
              utilisateurs, elles résultent en réalité pour la plupart d’obligations légales,
              principalement en Union Européenne grâce à la Réglementation Générale sur la
              Protection des Données (RGPD)
            </p>
          </div>
          <div className="section">
            <h2>Cadre légal</h2>
            <img src={Cnil} alt="" />
            <p>
              Au fil du temps et des actions en justice, les législations et régulations évoluent
              pour lutter contre les pratiques de dark patterns et protéger les droits des
              utilisateurs :
            </p>
            <h3>RGPD</h3>
            <p>
              En Europe depuis 2018, le <span className="bold">RGPD</span> impose des règles
              strictes sur la collecte et l’utilisation des données personnelles des utilisateurs.
              Il exige un consentement <span className="bold">explicite</span> et{" "}
              <span className="bold">éclairé</span> des utilisateurs avant toute utilisation de
              leurs données. Ainsi, les entreprises doivent pouvoir fournir des informations claires
              et accessibles sur la manière dont les données sont stockées et traitées. Les
              utilisateurs doivent pouvoir à tout moment{" "}
              <span className="bold">retirer leur consentement</span> et avoir un droit de regard
              sur leurs données personnelles.
            </p>
            <h3>DMA</h3>
            <p>
              Le DMA, ou <span className="bold">Digital Markets Act</span> a pour objectif de créer
              un environnement numérique plus <span className="bold">équitable et transparent</span>
              . Elle insiste sur l’importance de posséder une{" "}
              <span className="bold">concurrence loyale</span> via des obligations. Il interdit par
              ailleurs certaines pratiques de dark patterns, comme les mécanismes de consentement
              trompeurs et les <span className="bold">interfaces utilisateur manipulatrices</span>.
            </p>
          </div>
        </div>
      </div>
      <Footer
        prevLabel="Étude de cas et exemples"
        prevLink="etude-cas-exemples"
        nextLabel="Pistes de solutions"
        nextLink="pistes-solutions"
      />
    </div>
  );
}

export default Law;
