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
              l'utilisation des dark patterns.
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
            <h2>L'éducation numérique comme rempart</h2>
            <p>
              L'éducation numérique semble aussi être une solution toute trouvée. Il ne s'agit pas
              seulement de sensibiliser les utilisateurs, mais de leur donner les moyens de
              reconnaître et de contrer ces pratiques.
            </p>
            <p>
              Nous pourrions par exemple imaginer des cours d'informatique intégrant des modules sur
              l'éthique du numérique, où les élèves apprendraient à décrypter les dark patterns. Des
              ateliers pratiques pourraient mettre en scène des situations réelles, permettant aux
              participants de développer un œil critique sur les designs qu'ils rencontrent au
              quotidien.
            </p>
            <p>
              Pour les adultes, des campagnes de sensibilisation grand public, relayées par les
              médias et les réseaux sociaux, pourraient être mises en place. Des guides pratiques,
              des vidéos explicatives, voire des applications ludiques pourraient être développés
              pour apprendre à repérer les dark patterns de manière interactive.
            </p>
            <p>
              L'objectif n'est pas de diaboliser la technologie, mais d'encourager une utilisation
              éclairée et responsable. En formant des utilisateurs avertis, nous créons une pression
              positive sur les entreprises, les incitant à adopter des pratiques plus éthiques,
              étant donné que les dark patterns auraient beaucoup moins de succès.
            </p>
          </div>
          <div className="section">
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
