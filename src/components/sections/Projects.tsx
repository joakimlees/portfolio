import * as Styled from "../styles/index";
import { ProjectCard } from "../index";

export function Projects() {
  return (
    <Styled.Projects>
      <h2>Projects</h2>
      <div className="projects__container">
        <ProjectCard />
      </div>
    </Styled.Projects>
  );
}
