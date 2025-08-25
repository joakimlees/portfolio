import styled from "styled-components";

export const Contact = styled.section`
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
`;
