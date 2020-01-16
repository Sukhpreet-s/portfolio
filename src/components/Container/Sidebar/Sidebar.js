import React from "react";
import { animated } from "react-spring";

// components
import { NavLink } from "react-router-dom";

// styling
import "./Sidebar.scss";

const navItems = [
  { name: "Projects", link: "/projects" },
  { name: "Resume", link: "/resume" },
  { name: "Contact me", link: "/contact" }
];

export default function Sidebar(props) {
  const { handleSqueezeSidebar, handleExpandSidebar, expand } = props;

  const navlinks = navItems.map(({ name, link }, index) => (
    <li key={index}>
      <NavLink to={link} onClick={handleSqueezeSidebar}>
        {name}
      </NavLink>
    </li>
  ));

  return (
    <animated.nav className="Sidebar" style={expand}>
      <ul>
        <li>
          <NavLink className="logo" to="/" onClick={handleExpandSidebar}>
            Sukhpreet Singh
          </NavLink>
        </li>
        {navlinks}
      </ul>
    </animated.nav>
  );
}
