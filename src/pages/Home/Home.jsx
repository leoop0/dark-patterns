import React from "react";
import "./Home.scss";

import { ReactComponent as Brain } from "../../assets/ico/brain.svg";
import { ReactComponent as Book } from "../../assets/ico/book.svg";
import { ReactComponent as Bulb } from "../../assets/ico/bulb.svg";
import { ReactComponent as Heart } from "../../assets/ico/heart.svg";
import { ReactComponent as Scale } from "../../assets/ico/scale.svg";
import { ReactComponent as Search } from "../../assets/ico/search.svg";
import { ReactComponent as Arrow } from "../../assets/ico/arrow.svg";

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
            Comment les Dark Patterns exploitent les vulnérabilités psychologiques des utilisateurs
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
      </div>
    </div>
  );
}

export default Home;
