import * as Styled from "../styles/index";
import { FadeInOnScroll } from "../FadeOnScroll";
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

export function Technologies() {
  return (
    <FadeInOnScroll>
      <Styled.StandardSection>
        <Styled.Technologies>
          <h2>Technologies</h2>
          <div className="icon-pill-wrapper">
            <div className="icon-pill">
              <IconReact size={30} />
              <p>React</p>
            </div>
            <div className="icon-pill">
              <IconTypeScript size={30} />
              <p>TypeScript</p>
            </div>
            <div className="icon-pill">
              <IconTailwind size={30} />
              <p>Tailwindcss</p>
            </div>
            <div className="icon-pill">
              <IconBootstrap size={30} />
              <p>Bootstrap</p>
            </div>
            <div className="icon-pill">
              <IconStyledComponents size={30} />
              <p>styled-components</p>
            </div>
            <div className="icon-pill">
              <IconScss size={30} />
              <p>scss</p>
            </div>
            <div className="icon-pill">
              <IconNodeJs size={30} />
              <p>Node.js</p>
            </div>
            <div className="icon-pill">
              <IconNpm size={30} />
              <p>npm</p>
            </div>
          </div>
        </Styled.Technologies>
      </Styled.StandardSection>
    </FadeInOnScroll>
  );
}
