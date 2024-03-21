import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.darkPurple};
  position: fixed;
  right: 0px;
  top: 0px;
  height: 100vh;
  width: min(75vw, 375px);
  box-shadow: -10px 0 25px -15px ${({ theme }) => theme.color.dark};

  ul {
    list-style: none;
    text-decoration: none;

    li {
      a {
        font-size: ${({ theme }) => theme.font.size.small};
        font-family: ${({ theme }) => theme.font.family.navLink};
        font-weight: ${({ theme }) => theme.font.weight.semiBold};
        color: ${({ theme }) => theme.color.light};
        text-decoration: none;
      }
    }
  }
`;
