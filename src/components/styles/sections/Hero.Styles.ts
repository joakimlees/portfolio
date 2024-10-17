import styled from "styled-components";

export const Hero = styled.section`
  h1 {
    font-family: color:${({ theme }) => theme.font.family.heading};
    color: ${({ theme }) => theme.color.light};
  }
`;
