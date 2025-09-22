import styled from "styled-components";

export const Footer = styled.footer`
  .footer-split-container {
    display: flex;
    border-top: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.color.primaryDark};
    padding: 80px 0px;
    justify-content: space-between;
    gap: 28px;
    font-size: font-size: ${({ theme }) => theme.font.size.xxSmall};

    .footer-right {
      text-align: right;

      span {
      color: ${({ theme }) => theme.color.accentPink};

      }


    }

    p {
      margin-top: 12px;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.accentPink};
    }
  }
`;
