import React from "react";
import "./Conc.scss";

import Footer from "../../components/Footer/Footer";

function Conc() {
  return (
    <div className="wrapper conclusion">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Conclusion</h1>
        </div>
        <div className="content">
          <div className="section">
            <p>
              Au terme de notre plongée dans l'univers des dark patterns, une évidence s'impose :
              ces pratiques insidieuses représentent{" "}
              <span className="bold">bien plus qu'un simple défi technique</span>. Elles sont un
              véritable enjeu éthique pour notre société numérique.
            </p>
            <p>
              Ces techniques manipulatrices s'infiltrent dans les recoins de nos appareils, jouant
              avec notre libre arbitre et grignotant peu à peu la confiance que nous accordons aux
              technologies qui nous entourent. Leur impact dépasse largement le cadre d'une simple
              expérience utilisateur frustrante. En réalité, elles{" "}
              <span className="bold">façonnent en profondeur notre relation au monde digital</span>,
              influençant nos comportements bien au-delà de l'écran. Et ce sont souvent les plus
              vulnérables d'entre nous qui en paient le prix fort, creusant davantage les inégalités
              et la fracture numérique.
            </p>
            <p>
              Face à ce constat, une <span className="bold">approche multidimensionnelle</span>{" "}
              s'impose. Éducation des utilisateurs, promotion de pratiques de conception éthiques,
              renforcement du cadre légal : autant de leviers à activer. Mais ne nous y trompons
              pas, la véritable révolution viendra d'un changement des méthodes de conception UI et
              UX. Il est temps de placer l'éthique et le respect de l'utilisateur au cœur de nos
              préoccupations.
            </p>
            <p>
              L'avenir du web est entre nos mains. Que nous soyons designers, développeurs,
              décideurs ou simples utilisateurs, nous avons{" "}
              <span className="bold">tous un rôle à jouer</span> dans cette transformation.
              Ensemble, nous pouvons façonner un web plus éthique et respectueux de tous.
            </p>
          </div>
        </div>
      </div>
      <Footer
        prevLabel="Solutions envisagées"
        prevLink="solutions"
        nextLabel="Remerciements"
        nextLink="remerciements"
      />
    </div>
  );
}

export default Conc;
