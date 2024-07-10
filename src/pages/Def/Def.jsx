import React from "react";
import "./Def.scss";

import { ReactComponent as BrokenHeart } from "../../assets/ico/bheart.svg";
import { ReactComponent as Maze } from "../../assets/ico/maze.svg";
import { ReactComponent as Offer } from "../../assets/ico/offer.svg";
import { ReactComponent as CTA } from "../../assets/ico/cta.svg";
import { ReactComponent as Background } from "../../assets/misc/bg.svg";
import Footer from "../../components/Footer/Footer";

import Harry from "../../assets/img/harryB.png";

function Def() {
  return (
    <div className="wrapper">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Définition et identification</h1>
          <p>
            Nous avons tous déjà entendu parler des dark patterns de façon plus ou moins détournée.
            Il est temps d'enfin comprendre ce qu'ils sont et les enjeux qu'ils soulèvent.
          </p>
        </div>
        <div className="content">
          <div className="section">
            <h2>Qu'est-ce que c'est ?</h2>
            <p>
              N’avez vous jamais trouvé compliqué de se désabonner d’un service ou d’un abonnement
              sur Internet ? De commander un produit sans être assailli d’autres offres “exclusives”
              avec l’intention de toujours vous faire dépenser plus ? Ou encore le jour où vous avez
              voulu profiter d’une période d’essai gratuite avant de vous faire débiter car aucune
              notification ne vous a été envoyée pour vous informer de la reconduction de
              l’abonnement ?
            </p>
            <p>
              Évidemment que cela vous est déjà arrivé, ça nous arrive à tous. Que ce soit une
              personne âgée perdue sur le web ou le développeur le plus aguerri, nous sommes tous
              victimes de nos propres biais et de la façon dont ils sont exploités par de nombreuses
              entreprises.
            </p>
            <div className="grid-vignette">
              <img src={Harry} alt="" />
              <p>
                Introduits en 2010 par Harry Brignull, un spécialiste UX, les dark patterns,
                également appelés les Deceptive Patterns représentent des interfaces conçues
                délibérément pour tromper ou manipuler les utilisateurs.
              </p>
            </div>
            <p>
              Et c’est dans cette quête de sensibilisation et de protection des utilisateurs que
              Harry Brignull a fondé le site deceptive.design (anciennement darkpatterns.org).
            </p>
            <p>
              Afin de se faire une idée plus précise, voyons ensemble quelques exemples globaux :
            </p>
            <div className="grid-2">
              <div className="tile">
                <div className="ico">
                  <Maze />
                </div>
                <h4>Labyrinthe administratif</h4>
                <p>
                  Processus long, complexe parfois épuisant pour se désabonner d’un abonnement ou
                  service
                </p>
              </div>
              <div className="tile">
                <div className="ico">
                  <CTA />
                </div>
                <h4>Call to action trompeurs</h4>
                <p>
                  Boutons primaires utilisés pour des actions qui ne le sont pas, abonnement à un
                  service, opt-out...
                </p>
              </div>
              <div className="tile">
                <div className="ico">
                  <Offer />
                </div>
                <h4>Offre limitée trompeuse</h4>
                <p>
                  Compte à rebours affiché pour une offre spéciale ou exclusive qui n'est en réalité
                  pas limité dans le temps
                </p>
              </div>
              <div className="tile">
                <div className="ico">
                  <BrokenHeart />
                </div>
                <h4>Chantage émotionnel</h4>
                <p>
                  Messages conçus pour jouer sur les émotions et susciter une prise de décision
                  rapide et irréfléchie
                </p>
              </div>
            </div>
          </div>
          <div className="section" id="2">
            <h2>Pourquoi on les utilise</h2>
            <p>
              On pourrait se demander pourquoi mettre en place ces interfaces trompeuses ? En
              réalité le raisonnement des entreprises est simple : ça fonctionne et ça rapporte.
              Donc, tant qu’on ne se fait pas prendre, on continue. C’est la principale raison pour
              laquelle les dark patterns sont essentiellement exploités sur les sites et
              applications avec un traffic massif.
            </p>
            <p>
              Pour détailler un peu plus ce point, voilà quelques raisons spécifiques pour
              lesquelles les dark patterns sont utilisés :
            </p>
            <ul>
              <li>
                <span className="bold"> Augmentation du taux de conversion</span> : rendre un
                processus d’achat rapide et ultra-simple tout en poussant à l’achat impulsif
              </li>
              <li>
                <span className="bold">Réduction des désabonnements</span> : en mettant en place des
                labyrinthe administratifs comme cité plus haut
              </li>
              <li>
                <span className="bold">Maximisation des profits</span> : ajouter des produits non
                désirés au panier ou en cachant des frais jusqu’à la dernière étape du paiement
              </li>
            </ul>
            <p>
              En bref, le principal but des sites et applications qui se servent des dark patterns
              et mercantile.
            </p>
          </div>
          <div className="section">
            <h2>Nudge ou dark pattern ?</h2>
            <p>
              Rappelons d’abord ce qu’est un nudge (ou coup de coude) : un outil de “suggestion”
              disposé dans notre environnement, supposé nous aider à faire les bons choix, dans
              notre intérêt ou celui de la société
            </p>
            <p>
              Si les nudges et les dark patterns sont similaires dans leur mise en place, leurs
              objectifs sont pourtant diamétralement opposés. Comme nous l’avons vu précédemment, le
              but du dark pattern est d’induire en erreur un utilisateur pour le pousser à faire un
              choix non réfléchi, parfois même contre sa volonté. Le nudge quant à lui incite les
              individus à adopter un comportement ou faire certains choix mais sans mettre de
              contrainte, d’obligation ou de menace de sanction. Et là est toute la différence.
            </p>
            <p>
              Pour résumer, un nudge vise à améliorer le bien-être de l'individu ou de la société en
              encourageant des comportements positifs.
            </p>
            <p>
              Il pourrait par exemple être utilisé pour inciter les gens à manger plus sainement en
              plaçant des fruits et légumes à hauteur des yeux dans un supermarché.
            </p>
            <p>
              En revanche, les dark patterns cherchent à manipuler l'utilisateur à des fins souvent
              financières ou commerciales, en profitant de ses biais cognitifs.
            </p>
          </div>
        </div>
      </div>
      <Footer
        prevLabel="Accueil"
        prevLink="/"
        nextLabel="Vulnérabilités psychologiques"
        nextLink="vulnerabilites-psychologiques"
      />
    </div>
  );
}

export default Def;
