import React from "react";
import { useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { ReactComponent as Brain } from "../../assets/ico/brain.svg";
import { ReactComponent as Book } from "../../assets/ico/book.svg";
import { ReactComponent as Bulb } from "../../assets/ico/bulb.svg";
import { ReactComponent as Heart } from "../../assets/ico/heart.svg";
import { ReactComponent as Scale } from "../../assets/ico/scale.svg";
import { ReactComponent as Search } from "../../assets/ico/search.svg";

const sidebarData = [
  {
    title: "Définition et identification",
    items: [
      { name: "Qu’est-ce que c’est", id: "1" },
      { name: "Pourquoi on les utilise", id: "2" },
      { name: "Nudge ou Dark Pattern", id: "3" },
    ],
    icon: <Book />,
    url: "/definition-identification",
  },
  {
    title: "Vulnérabilités psychologiques",
    items: [
      { name: "Biais et vulnérabilités", id: "1" },
      { name: "Lois UX", id: "2" },
    ],
    icon: <Brain />,
    url: "/vulnerabilites-psychologiques",
  },
  {
    title: "Étude de cas et exemples",
    items: [
      { name: "Le cas Amazon Prime", id: "1" },
      { name: "Exemples concrets", id: "2" },
      { name: "Liste de la honte", id: "3" },
    ],
    icon: <Search />,
    url: "/etude-cas-exemples",
  },
  {
    title: "Défis éthiques",
    items: [
      { name: "Consentement des utilisateurs", id: "1" },
      { name: "Cadre légal", id: "2" },
    ],
    icon: <Scale />,
    url: "/defis-ethiques",
  },
  {
    title: "Pistes de solutions",
    items: [
      { name: "Atténuer leur utilisation", id: "1" },
      { name: "Conception éthique", id: "2" },
      { name: "Sanctions", id: "3" },
    ],
    icon: <Bulb />,
    url: "/pistes-solutions",
  },
  {
    title: "Conclusion",
    items: [],
    icon: <Heart />,
    url: "/conclusion",
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      {sidebarData.map((section, index) => (
        <div
          key={index}
          className={`sidebar-section ${location.pathname === section.url ? "current" : ""}`}
        >
          <a href={section.url} className="sidebar-item">
            {section.icon}
            <h4>{section.title}</h4>
          </a>
          {section.items.length > 0 && (
            <ul>
              {section.items.map((item, index) => (
                <li key={index}>
                  <a href={`${section.url}#${item.id}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
