import React from "react";
import { useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { useSidebar } from "./Sidebarcontext";
import { ReactComponent as Collapse } from "../../assets/ico/collapse.svg";
import { ReactComponent as Expand } from "../../assets/ico/expand.svg";
import sidebarData from "../../sidebarData.json";
import icons from "../../icons";

const Sidebar = () => {
  const location = useLocation();
  const { isCollapsed, toggleSidebar } = useSidebar();

  React.useEffect(() => {
    const sidebarWidth = isCollapsed
      ? "var(--sidebar-width-collapsed)"
      : "var(--sidebar-width-expanded)";
    document.documentElement.style.setProperty("--sidebar-width", sidebarWidth);
  }, [isCollapsed]);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {sidebarData.map((section, index) => (
        <div
          key={index}
          className={`sidebar-section ${location.pathname === section.url ? "current" : ""}`}
        >
          <a href={section.url} className="sidebar-item">
            {icons[section.icon]}
            <h4>{section.title}</h4>
            {isCollapsed && <span className="tooltip">{section.title}</span>}
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
      <button className="toggle-button" onClick={toggleSidebar}>
        {isCollapsed ? <Expand /> : <Collapse />}
      </button>
    </div>
  );
};

export default Sidebar;
