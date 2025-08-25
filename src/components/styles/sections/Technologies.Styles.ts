import styled from "styled-components";

export const Technologies = styled.section`
  margin-top: 200px;

  h2 {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.size.medium};
    color: ${({ theme }) => theme.color.secondaryGray};
    border-bottom: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.color.primaryDark};
    padding-bottom: 2px;
  }

  .icon-pill-wrapper {
    margin: 30px 0px 30px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    font-family: ${({ theme }) => theme.font.family.util};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.primaryDark};

    .icon-pill {
      display: flex;
      align-items: center;
      gap: 15px;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      padding: 10px 40px 10px 10px;
    }
  }
`;
