import * as Styled from "../styles/index";

export function Hero() {
  return (
    <Styled.Hero>
      <div className="hero-main-content">
        <span>FRONTEND DEVELOPER</span>
        <h1>Joakim Lee</h1>
        <p>
          Hello there, and welcome to my little corner of the internet. I’m a
          front-end developer from Norway, and this is where I showcase my
          projects and share a bit about who I am. Have a look around
        </p>
        <div className="duo-button-container">
          <a href="">View my projects</a>
          <a href="">Contact me</a>
        </div>
      </div>
    </Styled.Hero>
  );
}
