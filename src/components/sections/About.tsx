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

export function About() {
  return (
    <Styled.About>
      <IconReact size={100} />
      <IconTypeScript size={100} />
      <IconTailwind size={100} />
      <IconBootstrap size={100} />
      <IconNpm size={100} />
      <IconNodeJs size={100} />
      <IconStyledComponents size={100} />
      <IconScss size={100} />
      <h1>About section</h1>
    </Styled.About>
  );
}
