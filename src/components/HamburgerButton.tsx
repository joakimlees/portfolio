import * as Styled from "./styles/index";

export function HamburgerButton() {
  return (
    <Styled.HamburgerButton>
      <div>
        <span className="lineOne"></span>
        <span className="lineTwo"></span>
        <span className="lineThree"></span>
      </div>
    </Styled.HamburgerButton>
  );
}
