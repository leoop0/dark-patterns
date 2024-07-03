import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/ico/search.svg";

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleOverlayClick = (event) => {
    if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
      setIsSearchActive(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "k" && event.metaKey) {
      setIsSearchActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleOverlayClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  return (
    <>
      {isSearchActive && (
        <div className="overlay">
          <input
            type="text"
            className="overlay__search-input"
            placeholder="Rechercher"
            autoFocus
            ref={searchInputRef}
          />
        </div>
      )}
      <header className="header">
        <div className="header__logo">
          <Logo />
          <Link to="/" className="header__logo-text">
            DarkPatterns
          </Link>
        </div>
        <div className="header__search">
          <div className="input-container">
            <Search />
            <input
              type="text"
              className="header__search-input"
              placeholder="Rechercher"
              onClick={handleSearchClick}
            />
            <span> ⌘K</span>
          </div>
        </div>
        <div className="header__contact">
          <button className="header__contact-button">Contact</button>
        </div>
      </header>
    </>
  );
};

export default Header;
