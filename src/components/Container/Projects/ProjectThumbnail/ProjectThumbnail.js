import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

// styling
import "./ProjectThumbnail.scss";

export default function ProjectThumbnail(props) {
  const { image, title, techUsed } = props;
  const [hover, setHover] = useState(false);

  const unBlurOnHover = useSpring({
    filter: hover ? "blur(0)" : "blur(2px)",
    opacity: hover ? "0" : "1"
  });

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <div className="ProjectThumbnail">
      <animated.div
        className="bg-image"
        style={{ background: `url(${image})`, filter: unBlurOnHover.filter }}
      ></animated.div>
      <animated.div
        className="bg-text"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={{ opacity: unBlurOnHover.opacity }}
      >
        <p className="title">{title}</p>
        <p className="tech-used">{techUsed}</p>
      </animated.div>
    </div>
  );
}
