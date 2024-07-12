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

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
            </Routes>
          </div>
        </div>
      </Router>
    </SidebarProvider>
  );
};

export default App;
