import * as Styled from "../styles/index";
import { FadeInOnScroll } from "../FadeOnScroll";

export function About() {
  return (
    <FadeInOnScroll>
      <Styled.StandardSection>
        <Styled.About>
          <h2>About me</h2>
        </Styled.About>
      </Styled.StandardSection>
    </FadeInOnScroll>
  );
}
