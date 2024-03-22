import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.darkBlue};
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 25px -15px ${({ theme }) => theme.color.dark};

  .headerContainer {
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
  }

  .logo {
    font-family: ${({ theme }) => theme.font.family.title};
    font-size: ${({ theme }) => theme.font.size.xSmall};
    color: ${({ theme }) => theme.color.light};
    display: flex;
    align-items: center;

    span {
      border-left: 10px solid ${({ theme }) => theme.color.lightTeal};
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      margin-right: 10px;
    }
  }

  .menu {
    z-index: 1;
  }
  figure {
    width: 40px;
    height: 40px;
    border: 1px solid white;
    position: relative;
  }

  .burger {
    width 100%;
    height: 2px;
    background: white;
    border-radius: 10px;
  }

`;
