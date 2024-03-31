import * as Styled from "../styles/index";
import { Nav, HamburgerButton } from "../index";
import { useState } from "react";

export function Header() {
  const [test, setTest] = useState(false);

  return (
    <Styled.Header>
      <Styled.CSContainer>
        <div className="headerContainer">
          <div className="logo">
            <span></span>
            <div>joakimlees</div>
          </div>
          <div>
            <HamburgerButton test={test} setTest={setTest} />
          </div>
          <Nav />
        </div>
      </Styled.CSContainer>
    </Styled.Header>
  );
}
