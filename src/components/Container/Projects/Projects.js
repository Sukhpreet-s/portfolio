import React from "react";

//components
import ProjectThumbnail from "./ProjectThumbnail/ProjectThumbnail";

// styling
import "./Projects.scss";

// images
import recipeBookWebApp from "../../../assets/recipe-book-web-app.jpg";
import scrabble from "../../../assets/scrabble.JPG";
import tasksBoard from "../../../assets/tasks-board.jpg";
import slidePuzzle from "../../../assets/slide-puzzle.JPG";

const projects = [
  {
    title: "Recipe Book",
    techUsed: "Angular, Spring Boot, MongoDB",
    image: {
      link: recipeBookWebApp,
      h: 301.623,
      w: 500,
    },
    link: "https://sukhpreet-s.github.io/recipe-book/",
  },
  {
    title: "Tasks Board",
    techUsed: "React, UI/UX",
    image: {
      link: tasksBoard,
      h: 338.134,
      w: 500,
    },
    link: "https://sukhpreet-s.github.io/Tasks-Board/",
  },
  {
    title: "Scrabble",
    techUsed: "Java, JavaFX",
    image: {
      link: scrabble,
      h: 500,
      w: 335.88,
    },
    link: "https://github.com/Sukhpreet-s/scrabble-game-java/tree/master",
  },
  {
    title: "Slide Puzzle",
    techUsed: "HTML, CSS, JavaScript, TweenMax.js",
    image: {
      link: slidePuzzle,
      h: 400,
      w: 400,
    },
    link: "https://sukhpreet-s.github.io/slide-puzzle-game-js/index.html",
  },
];

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectThumbnail key={index} {...project} />
        ))}
      </div>
    </>
  );
}
