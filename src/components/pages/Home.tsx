import * as Styled from "../styles/index";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";

export function Home() {
  return (
    <Styled.Home>
      <Styled.CSContainer>
        <Hero />
        <About />
      </Styled.CSContainer>
    </Styled.Home>
  );
}
