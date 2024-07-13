import React from "react";
import "./Vul.scss";

import Footer from "../../components/Footer/Footer";

import { ReactComponent as Miller } from "../../assets/img/miller.svg";
import Fitts from "../../assets/img/fitts.png";
import Jakob from "../../assets/img/jakob.png";
import Zeiga from "../../assets/img/zeiga.png";

function Vul() {
  return (
    <div className="wrapper">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Vulnérabilités psychologiques</h1>
          <p>
            On entend souvent parler de mécanismes et leviers psychologiques dans le domaine du
            marketing et de la publicité. Mais comment ces concepts sont-ils exploités pour
            manipuler les utilisateurs à travers les dark patterns ?
          </p>
        </div>
        <div className="content">
          <div className="section" id="1">
            <h2>Biais et vulnérabilités</h2>
            <div className="quote">
              <p>
                “People behave more on the basis of how they feel than how they think; unless there
                are good feelings between people, it is almost impossible to reason intelligently.“
              </p>
              <span>
                <div className="line"></div>Stephen Covey
              </span>
            </div>
            <p>
              Pour comprendre comment ces dark patterns fonctionnent et sont efficaces sur notre
              cerveau, il est primordial de s’intéresser aux biais et vulnérabilités que{" "}
              <span className="bold">nous possédons tous</span>.
            </p>
            <p>
              Un exemple très simple de biais : le <span className="bold">prix psychologique</span>.
              Nous voyons tous les jours des prix bien spécifiques : 29,99 €, 19,99 €, 49,99 €… Ils
              ne diffèrent que très peu avec 30, 20 ou 50 € mais le prix est naturellement perçu
              comme <span className="bold">plus attrayant par le cerveau</span>.
            </p>
            <p>
              Les dark patterns exploitent nos biais cognitifs pour influencer nos décisions en
              ligne. Le <span className="bold">biais de rareté</span> nous fait surévaluer ce qui
              est limité, créant un faux sentiment d'urgence. Le{" "}
              <span className="bold">biais d'ancrage</span> manipule notre perception des prix en
              affichant des réductions trompeuses.{" "}
              <span className="bold">L'effet de conformité</span> nous pousse à suivre la majorité
              supposée, via des témoignages ou des compteurs fictifs. Ces techniques, subtilement
              intégrées aux interfaces, nous guident vers des actions souvent contraires à nos
              intérêts réels.
            </p>
          </div>
          <div className="section" id="2">
            <h2>Lois UX</h2>
            <p>
              Pour comprendre encore mieux comment ces comportements sont induits, évoquons
              maintenant quelques lois fondamentales <span className="bold">d’UX Design</span>. Ces
              lois sont des principes utilisés par les designers pour créer des interfaces
              efficaces, intuitives et agréables. Cependant, ces mêmes lois peuvent être détournées
              pour créer des dark patterns, exploitant ainsi les biais des utilisateurs.
            </p>

            <div className="cards-ux">
              <div className="law">
                <img src={Fitts} alt="" />
                <div className="content">
                  <h4>Loi de Fitts</h4>
                  <p>
                    Indique que les utilisateurs peuvent maintenir environ sept éléments (plus ou
                    moins deux) dans leur mémoire de travail.
                  </p>
                </div>
              </div>
              <div className="law">
                <Miller />
                <div className="content">
                  <h4>Loi de Miller</h4>
                  <p>
                    Stipule que le temps nécessaire pour atteindre une cible dépend de la distance à
                    laquelle elle se trouve et de sa taille. Plus la cible est petite et éloignée,
                    plus il est difficile de l'atteindre.
                  </p>
                </div>
              </div>
              <div className="law">
                <img src={Jakob} alt="" />
                <div className="content">
                  <h4>Loi de Jakob</h4>
                  <p>
                    Appuie sur <span className="bold">l’affordance</span>, évoque le fait que les
                    utilisateurs préfèrent les interfaces qui se comportent de la même manière que
                    d'autres interfaces qu'ils ont déjà utilisées.
                  </p>
                </div>
              </div>
              <div className="law">
                <img src={Zeiga} alt="" />
                <div className="content">
                  <h4>Effet Zeigarnik</h4>
                  <p>
                    Désigne la tendance à mieux se rappeler d’une tâche inachevée car interrompue
                    qu’une tâche déjà accomplie.
                  </p>
                </div>
              </div>

              <p>
                En somme, lorsqu'elles sont appliquées de manière{" "}
                <span className="bold">éthique</span> les lois UX améliorent l'expérience
                utilisateur en rendant les interfaces plus intuitives et accessibles. Cependant,
                lorsqu'elles sont détournées à des fins manipulatrices, elles deviennent des{" "}
                <span className="bold">outils puissants</span> pour créer des dark patterns.
              </p>
            </div>
          </div>

          <div className="section" id="3">
            <h2>Impact psychologique</h2>
            <p>
              L'impact psychologique des dark patterns va bien au-delà d'une simple frustration
              passagère. Leur omniprésence nourrit une{" "}
              <span className="bold">méfiance envers la technologie</span>, générant un sentiment de
              perte de contrôle chez les utilisateurs. Cette manipulation constante peut affecter
              l'estime de soi et freiner l'envie de découvrir d'autres sites ou application (on peut
              trouver un exemple très simple : beaucoup de gens n'installent pas TikTok car ils
              savent qu'ils vont y passer trop de temps étant donné les vulnérabilités que
              l'application exploite pour nous faire rester). On retrouve donc un risque{" "}
              <span className="bold">d'exacerber des comportements addictifs</span> et{" "}
              <span className="bold">d'impacter négativement notre santé mentale</span>. Les
              personnes âgées ou celles ayant une faible maitrise du web sont particulièrement
              exposées à ces risques, accentuant les inégalités et la fracture numérique.
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

export default Vul;
