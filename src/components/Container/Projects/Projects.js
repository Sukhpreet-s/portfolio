import React from "react";

//components
import ProjectThumbnail from "./ProjectThumbnail/ProjectThumbnail";

// styling
import "./Projects.scss";

// images
import postit from "../../../assets/postit.JPG";
import scrabble from "../../../assets/scrabble.JPG";
import seeNSayStoryMaker from "../../../assets/see-n-say-storymaker.JPG";
import slidePuzzle from "../../../assets/slide-puzzle.JPG";

const projects = [
  {
    title: "Post It",
    techUsed: "C#, ASP.NET Framework, MS SQL, AJAX",
    image: postit
  },
  {
    title: "Scrabble",
    techUsed: "Java, JavaFX",
    image: scrabble
  },
  {
    title: "Slide Puzzle",
    techUsed: "HTML, CSS, JavaScript, TweenMax.js",
    image: slidePuzzle
  },
  {
    title: "See-n-say Storymaker",
    techUsed: "​HTML5/CSS/JS",
    image: seeNSayStoryMaker
  }
];

export default function Projects() {
  return (
    <>
      <h3>Projects here!</h3>
      <div className="container-fluid projects-container">
        {projects.map((project, index) => (
          <ProjectThumbnail key={index} {...project} />
        ))}
      </div>
    </>
  );
}
