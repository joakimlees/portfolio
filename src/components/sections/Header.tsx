import * as Styled from "../styles/index";
import { Nav } from "../Navigation";

export function Header() {
  return (
    <Styled.Header>
      <Styled.CSContainer>
        <div className="headerContainer">
          <div className="logo">
            <span></span>
            <div>joakimlees</div>
          </div>
          <div className="BurgerMenu">
            <figure>
              <span className="lineOne"></span>
              <span className="lineOne"></span>
              <span className="lineOne"></span>
            </figure>
          </div>
          <Nav />
        </div>
      </Styled.CSContainer>
    </Styled.Header>
  );
}
