import React from "react";
import "./Vul.scss";

import Footer from "../../components/Footer/Footer";

function Vul() {
  return (
    <div className="wrapper">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Vulnérabilités psychologiques</h1>
          <p>
            This is a secondary page preview. As evident, content is displayed on this type of page.
          </p>
        </div>
        <div className="content">
          <div className="section">
            <h2>Biais et vulnérabilités</h2>
            <p>
              Pour comprendre comment ces dark patterns fonctionnent et sont efficaces sur notre
              cerveau, il est primordial de s’intéresser aux biais et vulnérabilités que nous
              possédons tous.
            </p>
            <p>
              Un exemple très simple de biais : le prix psychologique. Nous voyons tous les jours
              des prix bien spécifiques : 29,99 €, 19,99 €, 49,99 €… Ils ne diffèrent que très peu
              avec 30, 20 ou 50 € mais le prix est naturellement perçu comme plus attrayant par le
              cerveau.
            </p>
            <p>
              Les dark patterns exploitent divers biais cognitifs pour manipuler les décisions des
              utilisateurs. Le biais de rareté joue sur la perception que les objets ou les
              opportunités rares sont plus précieux. Les messages tels que "seulement 3 articles
              restants" ou "offre limitée dans le temps" incitent les utilisateurs à prendre des
              décisions d'achat rapides pour ne pas rater une opportunité perçue. Le biais
              d'ancrage, où les individus se fient trop à la première information qu'ils reçoivent,
              est souvent utilisé dans les dark patterns pour donner l'impression de bonnes affaires
              en affichant un prix initialement élevé à côté du prix actuel. Enfin, l'effet de
              conformité pousse les gens à suivre les actions ou les choix des autres pour éviter le
              sentiment d'être en désaccord avec la majorité, renforcé par des témoignages fictifs
              ou des comptes à rebours de popularité.
            </p>
            <p>
              Ces biais influencent les décisions des utilisateurs de manière significative. Le
              biais de rareté induit une urgence accrue, poussant les utilisateurs à prendre des
              décisions impulsives. Le biais d'ancrage influence fortement la perception des prix et
              les choix d'achat, alors que l'effet de conformité encourage les comportements de
              groupe sans évaluation critique des mérites de la décision.
            </p>
          </div>
          <div className="section" id="2">
            <h2>Lois UX</h2>
            <p>
              Pour comprendre encore mieux comment ces comportements sont induits, évoquons
              maintenant quelques lois fondamentales d’UX Design. Ces lois sont des principes
              utilisés par les designers pour créer des interfaces efficaces, intuitives et
              agréables. Cependant, ces mêmes lois peuvent être détournées pour créer des dark
              patterns, exploitant ainsi les biais cognitifs et comportementaux des utilisateurs.
            </p>

            <div className="cards-ux">
              <div className="card">
                <h4>Loi de Fitts</h4>
                <p>
                  Indique que les utilisateurs peuvent maintenir environ sept éléments (plus ou
                  moins deux) dans leur mémoire de travail.
                </p>
              </div>
              <div className="card">
                <h4>Loi de Miller</h4>
                <p>
                  Stipule que le temps nécessaire pour atteindre une cible dépend de la distance à
                  laquelle elle se trouve et de sa taille. Plus la cible est petite et éloignée,
                  plus il est difficile de l'atteindre.
                </p>
              </div>
              <div className="card">
                <h4>Loi de Jakob</h4>
                <p>
                  Appuie sur <span className="bold">l’affordance</span>, évoque le fait que les
                  utilisateurs préfèrent les interfaces qui se comportent de la même manière que
                  d'autres interfaces qu'ils ont déjà utilisées.
                </p>
              </div>
              <div className="card">
                <h4>Effet Zeigarnik</h4>
                <p>
                  Désigne la tendance à mieux se rappeler d’une tâche inachevée car interrompue
                  qu’une tâche déjà accomplie.
                </p>
              </div>
              <p>
                Les lois UX, lorsqu'elles sont appliquées de manière éthique, améliorent
                l'expérience utilisateur en rendant les interfaces plus intuitives et accessibles.
                Cependant, lorsqu'elles sont détournées à des fins manipulatrices, elles deviennent
                des outils puissants pour créer des dark patterns.
              </p>
            </div>
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
