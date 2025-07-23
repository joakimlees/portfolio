import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.primaryLight};

  .headerContainer {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;

    .menuLinksContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      order: 1;
      margin-right: 10%;

      @media (max-width: 999px) {
        display: none;
      }

      nav {
        display: flex;
        gap: 120px;

        a {
          font-family: ${({ theme }) => theme.font.family.navLink};
          font-size: ${({ theme }) => theme.font.size.small};
          color: ${({ theme }) => theme.color.primaryDark};
          font-weight: ${({ theme }) => theme.font.weight.semiBold};
          text-decoration: none;
        }
      }
    }
  }

  .logo {
    svg {
      width: 90px;
    }
  }
`;
