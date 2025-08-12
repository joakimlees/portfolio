import * as Styled from "../styles/index";
import { LinkButton } from "../LinkButton";
import { theme } from "../styles/index";

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
          <LinkButton
            href="https://example.com"
            text="Contact me"
            bgColor={theme.color.primaryTeal}
            borderColor={theme.color.primaryTeal}
            textColor={theme.color.primaryDark}
          />
          <LinkButton href="https://example.com" text="View my projects" />
        </div>
      </div>
    </Styled.Hero>
  );
}
