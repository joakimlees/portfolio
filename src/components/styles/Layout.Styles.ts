import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.darkBlue} 0%,
    ${({ theme }) => theme.color.darkPurple} 45%,
    ${({ theme }) => theme.color.darkBlue} 100%
  );
  background-color: ${({ theme }) => theme.color.darkBlue};
`;
