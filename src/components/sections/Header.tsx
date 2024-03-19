import * as Styled from "../styles/index";
import { Nav } from "../Navigation";

export function Header() {
  return (
    <Styled.Header>
      <div>
        <div className="logo">
          <span>*</span>
          <div>joakimlees</div>
        </div>
        <div className="BurgerMenu">
          <figure>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </figure>
        </div>
        <Nav />
      </div>
    </Styled.Header>
  );
}
