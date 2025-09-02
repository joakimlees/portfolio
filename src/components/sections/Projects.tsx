import * as Styled from "../styles/index";
import { ProjectCard } from "../index";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <Styled.Projects>
      <h2>Projects</h2>
      <div className="projects__container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Styled.Projects>
  );
}
