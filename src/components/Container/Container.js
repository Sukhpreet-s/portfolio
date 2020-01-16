import React, { useState } from "react";
import { useSpring } from "react-spring";

// components
import Sidebar from "./Sidebar/Sidebar";
import { Switch, Route } from "react-router-dom";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

export default function Container() {
  const [activeNavbar, setActiveNavbar] = useState(true);

  const expand = useSpring({ width: activeNavbar ? "50%" : "20%" });
  const handleSqueezeSidebar = e => setActiveNavbar(false);
  const handleExpandSidebar = e => setActiveNavbar(true);

  return (
    <div className="Container vh-100 row">
      <Sidebar
        handleSqueezeSidebar={handleSqueezeSidebar}
        handleExpandSidebar={handleExpandSidebar}
        expand={expand}
      />
      <div className="content col">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}
