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
              Au terme de cette exploration approfondie des dark patterns, il apparaît clairement
              que ces pratiques manipulatrices représentent un défi majeur pour l'éthique du
              numérique. Loin d'être de simples astuces de design, les dark patterns exploitent nos
              vulnérabilités psychologiques, compromettent notre autonomie en ligne et érodent la
              confiance que nous accordons aux technologies numériques.
            </p>
            <p>
              L'impact de ces pratiques va bien au-delà de l'expérience utilisateur immédiate. Elles
              façonnent notre relation avec le numérique, influencent nos comportements et peuvent
              avoir des conséquences durables sur notre bien-être psychologique. Les populations
              vulnérables (les personnes agées par exemple), en particulier, courent le risque
              d'être disproportionnellement affectées, creusant ainsi les inégalités et la fracture
              numérique exsitante.
            </p>
            <p>
              Face à ces enjeux, une approche multidimensionnelle s'impose. La sensibilisation et
              l'éducation des utilisateurs, la promotion de pratiques de conception éthiques, le
              renforcement du cadre légal et la mise en place de sanctions dissuasives sont autant
              de leviers à actionner. Cependant, la véritable transformation ne pourra venir que
              d'un réel changement dans la conception des interfaces numériques, où l'éthique et le
              respect de l'utilisateur seront placés au centre des préoccupations.
            </p>
            <p>
              L'avenir du numérique dépend de notre capacité collective à créer des environnements
              en ligne transparents, respectueux et centrés sur l'humain.
            </p>
            <p>
              Le chemin vers un web plus éthique est long, mais chaque pas compte. Que vous soyez
              designer, développeur, décideur ou simple utilisateur, vous avez un rôle à jouer dans
              cette transformation. Les dark patterns ne sont pas une fatalité : nous pouvons les
              combattre et façonner un web plus éthique pour tous.
            </p>
          </div>
        </div>
      </div>
      <Footer
        prevLabel="Pistes de solutions"
        prevLink="pistes-solutions"
        nextLabel="Remerciements"
        nextLink="remerciements"
      />
    </div>
  );
}

export default Conc;
