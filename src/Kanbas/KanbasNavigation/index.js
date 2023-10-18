import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBook, faUser } from "@fortawesome/free-solid-svg-icons";


function KanbasNavigation() {
  const links = [
    { name: "Account", icon: faUser },
    { name: "Dashboard", icon: faTachometerAlt },
    { name: "Courses", icon: faBook},
];
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
    {links.map((link, index) => (
        <Link
            key={index}
            to={`/Kanbas/${link.name}`}
            className={`sidebar-li ${pathname.includes(link.name) ? "active" : ""}`}
        >
          <FontAwesomeIcon 
              icon={link.icon} 
              className="fas fa-solid" 
              style={{ color: link.name === "Account" ? "grey" : "" }}
          />
            {link.name}
        </Link>
    ))}
</div>
  );
}
export default KanbasNavigation;