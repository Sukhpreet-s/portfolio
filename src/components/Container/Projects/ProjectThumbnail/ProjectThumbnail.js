import React from "react";

// styling
import "./ProjectThumbnail.scss";

export default function ProjectThumbnail(props) {
  const { image, title, techUsed } = props;

  console.log(props);

  return (
    <div className="ProjectThumbnail">
      <div className="bg-image" style={{ background: `url(${image})` }}></div>
      <div className="image-overlay">
        <p className="title">{title}</p>
        <p className="tech-used">{techUsed}</p>
      </div>
    </div>
  );
}
