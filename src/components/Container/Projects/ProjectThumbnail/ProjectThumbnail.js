import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

// styling
import "./ProjectThumbnail.scss";

export default function ProjectThumbnail(props) {
  const { image, title, techUsed, link } = props;
  const [hover, setHover] = useState(false);

  const showTooltip = hover ? true : false;
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const blurOnHover = useSpring({
    filter: hover ? "blur(2px)" : "blur(0px)",
    opacity: hover ? "1" : "0"
  });

  const toggleHover = () => {
    setHover(!hover);
  };

  // Handle mouse move events to update tooltip position
  const handleMouseMove = (e) => {
    setTooltipPosition({
      top: e.clientY - 20,
      left: e.clientX + 20,
    });
  };

  const handleClick = (e) => {
    window.location.href = link;
  }

  return (
    <>
      <div
        className="ProjectThumbnail"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        style={{height: image.h, width: image.w}}
      >
        <animated.div
          className="bg-image"
          style={{ 
            background: `url(${image.link})`, 
            filter: blurOnHover.filter,
            height: image.h,
            width: image.w,
          }}
        ></animated.div>
        <animated.div
          className="bg-text"
          style={{ opacity: blurOnHover.opacity }}
        >
          <p className="title">{title}</p>
          <p className="tech-used">{techUsed}</p>
        </animated.div>

      </div>


      {/* Tooltip  */}
      {
        showTooltip && (
          <div className="mytooltip" style={tooltipPosition}>
            Click to go the live link!
          </div>
        )
      }
    </>
  );
}
