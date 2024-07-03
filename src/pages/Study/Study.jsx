import React from "react";
import "./Study.scss";

import Footer from "../../components/Footer/Footer";

import PrimeLogo from "../../assets/img/prime.png";

function Study() {
  return (
    <div className="wrapper">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Étude de cas et exemples</h1>
          <p>
            This is a secondary page preview. As evident, content is displayed on this type of page.
          </p>
        </div>
        <div className="content">
          <div className="section">
            <h2>Le cas Amazon Prime</h2>
            <img src={PrimeLogo} alt="" />
            <p>
              Nous connaissons tous au moins une personne, un proche ou un collègue ayant
              malencontreusement souscrit à un abonnement Amazon Prime sans réellement le désirer.
            </p>
            <p>
              Amazon propose régulièrement une période d'essai gratuite pour Prime, attirant les
              utilisateurs avec des avantages attrayants qui, de prime abord sont sans frais.
              Cependant, aucune notification explicite n’est envoyée à la fin de la période d'essai,
              ce qui pousse les utilisateurs à reconduire leur abonnement sans réelle volonté ed le
              faire, à moins qu'ils n'annulent leur abonnement à temps. Cette pratique tire parti de
              l'inattention ou de l'oubli des utilisateurs.
            </p>
            <h3>Processus d'abonnement</h3>
            <p>Léa, ayant souscrit sans le vouloir à Amazon Prime nous dit : </p>
            <h3>Processus de désabonnement</h3>
            <p>
              Le processus de désabonnement d'Amazon Prime est notoirement complexe. Les
              utilisateurs doivent naviguer à travers plusieurs pages pour pouvoir espérer résilier
              leur abonnement. À chaque étape des messages encouragent les utilisateurs à
              reconsidérer leur décision, mettant en avant les avantages qu'ils perdraient en
              annulant l'abonnement. Des boutons primaires, bien visibles pour conserver
              l'abonnement sont placés stratégiquement et bien en vue, tandis que les options de
              désabonnement sont moins visibles et nécessitent plus de clics. Ce qui n’est pas sans
              nous rappeler la loi de de Fitts.
            </p>
            <p>
              L’UFC que choisir s’était d’ailleurs penchée sur le sujet et suite à une action en
              lien avec le Bureau européen des Unions de Consommateurs contre les obstacles au
              désabonnement d’Amazon Prime, la société se met enfin en conformité avec le droit
              européen.
            </p>
            <p>
              L'exemple d'Amazon Prime illustre comment les entreprises peuvent utiliser des dark
              patterns pour maximiser leurs profits, souvent au détriment de la transparence et de
              la satisfaction des utilisateurs. Pour maintenir la confiance des utilisateurs, il est
              essentiel que les entreprises simplifient les processus de désabonnement et
              fournissent des informations claires et accessibles sur les conditions des
              abonnements.
            </p>
          </div>
          <div className="section">
            <h2>Exemples concrets</h2>
            <p>
              Penchons nous maintenant sur d’autres exemples plus brefs, mais tout aussi
              intéressants.
            </p>
          </div>
          <div className="section">
            <h2>Liste de la honte</h2>
            <p>
              Pour illustrer l'ampleur du problème des Dark Patterns et identifier les acteurs
              majeurs qui y ont recours, examinons la "Liste de la honte". Cette liste, compilée à
              partir de diverses sources et rapports, met en lumière les entreprises les plus
              fréquemment citées pour leur utilisation de Dark Patterns. Le chiffre entre
              parenthèses indique le nombre de fois où l'entreprise a été signalée pour des
              pratiques douteuses. Cette liste nous permet de constater que même les géants de la
              technologie et des médias sociaux, malgré leurs ressources et leur influence, ne sont
              pas exempts de ces pratiques manipulatrices. Il est important de noter que cette liste
              est dynamique et évolue au fil du temps, reflétant les changements dans les pratiques
              des entreprises et la vigilance croissante des utilisateurs et des régulateurs.
            </p>
          </div>
        </div>
      </div>
      <Footer
        prevLabel="Vulnérabilités psychologiques"
        prevLink="vulnerabilites-psychologiques"
        nextLabel="Défis éthiques"
        nextLink="defis-ethiques"
      />
    </div>
  );
}

export default Study;
