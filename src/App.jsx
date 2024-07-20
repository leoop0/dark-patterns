import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Def from "./pages/Def/Def";
import Vul from "./pages/Vul/Vul";
import Study from "./pages/Study/Study";
import { SidebarProvider } from "./components/Sidebar/Sidebarcontext";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import "./App.scss";
import Law from "./pages/Law/Law";
import Soluce from "./pages/Soluce/Soluce";
import Conc from "./pages/Conc/Conc";
import Remer from "./pages/Remer/Remer";
import sidebarData from "./sidebarData.json";
import Sources from "./pages/Sources/Sources";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleImageClick = (event) => {
    if (event.target.tagName === "IMG" && !document.querySelector(".overlay")) {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      overlay.style.zIndex = "9998";
      overlay.classList.add("overlay"); // Ajout de la classe pour identifier l'overlay
      document.body.appendChild(overlay);

      event.target.style.position = "fixed";
      event.target.style.top = "50%";
      event.target.style.left = "50%";
      event.target.style.transform = "translate(-50%, -50%)";
      event.target.style.zIndex = "9999";
      event.target.style.maxWidth = "90%";
      event.target.style.maxHeight = "90%";
      event.target.style.objectFit = "contain";

      // Ajout d'une croix pour fermer l'image
      const closeIcon = document.createElement("span");
      closeIcon.style.position = "absolute";
      closeIcon.style.top = "10px";
      closeIcon.style.right = "10px";
      closeIcon.style.zIndex = "10000";
      closeIcon.style.cursor = "pointer";
      closeIcon.innerHTML = "×";
      closeIcon.style.fontSize = "24px";
      closeIcon.style.color = "white";
      overlay.appendChild(closeIcon);

      closeIcon.addEventListener("click", () => {
        overlay.remove();
        event.target.removeAttribute("style");
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.remove();
          event.target.removeAttribute("style");
        }
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleImageClick);
    return () => {
      document.removeEventListener("click", handleImageClick);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarProvider>
      <Router>
        {isMobile ? "" : <Header />}
        <div id="layout">
          {isMobile ? <MobileMenu sidebarData={sidebarData} /> : <Sidebar />}
          <div className="page">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/definition-identification" element={<Def />} />
              <Route path="/vulnerabilites-psychologiques" element={<Vul />} />
              <Route path="/etude-cas-exemples" element={<Study />} />
              <Route path="/defis-ethiques" element={<Law />} />
              <Route path="/solutions" element={<Soluce />} />
              <Route path="/conclusion" element={<Conc />} />
              <Route path="/remerciements" element={<Remer />} />
              <Route path="/sources" element={<Sources />} />
            </Routes>
          </div>
        </div>
      </Router>
    </SidebarProvider>
  );
};

export default App;
