import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import { ReactComponent as Chevron } from "../../assets/ico/chevron.svg";

const Footer = ({ prevLink, prevLabel, nextLink, nextLabel }) => {
  return (
    <footer className="wrapper">
      <div className="footer">
        <div className="pagination">
          <a href={prevLink} className="prev">
            <div className="ico-chevron">
              <Chevron />
            </div>
            <div className="content">
              <span>Précédent</span>
              <h6>{prevLabel}</h6>
            </div>
          </a>
          <a href={nextLink} className="next">
            <div className="content">
              <span>Suivant</span>
              <h6>{nextLabel}</h6>
            </div>
            <div className="ico-chevron">
              <Chevron />
            </div>
          </a>
        </div>
        <div className="footer__content">
          <div className="footer__credits">
            <p>&copy; {new Date().getFullYear()} DarkPatterns - Léo Frati. Tous droits réservés.</p>
          </div>
          <div className="sources">
            <Link to="/sources">Sources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
