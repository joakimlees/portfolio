import * as Styled from "../styles/index";
import { Nav, HamburgerButton } from "../index";
import { useState } from "react";

export function Header() {
  const [menuState, setMenuState] = useState(false);

  console.log(menuState);
  console.log("hello");

  return (
    <Styled.Header>
      <Styled.CSContainer>
        <div className="headerContainer">
          <div className="logo">
            <span></span>
            <div>joakimlees</div>
          </div>
          <div>
            <HamburgerButton
              setMenuState={setMenuState}
              menuState={menuState}
            />
          </div>
          <div>
            <Nav menuState={menuState} />
          </div>
        </div>
      </Styled.CSContainer>
    </Styled.Header>
  );
}
