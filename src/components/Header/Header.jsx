import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/ico/search.svg";
import contentIndex from "../../contentIndex.json";

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
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

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    if (query) {
      const results = contentIndex.filter((item) => item.content.toLowerCase().includes(query));
      setSearchResults(results);
    } else {
      setSearchResults([]);
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
            onChange={handleSearch}
          />
          <div className="overlay__search-results">
            {searchResults.map((result) => (
              <div key={result.file} className="search-result">
                <Link to={result.route}>
                  <h4>{result.file.replace(".jsx", "")}</h4>
                </Link>
                <p>{result.content.substring(0, 200)}...</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <header className="header">
        <Link to="/" className="header__logo">
          <Logo />
          <div className="header__logo-text">DarkPatterns</div>
        </Link>
        <div className="header__search">
          {/* <div className="input-container">
            <Search />
            <input
              type="text"
              className="header__search-input"
              placeholder="Rechercher"
              onClick={handleSearchClick}
            />
            <span> ⌘K</span>
          </div> */}
        </div>
        <div className="header__contact">
          <a href="mailto:fratileo@gmail.com" className="header__contact-button">
            Contact
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
