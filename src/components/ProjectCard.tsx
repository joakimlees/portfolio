import * as Styled from "./styles/index";
import React from "react";
import { Project } from "../types/Project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Styled.ProjectCard
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project__card__image">
        <img src={project.image} alt="" />
      </div>
      <div className="project__card__content">
        <h3>{project.title}</h3>
        <p className="project__card__text">{project.description}</p>
        <div className="project__card__pills">
          {project.techPills.map((pill, i) => (
            <React.Fragment key={i}>{pill}</React.Fragment>
          ))}
        </div>
      </div>
    </Styled.ProjectCard>
  );
}
