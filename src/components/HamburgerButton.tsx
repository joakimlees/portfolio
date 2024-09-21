import * as Styled from "./styles/index";

type ButtonProps = {
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  menuState: boolean;
};

export function HamburgerButton({ menuState, setMenuState }: ButtonProps) {
  function clicked() {
    if (menuState === true) {
      setMenuState(false);
      console.log("false state");
    } else {
      setMenuState(true);
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
