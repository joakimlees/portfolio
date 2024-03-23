import styled from "styled-components";

export const HamburgerButton = styled.button`
  display: block;
  position: fixed;
  top: 20px;
  border: none;
  right: 50px;
  height: 30px;
  width: 50px;
  background: none;
  padding: 0px;
  margin: 0px;
  z-index: 10;

  div {
    display: flex;
    margin: auto;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;

    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 0px;
      border: 2px solid white;
      border-radius: 10px;
    }

    .lineOne {
      top: 0;
      left: 0;
      width: 70%;
    }

    .lineTwo {
      width: 70%;
      left: 15%;
    }

    .lineThree {
      bottom: 0;
      right: 0;
      width: 70%;
    }
  }
`;
