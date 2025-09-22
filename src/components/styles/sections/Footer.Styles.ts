import styled from "styled-components";

export const Footer = styled.footer`
  .footer-split-container {
    display: flex;
    border-top: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.color.primaryDark};
    padding: 50px 0px;
    justify-content: space-between;
    gap: 200px;
    font-size: ${({ theme }) => theme.font.size.xSmall};

    .footer-right {
      text-align: right;
 

      p {
        font-size: ${({ theme }) => theme.font.size.xSmall};
      }

      span {
        color: ${({ theme }) => theme.color.accentPink};
      }
    }


    .copyright {
    margin-bottom: 120px;
    }

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.accentPink};
      }
    }
  }
`;
