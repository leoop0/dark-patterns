import React from "react";
import "./Home.scss";

import { ReactComponent as Brain } from "../../assets/ico/brain.svg";
import { ReactComponent as Book } from "../../assets/ico/book.svg";
import { ReactComponent as Bulb } from "../../assets/ico/bulb.svg";
import { ReactComponent as Heart } from "../../assets/ico/heart.svg";
import { ReactComponent as Scale } from "../../assets/ico/scale.svg";
import { ReactComponent as Search } from "../../assets/ico/search.svg";
import { ReactComponent as Arrow } from "../../assets/ico/arrow.svg";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <div className="wrapper">
        <div className="page-layout home-container">
          <div className="tag">
            <span>M2 DD</span>Léo Frati, École Supérieure du Digital
          </div>
          <h1>Dark patterns</h1>
          <p>
            Comment les dark patterns exploitent les vulnérabilités psychologiques des utilisateurs
            et posent des défis éthiques ?
          </p>
        </div>

        <div className="page-layout summary-container">
          <div className="summary">
            <a href="/definition-identification" className="part">
              <Book /> <h4>Définition et identification</h4>
              <Arrow className="arrow" />
            </a>
            <a href="/vulnerabilites-psychologiques" className="part">
              <Brain /> <h4>Vulnérabilités psychologiques</h4>
              <Arrow className="arrow" />
            </a>
            <a href="/etude-cas-exemples" className="part">
              <Search /> <h4>Étude de cas et exemples</h4>
              <Arrow className="arrow" />
            </a>
            <a href="/defis-ethiques" className="part">
              <Scale /> <h4>Défis éthiques</h4>
              <Arrow className="arrow" />
            </a>
            <a href="/pistes-solutions" className="part">
              <Bulb /> <h4>Pistes de solutions</h4>
              <Arrow className="arrow" />
            </a>
            <a href="/conclusion" className="part">
              <Heart /> <h4>Conclusion</h4>
              <Arrow className="arrow" />
            </a>
          </div>
        </div>

        <div className="page-layout">
          <div className="content">
            <div className="section">
              <h2>A propos de moi</h2>
              <p>
                Je m'appelle Léo Frati, j'ai 23 ans et je suis passionné par une tonne de choses. De
                la tech à la montagne, en passant par la musique et l'escalade, j'aime énormément
                découvrir et apprendre.
              </p>
              <p>
                Pour parler de moi sans évoquer l'aspect travail, je suis un grand passionné de
                montagne et de sports outdoor, particulièrement l'escalade que je pratique depuis 8
                ans. C'est quelque chose que tout mon entourage sait car il ne se passe pas un jour
                sans que j'évoque ce sport.
              </p>
              <p>
                En ce qui concerne la tech et le web, j'ai toujours été intrigué par le
                fonctionnement d'un ordinateur, d'un site web ou d'une app. Je me souviens avoir
                bidouillé mon premier ordinateur pendant des jours et des jours pour essayer telle
                ou telle fonction, parfois sans succès mais toujours avec un grand intérêt.
              </p>
              <h3>Pourquoi les dark patterns ?</h3>
              <p>
                Ayant de fortes convictions sociales, il me paraissait important d'en parler. Car au
                délà de l'aspect purement technique des dark patterns, leur impact et les biais mis
                en place pour les utiliser m'intéresse grandement.
              </p>
              <p>
                Ces techniques de conception abusives sont utilisées par de nombreuses entreprises
                et j'avais envie de les mettre en lumière. À la fois pour dénoncer ces pratiques,
                mais aussi pour sensibiliser les utilisateurs.
              </p>
              <p>
                J'ai conscience que ce livre blanc peut paraître un peu pessimiste, mais je pense
                qu'il est important de parler de ces sujets sans les minimiser. Le métier d'UX
                Designer est passionnant, mais il est aussi sujet à de nombreuses dérives, débats et
                questionnements.
              </p>
              <p>
                J'espère que mon travail vous plaira, j'y ai investi beaucoup de temps, d'énérgie et
                de passion. N'hésitez pas à me contacter si vous avez des questions ou des
                remarques, je serais ravi d'échanger avec vous.
              </p>
              <p>
                PS : pour les curieux, ce site est développé avec React, sans aucun framework tiers.
              </p>
            </div>
          </div>
        </div>
        <Footer nextLabel="Définition et identification" nextLink="definition-identification" />
      </div>
    </div>
  );
}

export default Home;
