import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.primaryLight};


  .headerContainer {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
  }

  .logo {
    svg {
      width: 90px;
    }

    span


  }
`;
