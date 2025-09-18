import styled, { css, keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FadeOnScrollWrapper = styled.div<{ $visible: boolean }>`
  opacity: 0;
  transform: translateY(55px);
  transition: opacity 1s ease, transform 1s ease;

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;
