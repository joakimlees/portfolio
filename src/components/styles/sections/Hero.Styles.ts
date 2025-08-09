import styled from "styled-components";

export const Hero = styled.section`
  margin: 11px auto;

  span {
    color: ${({ theme }) => theme.color.accentPink};
    font-family: ${({ theme }) => theme.font.family.title};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.large};
  }

  .duo-button-container {
    display: flex;
    gap: 5px;
  }
`;
