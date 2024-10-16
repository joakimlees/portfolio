import * as Styled from "../styles/index";
import { Hero } from "../sections/Hero";

export function Home() {
  return (
    <Styled.Home>
      <Styled.CSContainer>
        <Hero />
      </Styled.CSContainer>
    </Styled.Home>
  );
}
