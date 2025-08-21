import * as Styled from "../styles/index";
import { Hero, About, Technologies } from "../sections/index";

export function Home() {
  return (
    <Styled.Home>
      <Styled.CSContainer>
        <Hero />
        <Technologies />
        <About />
      </Styled.CSContainer>
    </Styled.Home>
  );
}
