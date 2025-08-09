import * as Styled from "../styles/index";
import { LinkButton } from "../LinkButton";

export function Hero() {
  return (
    <Styled.Hero>
      <div className="hero-main-content">
        <span>FRONTEND DEVELOPER</span>
        <h1>JOAKIM LEE</h1>
        <p>
          Hello there, and welcome to my little corner of the internet. I’m a
          front-end developer from Norway, and this is where I showcase my
          projects and share a bit about who I am. Have a look around
        </p>
        <div className="duo-button-container">
          <LinkButton href="https://example.com" text="Click Me" />
          <LinkButton href="https://example.com" text="Click Mdsadsafsde" />
        </div>
      </div>
    </Styled.Hero>
  );
}
