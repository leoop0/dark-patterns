import React from "react";
import "./Study.scss";

import Footer from "../../components/Footer/Footer";

import PrimeLogo from "../../assets/img/prime.png";
import Ufc from "../../assets/img/ufc.png";

import { ReactComponent as Fb } from "../../assets/logos/fb.svg";
import { ReactComponent as Adobe } from "../../assets/logos/adobe.svg";
import { ReactComponent as Ryanair } from "../../assets/logos/ryanair.svg";
import { ReactComponent as Lk } from "../../assets/logos/lk.svg";
import { ReactComponent as Micro } from "../../assets/logos/microsoft.svg";
import { ReactComponent as Time } from "../../assets/logos/time.svg";
import { ReactComponent as Apple } from "../../assets/logos/apple.svg";
import { ReactComponent as X } from "../../assets/logos/x.svg";
import { ReactComponent as Amazon } from "../../assets/logos/amazon.svg";
import { ReactComponent as Yahoo } from "../../assets/logos/yahoo.svg";

function Study() {
  return (
    <div className="wrapper">
      <div className="page-layout">
        {/* <Background className="bg" /> */}
        <div className="title">
          <h1>Étude de cas et exemples</h1>
          <p>
            À travers des exemples concrets, nous allons explorer comment les dark patterns sont
            utilisés pour influencer les décisions des utilisateurs et les inciter à prendre des
            actions qui ne sont pas dans leur intérêt.
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
              ce qui pousse les utilisateurs à reconduire leur abonnement sans réelle volonté de le
              faire, à moins qu'ils n'annulent leur abonnement à temps. Cette pratique tire parti de
              l'inattention ou de l'oubli des utilisateurs.
            </p>
            <h3>Processus d'abonnement</h3>
            <p>Léa, ayant souscrit sans le vouloir à Amazon Prime nous dit : </p>
            <div class="imessage">
              <p class="from-them">
                Je me suis inscrite à Amazon Prime pour avoir la livraison gratuite et en 1 jour.
                J'ai pas pensé à mettre de rappel pour annuler l'abonnement avant la fin des 30
                jours gratuits et comme ils préviennent pas, bah j'ai payé 49€ pour rien 🤡
                <br />
                J'utilise quasiment pas Amazon, ni prime vidéo
              </p>
              <p class="from-me">Est-ce que tu as eu l'impression de te faire arnaquer ?</p>
              <p class="from-them margin-b_one">
                Ah oui oui, je me suis senti très conne, "en mode moi je travaille dans l'UX et je
                viens de me faire avoir comme ça ??? 🥲"
              </p>
            </div>{" "}
            <p>
              Si ce verbatim peut prêter à sourire, il est pourtant très important et témoigne de
              l'état d'esprit des utilisateurs face à ces pratiques.
            </p>
            <p>
              Et c'est là tout le problème. Les utilisateurs, même les plus avertis, peuvent être
              victimes de ces pratiques trompeuses. Les dark patterns exploitent les biais cognitifs
              et les vulnérabilités psychologiques des utilisateurs pour les inciter à prendre des
              décisions qui ne sont pas dans leur intérêt.
            </p>
            <p>
              Si s'abonner est extrêmement facile, se désabonner est en revanche bien plus
              compliqué.
            </p>
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
            <a
              href="https://www.quechoisir.org/billet-du-president-amazon-prime-le-piege-a-utilisateur-supprime-n102144/"
              target="_blank"
              rel="noreferrer noopener"
              className="link-card"
            >
              <img src={Ufc} alt="" />
              <h5>
                {" "}
                Le piège à utilisateur supprimé ! - Billet de la présidente - UFC-Que Choisir
              </h5>
              <span>www.quechoisir.org</span>
            </a>
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
            <p>
              Google : Google Ads retarderait légèrement l'affichage des publicités pour inciter les
              utilisateurs à cliquer dessus, les confondant avec des résultats organiques
            </p>
            <p>
              Booking : affiche souvent des messages comme "Plus que 2 chambres disponibles !" ou un
              compte à rebours pour créer un faux sentiment d'urgence et pousser à la réservation
              rapide.
            </p>
            <p>
              Airbnb : accusé de cacher des couts, des frais de service et des taxes dans les
              dernières étapes de la réservation.
            </p>
          </div>
          <div className="section">
            <h2>Dark patterns dans les applications mobiles</h2>
            <p>
              Si les sites web sont souvent pointés du doigt pour leur utilisation de dark patterns,
              les applications mobiles ne sont pas en reste. Avec l'omniprésence des smartphones,
              ces pratiques se sont largement répandues sur tous nos appareils.
            </p>
            <p>
              Prenons l'exemple des jeux "free-to-play". Beaucoup utilisent des techniques
              psychologiques poussées pour inciter aux micro-transactions. Des pop-ups apparaissent
              au moment où le joueur est le plus investi, proposant des offres "uniques" pour
              débloquer du contenu ou progresser plus rapidement. Ces interruptions sont conçues
              pour exploiter notre impulsivité et notre désir de gratification immédiate.
            </p>
            <h3>Raid Shadow Legends</h3>
            <p>
              Afin de donner un exemple plus concret, le jeu mobile Raid Shadow Legends est accusé
              d'avoir placé une multitude de dark patterns au sein de son expérience. Le site{" "}
              <a href="https://www.darkpattern.games/game/285/0/raid-shadow-legends.html">
                darkpattern.games
              </a>{" "}
              nous rapporte 114 dark patterns (psychologiques, sociaux, économiques, etc.) présents
              dans le jeu. Pour citer les plus fréquents :
            </p>
            <ul>
              <li>
                Le taux de change entre l'argent réel et la monnaie du jeu masque le véritable prix
                des objets. (Obfuscation)
              </li>
              <li>Offres à durée limitée créant une urgence artificielle. (Fausse urgence)</li>
              <li>
                Être forcé de jouer selon le planning du jeu plutôt que le vôtre. (Engagement forcé)
              </li>
              <li>
                Encourage les visites quotidiennes et vous punit si vous manquez un jour.
                (Culpabilisation)
              </li>
            </ul>
            <p>
              Les applications de rencontre ne sont pas en reste. Tinder, par exemple, utilise un
              système de "swipe" addictif, couplé à des notifications fréquentes sur les "matchs
              potentiels", créant un sentiment d'urgence et de FOMO (Fear of Missing Out).
              L'objectif ? Nous pousser à souscrire à des abonnements premium pour voir qui nous a
              "liké".
            </p>
          </div>
          <div className="section">
            <h2>Liste de la honte</h2>
            <p>
              Pour illustrer l'ampleur du problème des dark patterns et identifier les acteurs
              majeurs qui y ont recours, examinons la "Liste de la honte". Cette liste, composée à
              grâce à diverses sources et rapports, met en lumière les entreprises les plus
              fréquemment citées pour leur utilisation de dark patterns. Cette liste nous permet de
              constater que même les géants de la tech et les réseaux sociaux, malgré leurs
              ressources et leur influence, ne sont pas exempts de ces pratiques manipulatrices :
              bien au contraire. Il est important de noter que cette liste est dynamique et évolue
              au fil du temps, reflétant les changements dans les pratiques des entreprises et la
              vigilance croissante des utilisateurs et des régulateurs.
            </p>
            <div className="list">
              <Fb />
              <Adobe />
              <Ryanair />
              <Lk />
              <Micro />
              <Time />
              <Apple />
              <X />
              <Amazon />
              <Yahoo />
            </div>
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
