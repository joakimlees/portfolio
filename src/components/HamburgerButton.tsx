import * as Styled from "./styles/index";

type ButtonProps = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
};

export function HamburgerButton({ menuOpen, setMenuOpen }: ButtonProps) {
  function clicked() {
    if (menuOpen === true) {
      setMenuOpen(false);
      console.log("false state");
    } else {
      setMenuOpen(true);
      console.log("true state");
    }
  }

  return (
    <Styled.HamburgerButton onClick={clicked}>
      <div>
        <span className="lineOne"></span>
        <span className="lineTwo"></span>
        <span className="lineThree"></span>
      </div>
    </Styled.HamburgerButton>
  );
}
