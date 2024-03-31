import * as Styled from "./styles/index";

type ButtonProps = {
  test: boolean;
  setTest: React.Dispatch<React.SetStateAction<boolean>>;
};

export function HamburgerButton({ test, setTest }: ButtonProps) {
  function handleCLick() {
    if (!test) {
      console.log("open");
      setTest(true);
      console.log(test);
    }
    if (test) {
      console.log("close");
      setTest(false);
      console.log(test);
    }
  }

  return (
    <Styled.HamburgerButton onClick={handleCLick}>
      <div>
        <span className="lineOne"></span>
        <span className="lineTwo"></span>
        <span className="lineThree"></span>
      </div>
    </Styled.HamburgerButton>
  );
}
