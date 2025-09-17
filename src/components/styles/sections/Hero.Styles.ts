import styled from "styled-components";

export const Hero = styled.section`
  animation: ${({ theme }) => theme.animations.fadeIn} 1s ease-out forwards;

  max-width: 550px;
  margin: 200px 0 550px;

  span {
    color: ${({ theme }) => theme.color.accentPink};
    font-family: ${({ theme }) => theme.font.family.title};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.large};
  }

  .hero-main-content {
    p {
      margin: 21px 0px 48px;
    }

    .duo-button-container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
  }
`;
