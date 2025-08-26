import * as Styled from "../styles/index";
import {
  IconReact,
  IconTypeScript,
  IconTailwind,
  IconBootstrap,
  IconNpm,
  IconNodeJs,
  IconStyledComponents,
  IconScss,
} from "../icons";

import Image from "../../build/images/sciencemus.jpg";

export function Projects() {
  return (
    <Styled.Projects>
      <h2>Projects</h2>
      <div className="projects__container">
        <div className="project__card">
          <div className="project__card__image">
            <img src={Image} alt="" />
          </div>
          <div className="project__card__content">
            <h3>Science Museum</h3>
            <p className="project__card__text">
              Qui magnam praesentium sit accusamus illo et magnam veniam et
              internos blanditiis. Est rerum debitis qui voluptatum quae vel
              autem libero qui consequatur consequatur.
            </p>
            <div className="project__card__pills">
              <div className="project__card__pill">
                <IconTypeScript size={20} />
                <p>TypeScript</p>
              </div>
              <div className="project__card__pill">
                <IconTypeScript size={20} />
                <p>TypeScript</p>
              </div>
              <div className="project__card__pill">
                <IconTypeScript size={20} />
                <p>TypeScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.Projects>
  );
}
