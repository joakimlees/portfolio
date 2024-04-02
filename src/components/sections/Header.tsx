import * as Styled from "../styles/index";
import { Nav, HamburgerButton } from "../index";
import { useState } from "react";

export function Header() {
  const [test, setTest] = useState(false);

  let displayMenu: string = "";
  if (test) {
    console.log("closing menu");
    displayMenu = "closed";
  }

  if (!test) {
    console.log("opening menu");
    displayMenu = "opened";
  }

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
          <div className={displayMenu}>
            <Nav />
          </div>
        </div>
      </Styled.CSContainer>
    </Styled.Header>
  );
}
