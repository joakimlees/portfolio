import * as Styled from "../styles/index";
import {
  Hero,
  About,
  Technologies,
  Projects,
  Contact,
} from "../sections/index";

export function Home() {
  return (
    <Styled.Home>
      <Styled.CSContainer>
        <Hero />
        <Technologies />
        <Projects />
        <About />
        <Contact />
      </Styled.CSContainer>
    </Styled.Home>
  );
}
