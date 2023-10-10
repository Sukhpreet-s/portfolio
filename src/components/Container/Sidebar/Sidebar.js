import React from "react";
import { animated } from "react-spring";

// components
import { NavLink } from "react-router-dom";
import { ColoredIcon, GitHubIcon, LinkedinIcon } from '../../shared/Icon/Icon';

// styling
import "./Sidebar.scss";

const navItems = [
  { name: "Projects", link: "/projects" },
  { name: "Resume", link: "/resume" },
  // { name: "Contact me", link: "/contact" }
];

const LINKEDIN_COLOR = "#0077B5";
const GITHUB_COLOR = "#181717";

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
        <li>
          <a href="https://github.com/Sukhpreet-s" target="_blank">
          <ColoredIcon iconColor={GITHUB_COLOR}>
            <GitHubIcon />
          </ColoredIcon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sukhpreet-s/" target="_blank">
          <ColoredIcon iconColor={LINKEDIN_COLOR}>
            <LinkedinIcon />
          </ColoredIcon>
          </a>
        </li>
      </ul>
    </animated.nav>
  );
}
