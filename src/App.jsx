import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Def from "./pages/Def/Def";
import Vul from "./pages/Vul/Vul";
import Study from "./pages/Study/Study";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import "./App.scss";
import Law from "./pages/Law/Law";
import Soluce from "./pages/Soluce/Soluce";
import Conc from "./pages/Conc/Conc";

function App() {
  return (
    <Router>
      <Header />
      <div id="layout">
        <Sidebar />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/definition-identification" element={<Def />} />
            <Route path="/vulnerabilites-psychologiques" element={<Vul />} />
            <Route path="/etude-cas-exemples" element={<Study />} />
            <Route path="/defis-ethiques" element={<Law />} />
            <Route path="/pistes-solutions" element={<Soluce />} />
            <Route path="/conclusion" element={<Conc />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
