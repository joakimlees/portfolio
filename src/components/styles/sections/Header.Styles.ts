import styled from "styled-components";

export const Header = styled.header`
  border-style: solid;
  border-color: red;

  .headerContainer {
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
  }

  .logo {
    font-family: ${({ theme }) => theme.font.family.title};
    font-size: ${({ theme }) => theme.font.size.xSmall};
    display: flex;
    align-items: baseline;

    span {
      border-left: 10px solid ${({ theme }) => theme.color.lightTeal};
      border-bottom: 5px solid transparent;
      border-top: 5px solid transparent;
      margin-right: 5px;
    }
  }
`;
