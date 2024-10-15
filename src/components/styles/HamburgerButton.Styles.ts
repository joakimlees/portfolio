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
      width: 70%;
      height: 0px;
      border: 2px solid white;
      border-radius: 10px;
      transition: all 0.3s ease;
    }

    .lineOne {
      top: 0;
      left: 0;
      transition: transform 0.3s ease, top 0.3s ease;
    }

    .lineTwo {
      left: 15%;
      transition: opacity 0.3s ease;
    }

    .lineThree {
      bottom: 0;
      right: 0;
      transition: transform 0.3s ease, bottom 0.3s ease;
    }

    &.open {
      .lineOne {
        transform: rotate(45deg) translate(5px, 5px);
        top: 50%;
      }

      .lineTwo {
        opacity: 0;
      }

      .lineThree {
        transform: rotate(-45deg) translate(5px, -5px);
        bottom: 50%;
      }
    }

    &.closed {
      .lineOne {
        transform: none;
        top: 0;
      }

      .lineTwo {
        opacity: 1;
      }

      .lineThree {
        transform: none;
        bottom: 0;
      }
    }
  }
`;
