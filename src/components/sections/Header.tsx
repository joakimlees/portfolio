import * as Styled from "../styles/index";
import { Nav, HamburgerButton } from "../index";

export function Header() {
  return (
    <Styled.Header>
      <Styled.CSContainer>
        <div className="headerContainer">
          <div className="logo">
            <span></span>
            <div>joakimlees</div>
          </div>
          <div>
            <HamburgerButton />
          </div>
          <Nav />
        </div>
      </Styled.CSContainer>
    </Styled.Header>
  );
}
