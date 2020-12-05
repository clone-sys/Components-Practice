import React from "react";
import projects from "../data/projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      {projects.allProjects.map((item, i) => [
        <Project
          key={i}
          title={item.title}
          imgName={item.imgName}
          description={item.description}
        />,
      ])}
    </div>
  );
};
export default Projects;
