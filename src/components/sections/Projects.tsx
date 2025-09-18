import * as Styled from "../styles/index";
import { ProjectCard } from "../index";
import { projects } from "../../data/projects";
import { FadeInOnScroll } from "../FadeOnScroll";

export function Projects() {
  return (
    <FadeInOnScroll>
      <Styled.StandardSection>
        <Styled.Projects>
          <h2>Projects</h2>
          <div className="projects__container">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Styled.Projects>
      </Styled.StandardSection>
    </FadeInOnScroll>
  );
}
