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
              Atténuer l'utilisation des dark patterns n'est pas une mince affaire. Certes, la
              sensibilisation des entreprises constitue un premier pas. En théorie, des formations
              et des campagnes ciblées devraient éveiller les consciences sur les impacts négatifs
              de ces pratiques. Mais ne soyons pas naïfs : la sensibilisation seule ne suffira pas.
              Si quelques entreprises vertueuses pourraient revoir leurs méthodes, la majorité
              risque de continuer à privilégier les gains rapides au détriment d'une expérience
              utilisateur éthique.
            </p>

            <p>
              Cette situation souligne la nécessité d'une approche multidimensionnelle, combinant
              sensibilisation, réglementation et sanctions économiques, pour véritablement atténuer
              l'utilisation des Dark Patterns.
            </p>
            <h3>Conception éthique</h3>
            <p>
              La conception éthique, quant à elle, offre des perspectives prometteuses. Il est grand
              temps de repenser en profondeur notre approche du design, qu'il s'agisse de
              l'interface ou de l'expérience utilisateur. L'objectif ? Replacer l'humain et son
              bien-être au cœur des préoccupations. Un virage qui ne se fera pas du jour au
              lendemain, mais qui est crucial pour l'avenir du numérique.
            </p>
            <h3>Sanctions économiques</h3>
            <p>
              Venons-en aux sanctions, un levier puissant pour dissuader les mauvaises pratiques. Un
              cadre légal renforcé s'impose, s'inspirant certes du RGPD ou du DMA, mais
              spécifiquement ciblé sur les dark patterns. Les amendes doivent frapper fort, être
              proportionnelles au chiffre d'affaires des contrevenants. Mais au-delà de l'aspect
              purement financier, pourquoi ne pas obliger les entreprises fautives à rectifier leurs
              interfaces dans un délai imparti, sous peine de sanctions supplémentaires ? Et si on
              donnait aux utilisateurs les moyens de signaler facilement les abus ? Cela permettrait
              une détection plus rapide et efficace des pratiques douteuses.
            </p>
          </div>
          <div className="section">
            <p>
              En somme, la lutte contre les dark patterns exige une approche globale, mêlant
              prévention, éducation et répression. C'est un effort collectif qui nécessite la
              collaboration des entreprises, des designers, des régulateurs et des utilisateurs.
            </p>
          </div>
        </div>
      </div>
      <Footer
        prevLabel="Défis éthiques"
        prevLink="defis-ethiques"
        nextLabel="Conclusion"
        nextLink="conclusion"
      />
    </div>
  );
}

export default Soluce;
