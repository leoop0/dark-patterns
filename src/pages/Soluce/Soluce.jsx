import React from "react";
import "./Soluce.scss";

import Footer from "../../components/Footer/Footer";
import Sensib from "../../assets/img/sensib.jpeg";

function Soluce() {
  return (
    <div className="wrapper">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Solutions envisagées</h1>
          <p>
            Face à la prolifération des dark patterns et leurs impacts négatifs sur les
            utilisateurs, plusieurs pistes émergent pour lutter contre ces pratiques manipulatrices.
            Ces solutions s'articulent autour de quatre axes principaux : l'atténuation de leur
            utilisation, la promotion de la conception éthique, la mise en place de sanctions et
            l'éducation numérique.
          </p>
        </div>
        <div className="content">
          <div className="section" id="1">
            <h2>Atténuer leur utilisation</h2>
            <h3>Sensibilisation des entreprises</h3>
            <p>
              Atténuer l'utilisation des dark patterns n'est pas une mince affaire. Certes, la
              sensibilisation des entreprises constitue un premier pas. En théorie, des formations
              et des campagnes ciblées devraient éveiller les consciences sur les impacts négatifs
              de ces pratiques. Mais ne soyons pas naïfs :{" "}
              <span className="bold">a sensibilisation seule ne suffira pas</span>. Si quelques
              entreprises vertueuses pourraient revoir leurs méthodes, la majorité risque de
              continuer à privilégier les gains rapides au détriment d'une expérience utilisateur
              éthique.
            </p>
            <img src={Sensib} alt="" />
            <p>
              Cette situation souligne la nécessité d'une approche multidimensionnelle, combinant
              sensibilisation, réglementation et sanctions économiques, pour véritablement atténuer
              l'utilisation des dark patterns.
            </p>

            <h3>Conception éthique</h3>
            <p>
              La conception éthique, quant à elle, offre des perspectives prometteuses. Il est grand
              temps de <span className="bold">repenser en profondeur notre approche du design</span>
              , qu'il s'agisse de l'interface ou de l'expérience utilisateur. Il est nécessaire de
              replacer l'humain au cœur des préoccupations. Ça ne se fera pas du jour au lendemain,
              mais c'est crucial pour <span className="bold">l'avenir du numérique</span>.
            </p>
            <h3>Sanctions économiques</h3>
            <p>
              Venons-en aux sanctions, un levier puissant pour dissuader les mauvaises pratiques. Un
              cadre légal renforcé s'impose, s'inspirant certes du RGPD ou du DMA, mais
              spécifiquement ciblé sur les dark patterns. Les amendes doivent{" "}
              <span className="bold">frapper fort</span>, être proportionnelles au chiffre
              d'affaires des entreprises malhonnêtes. Mais au-delà de l'aspect purement financier,
              pourquoi ne pas obliger les entreprises fautives à rectifier leurs interfaces dans un
              délai imparti, sous peine de sanctions supplémentaires ? Donner aux utilisateurs les
              moyens de <soan className="bold">signaler facilement les abus</soan> permettrait une
              détection plus rapide et efficace des pratiques douteuses.
            </p>
          </div>
          <div className="section" id="2">
            <h2>L'éducation numérique comme rempart</h2>
            <p>
              L'éducation numérique semble aussi être une solution toute trouvée. Il ne s'agit pas
              seulement de sensibiliser les utilisateurs, mais de leur donner{" "}
              <span className="bold">les moyens de reconnaître et de contrer ces pratiques</span>.
            </p>
            <p>
              Nous pourrions par exemple imaginer des cours d'informatique intégrant des modules sur
              <span className="bold">l'éthique du numérique</span>, où les élèves apprendraient à
              décrypter les dark patterns. Des ateliers pratiques pourraient mettre en scène des
              situations réelles, permettant aux participants de développer un{" "}
              <span className="bold">œil critique</span> sur les designs qu'ils rencontrent au
              quotidien.
            </p>
            <p>
              Pour les adultes, des campagnes de{" "}
              <span className="bold">sensibilisation grand public</span>, relayées par les médias et
              les réseaux sociaux, pourraient être mises en place. Des guides pratiques, des vidéos
              explicatives, voire des applications ludiques pourraient être développés pour{" "}
              <span className="bold">apprendre à repérer les dark patterns</span> de manière
              interactive.
            </p>
            <p>
              L'objectif n'est pas de diaboliser la technologie, mais d'encourager une utilisation{" "}
              <span className="bold">éclairée et responsable</span>. En formant des utilisateurs
              avertis, nous créons une pression positive sur les entreprises, les incitant à adopter
              des pratiques plus éthiques, étant donné que les dark patterns auraient beaucoup moins
              de succès.
            </p>
          </div>
          <div className="section" id="3">
            <h2>Comment se protéger en tant qu'utilisateur ?</h2>
            <p>
              Voici quelques exemples de réflexes à prendre pour ne pas se laisser piéger par les
              dark patterns.
            </p>
            <ul>
              <li>
                Bien regarder les cases à cocher par défaut. Cela prend un peu plus de temps mais
                peut vous éviter bien des ennuis.
              </li>
              <li>
                Faire attention à l’ergonomie de chaque site. Certaines fois, les boutons “annuler”
                et “valider” sont inversés, de manière à ce que vous cliquiez sur le mauvais.
              </li>
              <li>
                Ne pas cliquer trop vite sur un bouton ou un lien dans un article. Si la page n’a
                pas fini de se charger, vous risquez de cliquer sur une pub qui s’affiche en plein
                milieu du contenu.
              </li>
              <li>
                Ne pas hésiter à revenir en arrière. Quand un contenu s’affiche en plein écran,
                qu’il vous bloque dans votre navigation, n’hésitez pas à user de votre touche
                “echap” ou “esc”.
              </li>
              <li>
                Alerter son entourage, surtout ceux qui sont des novices de l’internet et qui sont
                plus susceptibles de tomber dans ces pièges bien rodés.
              </li>
            </ul>
          </div>
          <div className="section">
            <p>
              En somme, la lutte contre les dark patterns exige une approche globale, mêlant{" "}
              <span className="bold">prévention, éducation et répression.</span> C'est un effort
              collectif qui nécessite la collaboration des entreprises, des designers, des
              régulateurs et des utilisateurs.
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
