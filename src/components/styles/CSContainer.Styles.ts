import styled from "styled-components";

export const CSContainer = styled.div`
  max-width: 2560px;
  margin: 0px auto;
  padding: 10px 16px;

  @media (min-width: ${({ theme }) => theme.screen.small}) {
    padding: 10px 32px;
  }

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    padding: 48px;
  }
`;
