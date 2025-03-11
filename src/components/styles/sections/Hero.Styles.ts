import styled from "styled-components";

export const Hero = styled.section`

d
    max-width: 1080px;
    margin: 0px auto;
    height: 2000px;

     h1 {
     font-family: color:${({ theme }) => theme.font.family.heading};
     color: ${({ theme }) => theme.color.light};
     }
`;
