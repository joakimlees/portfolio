import * as Styled from "./styles/index";

export function HamburgerButton() {
  const handleMenuClick = () => {
    console.log("clicked");
  };

  return (
    <Styled.HamburgerButton onClick={handleMenuClick}>
      <div>
        <span className="lineOne"></span>
        <span className="lineTwo"></span>
        <span className="lineThree"></span>
      </div>
    </Styled.HamburgerButton>
  );
}
