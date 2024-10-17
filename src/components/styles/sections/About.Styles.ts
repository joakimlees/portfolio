import styled from "styled-components";

export const About = styled.section`

    max-width: 1080px;
    margin: 0px auto;
    height: 3000px;


     h1 {
     font-family: color:${({ theme }) => theme.font.family.heading};
     color: ${({ theme }) => theme.color.light};
     }
`;
