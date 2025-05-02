import * as Styled from "../styles/index";
import { Nav, HamburgerButton } from "../index";
import { useState } from "react";
import { Logo } from "../index";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);
  console.log("hello this");

  return (
    <Styled.Header>
      <Styled.CSContainer>
        <div className="headerContainer">
          <div className="logo">
            <Logo />
          </div>
          <div>
            <HamburgerButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          </div>
          <div>
            <Nav menuOpen={menuOpen} />
          </div>
        </div>
      </Styled.CSContainer>
    </Styled.Header>
  );
}
