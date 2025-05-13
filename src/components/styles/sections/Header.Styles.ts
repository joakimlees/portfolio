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

      nav {
        display: flex;

        a {
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
