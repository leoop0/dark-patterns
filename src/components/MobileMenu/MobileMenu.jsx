import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MobileMenu.scss";
import { ReactComponent as BurgerMenu } from "../../assets/ico/burger.svg";
import icons from "../../icons";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const MobileMenu = ({ sidebarData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__header">
        <Link to="/" className="header__logo">
          <Logo />
          <div className="header__logo-text">DarkPatterns</div>
        </Link>
        <div className="mobile-menu__burger" onClick={toggleMenu}>
          <BurgerMenu />
        </div>
      </div>
      {isMenuOpen && (
        <nav className="mobile-menu__nav">
          {sidebarData.map((section, index) => (
            <Link
              key={index}
              to={section.url}
              className={`mobile-menu__nav-item ${
                location.pathname === section.url ? "current" : ""
              }`}
              onClick={toggleMenu}
            >
              {icons[section.icon]}
              <span>{section.title}</span>
            </Link>
          ))}
        </nav>
      )}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default MobileMenu;
