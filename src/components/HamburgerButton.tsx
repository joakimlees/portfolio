import * as Styled from "./styles/index";
import { useState } from "react";

type ButtonProps = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
};

export function HamburgerButton({ menuOpen, setMenuOpen }: ButtonProps) {
  const [burgerClass, setBurgerClass] = useState<string>("closed");

  function clicked() {
    if (menuOpen === true) {
      setMenuOpen(false);
      setBurgerClass("closed");
      console.log("false state");
    } else {
      setMenuOpen(true);
      setBurgerClass("open");
      console.log("true state");
    }
  }

  return (
    <Styled.HamburgerButton onClick={clicked}>
      <div className={burgerClass}>
        <span className="lineOne"></span>
        <span className="lineTwo"></span>
        <span className="lineThree"></span>
      </div>
    </Styled.HamburgerButton>
  );
}
